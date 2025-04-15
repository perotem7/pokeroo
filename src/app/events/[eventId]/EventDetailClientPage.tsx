"use client";

import { useState, useEffect, FormEvent, useMemo, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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

export default function EventDetailClientPage({
  eventId,
}: {
  eventId: string;
}) {
  const { status } = useSession();
  const router = useRouter();

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
  // Wrap in useCallback to stabilize its reference
  const fetchEventDetails = useCallback(async () => {
    // Check if eventId is available before fetching
    if (!eventId) {
      console.warn("fetchEventDetails called without eventId");
      setError("Event ID is missing."); // Set error or handle appropriately
      setIsLoadingEvent(false);
      return;
    }
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
  }, [eventId, router]);

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
  }, [status, eventId, router, fetchEventDetails]);

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

      setIsModalOpen(false); // Close modal on success
      setSelectedPlayerForCashOut(null); // Reset selected player
    } catch (err) {
      console.error("Cash out error:", err);
      setUpdateError(
        err instanceof Error
          ? err.message
          : "An unknown error occurred during cash out"
      );
    }
  };

  // Handler for Completing the Event
  const handleCompleteEvent = async () => {
    setUpdateError(null);
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "COMPLETED" }),
      });

      const updatedEvent = await response.json();

      if (!response.ok) {
        throw new Error(updatedEvent.error || "Failed to complete event");
      }

      // Update state locally
      setEventDetails((prevDetails) => {
        if (!prevDetails) return null;
        return {
          ...prevDetails,
          status: "COMPLETED",
        };
      });
    } catch (err) {
      console.error("Complete event error:", err);
      setUpdateError(
        err instanceof Error
          ? err.message
          : "An unknown error occurred while completing the event"
      );
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error && !eventDetails) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="bg-red-100 p-4 rounded text-red-700 mb-4">
          <p>{error}</p>
        </div>
        <Link href="/events" className="text-blue-600 hover:underline">
          Back to Events List
        </Link>
      </div>
    );
  }

  if (!eventDetails) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="bg-yellow-100 p-4 rounded text-yellow-700 mb-4">
          <p>Event details not available.</p>
        </div>
        <Link href="/events" className="text-blue-600 hover:underline">
          Back to Events List
        </Link>
      </div>
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

        {/* Player Section */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h2 className="text-2xl font-bold mb-2 md:mb-0">Players</h2>
            {/* Add Player Form - only show if event is not completed */}
            {eventDetails.status !== "COMPLETED" && (
              <form
                onSubmit={handleAddPlayer}
                className="w-full md:w-auto flex flex-col md:flex-row gap-2"
              >
                <select
                  value={playerToAdd}
                  onChange={(e) => setPlayerToAdd(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                  disabled={availablePlayersToAdd.length === 0}
                >
                  {availablePlayersToAdd.length === 0 ? (
                    <option value="">No players available</option>
                  ) : (
                    availablePlayersToAdd.map((player) => (
                      <option key={player.id} value={player.id}>
                        {player.name}
                      </option>
                    ))
                  )}
                </select>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
                  disabled={availablePlayersToAdd.length === 0}
                >
                  Add Player
                </button>
              </form>
            )}
          </div>

          {addPlayerError && (
            <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
              {addPlayerError}
            </div>
          )}

          {updateError && (
            <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
              {updateError}
            </div>
          )}

          {/* Players Table */}
          <div className="bg-white rounded shadow-sm border overflow-x-auto">
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
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Buy-Ins
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Cash Out
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Profit/Loss
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {eventDetails.players.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500"
                    >
                      No players in this event yet
                    </td>
                  </tr>
                ) : (
                  eventDetails.players.map((player) => {
                    // Calculate profit/loss: cashOutAmount - (buyIns * 1000 chips)
                    const buyInTotalChips = player.buyIns * 1000; // 1000 chips per buy-in
                    const profitLoss =
                      (player.cashOutAmount ?? 0) - buyInTotalChips; // Assuming cashOutAmount is also in chips
                    const profitLossClass =
                      profitLoss > 0
                        ? "text-green-600"
                        : profitLoss < 0
                        ? "text-red-600"
                        : "";

                    return (
                      <tr key={player.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {player.player?.name || "Unknown Player"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {player.buyIns} ({buyInTotalChips} chips)
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {player.cashOutAmount} chips{" "}
                            {/* Assuming cashOut is chips */}
                          </div>
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm ${profitLossClass}`}
                        >
                          {profitLoss > 0 ? "+" : ""}
                          {profitLoss} chips{" "}
                          {/* Assuming profit/loss is chips */}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                          {eventDetails.status !== "COMPLETED" && (
                            <div className="flex justify-center gap-2">
                              <button
                                onClick={() => handleIncrementBuyIn(player.id)}
                                className="bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200 transition"
                                title="Add Buy-In"
                              >
                                +1000 Chips
                              </button>
                              <button
                                onClick={() => openCashOutModal(player)}
                                className="bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200 transition"
                                title="Set Cash Out Amount"
                              >
                                Cash Out
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Event Summary */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Event Summary</h2>
          <div className="bg-white p-4 rounded shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-3 rounded">
                <div className="text-sm text-blue-700 mb-1">Total Buy-Ins</div>
                <div className="text-2xl font-bold">
                  {eventDetails.players.reduce(
                    (sum, p) => sum + p.buyIns * 1000, // Use 1000 multiplier
                    0
                  )}{" "}
                  chips
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <div className="text-sm text-green-700 mb-1">
                  Total Cash Out
                </div>
                <div className="text-2xl font-bold">
                  {eventDetails.players.reduce(
                    (sum, p) => sum + (p.cashOutAmount ?? 0),
                    0
                  )}{" "}
                  chips {/* Assuming cashOut is chips */}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm text-gray-700 mb-1">Balance</div>
                <div className="text-2xl font-bold">
                  {eventDetails.players.reduce(
                    // Calculate balance in chips
                    (sum, p) => sum + (p.cashOutAmount ?? 0),
                    0
                  ) -
                    eventDetails.players.reduce(
                      (sum, p) => sum + p.buyIns * 1000, // Use 1000 multiplier for buy-ins
                      0
                    )}{" "}
                  chips
                </div>
              </div>
            </div>

            {/* Complete Event Button - only show if event is not completed */}
            {eventDetails.status !== "COMPLETED" && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleCompleteEvent}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Complete Event
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  Completing the event will lock all player data and prevent
                  further changes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cash Out Modal */}
      {isModalOpen && selectedPlayerForCashOut && (
        <CashOutModal
          isOpen={isModalOpen}
          playerName={selectedPlayerForCashOut.player?.name || "Unknown Player"}
          currentCashOut={selectedPlayerForCashOut.cashOutAmount}
          onClose={closeCashOutModal}
          onSubmit={handleCashOutSubmit}
        />
      )}
    </>
  );
}
