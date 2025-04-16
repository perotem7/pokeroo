import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Define the expected structure for the context parameter
interface RouteContext {
  params: {
    eventId: string;
  };
}

// GET /api/events/[eventId] - Fetch details for a specific event
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(request: Request, context: RouteContext) {
  // Destructure eventId directly from context.params
  const { eventId } = context.params;
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
    const event = await prisma.pokerEvent.findUnique({
      where: {
        id: eventId,
      },
      include: {
        host: {
          // Include host details
          select: {
            id: true,
            name: true,
            createdById: true, // Needed for ownership check
          },
        },
        players: {
          // Include players participating in this event
          include: {
            player: {
              // Include details of the player in the event
              select: {
                id: true,
                name: true,
              },
            },
          },
          orderBy: {
            createdAt: "asc", // Order players by when they were added
          },
        },
      },
    });

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    // Security Check: Ensure the logged-in user owns the event via the host player
    if (event.host?.createdById !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // We don't need to send the host's createdById to the client
    const { host, ...eventData } = event;
    const hostDetails = host ? { id: host.id, name: host.name } : null;

    return NextResponse.json({
      ...eventData,
      host: hostDetails,
    });
  } catch (error) {
    console.error(`Error fetching event ${eventId}:`, error);
    // Handle potential Prisma errors, e.g., invalid UUID format
    if (error instanceof Error && error.message.includes("Invalid uuid")) {
      return NextResponse.json(
        { error: "Invalid Event ID format" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to fetch event details" },
      { status: 500 }
    );
  }
}

// PATCH /api/events/[eventId] - Update event (e.g., status)
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
    const { status } = await request.json();

    // Basic validation for status if provided
    if (status && status !== "COMPLETED") {
      // Extend this if other statuses are allowed for updates
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      );
    }

    // Verify the event belongs to the user first
    const event = await prisma.pokerEvent.findFirst({
      where: {
        id: eventId,
        host: {
          createdById: session.user.id,
        },
      },
      select: { id: true }, // Only need ID for verification
    });

    if (!event) {
      return NextResponse.json(
        { error: "Event not found or user unauthorized" },
        { status: 404 }
      );
    }

    // Perform the update
    const updatedEvent = await prisma.pokerEvent.update({
      where: {
        id: eventId,
      },
      data: {
        status: status, // Only update status for now
      },
      include: {
        host: { select: { id: true, name: true } }, // Include host details
      },
    });

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error(`Error updating event ${eventId}:`, error);
    if (error instanceof Error && error.message.includes("Invalid uuid")) {
      return NextResponse.json(
        { error: "Invalid Event ID format" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to update event" },
      { status: 500 }
    );
  }
}

// DELETE /api/events/[eventId] - Delete an event
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function DELETE(request: Request, context: any) {
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
    // Verify the event belongs to the user before deleting
    const event = await prisma.pokerEvent.findFirst({
      where: {
        id: eventId,
        host: {
          createdById: session.user.id,
        },
      },
      select: { id: true }, // Only need ID for verification
    });

    if (!event) {
      // Event not found or doesn't belong to the user
      return NextResponse.json(
        { error: "Event not found or user unauthorized" },
        { status: 404 }
      );
    }

    // Delete the event
    await prisma.pokerEvent.delete({
      where: {
        id: eventId,
      },
    });

    return NextResponse.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error(`Error deleting event ${eventId}:`, error);
    // Handle specific errors like invalid ID format
    if (error instanceof Error && error.message.includes("Invalid uuid")) {
      return NextResponse.json(
        { error: "Invalid Event ID format" },
        { status: 400 }
      );
    }
    // Handle errors if the record to delete is not found (though we checked above)
    if (
      error instanceof Error &&
      error.message.includes("Record to delete does not exist")
    ) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    // Generic error for other issues
    return NextResponse.json(
      { error: "Failed to delete event" },
      { status: 500 }
    );
  }
}
