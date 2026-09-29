"use client";

import {useState} from "react";

export default function RiskSettings() {
  const [riskPerTrade, setRiskPerTrade] = useState("2");
  const [lotSize, setLotSize] = useState("0.10");
  const [dailyDrawdown, setDailyDrawdown] = useState("5");
  const [maxOpenTrades, setMaxOpenTrades] = useState("3");

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-lg font-semibold text-gray-900">Risk Management</h2>

        <p className="mt-1 text-sm text-gray-500">
          Configure position sizing and risk limits for the trading robot.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {/* Risk Per Trade */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Risk Per Trade
          </label>

          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={riskPerTrade}
              onChange={(e) => setRiskPerTrade(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 pr-10 text-sm text-gray-700 outline-none transition focus:border-blue-500"
            />

            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              %
            </span>
          </div>
        </div>

        {/* Lot Size */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Lot Size
          </label>

          <input
            type="number"
            min="0.01"
            step="0.01"
            value={lotSize}
            onChange={(e) => setLotSize(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Daily Drawdown */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Daily Drawdown Limit
          </label>

          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={dailyDrawdown}
              onChange={(e) => setDailyDrawdown(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 pr-10 text-sm text-gray-700 outline-none transition focus:border-blue-500"
            />

            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              %
            </span>
          </div>
        </div>

        {/* Max Open Trades */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Max Open Trades
          </label>

          <input
            type="number"
            min="1"
            max="50"
            value={maxOpenTrades}
            onChange={(e) => setMaxOpenTrades(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
        <p className="text-sm font-semibold text-gray-900">Risk Protection</p>

        <p className="mt-1 text-sm text-gray-500">
          The robot will use these limits when calculating trade size and
          managing daily exposure.
        </p>
      </div>
    </section>
  );
}
