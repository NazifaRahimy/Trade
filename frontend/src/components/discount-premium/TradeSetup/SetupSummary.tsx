export default function SetupSummary() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Current Trading Setup
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            XAUUSD · M5 strategy with M1 entry confirmation
          </p>
        </div>

        <span className="w-fit rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
          VALID SETUP
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Strategy</p>
          <p className="mt-1 font-semibold text-gray-900">Discount Reversal</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Direction</p>
          <p className="mt-1 font-semibold text-green-600">BUY</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Timeframe</p>
          <p className="mt-1 font-semibold text-gray-900">M5 / M1</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Confidence</p>
          <p className="mt-1 font-semibold text-blue-600">87%</p>
        </div>
      </div>
    </div>
  );
}
