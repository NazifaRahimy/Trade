"use client";

import {useState} from "react";

export default function SignalFilters() {
  const [symbol, setSymbol] = useState("All");
  const [direction, setDirection] = useState("All");
  const [timeframe, setTimeframe] = useState("All");

  return (
    <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-gray-900">
          Signal Filters
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Filter pending signals by market and strategy direction.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Symbol
          </label>

          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option>All</option>
            <option>XAUUSD</option>
            <option>EURUSD</option>
            <option>GBPUSD</option>
            <option>USDJPY</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Direction
          </label>

          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option>All</option>
            <option>BUY</option>
            <option>SELL</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Timeframe
          </label>

          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option>All</option>
            <option>M1</option>
            <option>M5</option>
            <option>M15</option>
            <option>H1</option>
          </select>
        </div>
      </div>
    </div>
  );
}
