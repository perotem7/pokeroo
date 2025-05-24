import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getCurrentTenant() {
  const session = await auth();

  if (session?.user?.tenantId) {
    return {
      id: session.user.tenantId,
      ...session.user.tenant,
    };
  }

  // Fallback to header-based tenant (for public pages)
  const headersList = await headers();
  const tenantId = headersList.get("x-tenant-id");

  if (tenantId) {
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      select: {
        id: true,
        name: true,
        subdomain: true,
        plan: true,
        isActive: true,
      },
    });
    return tenant;
  }

  return null;
}

export async function requireTenant() {
  const tenant = await getCurrentTenant();
  if (!tenant || !tenant.isActive) {
    throw new Error("Tenant not found or inactive");
  }
  return tenant;
}

export async function getTenantBySubdomain(subdomain: string) {
  return await prisma.tenant.findUnique({
    where: { subdomain },
    select: {
      id: true,
      name: true,
      subdomain: true,
      plan: true,
      isActive: true,
    },
  });
}
