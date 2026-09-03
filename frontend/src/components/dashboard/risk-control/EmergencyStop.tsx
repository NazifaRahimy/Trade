"use client";

import {FiPauseCircle, FiPower} from "react-icons/fi";

export default function EmergencyStop() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
          <FiPauseCircle size={22} />
        </div>

        <h3 className="text-xl font-semibold text-slate-900">Emergency Stop</h3>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Control your trading bot instantly.
      </p>

      {/* Bot Controls */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100"
        >
          <FiPauseCircle size={18} />
          Turn Off Bot
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          <FiPower size={18} />
          Turn On Bot
        </button>
      </div>
    </div>
  );
}
