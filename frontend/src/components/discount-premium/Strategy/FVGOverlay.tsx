const fvgs = [
  {
    id: "FVG-001",
    type: "Bullish",
    high: "4327.40",
    low: "4325.10",
    timeframe: "M1",
    strength: "87%",
    status: "Active",
  },
  {
    id: "FVG-002",
    type: "Bearish",
    high: "4338.60",
    low: "4336.40",
    timeframe: "M1",
    strength: "76%",
    status: "Active",
  },
  {
    id: "FVG-003",
    type: "Bullish",
    high: "4318.20",
    low: "4316.10",
    timeframe: "M5",
    strength: "71%",
    status: "Active",
  },
];

export default function FVGOverlay() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Fair Value Gaps
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            FVGs detected by the strategy scanner.
          </p>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          3 Active
        </span>
      </div>

      <div className="space-y-3">
        {fvgs.map((fvg) => (
          <div
            key={fvg.id}
            className="rounded-xl border border-gray-100 bg-gray-50 p-4"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-md px-2 py-1 text-xs font-semibold ${
                      fvg.type === "Bullish"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {fvg.type}
                  </span>

                  <span className="text-sm font-semibold text-gray-900">
                    {fvg.id}
                  </span>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  {fvg.low} — {fvg.high} · {fvg.timeframe}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs text-gray-400">Strength</p>

                <p className="text-sm font-bold text-gray-900">
                  {fvg.strength}
                </p>

                <span className="text-xs font-medium text-green-600">
                  {fvg.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
