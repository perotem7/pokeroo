import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Assuming prisma client is setup at lib/prisma
import type { PokerEvent, PlayerInEvent, Player } from "@/generated/prisma";

// --- Constants for calculation based on user formula ---
const CHIPS_PER_BUY_IN = 1000;
const CHIPS_PER_NIS = 20;
const NIS_PER_BUY_IN = CHIPS_PER_BUY_IN / CHIPS_PER_NIS; // Should be 50

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
    // Explicitly type the result of findMany
    const events: EventWithDetails[] = await prisma.pokerEvent.findMany({
      where: {
        status: "COMPLETED", // Only fetch completed events for summary
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

            // Calculate Player Profit/Loss in NIS using the corrected formula
            const profitLossNIS =
              (cashOutChips - p.buyIns * CHIPS_PER_BUY_IN) / CHIPS_PER_NIS;

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

        const totalPotValueNIS = totalBuyInsCount * NIS_PER_BUY_IN;
        const averageProfitLossNIS =
          event.players.length > 0
            ? totalProfitLossNIS / event.players.length
            : 0;
        const totalCashOutNIS = totalCashOutChips / CHIPS_PER_NIS; // Calculate total cash out in NIS

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
