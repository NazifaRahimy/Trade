"use client";

import {FiActivity, FiClock} from "react-icons/fi";

export default function OverviewHeader() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium text-emerald-600">
              Trading Active
            </span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Discount & Premium Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500 md:text-base">
            Monitor your market, strategy, signals and active trades from one
            place.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
            <FiActivity size={20} />
          </div>

          <div>
            <p className="text-xs text-gray-500">Bot Status</p>
            <p className="text-sm font-semibold text-gray-900">
              Scanner Active
            </p>
          </div>

          <FiClock className="ml-2 text-gray-400" size={18} />
        </div>
      </div>
    </div>
  );
}
