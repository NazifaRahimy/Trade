"use client";

import {useState} from "react";

const filters = ["All", "Active", "Mitigated", "Invalidated"];

export default function FVGFilters() {
  const [selected, setSelected] = useState("All");

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">FVG Filters</h2>

      <p className="mt-1 text-sm text-gray-500">
        Filter fair value gaps by current status.
      </p>

      <div className="mt-5 space-y-2">
        {filters.map((filter) => {
          const isSelected = selected === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setSelected(filter)}
              className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                isSelected
                  ? "border-blue-200 bg-blue-50 text-blue-600"
                  : "border-gray-100 bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{filter}</span>

                {isSelected && (
                  <span className="text-xs font-semibold">Selected</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 border-t border-gray-100 pt-5">
        <p className="text-xs font-medium text-gray-500">Direction</p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="rounded-lg border border-green-100 bg-green-50 px-3 py-2 text-xs font-semibold text-green-600"
          >
            Bullish
          </button>

          <button
            type="button"
            className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600"
          >
            Bearish
          </button>
        </div>
      </div>
    </div>
  );
}
