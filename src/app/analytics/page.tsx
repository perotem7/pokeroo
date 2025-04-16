"use client";

import React, { useState, useEffect } from "react";

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
  const [performanceData, setPerformanceData] = useState<PlayerPerformance[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/analytics/player-performance");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: PlayerPerformance[] = await response.json();
        setPerformanceData(data);
      } catch (e) {
        console.error("Failed to fetch analytics data:", e);
        setError(e instanceof Error ? e.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Player Performance Analytics</h1>

      {loading && <p>Loading player performance...</p>}
      {error && <p className="text-red-500">Error loading data: {error}</p>}
      {!loading && !error && (
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
                    <td className="py-3 px-4 text-left">{index + 1}</td>
                    <td className="py-3 px-4 text-left font-medium">
                      {player.playerName}
                    </td>
                    <td className="py-3 px-4 text-right">
                      {player.eventsPlayed}
                    </td>
                    <td className="py-3 px-4 text-right">
                      {player.totalBuyInsCount}
                    </td>
                    <td className="py-3 px-4 text-right">
                      {player.totalCashOutChips.toLocaleString()}
                    </td>
                    <td
                      className={`py-3 px-4 text-right font-semibold ${
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
    </div>
  );
}
