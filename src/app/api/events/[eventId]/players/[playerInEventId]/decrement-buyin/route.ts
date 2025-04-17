import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: NextRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any // Using any as per other project routes
) {
  // Assert the type of params
  const { eventId, playerInEventId } = context.params as {
    eventId: string;
    playerInEventId: string;
  };

  if (!eventId || !playerInEventId) {
    return NextResponse.json(
      { error: "Missing eventId or playerInEventId" },
      { status: 400 }
    );
  }

  try {
    // 1. Find the event to check its status
    const event = await prisma.pokerEvent.findUnique({
      where: { id: eventId },
      select: { status: true },
    });

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    // 2. Prevent changes if the event is completed
    if (event.status === "COMPLETED") {
      return NextResponse.json(
        { error: "Cannot modify buy-ins for a completed event" },
        { status: 403 } // Forbidden
      );
    }

    // 3. Find the specific player participation record
    const playerParticipation = await prisma.playerInEvent.findUnique({
      where: { id: playerInEventId },
      select: { buyIns: true }, // Only need buyIns to check before decrementing
    });

    if (!playerParticipation) {
      return NextResponse.json(
        { error: "Player participation record not found" },
        { status: 404 }
      );
    }

    // 4. Check if buy-ins are already zero
    if (playerParticipation.buyIns <= 0) {
      // Return current state, maybe with a specific message or just success
      // Or return a 400 Bad Request status
      return NextResponse.json(
        { error: "Buy-ins cannot be less than zero" },
        { status: 400 }
      );
    }

    // 5. Decrement the buy-in count
    const updatedPlayerParticipation = await prisma.playerInEvent.update({
      where: { id: playerInEventId },
      data: {
        buyIns: {
          decrement: 1,
        },
      },
    });

    return NextResponse.json(updatedPlayerParticipation);
  } catch (error) {
    console.error(
      `Failed to decrement buy-in for player ${playerInEventId} in event ${eventId}:`,
      error
    );
    // Consider more specific error checking (e.g., Prisma errors)
    return NextResponse.json(
      { error: "Failed to update buy-in count" },
      { status: 500 }
    );
  }
}
