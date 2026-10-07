"use client";

import React from "react";

// 🟢 اتصال ورودی تابع به پروپس‌های داینامیک و متمرکز صفحه اصلی شما
export default function TradingSettings({ fields, setFields }: { fields: any; setFields: any }) {
  
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
            value={fields?.symbol || ""}
            onChange={(e) => setFields((prev: any) => ({ ...prev, symbol: e.target.value }))}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"  
          >
            <option value="XAUUSD">XAUUSD</option>
          </select>
        </div>

        {/* Structure Timeframe - محدود شده فقط به M1 و M5 */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Structure Timeframe
          </label>
          <select
            value={fields?.structure_timeframe || ""}
            onChange={(e) => setFields((prev: any) => ({ ...prev, structure_timeframe: e.target.value }))}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500" 
          >
            <option value="M1">M1</option>
            <option value="M5">M5</option>
          </select>
        </div>

        {/* Entry Timeframe - محدود شده فقط به M1 و M5 */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Entry Timeframe
          </label>
          <select
            value={fields?.entry_timeframe || ""}
            onChange={(e) => setFields((prev: any) => ({ ...prev, entry_timeframe: e.target.value }))}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500" 
          >
            <option value="M1">M1</option>
            <option value="M5">M5</option>
          </select>
        </div>

        {/* Risk Reward - فقط متغیر داینامیک بک‌اَند را رندر می‌کند */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Minimum Risk / Reward
          </label>
          <input
            type="text"
            value={fields?.min_rr || ""}
            onChange={(e) => setFields((prev: any) => ({ ...prev, min_rr: e.target.value }))}
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"
            placeholder="e.g. 1:2" 
          />
        </div>

        {/* Max Risk - فقط متغیر داینامیک بک‌اَند را رندر می‌کند */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Max Risk Per Trade
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              value={fields?.max_risk_pct || ""}
              onChange={(e) => setFields((prev: any) => ({ ...prev, max_risk_pct: e.target.value }))}
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
