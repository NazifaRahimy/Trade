"use client";

import React, { useState } from "react";
import api from "@/src/lib/axios"; // 🚀 استفاده از اکسوس بومی شما

export default function RiskSettings() {
  const [riskPercent, setRiskPercent] = useState("2");
  const [lotSize, setLotSize] = useState("0.10");
  const [dailyDrawdown, setDailyDrawdown] = useState("5");
  const [maxOpenTrades, setMaxOpenTrades] = useState("3");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🚀 متد ارسال فیلترهای ریسک به هسته مدیریت سرمایه ربات طلا
  const handleSaveRiskMatrix = async () => {
    setLoading(true);
    setSuccess(false);
    try {
      const response = await api.post("/api/user/broker/", {
        risk_percent: parseFloat(riskPercent),
        custom_lot: parseFloat(lotSize),
        max_open_trades: parseInt(maxOpenTrades),
      });
      if (response.status === 200) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000); // محو شدن خودکار پیام موفقیت بعد از ۴ ثانیه
      }
    } catch (error) {
      console.error("Failed to re-calibrate risk thresholds:", error);
      alert("خطا در به‌روزرسانی پارامترهای ریسک دیتابیس.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Risk Management</h2>
          <p className="mt-1 text-sm text-gray-500">Configure position sizing and risk limits for the trading robot.</p>
        </div>
        
        {/* دکمه اختصاصی ذخیره در هدر همین کامپوننت بدون دستکاری استایل */}
        <button
          type="button"
          disabled={loading}
          onClick={handleSaveRiskMatrix}
          className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:opacity-50 flex items-center gap-1"
        >
          {loading && <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></span>}
          {success ? "✓ Saved" : "Save Risk Matrix"}
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {/* فیلد ریسک در هر معامله */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Risk Per Trade</label>
          <div className="relative">
            <input
              type="number"
              value={riskPercent}
              onChange={(e) => setRiskPercent(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">%</span>
          </div>
        </div>

        {/* فیلد لوت‌سایز ثابت */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Custom Lot Size</label>
          <input
            type="number"
            value={lotSize}
            onChange={(e) => setLotSize(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* فیلد دروداون روزانه */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Daily Drawdown Limit</label>
          <div className="relative">
            <input
              type="number"
              value={dailyDrawdown}
              onChange={(e) => setDailyDrawdown(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">%</span>
          </div>
        </div>

        {/* فیلد حداکثر معاملات باز هم‌زمان */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Max Open Trades</label>
          <input
            type="number"
            value={maxOpenTrades}
            onChange={(e) => setMaxOpenTrades(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
