import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { getTenantSettings, convertChipsToNIS } from "@/lib/settings";
// import { Prisma } from "@prisma/client"; // Removed unused import

// Constants (could be shared)
const CHIPS_PER_BUY_IN = 1000;
const CHIPS_PER_NIS = 20;

/* // Removed unused type definition
type PlayerEventParticipationWithDetails = Prisma.PlayerInEventGetPayload<{
  include: {
    event: { select: { date: true } };
    player: { select: { name: true } };
  };
}>;
*/

// Data structure for each player's trend point
interface PlayerTrendPoint {
  date: string; // ISO date string
  eventProfitLossNIS: number;
  cumulativeProfitLossNIS: number;
}

// Data structure for the overall response: Map player ID to their trend data
export type PlayerTrendsData = Record<
  string,
  {
    playerName: string;
    trend: PlayerTrendPoint[];
  }
>;

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.tenantId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Get tenant settings
    const settings = await getTenantSettings(session.user.tenantId);

    // Fetch all players for the tenant with their completed event participations
    const players = await prisma.player.findMany({
      where: {
        tenantId: session.user.tenantId, // Filter by tenant
      },
      include: {
        pokerEvents: {
          // Relation name from Player model to PlayerInEvent
          where: {
            event: {
              status: "COMPLETED", // Only completed events
            },
          },
          include: {
            event: {
              select: { date: true }, // Include event date for sorting
            },
          },
          orderBy: {
            event: { date: "asc" }, // Sort events chronologically for each player
          },
        },
      },
    });

    const trendsData: PlayerTrendsData = {};

    for (const player of players) {
      let cumulativeProfitLoss = 0;
      const playerTrend: PlayerTrendPoint[] = [];

      // Iterate through chronologically sorted events for the player
      for (const participation of player.pokerEvents) {
        const cashOutChips = participation.cashOutAmount ?? 0;
        const eventProfitLossNIS = convertChipsToNIS(
          cashOutChips - participation.buyIns * settings.chipsPerBuyIn,
          settings
        );

        cumulativeProfitLoss += eventProfitLossNIS;

        playerTrend.push({
          date: participation.event.date.toISOString(),
          eventProfitLossNIS: eventProfitLossNIS,
          cumulativeProfitLossNIS: cumulativeProfitLoss,
        });
      }

      // Only include players who have played in completed events
      if (playerTrend.length > 0) {
        trendsData[player.id] = {
          playerName: player.name,
          trend: playerTrend,
        };
      }
    }

    return NextResponse.json(trendsData);
  } catch (error) {
    console.error("Failed to fetch player trends:", error);
    return NextResponse.json(
      { error: "Failed to fetch player trends data" },
      { status: 500 }
    );
  }
}
