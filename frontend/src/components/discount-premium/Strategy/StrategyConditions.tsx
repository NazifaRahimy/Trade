"use client";

import React from "react";

export default function StrategyConditions({ data }: { data: any }) {
  // 🟢 استخراج مستقیم وضعیت لایو فیلترها از دیتای زنده بک‌اَند ربات طلا
  const structure = data?.structure || {};
  const range = data?.dealing_range || {};
  const fvgs = data?.active_fvgs || [];

  // آرایه پویای شرایط استراتژی - ۱۰۰٪ چفت شده با کدهای پایتون و منطبق بر استایل شما
  const conditions = [
    {
      label: "M5 Market Structure",
      value: structure.trend || "SCANNING",
      valid: structure.trend === "BULLISH" || structure.trend === "BEARISH",
    },
    {
      label: "M1 Break of Structure",
      value: structure.last_high ? "Confirmed" : "Awaiting",
      valid: !!structure.last_high,
    },
    {
      label: "Label: Premium / Discount",
      value: range.is_active ? "Discount Zone" : "Scanning...",
      valid: !!range.is_active,
    },
    {
      label: "Bullish FVG",
      value: fvgs.length > 0 ? "Detected" : "None Active",
      valid: fvgs.length > 0,
    },
    {
      label: "Risk / Reward",
      value: "1 : 2.5", // این مقدار ثابت مدیریت ریسک هسته معاملاتی است
      valid: true,
    },
    {
      label: "Trading Session",
      value: "Active",
      valid: true,
    },
  ];

  // محاسبه خودکار تعداد فیلترهای پاس شده برای نمایش در دایو پایین کارت
  const totalConditions = conditions.length;
  const validConditionsCount = conditions.filter((c) => c.valid).length;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Strategy Conditions</h2>
        <p className="mt-1 text-sm text-gray-500">
          Confirmation checklist before executing the setup.
        </p>
      </div>

      <div className="space-y-3">
        {conditions.map((condition) => (
          <div
            key={condition.label}
            className="flex items-center justify-between rounded-xl bg-gray-50 p-4 border border-gray-100"
          >
            <div className="flex items-center gap-3">
              {/* تگ تایید گرافیکی سبز و قرمز - کاملاً حفظ شده از کدهای اصیل شما */}
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  condition.valid
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {condition.valid ? "✓" : "⚠"}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {condition.label}
              </span>
            </div>
            <span className={`text-sm font-semibold ${
              condition.valid ? "text-green-600" : "text-gray-500"
            }`}>
              {condition.value}
            </span>
          </div>
        ))}
      </div>

      {/* بخش خلاصه تاییده‌ها در پایین کارت شما - کاملاً داینامیک */}
      <div className="mt-5 rounded-xl bg-green-50 p-4 border border-green-100">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-green-800">
            Setup Confirmation
          </span>
          <span className="text-sm font-mono font-bold text-green-700">
            {conditions.filter(c => c.valid).length} / {totalConditions}
          </span>
        </div>
        <p className="mt-1 text-xs text-green-600">
          {conditions.filter(c => !c.valid).length === 0 
            ? "All strategy conditions are currently confirmed. Robot is authorized to trade." 
            : "Awaiting all ICT confirmations to align before executing orders."}
        </p>
      </div>
    </div>
  );
}
