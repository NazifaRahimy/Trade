"use client";
import React from "react";
import Link from "next/link";
import { FiArrowRight, FiBarChart2 } from "react-icons/fi";

export default function MarketSnapshot({ tick, data }: { tick: any; data: any }) {
  const structure = data?.structure || {};

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-blue-600">Market</p>
          <h2 className="mt-1 text-lg font-semibold text-gray-900">Market Snapshot</h2>
        </div>
        <Link href="/discount-premium/market" className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700">
          View Market <FiArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Symbol</p>
          <p className="mt-1 text-lg font-bold text-gray-900 font-mono">XAUUSD</p>
        </div>
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Current Price</p>
          {/* 🟢 نمایش خودکار قیمت Ask زنده متاتریدر ۵ با حفظ استایل شما */}
          <p className="mt-1 text-lg font-bold text-gray-900 font-mono">
            {tick?.ask ? `\$${tick.ask.toFixed(2)}` : "Loading..."}
          </p>
        </div>
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Spread</p>
          {/* 🟢 نمایش خودکار اسپرد آنلاین */}
          <p className="mt-1 text-lg font-bold text-gray-900 font-mono">
            {tick?.spread ? `${tick.spread} Pips` : "0.20"}
          </p>
        </div>
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Market Trend</p>
          <p className="mt-1 text-sm font-bold text-emerald-600">
            {structure.trend || "BULLISH"}
          </p>
        </div>
      </div>
    </div>
  );
}
