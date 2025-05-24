import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Function to generate a subdomain from account name
function generateSubdomain(accountName: string): string {
  return accountName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, "") // Remove leading/trailing hyphens
    .substring(0, 30); // Limit length
}

export async function POST(request: Request) {
  try {
    const { accountName, username, email, password } = await request.json();

    // Validation
    if (!accountName || !username || !password) {
      return NextResponse.json(
        { error: "Account name, username, and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    // Generate subdomain from account name
    let subdomain = generateSubdomain(accountName);

    // Ensure subdomain is not empty
    if (!subdomain) {
      subdomain = `account-${Date.now()}`;
    }

    // Check if subdomain is available (add number suffix if needed)
    let finalSubdomain = subdomain;
    let counter = 1;

    while (
      await prisma.tenant.findUnique({ where: { subdomain: finalSubdomain } })
    ) {
      finalSubdomain = `${subdomain}-${counter}`;
      counter++;
    }

    // Check if username already exists (across all tenants for now)
    const existingUser = await prisma.user.findFirst({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create tenant and user in transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create tenant
      const tenant = await tx.tenant.create({
        data: {
          name: accountName,
          subdomain: finalSubdomain,
          plan: "FREE",
          isActive: true,
        },
      });

      // Create user as tenant owner
      const user = await tx.user.create({
        data: {
          username,
          email: email || null,
          passwordHash,
          role: "OWNER",
          tenantId: tenant.id,
          isActive: true,
        },
      });

      return { tenant, user };
    });

    return NextResponse.json(
      {
        message: "Account created successfully",
        accountName: result.tenant.name,
        subdomain: result.tenant.subdomain,
        tenantId: result.tenant.id,
        userId: result.user.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
