"use client";

export default function StructureStatus() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-gray-900">
          Market Structure
        </h3>

        <p className="text-sm text-gray-500">Current M5 and M1 structure</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500">
            M5 Structure
          </p>

          <p className="mt-2 text-xl font-bold text-green-600">Bullish</p>

          <p className="mt-1 text-sm text-gray-500">BOS · HH / HL</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500">
            M1 Structure
          </p>

          <p className="mt-2 text-xl font-bold text-green-600">Bullish</p>

          <p className="mt-1 text-sm text-gray-500">Confirmation Active</p>
        </div>
      </div>
    </div>
  );
}
