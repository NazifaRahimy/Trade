"use client";

import React from "react";

// 🟢 ورودی تابع پروپس دیتای زنده را از صفحه پدر دریافت می‌کند با حفظ کامل استایل شما
export default function RiskSummary({ data }: { data: any }) {
  // واکشی مشخصات لایو فیلترهای مدیریت سرمایه از دیتای زنده ربات طلا
  // اگر در ثانیه اول دیتابیس خالی بود، مقادیر پیش‌فرض فرم شما را نشان می‌دهد تا صفحه نشکند
  const riskPercent = data?.risk_percent || "2";
  const customLot = data?.custom_lot || "0.10";
  const dailyDrawdown = data?.daily_drawdown || "5";
  const maxOpenTrades = data?.max_open_trades || "3";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Risk Summary</h2>
        <p className="mt-1 text-sm text-gray-500">
          Current risk parameters for the strategy.
        </p>
      </div>

      <div className="mt-5 space-y-4">
        {/* ۱. فیلد درصد ریسک در هر معامله */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-medium">Risk Per Trade</span>
          <span className="font-mono font-bold text-gray-900">{riskPercent}%</span>
        </div>

        {/* ۲. فیلد لوت‌سایز سفارشی */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-medium">Lot Size</span>
          <span className="font-mono font-bold text-gray-900">{parseFloat(customLot).toFixed(2)}</span>
        </div>

        {/* ۳. فیلد سقف دروداون روزانه */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-medium">Daily Drawdown</span>
          <span className="font-mono font-bold text-gray-900">{dailyDrawdown}%</span>
        </div>

        {/* ۴. فیلد سقف معاملات باز هم‌زمان */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-medium">Max Open Trades</span>
          <span className="font-mono font-bold text-gray-900">{maxOpenTrades}</span>
        </div>
      </div>
    </div>
  );
}
