"use client";

import React from "react";

// 🟢 ۱. تعریف سپر تایپ‌اسکریپت برای دریافت ورودی‌ها از صفحه پدر
interface SignalFiltersProps {
  symbol: string;
  setSymbol: (value: string) => void;
  direction: string;
  setDirection: (value: string) => void;
  timeframe: string;
  setTimeframe: (value: string) => void;
}

// 🟢 ۲. جایگزین کردن ورودی تابع با پروپس‌های داینامیک صفحه اصلی
export default function SignalFilters({
  symbol,
  setSymbol,
  direction,
  setDirection,
  timeframe,
  setTimeframe,
}: SignalFiltersProps) {
  
  // 💥 حذف useState‌های محلی قدیمی از این بخش برای اتصال مستقیم به بک‌اَند

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
        {/* فیلد جفت ارزها */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Symbol
          </label>
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option value="All">All</option>
            <option value="XAUUSD">XAUUSD</option>
            <option value="EURUSD">EURUSD</option>
            <option value="GBPUSD">GBPUSD</option>
            <option value="USDJPY">USDJPY</option>
          </select>
        </div>

        {/* فیلد جهت معامله */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Direction
          </label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option value="All">All</option>
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
        </div>

        {/* فیلد تایم فریم */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Timeframe
          </label>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option value="All">All</option>
            <option value="M1">M1</option>
            <option value="M5">M5</option>
            <option value="M15">M15</option>
            <option value="H1">H1</option>
          </select>
        </div>
      </div>
    </div>
  );
}
