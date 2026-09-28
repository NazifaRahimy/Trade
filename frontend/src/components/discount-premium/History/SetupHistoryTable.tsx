const history = [
  {
    id: "#SET-024",
    date: "Sep 27, 2026",
    time: "10:42",
    symbol: "XAUUSD",
    direction: "BUY",
    timeframe: "M5",
    entry: "4325.10",
    result: "TP2",
    rr: "1:2",
    status: "Successful",
  },
  {
    id: "#SET-023",
    date: "Sep 27, 2026",
    time: "09:35",
    symbol: "XAUUSD",
    direction: "SELL",
    timeframe: "M5",
    entry: "4338.20",
    result: "Stopped",
    rr: "1:1",
    status: "Stopped",
  },
  {
    id: "#SET-022",
    date: "Sep 26, 2026",
    time: "15:18",
    symbol: "XAUUSD",
    direction: "BUY",
    timeframe: "M1",
    entry: "4317.40",
    result: "TP1",
    rr: "1:1",
    status: "Successful",
  },
  {
    id: "#SET-021",
    date: "Sep 26, 2026",
    time: "12:06",
    symbol: "XAUUSD",
    direction: "BUY",
    timeframe: "M5",
    entry: "4308.30",
    result: "TP3",
    rr: "1:3.5",
    status: "Successful",
  },
  {
    id: "#SET-020",
    date: "Sep 25, 2026",
    time: "16:44",
    symbol: "XAUUSD",
    direction: "SELL",
    timeframe: "M15",
    entry: "4344.70",
    result: "Invalid",
    rr: "-",
    status: "Invalidated",
  },
  {
    id: "#SET-019",
    date: "Sep 25, 2026",
    time: "11:28",
    symbol: "XAUUSD",
    direction: "BUY",
    timeframe: "M5",
    entry: "4321.50",
    result: "TP2",
    rr: "1:2",
    status: "Successful",
  },
];

export default function SetupHistoryTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-900">Setup History</h2>

        <p className="mt-1 text-sm text-gray-500">
          Previous discount and premium trading setups.
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70 text-left">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Setup
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Date
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Symbol
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Direction
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                TF
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Entry
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Result
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                R:R
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-50 transition hover:bg-gray-50/60"
              >
                <td className="px-5 py-4">
                  <span className="font-semibold text-gray-900">{item.id}</span>
                </td>

                <td className="px-5 py-4">
                  <p className="text-sm text-gray-700">{item.date}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </td>

                <td className="px-5 py-4">
                  <span className="font-medium text-gray-800">
                    {item.symbol}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                      item.direction === "BUY"
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {item.direction}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {item.timeframe}
                </td>

                <td className="px-5 py-4 font-mono text-sm text-gray-700">
                  {item.entry}
                </td>

                <td className="px-5 py-4">
                  <span className="text-sm font-semibold text-gray-800">
                    {item.result}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm font-medium text-gray-600">
                  {item.rr}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                      item.status === "Successful"
                        ? "bg-green-50 text-green-600"
                        : item.status === "Stopped"
                          ? "bg-red-50 text-red-600"
                          : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="divide-y divide-gray-100 md:hidden">
        {history.map((item) => (
          <div key={item.id} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900">{item.id}</p>
                <p className="mt-1 text-xs text-gray-400">
                  {item.date} • {item.time}
                </p>
              </div>

              <span
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                  item.status === "Successful"
                    ? "bg-green-50 text-green-600"
                    : item.status === "Stopped"
                      ? "bg-red-50 text-red-600"
                      : "bg-gray-100 text-gray-500"
                }`}
              >
                {item.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-gray-400">Symbol</p>
                <p className="mt-1 font-medium text-gray-800">{item.symbol}</p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Direction</p>
                <p
                  className={`mt-1 font-semibold ${
                    item.direction === "BUY" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.direction}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Timeframe</p>
                <p className="mt-1 font-medium text-gray-800">
                  {item.timeframe}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Entry</p>
                <p className="mt-1 font-mono text-gray-800">{item.entry}</p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Result</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {item.result}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">R:R</p>
                <p className="mt-1 font-medium text-gray-800">{item.rr}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
