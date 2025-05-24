import { useState, useEffect } from "react";

export interface TenantSettings {
  chipsPerBuyIn: number;
  nisPerBuyIn: number;
}

export const DEFAULT_SETTINGS: TenantSettings = {
  chipsPerBuyIn: 1000,
  nisPerBuyIn: 50,
};

export function useSettings() {
  const [settings, setSettings] = useState<TenantSettings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/settings");
      if (response.ok) {
        const data = await response.json();
        if (data.settings) {
          setSettings({
            chipsPerBuyIn:
              data.settings.chipsPerBuyIn || DEFAULT_SETTINGS.chipsPerBuyIn,
            nisPerBuyIn:
              data.settings.nisPerBuyIn || DEFAULT_SETTINGS.nisPerBuyIn,
          });
        }
      } else {
        console.warn("Failed to fetch settings, using defaults");
      }
    } catch (err) {
      console.error("Failed to fetch settings:", err);
      setError("Failed to load settings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const calculateChipValue = () => {
    return settings.nisPerBuyIn / settings.chipsPerBuyIn;
  };

  const convertChipsToNIS = (chips: number) => {
    return chips * calculateChipValue();
  };

  const convertNISToChips = (nis: number) => {
    return nis / calculateChipValue();
  };

  const refetch = () => {
    setLoading(true);
    setError(null);
    fetchSettings();
  };

  return {
    settings,
    loading,
    error,
    calculateChipValue,
    convertChipsToNIS,
    convertNISToChips,
    refetch,
  };
}
