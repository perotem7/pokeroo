import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Define the structure for player performance data
interface PlayerPerformance {
  playerId: string;
  playerName: string;
  totalBuyInsCount: number; // Count of buy-ins
  totalBuyInValue: number; // Calculated: totalBuyInsCount * 50 (NIS)
  totalCashOutAmount: number; // Aggregated cash-out value in NIS
  totalCashOutChips: number; // Aggregated cash-out in Chips
  netProfitLoss: number; // Calculated: totalCashOutAmount (NIS) - totalBuyInValue (NIS)
  eventsPlayed: number;
  avgBuyIns: number; // NEW: Average buy-ins per event played
  avgCashOutChips: number; // NEW: Average cash-out chips per event played
}

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const buyInValue = 50; // Value per buy-in in NIS

  try {
    // Fetch all PlayerInEvent records for events hosted by the user's players
    // or where the user's players have participated.
    // We need to get all players created by the user first.
    const userPlayers = await prisma.player.findMany({
      where: { createdById: userId },
      select: { id: true },
    });
    const userPlayerIds = userPlayers.map((p) => p.id);

    // Fetch relevant PlayerInEvent entries
    const playerEventEntries = await prisma.playerInEvent.findMany({
      where: {
        // Include entries where the player is one created by the user
        playerId: { in: userPlayerIds },
        // Optionally filter by event status if needed, e.g., only completed events
        // event: {
        //   status: "COMPLETED",
        // },
      },
      include: {
        player: {
          select: { id: true, name: true },
        },
      },
    });

    // Aggregate data per player
    const performanceMap = new Map<string, PlayerPerformance>();

    for (const entry of playerEventEntries) {
      const playerId = entry.player.id;
      const playerName = entry.player.name;
      const buyInsCount = entry.buyIns;
      const cashOutChips = entry.cashOutAmount ?? 0; // Chip count
      const cashOutNis = cashOutChips * (50 / 1000); // Convert chips to NIS

      if (!performanceMap.has(playerId)) {
        performanceMap.set(playerId, {
          playerId: playerId,
          playerName: playerName,
          totalBuyInsCount: 0,
          totalBuyInValue: 0,
          totalCashOutAmount: 0, // Store NIS value
          totalCashOutChips: 0, // Store Chip value
          netProfitLoss: 0,
          eventsPlayed: 0,
          avgBuyIns: 0, // Initialize new fields
          avgCashOutChips: 0, // Initialize new fields
        });
      }

      const currentPerf = performanceMap.get(playerId)!;
      currentPerf.totalBuyInsCount += buyInsCount;
      currentPerf.totalCashOutAmount += cashOutNis; // Add NIS value
      currentPerf.totalCashOutChips += cashOutChips; // Add Chip value
      currentPerf.eventsPlayed += 1; // Increment events played count
    }

    // Calculate final NIS values, averages, and convert map to array
    const performanceData = Array.from(performanceMap.values()).map((perf) => {
      perf.totalBuyInValue = perf.totalBuyInsCount * buyInValue; // NIS
      perf.netProfitLoss = perf.totalCashOutAmount - perf.totalBuyInValue; // NIS - NIS
      // Calculate averages, handle division by zero
      perf.avgBuyIns =
        perf.eventsPlayed > 0 ? perf.totalBuyInsCount / perf.eventsPlayed : 0;
      perf.avgCashOutChips =
        perf.eventsPlayed > 0 ? perf.totalCashOutChips / perf.eventsPlayed : 0;
      return perf;
    });

    // Sort by net profit/loss (descending for leaderboard)
    performanceData.sort((a, b) => b.netProfitLoss - a.netProfitLoss);

    return NextResponse.json(performanceData);
  } catch (error) {
    console.error("Error fetching player performance analytics:", error);
    return NextResponse.json(
      { error: "Failed to fetch player performance data" },
      { status: 500 }
    );
  }
}
