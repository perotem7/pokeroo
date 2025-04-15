import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: {
    eventId: string;
    playerInEventId: string; // ID of the PlayerInEvent record
  };
}

// PATCH /api/events/[eventId]/players/[playerInEventId] - Update player in event
export async function PATCH(request: Request, { params }: RouteParams) {
  const session = await getServerSession(authOptions);
  const { eventId, playerInEventId } = params;

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
    let updateData: any;
    const requestBody = await request.json().catch(() => null); // Try to parse JSON body

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
