import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Assuming prisma client is setup at lib/prisma
import { auth } from "@/lib/auth";
import { getTenantSettings, convertChipsToNIS } from "@/lib/settings";
import type { PokerEvent, PlayerInEvent, Player } from "@/generated/prisma";

interface ParticipantDetails {
  playerId: string;
  playerName: string;
  buyIns: number;
  cashOutAmount: number | null;
  profitLoss: number; // In NIS
}

export interface EventSummaryData {
  eventId: string;
  eventDate: string; // Store as ISO string
  hostName: string;
  numberOfPlayers: number;
  totalBuyInsCount: number;
  totalCashOutChips: number; // Renamed from totalCashOutAmount
  totalCashOutNIS: number; // Added total cash out in NIS
  status: string;
  participants: ParticipantDetails[]; // Updated participant type
  totalPotValue: number; // In NIS
  biggestWinner?: { name: string; amount: number }; // In NIS
  biggestLoser?: { name: string; amount: number }; // In NIS
  averageProfitLoss: number; // In NIS
}

// Define a more specific type for the event data fetched from Prisma
type PlayerInEventWithPlayer = PlayerInEvent & { player: Player };
type EventWithDetails = PokerEvent & {
  host: Player;
  players: PlayerInEventWithPlayer[];
};

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.tenantId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Get tenant settings
    const settings = await getTenantSettings(session.user.tenantId);

    // Explicitly type the result of findMany
    const events: EventWithDetails[] = await prisma.pokerEvent.findMany({
      where: {
        status: "COMPLETED", // Only fetch completed events for summary
        tenantId: session.user.tenantId, // Filter by tenant
      },
      include: {
        host: true, // Include host player details
        players: {
          // Include player participation details
          include: {
            player: true, // Include player details for name
          },
        },
      },
      orderBy: {
        date: "desc", // Show most recent events first
      },
    });

    const summaryData: EventSummaryData[] = events.map(
      (event: EventWithDetails) => {
        let totalBuyInsCount = 0;
        let totalCashOutChips = 0; // Clarified: This tracks chips
        let totalProfitLossNIS = 0; // Clarified: Tracks sum of individual P/L in NIS
        let biggestWinner: { name: string; amount: number } | undefined =
          undefined;
        let biggestLoser: { name: string; amount: number } | undefined =
          undefined;

        const participants: ParticipantDetails[] = event.players.map(
          (p: PlayerInEventWithPlayer) => {
            const cashOutChips = p.cashOutAmount ?? 0;

            // Calculate Player Profit/Loss in NIS using the tenant settings
            const profitLossNIS = convertChipsToNIS(
              cashOutChips - p.buyIns * settings.chipsPerBuyIn,
              settings
            );

            totalBuyInsCount += p.buyIns;
            totalCashOutChips += cashOutChips;
            totalProfitLossNIS += profitLossNIS;

            // Track winner/loser based on NIS profit/loss
            if (profitLossNIS > 0) {
              if (!biggestWinner || profitLossNIS > biggestWinner.amount) {
                biggestWinner = { name: p.player.name, amount: profitLossNIS };
              }
            }
            if (profitLossNIS < 0) {
              if (!biggestLoser || profitLossNIS < biggestLoser.amount) {
                biggestLoser = { name: p.player.name, amount: profitLossNIS };
              }
            }

            return {
              playerId: p.playerId,
              playerName: p.player.name,
              buyIns: p.buyIns,
              cashOutAmount: p.cashOutAmount, // Keep original chip value here if needed elsewhere
              profitLoss: profitLossNIS, // Store NIS profit/loss
            };
          }
        );

        const totalPotValueNIS = totalBuyInsCount * settings.nisPerBuyIn;
        const averageProfitLossNIS =
          event.players.length > 0
            ? totalProfitLossNIS / event.players.length
            : 0;
        const totalCashOutNIS = convertChipsToNIS(totalCashOutChips, settings); // Calculate total cash out in NIS

        // Note: totalProfitLossNIS should ideally be close to zero if accounting is perfect
        // console.log(`Event ${event.id}: Total P/L (NIS) = ${totalProfitLossNIS}, Total Pot (NIS) = ${totalPotValueNIS}, Total Cashout (Chips) = ${totalCashOutChips}`);

        return {
          eventId: event.id,
          eventDate: event.date.toISOString(),
          hostName: event.host.name,
          numberOfPlayers: event.players.length,
          totalBuyInsCount: totalBuyInsCount,
          totalCashOutChips: totalCashOutChips, // Renamed field
          totalCashOutNIS: totalCashOutNIS, // Added field
          status: event.status,
          participants: participants,
          totalPotValue: totalPotValueNIS,
          biggestWinner: biggestWinner,
          biggestLoser: biggestLoser,
          averageProfitLoss: averageProfitLossNIS,
        };
      }
    );

    return NextResponse.json(summaryData);
  } catch (error) {
    console.error("Failed to fetch event summary:", error);
    return NextResponse.json(
      { error: "Failed to fetch event summary data" },
      { status: 500 }
    );
  }
}
