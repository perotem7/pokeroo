"use client";

import React, { useState, useEffect, FormEvent } from "react";

interface CashOutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (amount: number) => void;
  playerName: string;
  currentCashOut: number | null | undefined; // Current value (null or undefined if not set)
}

export default function CashOutModal({
  isOpen,
  onClose,
  onSubmit,
  playerName,
  currentCashOut,
}: CashOutModalProps) {
  const [amount, setAmount] = useState<string>(
    currentCashOut?.toString() ?? "0"
  );
  const [error, setError] = useState<string | null>(null);

  // Update local state if the prop changes (e.g., opening modal for different player)
  useEffect(() => {
    setAmount(currentCashOut?.toString() ?? "0");
    setError(null); // Clear error when modal opens/changes target
  }, [currentCashOut, isOpen]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    const numericAmount = parseInt(amount, 10);

    if (isNaN(numericAmount) || numericAmount < 0) {
      setError("Please enter a valid non-negative number.");
      return;
    }
    onSubmit(numericAmount);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm mx-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">
            Set Cash Out for {playerName}
          </h2>

          <div className="mb-4">
            <label
              htmlFor="cashout-amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Chip Amount
            </label>
            <input
              id="cashout-amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
              placeholder="Enter chip amount"
              min="0"
              step="any" // Allow decimals if needed, otherwise step="1"
              required
              autoFocus
            />
          </div>

          {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Confirm Cash Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
