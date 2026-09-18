"use client";

import {FiArrowDown, FiArrowUp} from "react-icons/fi";

const history = [
  {
    id: 1,
    trader: "Amiri Pro Trader",
    symbol: "EUR/USD",
    type: "BUY",
    profit: "+$35.20",
    date: "Sep 17, 2026",
    status: "Closed",
    copied: true,
  },
  {
    id: 2,
    trader: "Amiri Pro Trader",
    symbol: "GBP/USD",
    type: "SELL",
    profit: "+$28.70",
    date: "Sep 16, 2026",
    status: "Closed",
    copied: true,
  },
  {
    id: 3,
    trader: "Amiri Pro Trader",
    symbol: "XAU/USD",
    type: "BUY",
    profit: "+$67.00",
    date: "Sep 15, 2026",
    status: "Closed",
    copied: true,
  },
  {
    id: 4,
    trader: "Amiri Pro Trader",
    symbol: "GBP/JPY",
    type: "SELL",
    profit: "+$41.30",
    date: "Sep 14, 2026",
    status: "Closed",
    copied: true,
  },
  {
    id: 5,
    trader: "Amiri Pro Trader",
    symbol: "BTC/USD",
    type: "BUY",
    profit: "-$12.40",
    date: "Sep 13, 2026",
    status: "Closed",
    copied: true,
  },
  {
    id: 6,
    trader: "Amiri Pro Trader",
    symbol: "EUR/USD",
    type: "SELL",
    profit: "-$19.80",
    date: "Sep 12, 2026",
    status: "Closed",
    copied: true,
  },
];

export default function HistoryTable() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-5">
        <h2 className="text-lg font-semibold text-slate-900">Trade History</h2>

        <p className="mt-1 text-sm text-slate-500">
          View all completed trades copied from Amiri Pro Trader.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[850px] text-left">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="px-5 py-4 font-medium">Trader</th>

              <th className="px-5 py-4 font-medium">Symbol</th>

              <th className="px-5 py-4 font-medium">Type</th>

              <th className="px-5 py-4 font-medium">Copied</th>

              <th className="px-5 py-4 font-medium">Closed</th>

              <th className="px-5 py-4 font-medium">Profit / Loss</th>

              <th className="px-5 py-4 font-medium">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {history.map((trade) => (
              <tr key={trade.id} className="text-sm">
                <td className="px-5 py-4 font-semibold text-slate-900">
                  {trade.trader}
                </td>

                <td className="px-5 py-4 font-medium text-slate-700">
                  {trade.symbol}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold ${
                      trade.type === "BUY"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {trade.type === "BUY" ? (
                      <FiArrowUp size={13} />
                    ) : (
                      <FiArrowDown size={13} />
                    )}

                    {trade.type}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                    {trade.copied ? "Yes" : "No"}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {trade.status}
                  </span>
                </td>

                <td
                  className={`px-5 py-4 font-semibold ${
                    trade.profit.startsWith("+")
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                >
                  {trade.profit}
                </td>

                <td className="px-5 py-4 text-slate-500">{trade.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="space-y-3 p-4 md:hidden">
        {history.map((trade) => (
          <div
            key={trade.id}
            className="rounded-xl border border-slate-200 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-900">{trade.symbol}</h3>

                <p className="mt-1 text-xs text-slate-500">{trade.trader}</p>
              </div>

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                {trade.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-400">Type</p>

                <p
                  className={`mt-1 text-sm font-semibold ${
                    trade.type === "BUY" ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {trade.type}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Copied Trade</p>

                <p className="mt-1 text-sm font-medium text-blue-600">
                  {trade.copied ? "Yes" : "No"}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Profit / Loss</p>

                <p
                  className={`mt-1 text-sm font-bold ${
                    trade.profit.startsWith("+")
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                >
                  {trade.profit}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Date</p>

                <p className="mt-1 text-sm font-medium text-slate-700">
                  {trade.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
