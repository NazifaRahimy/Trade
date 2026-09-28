export default function TradeDirection() {
  return (
    <div className="h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Trade Direction
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Current directional bias based on market structure.
          </p>
        </div>

        <span className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
          BULLISH
        </span>
      </div>

      <div className="mt-6 flex items-center justify-center rounded-2xl bg-green-50 py-8">
        <div className="text-center">
          <p className="text-sm font-medium text-green-600">
            Recommended Direction
          </p>

          <p className="mt-2 text-4xl font-bold text-green-600">BUY</p>

          <p className="mt-2 text-xs text-green-600">
            Bullish market structure confirmed
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-500">M5 Structure</p>
          <p className="mt-1 font-semibold text-green-600">BULLISH</p>
        </div>

        <div className="rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-500">M1 Confirmation</p>
          <p className="mt-1 font-semibold text-green-600">CONFIRMED</p>
        </div>
      </div>
    </div>
  );
}
