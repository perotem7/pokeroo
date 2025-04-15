import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/players - Fetch players for the logged-in user
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const players = await prisma.player.findMany({
      where: {
        createdById: session.user.id,
      },
      orderBy: {
        createdAt: "asc", // Or name: 'asc'
      },
    });
    return NextResponse.json(players);
  } catch (error) {
    console.error("Error fetching players:", error);
    return NextResponse.json(
      { error: "Failed to fetch players" },
      { status: 500 }
    );
  }
}

// POST /api/players - Create a new player for the logged-in user
export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name } = await request.json();

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Player name is required" },
        { status: 400 }
      );
    }

    const newPlayer = await prisma.player.create({
      data: {
        name: name.trim(),
        createdById: session.user.id,
      },
    });

    return NextResponse.json(newPlayer, { status: 201 }); // 201 Created
  } catch (error) {
    console.error("Error creating player:", error);
    // Handle potential duplicate name errors if needed in the future
    return NextResponse.json(
      { error: "Failed to create player" },
      { status: 500 }
    );
  }
}
