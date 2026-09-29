"use client";

import Link from "next/link";
import {FiArrowRight, FiBarChart2, FiTrendingUp} from "react-icons/fi";

export default function MarketSnapshot() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
            Market
          </p>

          <h2 className="mt-1 text-lg font-semibold text-gray-900">
            Market Snapshot
          </h2>
        </div>

        <Link
          href="/discount-premium/market"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          View Market
          <FiArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Symbol</p>
          <p className="mt-1 text-lg font-bold text-gray-900">XAUUSD</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Current Price</p>
          <p className="mt-1 text-lg font-bold text-gray-900">4325.10</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Spread</p>
          <p className="mt-1 text-lg font-bold text-gray-900">0.20</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Market Trend</p>

          <div className="mt-1 flex items-center gap-2">
            <FiTrendingUp className="text-emerald-500" size={18} />

            <span className="text-lg font-bold text-emerald-600">Bullish</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
        <FiBarChart2 className="text-blue-600" size={18} />

        <span className="text-sm text-gray-600">
          Live market radar is monitoring XAUUSD conditions.
        </span>
      </div>
    </div>
  );
}
