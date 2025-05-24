import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { getTenantSettings, convertChipsToNIS } from "@/lib/settings";
import type { PokerEvent, PlayerInEvent } from "@/generated/prisma";

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
    const session = await auth();

    if (!session?.user?.tenantId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Get tenant settings
    const settings = await getTenantSettings(session.user.tenantId);

    const events: EventForTrend[] = await prisma.pokerEvent.findMany({
      where: {
        status: "COMPLETED",
        tenantId: session.user.tenantId, // Filter by tenant
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

    const trendData: OverallTrendPoint[] = events.map((event) => {
      let eventBuyInsCount = 0;
      let eventCashOutChips = 0;

      event.players.forEach((p) => {
        eventBuyInsCount += p.buyIns;
        eventCashOutChips += p.cashOutAmount ?? 0;
      });

      const eventBuyInsNIS = eventBuyInsCount * settings.nisPerBuyIn;
      const eventCashOutNIS = convertChipsToNIS(eventCashOutChips, settings);

      cumulativeBuyIns += eventBuyInsNIS;
      cumulativeCashOuts += eventCashOutNIS;

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
