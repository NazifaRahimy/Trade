export default function StrategyHeader() {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Trading Strategy</h1>

        <p className="mt-1 text-sm text-gray-500">
          ICT strategy analysis with Premium, Discount and Fair Value Gaps.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

        <span className="text-sm font-semibold text-green-700">
          Strategy Active
        </span>
      </div>
    </div>
  );
}
