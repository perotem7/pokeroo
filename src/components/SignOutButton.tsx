"use client";

import { signOut } from "next-auth/react";
import React from "react"; // Import React for event typing

export default function SignOutButton() {
  const handleSignOut = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default link navigation
    signOut({ callbackUrl: "/login" }); // Redirect to login after sign out
  };

  return (
    // Replace button with <a> tag
    <a
      href="#" // Add href for <a> tag semantics
      onClick={handleSignOut}
      className="hover:text-purple-200 cursor-pointer"
    >
      Sign Out
    </a>
  );
}
