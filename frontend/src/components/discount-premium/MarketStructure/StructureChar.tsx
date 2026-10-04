"use client";

import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function StructureChart({ data }: { data: any }) {
  // 🟢 استخراج مستقیم و داینامیک کندل‌ها و نقاط ساختار از بک‌اَند
  const swings = data?.fractal_swings || [];
  const structure = data?.structure || {};

  // نگاشت (Map) دیتای بک‌اَند به فرمت استاندارد چارت Recharts
  const formattedChartData = swings.map((s: any) => ({
    time: new Date(s.candle_timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    price: parseFloat(s.price),
    label: s.structure_type || s.swing_type
  })).reverse(); // معکوس کردن برای نمایش از چپ به راست (قدیم به جدید)

  // محاسبه خودکار محدوده (Domain) عمودی چارت بر اساس سقف و کف واقعی قیمت طلا
  const prices = formattedChartData.map((d: any) => d.price);
  const minPrice = prices.length > 0 ? Math.min(...prices) - 2 : 2600;
  const maxPrice = prices.length > 0 ? Math.max(...prices) + 2 : 2750;

  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Structure Chart</h2>
          <p className="mt-1 text-sm text-gray-500">XAUUSD · M5 market structure</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-lg bg-green-50 px-3 py-1.5 text-green-600">HH / LH</span>
          <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-blue-600">HL / LL</span>
          <span className="rounded-lg bg-purple-50 px-3 py-1.5 text-purple-600">BOS / CHOCH</span>
        </div>
      </div>

      <div className="h-[380px] w-full p-4 sm:p-6">
        <ResponsiveContainer width="100%" height="100%">
          {formattedChartData.length > 0 ? (
            <LineChart
              data={formattedChartData}
              margin={{ top: 20, right: 0, left: 5, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#6b7280" }}
              />
              <YAxis
                domain={[minPrice, maxPrice]}
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#6b7280" }}
                width={50}
              />
              <Tooltip
                formatter={(value) => [`$${Number(value ?? 0).toFixed(2)}`, "Price"]}
                labelFormatter={(label) => `Time: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 4, fill: "#2563eb", stroke: "#ffffff", strokeWidth: 2 }}
                activeDot={{ r: 6 }}
                isAnimationActive={false}
              />
            </LineChart>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-400">
              Awaiting live structural swing points from MetaTrader 5...
            </div>
          )}
        </ResponsiveContainer>
      </div>

      {/* 🟢 ۴ باکس پایینی کاملاً داینامیک شده بدون حتی یک کلمه ثابت */}
      <div className="grid grid-cols-2 border-t border-gray-100 sm:grid-cols-4">
        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Trend</p>
          <p className={`mt-1 font-semibold ${structure.trend === 'BULLISH' ? 'text-green-600' : 'text-rose-600'}`}>
            {structure.trend || "SCANNING..."}
          </p>
        </div>
        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Last Structure High</p>
          <p className="mt-1 font-mono font-semibold text-gray-900">
            {structure.last_high ? `$${parseFloat(structure.last_high).toFixed(2)}` : "---"}
          </p>
        </div>
        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Last Structure Low</p>
          <p className="mt-1 font-mono font-semibold text-gray-900">
            {structure.last_low ? `$${parseFloat(structure.last_low).toFixed(2)}` : "---"}
          </p>
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500">Timeframe Mode</p>
          <p className="mt-1 font-semibold text-purple-600">
            {structure.timeframe || "M5"}
          </p>
        </div>
      </div>
    </div>
  );
}
