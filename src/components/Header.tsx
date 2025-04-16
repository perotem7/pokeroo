"use client";

import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-purple-700 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">Pokeroo</Link>
        </h1>
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/players" className="hover:text-purple-200">
            Players
          </Link>
          <Link href="/events" className="hover:text-purple-200">
            Events
          </Link>
          <Link href="/analytics" className="hover:text-purple-200">
            Analytics
          </Link>
          <SignOutButton />
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Simple Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-2 items-center">
          <Link
            href="/players"
            className="block py-2 hover:text-purple-200"
            onClick={() => setMenuOpen(false)}
          >
            Players
          </Link>
          <Link
            href="/events"
            className="block py-2 hover:text-purple-200"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/analytics"
            className="block py-2 hover:text-purple-200"
            onClick={() => setMenuOpen(false)}
          >
            Analytics
          </Link>
          <div className="mt-2">
            <SignOutButton />
          </div>
        </nav>
      )}
    </header>
  );
}
