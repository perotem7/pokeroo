import type { User, Session } from "next-auth";
import type { JWT } from "next-auth/jwt"; // Import JWT from subpath
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma"; // Assuming prisma client is correctly set up
import bcrypt from "bcryptjs";

// Note: Adapter cannot be included here as it relies on Node.js APIs
export const authConfig = {
  // Specify pages for login, error, etc.
  pages: {
    signIn: "/login",
    // error: '/auth/error', // Optional error page
  },
  // Define providers
  providers: [
    Credentials({
      // Define the fields expected in the credentials object
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
        tenantId: { label: "Tenant ID", type: "hidden" }, // For tenant-specific login
      },
      async authorize(credentials) {
        // Basic validation for credentials object structure
        if (
          !credentials?.username ||
          !credentials.password ||
          typeof credentials.username !== "string" ||
          typeof credentials.password !== "string"
        ) {
          console.error("Invalid credentials structure received");
          return null;
        }

        const { username, password, tenantId } = credentials;

        try {
          // Build where clause for user lookup
          const whereClause: any = { username: username };

          // If tenantId is provided, use it; otherwise find user in any active tenant
          if (tenantId && typeof tenantId === "string") {
            whereClause.tenantId = tenantId;
            whereClause.tenant = { isActive: true };
          } else {
            whereClause.tenant = { isActive: true };
          }

          const user = await prisma.user.findFirst({
            where: whereClause,
            include: {
              tenant: {
                select: {
                  id: true,
                  name: true,
                  subdomain: true,
                  plan: true,
                  isActive: true,
                },
              },
            },
          });

          if (!user || !user.passwordHash || !user.tenant?.isActive) {
            console.log(
              `User not found, password not set, or tenant inactive for username: ${username}`
            );
            return null;
          }

          // Validate password
          const isValidPassword = await bcrypt.compare(
            password,
            user.passwordHash
          );
          if (!isValidPassword) {
            console.log(`Invalid password attempt for username: ${username}`);
            return null;
          }

          console.log(
            `Successful login for username: ${username} in tenant: ${user.tenant.name}`
          );

          // Return user object with tenant information
          return {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            tenantId: user.tenantId,
            tenant: user.tenant,
          };
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  // Define callbacks for JWT and Session
  callbacks: {
    // Controls if user is allowed to sign in
    async signIn({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      user: _user, // Prefix unused variable
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      account: _account, // Prefix unused variable
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      profile: _profile, // Prefix unused variable
    }: {
      user: User;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      account: any; // Keep any for now
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      profile?: any; // Keep any for now
    }) {
      // Add any custom sign-in logic here if needed
      // console.log("signIn callback", { user, account, profile });
      return true; // Allow sign in
    },
    // Add user data to the JWT
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        // User object is available on initial sign-in
        token.id = user.id;
        token.username = (user as User).username;
        token.email = (user as User).email;
        token.role = (user as User).role;
        token.tenantId = (user as User).tenantId;
        token.tenant = (user as User).tenant;
      }
      // console.log("jwt callback", { token });
      return token;
    },
    // Add custom properties from the token to the session object
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token?.id && session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.tenantId = token.tenantId as string;
        session.user.tenant = token.tenant as any;
      }
      // console.log("session callback", { session });
      return session;
    },
  },
  // Trust Vercel deployment host
  // Necessary for production deployments, see https://authjs.dev/reference/deployment#vercel
  // trustHost: true, // Automatically enabled on Vercel, but good to be aware of

  // Enable debug messages in development
  // debug: process.env.NODE_ENV === 'development',
};
