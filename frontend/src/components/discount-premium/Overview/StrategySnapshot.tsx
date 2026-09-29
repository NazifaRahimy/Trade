"use client";

import Link from "next/link";
import {FiArrowRight, FiCheckCircle, FiTarget} from "react-icons/fi";

export default function StrategySnapshot() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-purple-600">
            Strategy
          </p>

          <h2 className="mt-1 text-lg font-semibold text-gray-900">
            Strategy Snapshot
          </h2>
        </div>

        <Link
          href="/discount-premium/strategy"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          View Strategy
          <FiArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-emerald-600">
            <FiCheckCircle size={20} />
          </div>

          <div>
            <p className="text-xs text-gray-500">Current Setup</p>
            <p className="font-semibold text-gray-900">Valid BUY Setup</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-500">Confidence</p>
          <p className="text-lg font-bold text-emerald-600">87%</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Direction</p>
          <p className="mt-1 font-semibold text-emerald-600">BUY</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Zone</p>
          <p className="mt-1 font-semibold text-blue-600">Discount</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Timeframe</p>
          <p className="mt-1 font-semibold text-gray-900">M5</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Confirmation</p>
          <p className="mt-1 flex items-center gap-1 font-semibold text-gray-900">
            <FiTarget size={15} />
            M1
          </p>
        </div>
      </div>
    </div>
  );
}
