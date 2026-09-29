export default function RiskSummary() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Risk Management</h2>

      <p className="mt-1 text-sm text-gray-500">
        Current risk parameters for the strategy.
      </p>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Risk Per Trade</span>

          <span className="font-semibold text-gray-900">1%</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Lot Size</span>

          <span className="font-semibold text-gray-900">0.10</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Daily Drawdown</span>

          <span className="font-semibold text-gray-900">3%</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Max Open Trades</span>

          <span className="font-semibold text-gray-900">3</span>
        </div>
      </div>
    </div>
  );
}
