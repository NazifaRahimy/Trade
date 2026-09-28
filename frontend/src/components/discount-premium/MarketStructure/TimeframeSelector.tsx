"use client";

import {useState} from "react";

const timeframes = ["M1", "M5", "M15", "H1", "H4", "D1"];

export default function TimeframeSelector() {
  const [selected, setSelected] = useState("M5");

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      {" "}
      <div>
        {" "}
        <h2 className="text-lg font-semibold text-gray-900">
          Timeframe Analysis{" "}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Select a timeframe to inspect market structure.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {timeframes.map((timeframe) => (
          <button
            key={timeframe}
            type="button"
            onClick={() => setSelected(timeframe)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              selected === timeframe
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {timeframe}
          </button>
        ))}
      </div>
    </div>
  );
}
