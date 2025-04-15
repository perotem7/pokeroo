import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: {
    eventId: string;
  };
}

// POST /api/events/[eventId]/players - Add a player to an event
export async function POST(request: Request, { params }: RouteParams) {
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
    const { playerId } = await request.json();

    if (!playerId || typeof playerId !== "string") {
      return NextResponse.json(
        { error: "Player ID is required" },
        { status: 400 }
      );
    }

    // --- Verification Steps ---
    // 1. Verify Event exists and belongs to the user (via host)
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

    // 2. Verify Player exists and belongs to the user
    const player = await prisma.player.findFirst({
      where: {
        id: playerId,
        createdById: session.user.id,
      },
      select: { id: true, name: true }, // Need details for response
    });
    if (!player) {
      return NextResponse.json(
        { error: "Player not found or user unauthorized" },
        { status: 404 }
      );
    }

    // 3. Check if player is already in the event
    const existingPlayerInEvent = await prisma.playerInEvent.findFirst({
      where: {
        eventId: eventId,
        playerId: playerId,
      },
    });
    if (existingPlayerInEvent) {
      return NextResponse.json(
        { error: "Player is already in this event" },
        { status: 409 }
      ); // Conflict
    }
    // --- End Verification ---

    // Create the PlayerInEvent record
    const newPlayerInEvent = await prisma.playerInEvent.create({
      data: {
        eventId: eventId,
        playerId: playerId,
        // buyIns defaults to 0, cashOutAmount defaults to null
      },
      include: {
        player: {
          // Include player details in the response
          select: { id: true, name: true },
        },
      },
    });

    return NextResponse.json(newPlayerInEvent, { status: 201 });
  } catch (error) {
    // Log the general error and relevant IDs
    console.error(`Error adding player to event ${eventId}:`, error);
    // Handle potential Prisma errors (e.g., invalid UUID)
    if (error instanceof Error && error.message.includes("Invalid uuid")) {
      return NextResponse.json(
        { error: "Invalid Event or Player ID format" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to add player to event" },
      { status: 500 }
    );
  }
}
