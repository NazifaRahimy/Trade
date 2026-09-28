"use client";

import {useState} from "react";

export default function TradingSettings() {
  const [symbol, setSymbol] = useState("XAUUSD");
  const [structureTimeframe, setStructureTimeframe] = useState("M5");
  const [entryTimeframe, setEntryTimeframe] = useState("M1");
  const [riskReward, setRiskReward] = useState("1:2");
  const [maxRisk, setMaxRisk] = useState("2");

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Trading Settings
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Configure the main trading parameters.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
        {/* Symbol */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Default Symbol
          </label>

          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option>XAUUSD</option>
            <option>BTCUSD</option>
            <option>EURUSD</option>
          </select>
        </div>

        {/* Structure */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Structure Timeframe
          </label>

          <select
            value={structureTimeframe}
            onChange={(e) => setStructureTimeframe(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option>M1</option>
            <option>M5</option>
            <option>M15</option>
            <option>H1</option>
            <option>H4</option>
          </select>
        </div>

        {/* Entry */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Entry Timeframe
          </label>

          <select
            value={entryTimeframe}
            onChange={(e) => setEntryTimeframe(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option>M1</option>
            <option>M5</option>
            <option>M15</option>
            <option>H1</option>
          </select>
        </div>

        {/* Risk Reward */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Minimum Risk / Reward
          </label>

          <input
            type="text"
            value={riskReward}
            onChange={(e) => setRiskReward(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"
            placeholder="1:2"
          />
        </div>

        {/* Max Risk */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Max Risk Per Trade
          </label>

          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              value={maxRisk}
              onChange={(e) => setMaxRisk(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 pr-10 text-sm text-gray-700 outline-none focus:border-blue-500"
            />

            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              %
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
