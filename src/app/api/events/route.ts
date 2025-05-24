import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getTenantPrisma } from "@/lib/prisma-tenant";

// GET /api/events - Fetch events created by the user (via hosted player)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { prisma } = await getTenantPrisma();

    const events = await prisma.pokerEvent.findMany({
      where: {
        // Find events where the host player was created by the logged-in user
        host: {
          createdById: session.user.id,
        },
        // tenantId automatically added by middleware
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
  const session = await auth();

  if (!session?.user?.id || !session?.user?.tenantId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { hostId, date } = await request.json();

    if (!hostId || typeof hostId !== "string") {
      return NextResponse.json(
        { error: "Host ID is required" },
        { status: 400 }
      );
    }

    const { prisma } = await getTenantPrisma();

    // Verify the chosen host belongs to the current user and tenant
    const hostPlayer = await prisma.player.findFirst({
      where: {
        id: hostId,
        createdById: session.user.id, // Security check!
        // tenantId automatically added by middleware
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
        tenantId: session.user.tenantId,
        date: date ? new Date(date) : new Date(),
        // status has a default value in the schema
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
