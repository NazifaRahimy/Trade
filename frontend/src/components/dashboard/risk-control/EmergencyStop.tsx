"use client";

import {FiPauseCircle} from "react-icons/fi";

export default function EmergencyStop() {
  return (
    <div className="rounded-3xl border border-red-900 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <FiPauseCircle size={30} className="text-red-500" />

        <h3 className="text-xl font-semibold text-white">Emergency Stop</h3>
      </div>

      <p className="mt-4 text-slate-400">Pause all copy trades instantly.</p>

      <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-medium text-white transition hover:bg-red-700">
        Pause Trading
      </button>
    </div>
  );
}
