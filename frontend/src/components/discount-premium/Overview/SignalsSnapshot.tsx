"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";

// 🟢 متصل شدن ۱۰۰٪ داینامیک به آرایه سیگنال‌های صفحه اصلی پدر
export default function SignalsSnapshot({ signals }: { signals: any[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-purple-600">Signals</p>
          <h2 className="mt-1 text-lg font-semibold text-gray-900">Active Signals</h2>
        </div>
        <Link href="/discount-premium/signals" className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700">
          View All <FiArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-5 space-y-3 max-h-[240px] overflow-y-auto">
        {(signals || []).length > 0 ? (
          signals.map((signal: any, index: number) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-100 bg-gray-50 p-4 rounded-xl last:border-b-0">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm font-bold text-gray-900 font-mono">
                    {signal.symbol} <span className="text-xs font-normal text-gray-400">· {signal.timeframe}</span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{signal.setup_type || "Discount Reversal"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                  signal.direction === "BUY" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}>
                  {signal.direction}
                </span>
                <span className="text-xs font-bold text-gray-900 font-mono">{signal.confidence || "85"}%</span>
                <FiChevronRight size={17} className="text-gray-400" />
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-xs text-gray-400 font-sans">
            No pending scanner signals active at this moment.
          </div>
        )}
      </div>
    </div>
  );
}
