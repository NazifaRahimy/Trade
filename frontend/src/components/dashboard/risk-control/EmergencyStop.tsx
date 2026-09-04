"use client";

import {FiPauseCircle, FiPower} from "react-icons/fi";

type EmergencyStopProps = {
  botActive: boolean;
  onToggleBot: () => void;
};

export default function EmergencyStop({
  botActive,
  onToggleBot,
}: EmergencyStopProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
          <FiPauseCircle size={22} />
        </div>

        <h3 className="text-xl font-semibold text-slate-900">Emergency Stop</h3>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Control your trading bot instantly.
      </p>

      {/* Bot Status */}
      <div className="mt-6 rounded-xl bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600">Bot Status</span>

          <span
            className={`flex items-center gap-2 text-sm font-semibold ${
              botActive ? "text-emerald-600" : "text-red-600"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                botActive ? "bg-emerald-500" : "bg-red-500"
              }`}
            />

            {botActive ? "Running" : "Stopped"}
          </span>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        type="button"
        onClick={onToggleBot}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white transition ${
          botActive
            ? "bg-red-600 hover:bg-red-700"
            : "bg-emerald-600 hover:bg-emerald-700"
        }`}
      >
        {botActive ? (
          <>
            <FiPauseCircle size={18} />
            Turn Off Bot
          </>
        ) : (
          <>
            <FiPower size={18} />
            Turn On Bot
          </>
        )}
      </button>
    </div>
  );
}
