export default function TradeSetup() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Current Trade Setup
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Strategy-generated entry and exit levels.
          </p>
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
          VALID SETUP
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-400">Entry</p>
          <p className="mt-1 font-bold text-gray-900">4325.10</p>
        </div>

        <div className="rounded-xl bg-red-50 p-4">
          <p className="text-xs text-red-500">Stop Loss</p>
          <p className="mt-1 font-bold text-red-700">4315.00</p>
        </div>

        <div className="rounded-xl bg-green-50 p-4">
          <p className="text-xs text-green-500">Take Profit</p>
          <p className="mt-1 font-bold text-green-700">4345.00</p>
        </div>

        <div className="rounded-xl bg-blue-50 p-4">
          <p className="text-xs text-blue-500">Risk / Reward</p>
          <p className="mt-1 font-bold text-blue-700">1 : 2.5</p>
        </div>
      </div>
    </div>
  );
}
