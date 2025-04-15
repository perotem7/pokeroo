"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Player } from "@/generated/prisma";
import type { PokerEvent } from "@/generated/prisma";

// Define a type for the event data returned by the API (including host)
type EventWithHost = PokerEvent & {
  host: { id: string; name: string } | null;
};

export default function EventsPage() {
  const { status } = useSession();
  const router = useRouter();

  const [events, setEvents] = useState<EventWithHost[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedHostId, setSelectedHostId] = useState<string>("");

  const [isLoadingEvents, setIsLoadingEvents] = useState(true);
  const [isLoadingPlayers, setIsLoadingPlayers] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [createEventError, setCreateEventError] = useState<string | null>(null);

  // Combined loading state
  const isLoading = status === "loading" || isLoadingEvents || isLoadingPlayers;

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Fetch events and players
  useEffect(() => {
    if (status === "authenticated") {
      const fetchData = async () => {
        setIsLoadingEvents(true);
        setIsLoadingPlayers(true);
        setError(null);
        try {
          // Fetch events
          const eventsResponse = await fetch("/api/events");
          if (!eventsResponse.ok) throw new Error("Failed to fetch events");
          const eventsData = await eventsResponse.json();
          setEvents(eventsData);

          // Fetch players (for host selection)
          const playersResponse = await fetch("/api/players");
          if (!playersResponse.ok) throw new Error("Failed to fetch players");
          const playersData = await playersResponse.json();
          setPlayers(playersData);
          // Set default selected host if players exist
          if (playersData.length > 0) {
            setSelectedHostId(playersData[0].id);
          }
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "An unknown error occurred"
          );
        } finally {
          setIsLoadingEvents(false);
          setIsLoadingPlayers(false);
        }
      };
      fetchData();
    }
  }, [status]);

  const handleCreateEvent = async (event: FormEvent) => {
    event.preventDefault();
    setCreateEventError(null);
    if (!selectedHostId) {
      setCreateEventError("Please select a host for the event.");
      return;
    }

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hostId: selectedHostId }),
      });

      const newEvent = await response.json();

      if (!response.ok) {
        throw new Error(newEvent.error || "Failed to create event");
      }

      // Redirect to the new event's detail page
      router.push(`/events/${newEvent.id}`);
    } catch (err) {
      setCreateEventError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    }
  };

  if (isLoading) {
    return <div className="p-6 text-center">Loading events data...</div>;
  }

  if (status === "unauthenticated") {
    return <div className="p-6 text-center">Redirecting to login...</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Poker Events</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Back to Dashboard
        </Link>
      </div>

      {/* Create Event Form */}
      {players.length > 0 ? (
        <form
          onSubmit={handleCreateEvent}
          className="mb-8 p-4 border rounded shadow-sm bg-white"
        >
          <h2 className="text-xl font-semibold mb-3">Create New Event</h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-grow">
              <label
                htmlFor="host-select"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Select Host
              </label>
              <select
                id="host-select"
                value={selectedHostId}
                onChange={(e) => setSelectedHostId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white"
              >
                {players.map((player) => (
                  <option key={player.id} value={player.id}>
                    {player.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors self-end sm:self-center mt-2 sm:mt-0"
            >
              Create Event
            </button>
          </div>
          {createEventError && (
            <p className="text-red-600 text-sm mt-2">{createEventError}</p>
          )}
        </form>
      ) : (
        <div className="mb-8 p-4 border rounded shadow-sm bg-yellow-50 border-yellow-200 text-yellow-800">
          <p>You need to add players before you can create an event.</p>
          <Link
            href="/players"
            className="text-blue-600 hover:underline font-medium"
          >
            Go to Players Page &rarr;
          </Link>
        </div>
      )}

      {/* Events List */}
      <div className="bg-white shadow-md rounded">
        <h2 className="text-xl font-semibold p-4 border-b">Past Events</h2>
        {error && (
          <p className="text-red-600 p-4">Error loading events: {error}</p>
        )}
        {!error && events.length === 0 && !isLoadingEvents ? (
          <p className="p-4 text-gray-500">No events created yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {events.map((event) => (
              <li
                key={event.id}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <Link href={`/events/${event.id}`} className="block">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-medium text-gray-800">
                        Event Date: {new Date(event.date).toLocaleDateString()}
                      </span>
                      <span
                        className={`ml-3 px-2 py-0.5 rounded-full text-xs font-medium ${
                          event.status === "COMPLETED"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Host: {event.host?.name || "N/A"}
                    </span>
                  </div>
                  {/* Add more details like player count later if needed */}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {isLoadingEvents && status === "authenticated" && (
          <p className="p-4 text-gray-500 text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}
