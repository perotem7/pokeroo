import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });

        if (!user || !user.passwordHash) {
          // User not found or password not set (should not happen in normal flow)
          return null;
        }

        // Validate password
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );

        if (!isValidPassword) {
          return null;
        }

        // Return user object without password hash
        return {
          id: user.id,
          username: user.username,
          // Add any other user properties you want in the session/token
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt", // Using JWT for session management
  },
  callbacks: {
    // Include user id in the JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // Include user id in the session object
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string; // Add id from token to session user
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", // Redirect users to /login page
    // error: '/auth/error', // Optional: Error code passed in query string as ?error=
    // signOut: '/auth/signout', // Optional
    // verifyRequest: '/auth/verify-request', // Optional: (used for email/passwordless login)
    // newUser: '/auth/new-user' // Optional: New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
