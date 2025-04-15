import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

// GET /api/events - Fetch events created by the user (via hosted player)
export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const events = await prisma.pokerEvent.findMany({
      where: {
        // Find events where the host player was created by the logged-in user
        host: {
          createdById: session.user.id,
        },
      },
      include: {
        host: {
          // Include the host player's details
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        date: "desc", // Show most recent events first
      },
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

// POST /api/events - Create a new event
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { hostId } = await request.json();

    if (!hostId || typeof hostId !== "string") {
      return NextResponse.json(
        { error: "Host ID is required" },
        { status: 400 }
      );
    }

    // Verify the chosen host belongs to the current user
    const hostPlayer = await prisma.player.findFirst({
      where: {
        id: hostId,
        createdById: session.user.id, // Security check!
      },
    });

    if (!hostPlayer) {
      return NextResponse.json(
        { error: "Invalid host selected or host does not belong to user" },
        { status: 403 } // Forbidden
      );
    }

    // Create the event
    const newEvent = await prisma.pokerEvent.create({
      data: {
        hostId: hostId,
        // date and status have default values in the schema
      },
      include: {
        host: { select: { id: true, name: true } }, // Include host in response
      },
    });

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
