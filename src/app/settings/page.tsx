"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

interface TenantSettings {
  chipsPerBuyIn: number;
  nisPerBuyIn: number;
}

export default function SettingsPage() {
  const { status } = useSession();
  const [settings, setSettings] = useState<TenantSettings>({
    chipsPerBuyIn: 1000,
    nisPerBuyIn: 50,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Fetch current settings
  useEffect(() => {
    async function fetchSettings() {
      try {
        const response = await fetch("/api/settings");
        if (response.ok) {
          const data = await response.json();
          if (data.settings) {
            setSettings({
              chipsPerBuyIn: data.settings.chipsPerBuyIn || 1000,
              nisPerBuyIn: data.settings.nisPerBuyIn || 50,
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch settings:", err);
        setError("Failed to load settings");
      } finally {
        setLoading(false);
      }
    }

    if (status === "authenticated") {
      fetchSettings();
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        setSuccess("Settings saved successfully!");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to save settings");
      }
    } catch (err) {
      console.error("Failed to save settings:", err);
      setError("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field: keyof TenantSettings, value: string) => {
    const numValue = parseInt(value) || 0;
    setSettings((prev) => ({
      ...prev,
      [field]: numValue,
    }));
  };

  if (status === "loading" || loading) {
    return (
      <div className="container mx-auto p-4 sm:p-6 max-w-2xl">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="container mx-auto p-4 sm:p-6 max-w-2xl">
        <div className="text-center">Please log in to access settings.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tenant Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Buy-In Configuration</h2>
        <p className="text-gray-600 mb-6">
          Configure the default amounts for poker game buy-ins. These values
          will be used throughout the application for calculations and
          analytics.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="chipsPerBuyIn"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Chips per Buy-In
            </label>
            <input
              type="number"
              id="chipsPerBuyIn"
              min="1"
              value={settings.chipsPerBuyIn}
              onChange={(e) =>
                handleInputChange("chipsPerBuyIn", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="1000"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Number of chips a player receives for each buy-in
            </p>
          </div>

          <div>
            <label
              htmlFor="nisPerBuyIn"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              NIS per Buy-In
            </label>
            <input
              type="number"
              id="nisPerBuyIn"
              min="1"
              value={settings.nisPerBuyIn}
              onChange={(e) => handleInputChange("nisPerBuyIn", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="50"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Cost in NIS (Israeli Shekels) for each buy-in
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-gray-900 mb-2">
              Current Configuration
            </h3>
            <p className="text-sm text-gray-600">
              Each buy-in costs <strong>{settings.nisPerBuyIn} NIS</strong> and
              gives the player <strong>{settings.chipsPerBuyIn} chips</strong>.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Chip value: 1 chip ={" "}
              {(settings.nisPerBuyIn / settings.chipsPerBuyIn).toFixed(3)} NIS
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <p className="text-green-600 text-sm">{success}</p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? "Saving..." : "Save Settings"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
