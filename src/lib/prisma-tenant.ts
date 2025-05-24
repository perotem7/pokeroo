import { PrismaClient } from "@/generated/prisma";
import { getCurrentTenant } from "@/lib/tenant";

export async function getTenantPrisma() {
  const tenant = await getCurrentTenant();

  if (!tenant) {
    throw new Error("No tenant context available");
  }

  // Create Prisma client with tenant-aware queries
  const prisma = new PrismaClient();

  // Add middleware to automatically filter by tenantId
  prisma.$use(async (params, next) => {
    // Models that should be tenant-scoped
    const tenantScopedModels = ["player", "pokerEvent", "playerInEvent"];

    if (tenantScopedModels.includes(params.model?.toLowerCase() || "")) {
      if (
        params.action === "findMany" ||
        params.action === "findFirst" ||
        params.action === "findUnique"
      ) {
        params.args.where = {
          ...params.args.where,
          tenantId: tenant.id,
        };
      } else if (params.action === "create") {
        params.args.data = {
          ...params.args.data,
          tenantId: tenant.id,
        };
      } else if (params.action === "createMany") {
        if (Array.isArray(params.args.data)) {
          params.args.data = params.args.data.map((item: any) => ({
            ...item,
            tenantId: tenant.id,
          }));
        }
      } else if (
        params.action === "update" ||
        params.action === "updateMany" ||
        params.action === "delete" ||
        params.action === "deleteMany"
      ) {
        params.args.where = {
          ...params.args.where,
          tenantId: tenant.id,
        };
      }
    }

    return next(params);
  });

  return { prisma, tenant };
}
