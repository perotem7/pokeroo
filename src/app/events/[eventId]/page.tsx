"use client";

import { useState, useEffect, FormEvent, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import type { Player, PokerEvent, PlayerInEvent } from "@/generated/prisma";
import CashOutModal from "@/components/CashOutModal";

// Define complex type for the event details returned by the API
type PlayerDetails = {
  id: string;
  name: string;
};

type EventPlayer = PlayerInEvent & {
  player: PlayerDetails | null;
};

type EventDetails = Omit<PokerEvent, "players"> & {
  host: { id: string; name: string } | null;
  players: EventPlayer[];
};

export default function EventDetailPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const eventId = params?.eventId as string;

  const [eventDetails, setEventDetails] = useState<EventDetails | null>(null);
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  const [playerToAdd, setPlayerToAdd] = useState<string>("");
  const [isLoadingEvent, setIsLoadingEvent] = useState(true);
  const [isLoadingPlayers, setIsLoadingPlayers] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [addPlayerError, setAddPlayerError] = useState<string | null>(null);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayerForCashOut, setSelectedPlayerForCashOut] =
    useState<EventPlayer | null>(null);

  const isLoading = status === "loading" || isLoadingEvent || isLoadingPlayers;

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Function to fetch event details (can be called to refresh)
  const fetchEventDetails = async () => {
    setIsLoadingEvent(true);
    setError(null);
    try {
      const response = await fetch(`/api/events/${eventId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch event details");
      }
      setEventDetails(data);
    } catch (err) {
      console.error("Fetch event error:", err);
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      if (
        errorMessage.includes("Event not found") ||
        errorMessage.includes("Forbidden") ||
        errorMessage.includes("Invalid Event ID")
      ) {
        router.push("/events");
      }
    } finally {
      setIsLoadingEvent(false);
    }
  };

  // Fetch event details and all players initially
  useEffect(() => {
    if (status === "authenticated" && eventId) {
      // Fetch Event Details
      fetchEventDetails();

      // Fetch All Players for the Add Player dropdown
      const fetchAllPlayers = async () => {
        setIsLoadingPlayers(true);
        try {
          const response = await fetch("/api/players");
          if (!response.ok) throw new Error("Failed to fetch players list");
          const data = await response.json();
          setAllPlayers(data);
        } catch (err) {
          console.error("Fetch players list error:", err);
          setError(
            err instanceof Error ? err.message : "Could not load players list"
          );
        } finally {
          setIsLoadingPlayers(false);
        }
      };
      fetchAllPlayers();
    }
  }, [status, eventId, router]);

  // Calculate players available to add (not already in event)
  const availablePlayersToAdd = useMemo(() => {
    if (!eventDetails) return [];
    const playersInEventIds = new Set(
      eventDetails.players.map((p) => p.playerId)
    );
    return allPlayers.filter((p) => !playersInEventIds.has(p.id));
  }, [allPlayers, eventDetails]);

  // Set default player to add when available players load
  useEffect(() => {
    if (availablePlayersToAdd.length > 0 && !playerToAdd) {
      setPlayerToAdd(availablePlayersToAdd[0].id);
    }
    // If the previously selected player is no longer available (e.g., was added), reset
    if (
      playerToAdd &&
      !availablePlayersToAdd.some((p) => p.id === playerToAdd)
    ) {
      setPlayerToAdd(availablePlayersToAdd[0]?.id || "");
    }
  }, [availablePlayersToAdd, playerToAdd]);

  // Handle Adding a player to the event
  const handleAddPlayer = async (event: FormEvent) => {
    event.preventDefault();
    setAddPlayerError(null);
    if (!playerToAdd) {
      setAddPlayerError("Please select a player to add.");
      return;
    }

    try {
      const response = await fetch(`/api/events/${eventId}/players`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId: playerToAdd }),
      });

      const newEventPlayer = await response.json();

      if (!response.ok) {
        throw new Error(newEventPlayer.error || "Failed to add player");
      }

      // Update state locally for immediate feedback
      setEventDetails((prevDetails) => {
        if (!prevDetails) return null;
        return {
          ...prevDetails,
          players: [...prevDetails.players, newEventPlayer],
        };
      });
    } catch (err) {
      setAddPlayerError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    }
  };

  // New Handler for Incrementing Buy-In
  const handleIncrementBuyIn = async (playerInEventId: string) => {
    setUpdateError(null);
    try {
      const response = await fetch(
        `/api/events/${eventId}/players/${playerInEventId}`,
        {
          method: "PATCH",
        }
      );

      const updatedPlayer = await response.json();

      if (!response.ok) {
        throw new Error(updatedPlayer.error || "Failed to update buy-in");
      }

      // Update state locally
      setEventDetails((prevDetails) => {
        if (!prevDetails) return null;
        return {
          ...prevDetails,
          players: prevDetails.players.map((p) =>
            p.id === playerInEventId ? updatedPlayer : p
          ),
        };
      });
    } catch (err) {
      console.error("Update buy-in error:", err);
      setUpdateError(
        err instanceof Error
          ? err.message
          : "An unknown error occurred while updating buy-in"
      );
    }
  };

  // Modal open/close handlers
  const openCashOutModal = (player: EventPlayer) => {
    setSelectedPlayerForCashOut(player);
    setIsModalOpen(true);
  };
  const closeCashOutModal = () => {
    setIsModalOpen(false);
    setSelectedPlayerForCashOut(null); // Clear selection on close
  };

  // Handle Cash Out submission from modal
  const handleCashOutSubmit = async (amount: number) => {
    if (!selectedPlayerForCashOut) return;

    setUpdateError(null); // Clear previous errors
    const playerInEventId = selectedPlayerForCashOut.id;

    try {
      const response = await fetch(
        `/api/events/${eventId}/players/${playerInEventId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cashOutAmount: amount }), // Send amount in body
        }
      );

      const updatedPlayer = await response.json();

      if (!response.ok) {
        throw new Error(
          updatedPlayer.error || "Failed to update cash out amount"
        );
      }

      // Update state locally
      setEventDetails((prevDetails) => {
        if (!prevDetails) return null;
        return {
          ...prevDetails,
          players: prevDetails.players.map((p) =>
            p.id === playerInEventId ? updatedPlayer : p
          ),
        };
      });

      closeCashOutModal(); // Close modal on success
    } catch (err) {
      console.error("Update cash out error:", err);
      // Display error within the modal or on the page?
      // For now, setting page-level update error
      setUpdateError(
        err instanceof Error
          ? err.message
          : "An unknown error occurred while updating cash out"
      );
      // Maybe keep modal open on error?
      // closeCashOutModal();
    }
  };

  // New Handler for Completing Event
  const handleCompleteEvent = async () => {
    setUpdateError(null); // Clear previous errors

    // Optional Client-Side Check (Example: ensure players exist)
    if (!eventDetails || eventDetails.players.length === 0) {
      setUpdateError("Cannot complete an event with no players.");
      return;
    }
    // Optional Client-Side Check (Example: ensure all cashed out - less reliable than API check)
    // const allCashedOut = eventDetails.players.every(p => p.cashOutAmount !== null);
    // if (!allCashedOut) {
    //   setUpdateError("All players must cash out before completing.");
    //   return;
    // }

    // Add a confirmation step
    if (
      !window.confirm(
        "Are you sure you want to mark this event as completed? This cannot be undone easily."
      )
    ) {
      return;
    }

    try {
      const response = await fetch(`/api/events/${eventId}/complete`, {
        method: "PATCH",
        // No body needed
      });

      const updatedEvent = await response.json();

      if (!response.ok) {
        throw new Error(updatedEvent.error || "Failed to complete event");
      }

      // Update state with the completed event data
      setEventDetails(updatedEvent);
      // Maybe show a success message?
    } catch (err) {
      console.error("Complete event error:", err);
      setUpdateError(
        err instanceof Error
          ? err.message
          : "An unknown error occurred while completing the event"
      );
    }
  };

  // Check if event is completed for disabling buttons and showing summary
  const isEventCompleted = eventDetails?.status === "COMPLETED";

  // Calculate results for completed events
  const eventResults = useMemo(() => {
    if (!isEventCompleted || !eventDetails?.players) return [];

    return eventDetails.players
      .map((p) => {
        const totalBuyInValue = p.buyIns * 1000;
        const cashOutValue = p.cashOutAmount;
        const netResult =
          cashOutValue !== null ? cashOutValue - totalBuyInValue : null;
        return {
          playerId: p.player?.id,
          playerName: p.player?.name || "Unknown Player",
          buyIns: p.buyIns,
          cashOutAmount: cashOutValue,
          netResult: netResult,
        };
      })
      .sort((a, b) => (b.netResult ?? -Infinity) - (a.netResult ?? -Infinity)); // Sort by net result descending
  }, [isEventCompleted, eventDetails?.players]);

  // Show loading state while session status is loading or data is fetching
  if (status === "loading" || isLoading) {
    return <div className="p-6 text-center">Loading event details...</div>;
  }

  // Handle unauthenticated state (after loading is finished)
  if (status === "unauthenticated") {
    // Should be handled by redirect
    return <div className="p-6 text-center">Redirecting to login...</div>;
  }

  // Handle errors after loading is finished
  if (error && !eventDetails) {
    // Show error only if event details couldn't load
    return (
      <div className="p-6 text-center text-red-600">
        Error loading event: {error}
      </div>
    );
  }

  // Handle case where event details are still null after loading (e.g., unexpected issue)
  if (!eventDetails) {
    return (
      <div className="p-6 text-center">Event not found or unable to load.</div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4 sm:p-6 max-w-4xl">
        <div className="mb-6">
          <Link
            href="/events"
            className="text-blue-600 hover:underline mb-4 block"
          >
            &larr; Back to Events List
          </Link>
          <div className="bg-white p-4 rounded shadow-sm border mb-4">
            <h1 className="text-3xl font-bold mb-2">Event Details</h1>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(eventDetails.date).toLocaleString()}
            </p>
            <p>
              <strong>Host:</strong> {eventDetails.host?.name || "N/A"}
            </p>
            <p>
              <strong>Status:</strong>
              <span
                className={`ml-2 px-2 py-0.5 rounded-full text-sm font-medium ${
                  eventDetails.status === "COMPLETED"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {eventDetails.status}
              </span>
            </p>
            {error && (
              <p className="text-red-500 text-sm mt-2">Error: {error}</p>
            )}
          </div>
        </div>

        <div className="mb-8 p-4 border rounded shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-3">Add Player to Event</h2>
          {isEventCompleted ? (
            <p className="text-gray-500">
              Event is completed. Cannot add players.
            </p>
          ) : isLoadingPlayers ? (
            <p>Loading player list...</p>
          ) : availablePlayersToAdd.length > 0 ? (
            <form
              onSubmit={handleAddPlayer}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <select
                value={playerToAdd}
                onChange={(e) => setPlayerToAdd(e.target.value)}
                className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white"
              >
                {availablePlayersToAdd.map((player) => (
                  <option key={player.id} value={player.id}>
                    {player.name}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors whitespace-nowrap"
              >
                Add Player
              </button>
            </form>
          ) : (
            <p className="text-gray-500">
              All your players are already in this event, or no players found.
            </p>
          )}
          {addPlayerError && (
            <p className="text-red-600 text-sm mt-2">{addPlayerError}</p>
          )}
        </div>

        <div className="bg-white shadow-md rounded">
          <h2 className="text-xl font-semibold p-4 border-b">
            Players in Event
          </h2>
          {updateError && (
            <p className="p-4 text-red-600 text-sm bg-red-50 border-b border-red-200">
              Update Error: {updateError}
            </p>
          )}
          {eventDetails.players.length === 0 ? (
            <p className="p-4 text-gray-500">
              No players added to this event yet.
            </p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {eventDetails.players.map((eventPlayer) => (
                <li
                  key={eventPlayer.id}
                  className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center"
                >
                  <span className="text-lg font-medium text-gray-800 col-span-1">
                    {eventPlayer.player?.name || "Unknown Player"}
                  </span>
                  <div className="col-span-1 text-center sm:text-center">
                    <span>Buy-ins: {eventPlayer.buyIns}</span>
                    <button
                      onClick={() => handleIncrementBuyIn(eventPlayer.id)}
                      className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={eventDetails.status === "COMPLETED"}
                      title={
                        eventDetails.status === "COMPLETED"
                          ? "Event is completed"
                          : "Add Buy-In"
                      }
                    >
                      +1
                    </button>
                  </div>
                  <div className="col-span-1 text-center sm:text-right">
                    <span>Cash Out: {eventPlayer.cashOutAmount ?? "-"}</span>
                    <button
                      onClick={() => openCashOutModal(eventPlayer)}
                      className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded hover:bg-yellow-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={eventDetails.status === "COMPLETED"}
                      title={
                        eventDetails.status === "COMPLETED"
                          ? "Event is completed"
                          : "Set Cash Out"
                      }
                    >
                      Set
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {isLoadingEvent && (
            <p className="p-4 text-gray-500 text-center">
              Loading player data...
            </p>
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleCompleteEvent}
            disabled={isEventCompleted} // Disable if already completed
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title={
              isEventCompleted
                ? "Event already completed"
                : "Mark event as completed"
            }
          >
            {isEventCompleted ? "Event Completed" : "Complete Event"}
          </button>
        </div>

        {/* --- Event Summary Section --- */}
        {isEventCompleted && (
          <div className="mt-8 bg-white shadow-md rounded">
            <h2 className="text-xl font-semibold p-4 border-b">
              Event Summary
            </h2>
            {eventResults.length === 0 ? (
              <p className="p-4 text-gray-500">No player data to summarize.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Player
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Buy-ins
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cash Out
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Net Chips
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {eventResults.map((result) => (
                      <tr key={result.playerId}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {result.playerName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          {result.buyIns} ({result.buyIns * 1000})
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          {result.cashOutAmount ?? "N/A"}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm font-semibold text-right ${
                            result.netResult === null
                              ? "text-gray-500"
                              : result.netResult >= 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {result.netResult === null
                            ? "N/A"
                            : result.netResult >= 0
                            ? `+${result.netResult}`
                            : result.netResult}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
        {/* --- End Event Summary Section --- */}
      </div>

      <CashOutModal
        isOpen={isModalOpen}
        onClose={closeCashOutModal}
        onSubmit={handleCashOutSubmit}
        playerName={selectedPlayerForCashOut?.player?.name || "Player"}
        currentCashOut={selectedPlayerForCashOut?.cashOutAmount}
      />
    </>
  );
}
