"use client";

import Link from "next/link";
import {FiArrowRight, FiChevronRight} from "react-icons/fi";

const trades = [
  {
    id: "TRD-1042",
    symbol: "XAUUSD",
    direction: "BUY",
    pnl: "+$63.00",
  },
  {
    id: "TRD-1041",
    symbol: "EURUSD",
    direction: "BUY",
    pnl: "+$9.00",
  },
  {
    id: "TRD-1040",
    symbol: "GBPUSD",
    direction: "SELL",
    pnl: "+$21.50",
  },
];

export default function TradesSnapshot() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
            Trades
          </p>

          <h2 className="mt-1 text-lg font-semibold text-gray-900">
            Open Trades
          </h2>
        </div>

        <Link
          href="/discount-premium/trades"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          View Trades
          <FiArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-5 space-y-3">
        {trades.map((trade) => (
          <div
            key={trade.id}
            className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4"
          >
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900">{trade.symbol}</p>

                <span
                  className={`rounded-md px-2 py-0.5 text-xs font-semibold ${
                    trade.direction === "BUY"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {trade.direction}
                </span>
              </div>

              <p className="mt-1 text-xs text-gray-500">{trade.id}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-emerald-600">
                {trade.pnl}
              </span>

              <FiChevronRight className="text-gray-400" size={17} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3">
        <span className="text-sm text-gray-600">Total open positions</span>

        <span className="font-bold text-emerald-600">3</span>
      </div>
    </div>
  );
}
