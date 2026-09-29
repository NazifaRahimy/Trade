"use client";

import {useState} from "react";

import SignalsHeader from "@/src/components/discount-premium/Signals/SignalsHeader";
import SignalRadar from "@/src/components/discount-premium/Signals/SignalRadar";
import SignalFilters from "@/src/components/discount-premium/Signals/SignalFilters";
import SignalCard from "@/src/components/discount-premium/Signals/SignalCard";
import SignalDetails from "@/src/components/discount-premium/Signals/SignalDetails";

const signals = [
  {
    id: "SIG-001",
    symbol: "XAUUSD",
    direction: "BUY" as const,
    timeframe: "M5",
    entry: "4325.10",
    stopLoss: "4315.00",
    takeProfit1: "4335.00",
    takeProfit2: "4345.00",
    confidence: 87,
    setup: "Discount Reversal",
    zone: "Discount",
    detected: "10:42",
    status: "Pending" as const,
  },
  {
    id: "SIG-002",
    symbol: "XAUUSD",
    direction: "BUY" as const,
    timeframe: "M1",
    entry: "4322.80",
    stopLoss: "4316.20",
    takeProfit1: "4330.00",
    takeProfit2: "4338.00",
    confidence: 82,
    setup: "Bullish FVG",
    zone: "Discount",
    detected: "10:38",
    status: "Pending" as const,
  },
  {
    id: "SIG-003",
    symbol: "EURUSD",
    direction: "BUY" as const,
    timeframe: "M5",
    entry: "1.17420",
    stopLoss: "1.17280",
    takeProfit1: "1.17650",
    takeProfit2: "1.17800",
    confidence: 79,
    setup: "BOS + FVG",
    zone: "Discount",
    detected: "10:31",
    status: "Pending" as const,
  },
  {
    id: "SIG-004",
    symbol: "GBPUSD",
    direction: "SELL" as const,
    timeframe: "M15",
    entry: "1.34210",
    stopLoss: "1.34420",
    takeProfit1: "1.33850",
    takeProfit2: "1.33600",
    confidence: 74,
    setup: "Premium Reversal",
    zone: "Premium",
    detected: "10:24",
    status: "Pending" as const,
  },
];

export default function SignalsPage() {
  const [selectedSignal, setSelectedSignal] = useState(signals[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SignalsHeader />

      <SignalRadar />

      <SignalFilters />

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Pending Signals</h2>

        <p className="mt-1 text-sm text-gray-500">
          Signals currently waiting for execution confirmation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
        {/* Signal List */}
        <div className="space-y-4 xl:col-span-3">
          {signals.map((signal) => (
            <SignalCard
              key={signal.id}
              signal={signal}
              selected={selectedSignal.id === signal.id}
              onSelect={() => setSelectedSignal(signal)}
            />
          ))}
        </div>

        {/* Signal Details */}
        <div className="xl:col-span-2">
          <div className="xl:sticky xl:top-6">
            <SignalDetails signal={selectedSignal} />
          </div>
        </div>
      </div>
    </div>
  );
}
