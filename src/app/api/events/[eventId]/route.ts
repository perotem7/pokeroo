import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: {
    eventId: string;
  };
}

// GET /api/events/[eventId] - Fetch details for a specific event
export async function GET(request: Request, { params }: RouteParams) {
  const session = await auth();
  const { eventId } = params;

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
