export default function PreviousHigh() {
  return (
    <div className="h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Previous High</h2>

          <p className="mt-1 text-sm text-gray-500">
            Most recent significant high used for TP calculation.
          </p>
        </div>

        <span className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600">
          RESISTANCE
        </span>
      </div>

      <div className="mt-5 rounded-xl bg-gray-50 p-5">
        <p className="text-xs text-gray-500">Previous Swing High</p>

        <p className="mt-2 text-3xl font-bold text-red-600">4350.00</p>

        <p className="mt-2 text-xs text-gray-500">XAUUSD · M5 · 09:45</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-500">Distance</p>

          <p className="mt-1 font-semibold text-gray-900">25.00</p>
        </div>

        <div className="rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-500">Market Role</p>

          <p className="mt-1 font-semibold text-red-600">Resistance</p>
        </div>
      </div>
    </div>
  );
}
