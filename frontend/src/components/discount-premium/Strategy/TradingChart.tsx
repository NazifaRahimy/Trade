"use client";

import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// 🟢 ورودی تابع پروپس لایو را از صفحه پدر دریافت می‌کند با حفظ کامل استایل شما
export default function TradingChart({ data, tick }: { data: any; tick: any }) {
  const swings = data?.fractal_swings || [];

  // نگاشت (Map) صدم‌ثانیه‌ای و داینامیک فرکتال‌های واقعی بک‌اَند به فرمت چارت
  const liveChartData = swings.map((s: any) => ({
    time: new Date(s.candle_timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    price: parseFloat(s.price)
  })).reverse(); // معکوس کردن برای رندر صحیح زمان از چپ به راست

  // محاسبه کاملاً خودکار و داینامیک محدوده (Domain) عمودی چارت بر اساس کف و سقف واقعی قیمت طلا
  const prices = liveChartData.map((d: any) => d.price);
  const minPrice = prices.length > 0 ? Math.min(...prices) - 1 : "auto";
  const maxPrice = prices.length > 0 ? Math.max(...prices) + 1 : "auto";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* هدر بالایی چارت - کاملاً حفظ شده از کدهای بومی شما */}
      <div className="mb-5 flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 font-sans">ICT Trading Chart</h2>
          <p className="mt-1 text-sm text-gray-500 font-sans">XAUUSD · M5 Live strategy analysis</p>
        </div>
        
        {/* نشانگرهای وضعیت قیمت زنده بدون هیچ عدد ثابت فرضی */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-gray-500 font-mono">
            XAUUSD · M5
          </span>
          <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-blue-600 font-mono">
            Current Price: {tick?.ask ? `\$${tick.ask.toFixed(2)}` : "Loading..."}
          </span>
        </div>
      </div>

      {/* بخش بدنه رسم نمودار Recharts با حفظ کل ساختار شما */}
      <div className="h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {liveChartData.length > 0 ? (
            <LineChart
              data={liveChartData}
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
            <div className="flex h-full items-center justify-center text-sm text-gray-400 font-sans">
              Awaiting live structural swing points from MetaTrader 5...
            </div>
          )}
        </ResponsiveContainer>
      </div>

      {/* فوتور و راهنمای پایینی چارت شما - کاملاً حفظ شده */}
      <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium border-t border-gray-100 pt-4">
        <span className="rounded-lg bg-green-50 px-2.5 py-1 text-green-700">🟢 BUY Zone</span>
        <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-blue-700">🔵 Discount</span>
        <span className="rounded-lg bg-purple-50 px-2.5 py-1 text-purple-700">🔮 FVG Detected</span>
      </div>
    </div>
  );
}
