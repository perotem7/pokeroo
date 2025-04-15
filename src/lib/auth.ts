import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { authConfig } from "./auth.config"; // Import edge-safe config

// Initialize NextAuth with the Prisma adapter and session strategy
export const {
  handlers: { GET, POST }, // Route handlers for /api/auth/*
  auth, // Server-side session access
  signIn, // Server Action for sign-in
  signOut, // Server Action for sign-out
} = NextAuth({
  // Spread the base config (providers, pages, non-adapter callbacks)
  ...authConfig,
  // Add the Prisma adapter
  adapter: PrismaAdapter(prisma),
  // Specify session strategy (database is required for adapter)
  session: {
    strategy: "jwt", // Use JWT for session tokens (database strategy also viable)
    // maxAge: 30 * 24 * 60 * 60, // Optional: 30 days session duration
  },
  // Note: Callbacks like jwt and session defined in authConfig are used here
});
