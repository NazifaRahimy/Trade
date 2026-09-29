"use client";

import Link from "next/link";
import {FiArrowRight, FiChevronRight} from "react-icons/fi";

const signals = [
  {
    symbol: "XAUUSD",
    direction: "BUY",
    timeframe: "M5",
    confidence: "87%",
    setup: "Discount Reversal",
  },
  {
    symbol: "XAUUSD",
    direction: "BUY",
    timeframe: "M1",
    confidence: "82%",
    setup: "Bullish FVG",
  },
  {
    symbol: "EURUSD",
    direction: "BUY",
    timeframe: "M5",
    confidence: "79%",
    setup: "BOS + FVG",
  },
];

export default function SignalsSnapshot() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-purple-600">
            Signals
          </p>

          <h2 className="mt-1 text-lg font-semibold text-gray-900">
            Active Signals
          </h2>
        </div>

        <Link
          href="/discount-premium/signals"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          View All
          <FiArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-5 space-y-3">
        {signals.map((signal) => (
          <div
            key={`${signal.symbol}-${signal.timeframe}`}
            className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4"
          >
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900">{signal.symbol}</p>

                <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                  {signal.direction}
                </span>

                <span className="text-xs text-gray-400">
                  {signal.timeframe}
                </span>
              </div>

              <p className="mt-1 text-xs text-gray-500">{signal.setup}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-emerald-600">
                {signal.confidence}
              </span>

              <FiChevronRight className="text-gray-400" size={17} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-blue-50 px-4 py-3">
        <p className="text-sm text-blue-700">
          <span className="font-semibold">4</span> pending signals are currently
          being monitored by the scanner.
        </p>
      </div>
    </div>
  );
}
