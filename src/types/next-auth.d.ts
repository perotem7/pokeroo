import type { DefaultSession, User as DefaultUser } from "@auth/core/types";
import type { JWT as DefaultJWT } from "@auth/core/jwt";

declare module "@auth/core/types" {
  /**
   * Extend the default session types
   */
  interface Session {
    user: {
      /** The user's database ID. */
      id: string;
      /** The user's username. */
      username?: string | null;
      // Add other properties you want in the session here
    } & DefaultSession["user"]; // Keep existing default properties like name, email, image
  }

  /**
   * Extend the default user object type (returned by providers)
   * Ensure this matches the object returned in the Credentials provider's authorize callback
   */
  interface User extends DefaultUser {
    /** The user's username. */
    username?: string | null;
    // Add other properties returned by authorize callback if needed
  }
}

declare module "@auth/core/jwt" {
  /** Extend the default JWT type */
  interface JWT extends DefaultJWT {
    /** User's database id */
    id?: string;
    /** User's username */
    username?: string | null;
    // Add other properties you want persisted in the token
  }
}
