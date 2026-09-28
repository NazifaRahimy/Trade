"use client";

export default function CurrentZone() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">Current Zone</p>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-blue-600">Discount</p>

          <p className="mt-1 text-sm text-gray-500">
            Price is below Equilibrium
          </p>
        </div>

        <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
          BUY ZONE
        </div>
      </div>
    </div>
  );
}
