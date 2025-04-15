"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })} // Redirect to login after sign out
      className="ml-4 rounded bg-red-500 px-3 py-1 text-sm font-medium text-white hover:bg-red-600"
    >
      Sign Out
    </button>
  );
}
