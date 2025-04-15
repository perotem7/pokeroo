import type { DefaultSession, User as DefaultUser } from "next-auth";
import type { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      username?: string | null; // Add username here
    } & DefaultSession["user"]; // Keep existing properties like name, email, image
  }

  /**
   * The shape of the user object returned in the OAuth providers `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends DefaultUser {
    username?: string | null; // Also add username to the base User type if needed
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    /** OpenID ID Token */
    id?: string;
    username?: string | null; // Add username to the JWT type
  }
}
