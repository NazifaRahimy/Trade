"use client";

export default function FVGStatus() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Active FVG</p>

          <p className="mt-2 text-xl font-bold text-gray-900">Bullish FVG</p>
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
          ACTIVE
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-gray-500">Top</p>
          <p className="font-semibold text-gray-900">4327.40</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Bottom</p>
          <p className="font-semibold text-gray-900">4325.10</p>
        </div>
      </div>
    </div>
  );
}
