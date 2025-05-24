import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.tenantId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const tenant = await prisma.tenant.findUnique({
      where: { id: session.user.tenantId },
      select: { settings: true },
    });

    if (!tenant) {
      return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
    }

    // Return current settings or defaults
    const settings = tenant.settings as Record<string, unknown> | null;
    return NextResponse.json({
      settings: {
        chipsPerBuyIn:
          typeof settings?.chipsPerBuyIn === "number"
            ? settings.chipsPerBuyIn
            : 1000,
        nisPerBuyIn:
          typeof settings?.nisPerBuyIn === "number" ? settings.nisPerBuyIn : 50,
      },
    });
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.tenantId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const body = await request.json();
    const { chipsPerBuyIn, nisPerBuyIn } = body;

    // Validate input
    if (
      !chipsPerBuyIn ||
      !nisPerBuyIn ||
      chipsPerBuyIn < 1 ||
      nisPerBuyIn < 1
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid settings values. Both values must be positive numbers.",
        },
        { status: 400 }
      );
    }

    // Update tenant settings
    const tenant = await prisma.tenant.findUnique({
      where: { id: session.user.tenantId },
      select: { settings: true },
    });

    if (!tenant) {
      return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
    }

    const currentSettings = (tenant.settings as Record<string, unknown>) || {};
    const updatedSettings = {
      ...currentSettings,
      chipsPerBuyIn: parseInt(chipsPerBuyIn),
      nisPerBuyIn: parseInt(nisPerBuyIn),
    };

    await prisma.tenant.update({
      where: { id: session.user.tenantId },
      data: { settings: updatedSettings },
    });

    return NextResponse.json({
      message: "Settings updated successfully",
      settings: {
        chipsPerBuyIn: updatedSettings.chipsPerBuyIn,
        nisPerBuyIn: updatedSettings.nisPerBuyIn,
      },
    });
  } catch (error) {
    console.error("Failed to update settings:", error);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
