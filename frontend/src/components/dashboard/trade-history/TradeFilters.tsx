"use client";

import {FiCalendar, FiFilter, FiSearch} from "react-icons/fi";

export default function TradeFilters() {
  return (
    <div className="border-b border-slate-800 p-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* Search */}
        <div className="relative w-full xl:max-w-xs">
          <FiSearch
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search pair..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* Date */}
          <div className="relative">
            <FiCalendar
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <select
              defaultValue="30"
              className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-950/60 py-2.5 pl-9 pr-8 text-sm text-slate-300 outline-none focus:border-blue-500"
            >
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
              <option value="all">All Time</option>
            </select>
          </div>

          {/* Type */}
          <select
            defaultValue="all"
            className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-blue-500"
          >
            <option value="all">All Types</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>

          {/* Status */}
          <select
            defaultValue="all"
            className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="closed">Closed</option>
            <option value="open">Open</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <FiFilter size={14} />
        <span>Filters are applied to your trade history.</span>
      </div>
    </div>
  );
}
