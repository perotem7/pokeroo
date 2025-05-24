import { prisma } from "@/lib/prisma";

export interface TenantSettings {
  chipsPerBuyIn: number;
  nisPerBuyIn: number;
}

export const DEFAULT_SETTINGS: TenantSettings = {
  chipsPerBuyIn: 1000,
  nisPerBuyIn: 50,
};

export async function getTenantSettings(
  tenantId: string
): Promise<TenantSettings> {
  try {
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      select: { settings: true },
    });

    if (!tenant || !tenant.settings) {
      return DEFAULT_SETTINGS;
    }

    const settings = tenant.settings as Record<string, unknown>;
    return {
      chipsPerBuyIn:
        typeof settings.chipsPerBuyIn === "number"
          ? settings.chipsPerBuyIn
          : DEFAULT_SETTINGS.chipsPerBuyIn,
      nisPerBuyIn:
        typeof settings.nisPerBuyIn === "number"
          ? settings.nisPerBuyIn
          : DEFAULT_SETTINGS.nisPerBuyIn,
    };
  } catch (error) {
    console.error("Failed to fetch tenant settings:", error);
    return DEFAULT_SETTINGS;
  }
}

export function calculateChipValue(settings: TenantSettings): number {
  return settings.nisPerBuyIn / settings.chipsPerBuyIn;
}

export function convertChipsToNIS(
  chips: number,
  settings: TenantSettings
): number {
  return chips * calculateChipValue(settings);
}

export function convertNISToChips(
  nis: number,
  settings: TenantSettings
): number {
  return nis / calculateChipValue(settings);
}
