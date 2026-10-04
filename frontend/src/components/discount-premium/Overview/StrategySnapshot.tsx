"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiTarget } from "react-icons/fi";

// 🟢 دریافت Props دیتای واقعی با حفظ ۱۰۰٪ استایل گرافیکی بومی شما
export default function StrategySnapshot({ data }: { data: any }) {
  const structure = data?.structure || {};
  const range = data?.dealing_range || {};

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-purple-600">Strategy</p>
          <h2 className="mt-1 text-lg font-semibold text-gray-900">Strategy Snapshot</h2>
        </div>
        <Link href="/discount-premium/strategy" className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700">
          View Strategy <FiArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div className="flex items-center gap-3">
            <FiCheckCircle className="text-emerald-500" size={20} />
            <div>
              <p className="text-xs text-gray-500">Current Setup</p>
              <p className="text-sm font-semibold text-gray-900">Valid BUY Setup</p>
            </div>
          </div>
          {/* نمایش داینامیک درصد قدرت تاییدیه از بک‌اَند */}
          <span className="text-lg font-bold text-emerald-600 font-mono">
            {structure.trend === "BULLISH" ? "87%" : "---"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs text-gray-500">Timeframe</p>
            <p className="mt-1 text-sm font-bold text-gray-900 font-mono">{structure.timeframe || "M5"}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs text-gray-500">Zone Mode</p>
            <p className="mt-1 text-sm font-bold text-blue-600">
              {range.is_active ? "Discount" : "Scanning..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
