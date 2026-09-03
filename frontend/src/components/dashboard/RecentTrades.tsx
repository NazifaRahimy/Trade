"use client";

import {motion} from "framer-motion";

const trades = [
  {
    pair: "EUR/USD",
    type: "BUY",
    size: "0.50",
    result: "+$240",
  },
  {
    pair: "BTC/USD",
    type: "SELL",
    size: "0.20",
    result: "+$185",
  },
  {
    pair: "GBP/USD",
    type: "BUY",
    size: "0.30",
    result: "+$120",
  },
  {
    pair: "ETH/USD",
    type: "SELL",
    size: "0.40",
    result: "-$65",
  },
];

export default function RecentTrades() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 p-6">
        <div>
          <p className="text-sm text-slate-500">Activity</p>

          <h3 className="mt-1 text-xl font-bold text-slate-900">
            Recent Trades
          </h3>
        </div>

        <button
          type="button"
          className="text-xs font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs text-slate-500">
              <th className="px-6 py-4 font-medium">Asset</th>

              <th className="px-6 py-4 font-medium">Type</th>

              <th className="px-6 py-4 font-medium">Size</th>

              <th className="px-6 py-4 font-medium">Result</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade) => (
              <tr
                key={trade.pair}
                className="border-b border-slate-100 transition last:border-0 hover:bg-slate-50"
              >
                {/* Asset */}
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                  {trade.pair}
                </td>

                {/* Type */}
                <td
                  className={`px-6 py-4 text-xs font-bold ${
                    trade.type === "BUY" ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {trade.type}
                </td>

                {/* Size */}
                <td className="px-6 py-4 text-sm text-slate-500">
                  {trade.size}
                </td>

                {/* Result */}
                <td
                  className={`px-6 py-4 text-sm font-semibold ${
                    trade.result.startsWith("+")
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {trade.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
