export default function HistoryDetails() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            Selected Setup
          </p>

          <h2 className="mt-1 text-xl font-bold text-gray-900">#SET-024</h2>

          <p className="mt-1 text-sm text-gray-500">
            XAUUSD • September 27, 2026 • 10:42
          </p>
        </div>

        <span className="w-fit rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
          SUCCESSFUL
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {[
          ["Direction", "BUY"],
          ["Timeframe", "M5 / M1"],
          ["Entry", "4325.10"],
          ["SL", "4315.00"],
          ["Result", "TP2"],
          ["R:R", "1:2"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs text-gray-400">{label}</p>

            <p
              className={`mt-1 text-sm font-bold ${
                label === "Direction" ? "text-green-600" : "text-gray-900"
              }`}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-100 p-4">
          <h3 className="font-semibold text-gray-900">Setup Conditions</h3>

          <div className="mt-3 space-y-2">
            {[
              "M5 bullish structure confirmed",
              "M1 break of structure confirmed",
              "Price entered discount zone",
              "Bullish FVG detected",
              "Risk / reward accepted",
            ].map((condition) => (
              <div
                key={condition}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-600">
                  ✓
                </span>

                {condition}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 p-4">
          <h3 className="font-semibold text-gray-900">Trade Outcome</h3>

          <div className="mt-3 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Entry</span>
              <span className="font-medium text-gray-800">4325.10</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">TP1</span>
              <span className="font-medium text-green-600">4335.00 ✓</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">TP2</span>
              <span className="font-medium text-green-600">4345.00 ✓</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">TP3</span>
              <span className="font-medium text-gray-400">4360.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
