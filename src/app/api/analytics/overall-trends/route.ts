import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { PokerEvent, PlayerInEvent, Player } from "@/generated/prisma";

// Constants from event-summary (could be shared)
const CHIPS_PER_BUY_IN = 1000;
const CHIPS_PER_NIS = 20;
const NIS_PER_BUY_IN = CHIPS_PER_BUY_IN / CHIPS_PER_NIS;

// Define a more specific type for the event data needed here
type EventForTrend = Pick<PokerEvent, "id" | "date"> & {
  players: Pick<PlayerInEvent, "buyIns" | "cashOutAmount">[];
};

// Data structure for the response
export interface OverallTrendPoint {
  date: string; // ISO date string
  cumulativeBuyInsNIS: number;
  cumulativeCashOutsNIS: number;
  cumulativeNetProfitLossNIS: number;
}

export async function GET() {
  try {
    const events: EventForTrend[] = await prisma.pokerEvent.findMany({
      where: {
        status: "COMPLETED",
      },
      select: {
        // Select only necessary fields
        id: true,
        date: true,
        players: {
          select: {
            buyIns: true,
            cashOutAmount: true,
          },
        },
      },
      orderBy: {
        date: "asc", // Crucial: Sort chronologically for cumulative calculation
      },
    });

    let cumulativeBuyIns = 0;
    let cumulativeCashOuts = 0;
    let cumulativeNet = 0;

    const trendData: OverallTrendPoint[] = events.map((event) => {
      let eventBuyInsCount = 0;
      let eventCashOutChips = 0;

      event.players.forEach((p) => {
        eventBuyInsCount += p.buyIns;
        eventCashOutChips += p.cashOutAmount ?? 0;
      });

      const eventBuyInsNIS = eventBuyInsCount * NIS_PER_BUY_IN;
      const eventCashOutNIS = eventCashOutChips / CHIPS_PER_NIS;
      // Net for the event should be cash out - buy in
      const eventNetNIS = eventCashOutNIS - eventBuyInsNIS;

      cumulativeBuyIns += eventBuyInsNIS;
      cumulativeCashOuts += eventCashOutNIS;
      cumulativeNet += eventNetNIS; // This should ideally stay near 0

      return {
        date: event.date.toISOString(),
        cumulativeBuyInsNIS: cumulativeBuyIns,
        cumulativeCashOutsNIS: cumulativeCashOuts,
        // Net P/L is BuyIns - CashOuts from the house perspective,
        // but CashOuts - BuyIns from players' perspective.
        // Let's show CashOuts - BuyIns for player perspective consistency.
        cumulativeNetProfitLossNIS: cumulativeCashOuts - cumulativeBuyIns,
      };
    });

    return NextResponse.json(trendData);
  } catch (error) {
    console.error("Failed to fetch overall trends:", error);
    return NextResponse.json(
      { error: "Failed to fetch overall trends data" },
      { status: 500 }
    );
  }
}
