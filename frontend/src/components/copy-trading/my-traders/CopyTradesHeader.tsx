"use client";

import {FiActivity, FiRefreshCw} from "react-icons/fi";

interface CopyTradesHeaderProps {
  onRefresh?: () => void;
  refreshing?: boolean;
}

export default function CopyTradesHeader({
  onRefresh,
  refreshing = false,
}: CopyTradesHeaderProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between md:p-6">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiActivity size={21} />
          </div>

          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              My Copy Traders
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your active copy trading connections and monitor
              performance.
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Copy trading system connected
        </div>
      </div>

      {onRefresh && (
        <button
          type="button"
          onClick={onRefresh}
          disabled={refreshing}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FiRefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
          Refresh
        </button>
      )}
    </div>
  );
}
