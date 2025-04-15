"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Player } from "@/generated/prisma"; // Correct import path for generated Prisma types

export default function PlayersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [players, setPlayers] = useState<Player[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [addPlayerError, setAddPlayerError] = useState<string | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Fetch players on mount
  useEffect(() => {
    if (status === "authenticated") {
      const fetchPlayers = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch("/api/players");
          if (!response.ok) {
            const errorData = await response
              .json()
              .catch(() => ({ error: "Failed to fetch players" }));
            throw new Error(errorData.error || "Failed to fetch players");
          }
          const data = await response.json();
          setPlayers(data);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "An unknown error occurred"
          );
        } finally {
          setIsLoading(false);
        }
      };
      fetchPlayers();
    }
  }, [status]); // Re-run if auth status changes

  const handleAddPlayer = async (event: FormEvent) => {
    event.preventDefault();
    setAddPlayerError(null);
    if (!newPlayerName.trim()) {
      setAddPlayerError("Player name cannot be empty");
      return;
    }

    try {
      const response = await fetch("/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newPlayerName.trim() }),
      });

      const newPlayer = await response.json();

      if (!response.ok) {
        throw new Error(newPlayer.error || "Failed to add player");
      }

      setPlayers([...players, newPlayer]); // Add to list
      setNewPlayerName(""); // Clear input
    } catch (err) {
      setAddPlayerError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    }
  };

  // Show loading state until session status is determined and data is fetched
  if (status === "loading" || (status === "authenticated" && isLoading)) {
    return <div className="p-6 text-center">Loading players...</div>;
  }

  // Handle explicit unauthenticated state (though redirect should cover this)
  if (status === "unauthenticated") {
    return <div className="p-6 text-center">Redirecting to login...</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Players</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Back to Dashboard
        </Link>
      </div>

      {/* Add Player Form */}
      <form
        onSubmit={handleAddPlayer}
        className="mb-8 p-4 border rounded shadow-sm bg-white"
      >
        <h2 className="text-xl font-semibold mb-3">Add New Player</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="text"
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
            placeholder="Enter player name"
            className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
          >
            Add Player
          </button>
        </div>
        {addPlayerError && (
          <p className="text-red-600 text-sm mt-2">{addPlayerError}</p>
        )}
      </form>

      {/* Player List */}
      <div className="bg-white shadow-md rounded">
        <h2 className="text-xl font-semibold p-4 border-b">Your Players</h2>
        {error && (
          <p className="text-red-600 p-4">Error loading players: {error}</p>
        )}
        {!error && players.length === 0 && !isLoading ? (
          <p className="p-4 text-gray-500">
            No players added yet. Use the form above to add your first player!
          </p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {players.map((player) => (
              <li
                key={player.id}
                className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg text-gray-800">{player.name}</span>
                {/* Future actions */}
                {/* <div>
                  <button className="text-sm text-blue-500 hover:underline mr-2">Edit</button>
                  <button className="text-sm text-red-500 hover:underline">Delete</button>
                </div> */}
              </li>
            ))}
          </ul>
        )}
        {isLoading && status === "authenticated" && (
          <p className="p-4 text-gray-500 text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}
