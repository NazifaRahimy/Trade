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
      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
    >
      <div className="flex items-center justify-between border-b border-slate-800 p-6">
        <div>
          <p className="text-sm text-slate-500">Activity</p>

          <h3 className="mt-1 text-xl font-bold text-white">Recent Trades</h3>
        </div>

        <button className="text-xs font-semibold text-blue-400 hover:text-blue-300">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-800 text-left text-xs text-slate-500">
              <th className="px-6 py-4">Asset</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Size</th>
              <th className="px-6 py-4">Result</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade) => (
              <tr
                key={trade.pair}
                className="border-b border-slate-800/70 last:border-0"
              >
                <td className="px-6 py-4 text-sm font-semibold text-white">
                  {trade.pair}
                </td>

                <td
                  className={`px-6 py-4 text-xs font-bold ${
                    trade.type === "BUY" ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {trade.type}
                </td>

                <td className="px-6 py-4 text-sm text-slate-400">
                  {trade.size}
                </td>

                <td
                  className={`px-6 py-4 text-sm font-semibold ${
                    trade.result.startsWith("+")
                      ? "text-emerald-400"
                      : "text-red-400"
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
