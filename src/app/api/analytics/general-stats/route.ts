import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getTenantPrisma } from "@/lib/prisma-tenant";

export interface GeneralStatsData {
  numberOfGames: number;
  avgPlayersPerGame: number;
  avgBuyInsPerGame: number;
  avgOfAvgCashOutPerGame: number;
}

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { prisma } = await getTenantPrisma();

    const completedEvents = await prisma.pokerEvent.findMany({
      where: {
        status: "COMPLETED",
        host: {
          createdById: session.user.id,
        },
        // tenantId automatically added by middleware
      },
      include: {
        players: {
          // Fetch player participation data for calculations
          select: {
            buyIns: true,
            cashOutAmount: true,
          },
        },
      },
    });

    const numberOfGames = completedEvents.length;

    if (numberOfGames === 0) {
      // Return default values if no completed games
      return NextResponse.json<GeneralStatsData>({
        numberOfGames: 0,
        avgPlayersPerGame: 0,
        avgBuyInsPerGame: 0,
        avgOfAvgCashOutPerGame: 0,
      });
    }

    let totalPlayers = 0;
    let totalBuyIns = 0;
    let sumOfEventAvgCashOuts = 0;
    let gamesWithPlayers = 0; // Count games that actually had players for avg cash out calc

    for (const event of completedEvents) {
      const eventPlayerCount = event.players.length;
      totalPlayers += eventPlayerCount;

      let eventTotalBuyIns = 0;
      let eventTotalCashOut = 0;

      for (const player of event.players) {
        eventTotalBuyIns += player.buyIns;
        eventTotalCashOut += player.cashOutAmount ?? 0;
      }

      totalBuyIns += eventTotalBuyIns;

      if (eventPlayerCount > 0) {
        gamesWithPlayers++;
        const eventAvgCashOut = eventTotalCashOut / eventPlayerCount;
        sumOfEventAvgCashOuts += eventAvgCashOut;
      }
    }

    const avgPlayersPerGame = totalPlayers / numberOfGames;
    const avgBuyInsPerGame = totalBuyIns / numberOfGames;
    // Calculate the average of the per-game cash-out averages
    const avgOfAvgCashOutPerGame =
      gamesWithPlayers > 0 ? sumOfEventAvgCashOuts / gamesWithPlayers : 0;

    const stats: GeneralStatsData = {
      numberOfGames,
      avgPlayersPerGame,
      avgBuyInsPerGame,
      avgOfAvgCashOutPerGame,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Failed to fetch general game stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch general game statistics" },
      { status: 500 }
    );
  }
}
