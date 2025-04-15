import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// PATCH /api/events/[eventId]/players/[playerInEventId] - Update player in event
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PATCH(request: Request, context: any) {
  // Revert to type assertion
  const { eventId, playerInEventId } = context.params as {
    eventId: string;
    playerInEventId: string;
  };
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!eventId || !playerInEventId) {
    return NextResponse.json(
      { error: "Event ID and PlayerInEvent ID are required" },
      { status: 400 }
    );
  }

  try {
    // Verify the event belongs to the user first
    const event = await prisma.pokerEvent.findFirst({
      where: {
        id: eventId,
        host: {
          createdById: session.user.id,
        },
      },
      select: { id: true, status: true }, // Also select status to prevent updates on completed events
    });

    if (!event) {
      return NextResponse.json(
        { error: "Event not found or user unauthorized" },
        { status: 404 }
      );
    }

    // Prevent updates if event is already completed
    if (event.status === "COMPLETED") {
      return NextResponse.json(
        { error: "Cannot update a completed event" },
        { status: 403 }
      );
    }

    // Determine if it's a buy-in or cash-out update
    let updateData: { cashOutAmount: number } | { buyIns: { increment: 1 } };
    const requestBody = await request.json().catch(() => null);

    if (requestBody && typeof requestBody.cashOutAmount === "number") {
      // Cash-out update
      if (requestBody.cashOutAmount < 0) {
        return NextResponse.json(
          { error: "Cash out amount cannot be negative" },
          { status: 400 }
        );
      }
      updateData = { cashOutAmount: requestBody.cashOutAmount };
    } else {
      // Default to Buy-in increment if no valid cashOutAmount provided
      updateData = { buyIns: { increment: 1 } };
    }

    // Perform the update
    const updatedPlayerInEvent = await prisma.playerInEvent.update({
      where: {
        id: playerInEventId,
        eventId: eventId, // Ensure the record belongs to the correct event
      },
      data: updateData,
      include: {
        player: {
          select: { id: true, name: true },
        },
      },
    });

    return NextResponse.json(updatedPlayerInEvent);
  } catch (error) {
    console.error(
      `Error updating playerInEvent ${playerInEventId} for event ${eventId}:`,
      error
    );
    if (
      error instanceof Error &&
      error.message.includes("Record to update not found")
    ) {
      return NextResponse.json(
        { error: "Player entry not found in this event" },
        { status: 404 }
      );
    }
    if (error instanceof Error && error.message.includes("Invalid uuid")) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Failed to update player details" }, // Generic update error
      { status: 500 }
    );
  }
}
