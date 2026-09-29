const conditions = [
  {
    label: "M5 Market Structure",
    value: "Bullish",
    valid: true,
  },
  {
    label: "M1 Break of Structure",
    value: "Confirmed",
    valid: true,
  },
  {
    label: "Premium / Discount",
    value: "Discount",
    valid: true,
  },
  {
    label: "Bullish FVG",
    value: "Detected",
    valid: true,
  },
  {
    label: "Risk / Reward",
    value: "1 : 2.5",
    valid: true,
  },
  {
    label: "Trading Session",
    value: "Active",
    valid: true,
  },
];

export default function StrategyConditions() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Strategy Conditions
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Confirmation checklist before executing the setup.
        </p>
      </div>

      <div className="space-y-3">
        {conditions.map((condition) => (
          <div
            key={condition.label}
            className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">
                ✓
              </span>

              <span className="text-sm font-medium text-gray-700">
                {condition.label}
              </span>
            </div>

            <span className="text-sm font-semibold text-green-600">
              {condition.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-green-700">
            Setup Confirmation
          </span>

          <span className="text-sm font-bold text-green-700">6 / 6</span>
        </div>

        <p className="mt-1 text-xs text-green-600">
          All strategy conditions are currently confirmed.
        </p>
      </div>
    </div>
  );
}
