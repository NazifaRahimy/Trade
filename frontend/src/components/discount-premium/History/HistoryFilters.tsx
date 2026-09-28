"use client";

import {useState} from "react";

export default function HistoryFilters() {
  const [status, setStatus] = useState("All");
  const [direction, setDirection] = useState("All");
  const [timeframe, setTimeframe] = useState("All");

  const statuses = ["All", "Successful", "Stopped", "Invalidated"];
  const directions = ["All", "Buy", "Sell"];
  const timeframes = ["All", "M1", "M5", "M15", "H1"];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            History Filters
          </h2>

          <p className="text-sm text-gray-500">
            Filter previous trading setups.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("All");
            setDirection("All");
            setTimeframe("All");
          }}
          className="w-fit rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
        >
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Status */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          >
            {statuses.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Direction */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Direction
          </label>

          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          >
            {directions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Timeframe */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Timeframe
          </label>

          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          >
            {timeframes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
