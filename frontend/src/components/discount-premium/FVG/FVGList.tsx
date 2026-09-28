const fvgList = [
  {
    id: "FVG-001",
    direction: "Bullish",
    top: "4327.40",
    bottom: "4325.10",
    time: "10:05",
    timeframe: "M1",
    status: "Active",
    mitigation: "0%",
    strength: "87%",
  },
  {
    id: "FVG-002",
    direction: "Bearish",
    top: "4338.60",
    bottom: "4336.40",
    time: "09:55",
    timeframe: "M1",
    status: "Active",
    mitigation: "15%",
    strength: "76%",
  },
  {
    id: "FVG-003",
    direction: "Bullish",
    top: "4318.20",
    bottom: "4316.10",
    time: "09:35",
    timeframe: "M5",
    status: "Active",
    mitigation: "42%",
    strength: "71%",
  },
  {
    id: "FVG-004",
    direction: "Bullish",
    top: "4307.40",
    bottom: "4305.20",
    time: "08:50",
    timeframe: "M5",
    status: "Mitigated",
    mitigation: "100%",
    strength: "64%",
  },
];

export default function FVGList() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-100 p-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Fair Value Gap List
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Recent bullish and bearish imbalances detected by the strategy.
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[950px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70 text-left">
              <th className="px-5 py-4 text-xs font-semibold text-gray-500">
                FVG ID
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-gray-500">
                Direction
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-gray-500">
                Zone
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-gray-500">
                Time
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-gray-500">
                TF
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-gray-500">
                Status
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-gray-500">
                Mitigation
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-gray-500">
                Strength
              </th>
            </tr>
          </thead>

          <tbody>
            {fvgList.map((fvg) => (
              <tr
                key={fvg.id}
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/60"
              >
                <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                  {fvg.id}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                      fvg.direction === "Bullish"
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {fvg.direction}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm font-medium text-gray-700">
                  {fvg.bottom} – {fvg.top}
                </td>

                <td className="px-5 py-4 text-sm text-gray-500">{fvg.time}</td>

                <td className="px-5 py-4 text-sm font-medium text-gray-700">
                  {fvg.timeframe}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                      fvg.status === "Active"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {fvg.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm font-medium text-gray-700">
                  {fvg.mitigation}
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-blue-500"
                        style={{width: fvg.strength}}
                      />
                    </div>

                    <span className="text-xs font-semibold text-gray-600">
                      {fvg.strength}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="divide-y divide-gray-100 md:hidden">
        {fvgList.map((fvg) => (
          <div key={fvg.id} className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900">{fvg.id}</span>

              <span
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                  fvg.status === "Active"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {fvg.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Direction</p>

                <p
                  className={`mt-1 text-sm font-semibold ${
                    fvg.direction === "Bullish"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {fvg.direction}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Timeframe</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {fvg.timeframe}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Zone</p>
                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {fvg.bottom} – {fvg.top}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Time</p>
                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {fvg.time}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Mitigation</p>
                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {fvg.mitigation}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Strength</p>
                <p className="mt-1 text-sm font-semibold text-blue-600">
                  {fvg.strength}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
