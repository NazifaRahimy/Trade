export default function FVGStatus() {
  return (
    <div className="h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Current FVG Status
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Active fair value gap being monitored
          </p>
        </div>

        <span className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
          ACTIVE
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Direction</p>
          <p className="mt-1 font-semibold text-green-600">BULLISH</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Timeframe</p>
          <p className="mt-1 font-semibold text-gray-900">M1</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Zone</p>
          <p className="mt-1 font-semibold text-gray-900">4325.10 – 4327.40</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Mitigation</p>
          <p className="mt-1 font-semibold text-blue-600">0%</p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-green-100 bg-green-50/50 p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-green-700">
              Bullish FVG detected
            </p>

            <p className="mt-1 text-xs text-green-600">
              Price is currently entering the lower edge of the imbalance zone.
            </p>
          </div>

          <span className="w-fit rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-green-600 shadow-sm">
            VALID
          </span>
        </div>
      </div>
    </div>
  );
}
