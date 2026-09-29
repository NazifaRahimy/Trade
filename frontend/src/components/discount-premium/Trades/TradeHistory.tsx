const history = [
  {
    id: "TRD-1039",
    symbol: "XAUUSD",
    direction: "BUY",
    entry: "4318.20",
    exit: "4329.80",
    result: "+$58.00",
    rr: "1 : 2.3",
    duration: "27 min",
    closedAt: "10:02",
    status: "Win",
  },
  {
    id: "TRD-1038",
    symbol: "EURUSD",
    direction: "SELL",
    entry: "1.17640",
    exit: "1.17490",
    result: "+$15.00",
    rr: "1 : 2.1",
    duration: "42 min",
    closedAt: "09:34",
    status: "Win",
  },
  {
    id: "TRD-1037",
    symbol: "GBPUSD",
    direction: "BUY",
    entry: "1.33980",
    exit: "1.33820",
    result: "-$16.00",
    rr: "1 : -1",
    duration: "19 min",
    closedAt: "09:02",
    status: "Loss",
  },
  {
    id: "TRD-1036",
    symbol: "XAUUSD",
    direction: "SELL",
    entry: "4338.60",
    exit: "4328.60",
    result: "+$50.00",
    rr: "1 : 2.4",
    duration: "36 min",
    closedAt: "08:41",
    status: "Win",
  },
];

export default function TradeHistory() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 p-5">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Trade History</h2>

          <p className="mt-1 text-sm text-gray-500">
            Archive of completed robot trades.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[950px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Trade
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Direction
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Entry
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Exit
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Result
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                R:R
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Duration
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Closed
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {history.map((trade) => (
              <tr
                key={trade.id}
                className="border-b border-gray-100 last:border-b-0"
              >
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-gray-900">
                    {trade.symbol}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">{trade.id}</p>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      trade.direction === "BUY"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {trade.direction}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-gray-700">
                  {trade.entry}
                </td>

                <td className="px-5 py-4 text-sm text-gray-700">
                  {trade.exit}
                </td>

                <td
                  className={`px-5 py-4 text-sm font-bold ${
                    trade.status === "Win" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {trade.result}
                </td>

                <td className="px-5 py-4 text-sm text-gray-700">{trade.rr}</td>

                <td className="px-5 py-4 text-sm text-gray-500">
                  {trade.duration}
                </td>

                <td className="px-5 py-4 text-sm text-gray-500">
                  {trade.closedAt}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      trade.status === "Win"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {trade.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
