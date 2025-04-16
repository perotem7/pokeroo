"use client";

import React, { useState, useEffect } from "react";
import type { EventSummaryData } from "@/app/api/analytics/event-summary/route"; // Import the interface

// Define the structure for player performance data matching the API
interface PlayerPerformance {
  playerId: string;
  playerName: string;
  totalBuyInsCount: number;
  totalBuyInValue: number;
  totalCashOutAmount: number;
  totalCashOutChips: number;
  netProfitLoss: number;
  eventsPlayed: number;
}

export default function AnalyticsPage() {
  // --- State for Player Performance ---
  const [performanceData, setPerformanceData] = useState<PlayerPerformance[]>(
    []
  );
  const [loadingPerformance, setLoadingPerformance] = useState(true);
  const [errorPerformance, setErrorPerformance] = useState<string | null>(null);

  // --- State for Event Summary ---
  const [eventSummaryData, setEventSummaryData] = useState<EventSummaryData[]>(
    []
  );
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [errorEvents, setErrorEvents] = useState<string | null>(null);

  // Fetch Player Performance Data
  useEffect(() => {
    async function fetchPerformanceData() {
      setLoadingPerformance(true);
      setErrorPerformance(null);
      try {
        const response = await fetch("/api/analytics/player-performance");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: PlayerPerformance[] = await response.json();
        setPerformanceData(data);
      } catch (e) {
        console.error("Failed to fetch player performance data:", e);
        setErrorPerformance(
          e instanceof Error ? e.message : "An unknown error occurred"
        );
      } finally {
        setLoadingPerformance(false);
      }
    }

    fetchPerformanceData();
  }, []);

  // Fetch Event Summary Data
  useEffect(() => {
    async function fetchEventData() {
      setLoadingEvents(true);
      setErrorEvents(null);
      try {
        const response = await fetch("/api/analytics/event-summary");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: EventSummaryData[] = await response.json();
        setEventSummaryData(data);
      } catch (e) {
        console.error("Failed to fetch event summary data:", e);
        setErrorEvents(
          e instanceof Error ? e.message : "An unknown error occurred"
        );
      } finally {
        setLoadingEvents(false);
      }
    }

    fetchEventData();
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* --- Player Performance Section --- */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Player Performance</h1>
        {loadingPerformance && <p>Loading player performance...</p>}
        {errorPerformance && (
          <p className="text-red-500">Error loading data: {errorPerformance}</p>
        )}
        {!loadingPerformance && !errorPerformance && (
          <div className="overflow-x-auto">
            {performanceData.length > 0 ? (
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-3 px-4 text-left">Rank</th>
                    <th className="py-3 px-4 text-left">Player Name</th>
                    <th className="py-3 px-4 text-right">Events Played</th>
                    <th className="py-3 px-4 text-right">
                      Total Buy-Ins (Count)
                    </th>
                    <th className="py-3 px-4 text-right">
                      Total Cash Out (Chips)
                    </th>
                    <th className="py-3 px-4 text-right">
                      Net Profit/Loss (NIS)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((player, index) => (
                    <tr
                      key={player.playerId}
                      className={`border-b ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100`}
                    >
                      <td className="py-3 px-4 text-center">{index + 1}</td>
                      <td className="py-3 px-4 text-center font-medium">
                        {player.playerName}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {player.eventsPlayed}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {player.totalBuyInsCount}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {player.totalCashOutChips.toLocaleString()}
                      </td>
                      <td
                        className={`py-3 px-4 text-center font-semibold ${
                          player.netProfitLoss >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {player.netProfitLoss.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No player performance data available yet.</p>
            )}
          </div>
        )}
      </section>

      {/* --- Event Summary Section --- */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Event Summaries</h2>
        {loadingEvents && <p>Loading event summaries...</p>}
        {errorEvents && (
          <p className="text-red-500">Error loading data: {errorEvents}</p>
        )}
        {!loadingEvents && !errorEvents && (
          <div className="overflow-x-auto">
            {eventSummaryData.length > 0 ? (
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Host</th>
                    <th className="py-3 px-4 text-right">Players</th>
                    <th className="py-3 px-4 text-right">Total Pot (NIS)</th>
                    <th className="py-3 px-4 text-right">Avg P/L (NIS)</th>
                    <th className="py-3 px-4 text-left">Biggest Winner</th>
                    <th className="py-3 px-4 text-left">Biggest Loser</th>
                  </tr>
                </thead>
                <tbody>
                  {eventSummaryData.map((event, index) => (
                    <tr
                      key={event.eventId}
                      className={`border-b ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100`}
                    >
                      <td className="py-3 px-4 text-center">
                        {new Date(event.eventDate).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-center font-medium">
                        {event.hostName}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {event.numberOfPlayers}
                      </td>
                      <td className="py-3 px-4 text-center">
                        NIS {event.totalPotValue.toLocaleString()}
                      </td>
                      <td
                        className={`py-3 px-4 text-center ${
                          event.averageProfitLoss === 0
                            ? ""
                            : event.averageProfitLoss > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        NIS {event.averageProfitLoss.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-center text-green-600">
                        {event.biggestWinner
                          ? `${
                              event.biggestWinner.name
                            } (+NIS ${event.biggestWinner.amount.toLocaleString()})`
                          : "-"}
                      </td>
                      <td className="py-3 px-4 text-center text-red-600">
                        {event.biggestLoser
                          ? `${
                              event.biggestLoser.name
                            } (NIS ${event.biggestLoser.amount.toLocaleString()})`
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No completed event data available yet.</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
