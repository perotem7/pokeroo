import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { EventStatus } from "@/generated/prisma"; // Import enum

// PATCH /api/events/[eventId]/complete - Mark an event as completed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PATCH(request: Request, context: any) {
  const { eventId } = context.params as { eventId: string };
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!eventId) {
    return NextResponse.json(
      { error: "Event ID is required" },
      { status: 400 }
    );
  }

  try {
    // Verify the event exists and belongs to the user, and isn't already completed
    const event = await prisma.pokerEvent.findFirst({
      where: {
        id: eventId,
        host: {
          createdById: session.user.id,
        },
      },
      select: { id: true, status: true },
    });

    if (!event) {
      return NextResponse.json(
        { error: "Event not found or user unauthorized" },
        { status: 404 }
      );
    }

    if (event.status === EventStatus.COMPLETED) {
      return NextResponse.json(
        { error: "Event is already completed" },
        { status: 409 }
      ); // Conflict
    }

    // --- Optional Check: Ensure all players have cashed out ---
    // You might want to add a check here to ensure `cashOutAmount` is set for all `PlayerInEvent` records for this event.
    // If not all players have cashed out, you could return an error (e.g., 400 Bad Request).
    // Example (uncomment and adapt if needed):
    // const playersNotCashedOut = await prisma.playerInEvent.count({
    //   where: {
    //     eventId: eventId,
    //     cashOutAmount: null,
    //   },
    // });
    // if (playersNotCashedOut > 0) {
    //   return NextResponse.json({ error: 'All players must cash out before completing the event' }, { status: 400 });
    // }
    // --- End Optional Check ---

    // Update the event status to COMPLETED
    const updatedEvent = await prisma.pokerEvent.update({
      where: {
        id: eventId,
      },
      data: {
        status: EventStatus.COMPLETED,
      },
      include: {
        // Return updated event with details needed by the frontend
        host: { select: { id: true, name: true } },
        players: {
          include: {
            player: { select: { id: true, name: true } },
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error(`Error completing event ${eventId}:`, error);
    if (error instanceof Error && error.message.includes("Invalid uuid")) {
      return NextResponse.json(
        { error: "Invalid Event ID format" },
        { status: 400 }
      );
    }
    // Handle other potential errors
    return NextResponse.json(
      { error: "Failed to complete event" },
      { status: 500 }
    );
  }
}
