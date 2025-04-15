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

        const { username, password } = credentials;

        try {
          const user = await prisma.user.findUnique({
            where: { username: username },
          });

          if (!user || !user.passwordHash) {
            console.log(
              `User not found or password not set for username: ${username}`
            );
            return null; // User not found or password missing
          }

          // Validate password
          const isValidPassword = await bcrypt.compare(
            password,
            user.passwordHash
          );
          if (!isValidPassword) {
            console.log(`Invalid password attempt for username: ${username}`);
            return null; // Passwords do not match
          }

          console.log(`Successful login for username: ${username}`);
          // Return user object (without password)
          // Ensure this matches the User type expected by the session/jwt callbacks
          return {
            id: user.id,
            username: user.username,
            // name: user.name, // If you have a name field
            // email: user.email, // If you have an email field
          };
        } catch (error) {
          console.error("Error during authorization:", error);
          return null; // Return null on any error during DB query or comparison
        }
      },
    }),
  ],
  // Define callbacks for JWT and Session
  callbacks: {
    // Controls if user is allowed to sign in
    async signIn({
      user,
      account,
      profile,
    }: {
      user: User;
      account: any;
      profile?: any;
    }) {
      // Add any custom sign-in logic here if needed
      // console.log("signIn callback", { user, account, profile });
      return true; // Allow sign in
    },
    // Add user ID and username to the JWT
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        // User object is available on initial sign-in
        token.id = user.id;
        token.username = (user as any).username; // Add username if available on user object
      }
      // console.log("jwt callback", { token });
      return token;
    },
    // Add custom properties (like id, username) from the token to the session object
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token?.id && session.user) {
        session.user.id = token.id as string;
      }
      if (token?.username && session.user) {
        session.user.username = token.username as string;
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
