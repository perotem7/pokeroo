"use client";

import React, { useState, useEffect } from "react";
import type { EventSummaryData } from "@/app/api/analytics/event-summary/route"; // Import the interface
import type { OverallTrendPoint } from "@/app/api/analytics/overall-trends/route"; // Import type
import type { PlayerTrendsData } from "@/app/api/analytics/player-trends/route"; // Import type
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart, // Using Area chart for Buyin/Cashout
  Area,
} from "recharts";

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

// Helper to format date ticks
const formatDateTick = (tickItem: string) => {
  return new Date(tickItem).toLocaleDateString();
};

// Helper to format currency ticks/tooltips
const formatCurrency = (value: number) => `NIS ${value.toLocaleString()}`;

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

  // --- State for Overall Trends ---
  const [overallTrendsData, setOverallTrendsData] = useState<
    OverallTrendPoint[]
  >([]);
  const [loadingOverallTrends, setLoadingOverallTrends] = useState(true);
  const [errorOverallTrends, setErrorOverallTrends] = useState<string | null>(
    null
  );

  // --- State for Player Trends ---
  const [playerTrendsData, setPlayerTrendsData] = useState<PlayerTrendsData>(
    {}
  );
  const [loadingPlayerTrends, setLoadingPlayerTrends] = useState(true);
  const [errorPlayerTrends, setErrorPlayerTrends] = useState<string | null>(
    null
  );

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

  // Fetch Overall Trends
  useEffect(() => {
    async function fetchOverallTrends() {
      setLoadingOverallTrends(true);
      setErrorOverallTrends(null);
      try {
        const response = await fetch("/api/analytics/overall-trends");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: OverallTrendPoint[] = await response.json();
        setOverallTrendsData(data);
      } catch (e: any) {
        console.error("Failed overall trends fetch:", e);
        setErrorOverallTrends(e.message || "Error");
      } finally {
        setLoadingOverallTrends(false);
      }
    }
    fetchOverallTrends();
  }, []);

  // Fetch Player Trends
  useEffect(() => {
    async function fetchPlayerTrends() {
      setLoadingPlayerTrends(true);
      setErrorPlayerTrends(null);
      try {
        const response = await fetch("/api/analytics/player-trends");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: PlayerTrendsData = await response.json();
        setPlayerTrendsData(data);
      } catch (e: any) {
        console.error("Failed player trends fetch:", e);
        setErrorPlayerTrends(e.message || "Error");
      } finally {
        setLoadingPlayerTrends(false);
      }
    }
    fetchPlayerTrends();
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-12">
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
                        {formatCurrency(player.netProfitLoss)}
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
                        {formatCurrency(event.totalPotValue)}
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
                        {formatCurrency(event.averageProfitLoss)}
                      </td>
                      <td className="py-3 px-4 text-center text-green-600">
                        {event.biggestWinner
                          ? `${event.biggestWinner.name} (+${formatCurrency(
                              event.biggestWinner.amount
                            )})`
                          : "-"}
                      </td>
                      <td className="py-3 px-4 text-center text-red-600">
                        {event.biggestLoser
                          ? `${event.biggestLoser.name} (${formatCurrency(
                              event.biggestLoser.amount
                            )})`
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

      {/* --- Overall Trends Section --- */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Overall Trends</h2>
        {loadingOverallTrends && <p>Loading trends...</p>}
        {errorOverallTrends && (
          <p className="text-red-500">
            Error loading trends: {errorOverallTrends}
          </p>
        )}
        {!loadingOverallTrends &&
          !errorOverallTrends &&
          overallTrendsData.length > 0 && (
            <div
              style={{ width: "100%", height: 300 }}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <ResponsiveContainer>
                <AreaChart
                  data={overallTrendsData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickFormatter={formatDateTick} />
                  <YAxis tickFormatter={formatCurrency} />
                  <Tooltip
                    formatter={formatCurrency}
                    labelFormatter={formatDateTick}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="cumulativeBuyInsNIS"
                    stackId="1"
                    stroke="#dc2626"
                    fill="#fecaca"
                    name="Cumulative Buy-Ins"
                  />
                  <Area
                    type="monotone"
                    dataKey="cumulativeCashOutsNIS"
                    stackId="1"
                    stroke="#16a34a"
                    fill="#dcfce7"
                    name="Cumulative Cash Outs"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        {!loadingOverallTrends &&
          !errorOverallTrends &&
          overallTrendsData.length === 0 && (
            <p>No overall trend data available yet.</p>
          )}
      </section>

      {/* --- Individual Player Trends Section --- */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Individual Player Trends (Cumulative P/L)
        </h2>
        {loadingPlayerTrends && <p>Loading player trends...</p>}
        {errorPlayerTrends && (
          <p className="text-red-500">
            Error loading player trends: {errorPlayerTrends}
          </p>
        )}
        {!loadingPlayerTrends &&
          !errorPlayerTrends &&
          Object.keys(playerTrendsData).length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(playerTrendsData).map(([playerId, data]) => (
                <div
                  key={playerId}
                  className="bg-white shadow-md rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    {data.playerName}
                  </h3>
                  <div style={{ width: "100%", height: 250 }}>
                    <ResponsiveContainer>
                      <LineChart
                        data={data.trend}
                        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={formatDateTick} />
                        <YAxis tickFormatter={formatCurrency} />
                        <Tooltip
                          formatter={(value: number) => [
                            formatCurrency(value),
                            "Cumulative P/L",
                          ]}
                          labelFormatter={formatDateTick}
                        />
                        <Line
                          type="monotone"
                          dataKey="cumulativeProfitLossNIS"
                          stroke="#8884d8"
                          strokeWidth={2}
                          dot={false}
                          name="Cumulative P/L"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              ))}
            </div>
          )}
        {!loadingPlayerTrends &&
          !errorPlayerTrends &&
          Object.keys(playerTrendsData).length === 0 && (
            <p>No individual player trend data available yet.</p>
          )}
      </section>
    </div>
  );
}
