"use client";

import {useState} from "react";
import {FiActivity} from "react-icons/fi";

const timeframes = ["M1", "M5", "M15", "H1", "H4", "D1"];

export default function MarketTimeframe() {
  const [selected, setSelected] = useState("M5");

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Timeframe Status
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Select timeframe for market monitoring
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-500">
          <FiActivity size={14} />
          {selected} Active
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {timeframes.map((timeframe) => {
          const active = selected === timeframe;

          return (
            <button
              key={timeframe}
              type="button"
              onClick={() => setSelected(timeframe)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                active
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {timeframe}
            </button>
          );
        })}
      </div>
    </section>
  );
}
