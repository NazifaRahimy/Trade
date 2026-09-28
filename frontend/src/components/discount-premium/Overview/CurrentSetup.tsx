"use client";

export default function CurrentSetup() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Current Setup</p>

          <h3 className="mt-1 text-xl font-bold text-gray-900">BUY Setup</h3>
        </div>

        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
          WAITING
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div>
          <p className="text-xs text-gray-500">Entry</p>
          <p className="mt-1 font-semibold text-gray-900">4325.00</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">SL</p>
          <p className="mt-1 font-semibold text-gray-900">4315.00</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">TP</p>
          <p className="mt-1 font-semibold text-gray-900">4345.00</p>
        </div>
      </div>
    </div>
  );
}
