import { PrismaClient } from "@/generated/prisma";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more: https://pris.ly/d/help/next-js-best-practices

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    // Optionally log queries
    // log: ['query'],
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
