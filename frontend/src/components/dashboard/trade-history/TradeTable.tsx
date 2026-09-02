"use client";

import {motion} from "framer-motion";
import {
  FiArrowDown,
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const trades = [
  {
    pair: "EUR/USD",
    type: "Buy",
    volume: "1.00",
    openPrice: "1.08420",
    closePrice: "1.08635",
    profit: "+$230.50",
    status: "Closed",
    time: "2h ago",
  },
  {
    pair: "BTC/USDT",
    type: "Buy",
    volume: "0.05",
    openPrice: "67,240",
    closePrice: "69,646",
    profit: "+$120.30",
    status: "Closed",
    time: "5h ago",
  },
  {
    pair: "XAU/USD",
    type: "Sell",
    volume: "0.10",
    openPrice: "2,358.40",
    closePrice: "2,362.92",
    profit: "-$45.20",
    status: "Closed",
    time: "1d ago",
  },
  {
    pair: "GBP/USD",
    type: "Buy",
    volume: "1.00",
    openPrice: "1.26710",
    closePrice: "1.26985",
    profit: "+$98.10",
    status: "Closed",
    time: "1d ago",
  },
  {
    pair: "ETH/USDT",
    type: "Buy",
    volume: "0.10",
    openPrice: "3,020",
    closePrice: "3,096",
    profit: "+$76.40",
    status: "Closed",
    time: "2d ago",
  },
  {
    pair: "USD/JPY",
    type: "Sell",
    volume: "0.50",
    openPrice: "156.420",
    closePrice: "156.080",
    profit: "+$108.60",
    status: "Closed",
    time: "2d ago",
  },
  {
    pair: "NAS100",
    type: "Buy",
    volume: "0.20",
    openPrice: "18,245",
    closePrice: "18,310",
    profit: "+$130.00",
    status: "Closed",
    time: "3d ago",
  },
];

export default function TradeTable() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.2}}
      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
    >
      {/* Header */}
      <div className="p-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-white">
              Recent Trades
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Showing your latest trading activity
            </p>
          </div>

          <span className="text-xs text-slate-500">128 trades total</span>
        </div>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[950px] border-collapse">
          <thead>
            <tr className="border-y border-slate-800 bg-slate-950/30 text-left">
              <th className="px-5 py-3 text-xs font-medium text-slate-500">
                Pair
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Type
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Volume
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Open Price
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Close Price
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Profit / Loss
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Status
              </th>

              <th className="px-5 py-3 text-right text-xs font-medium text-slate-500">
                Time
              </th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade, index) => {
              const isBuy = trade.type === "Buy";
              const isProfit = trade.profit.startsWith("+");

              return (
                <motion.tr
                  key={`${trade.pair}-${index}`}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{
                    duration: 0.3,
                    delay: 0.25 + index * 0.05,
                  }}
                  className="border-b border-slate-800/70 transition hover:bg-slate-800/20"
                >
                  {/* Pair */}
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-white">
                      {trade.pair}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                        isBuy ? "text-blue-400" : "text-red-400"
                      }`}
                    >
                      {isBuy ? (
                        <FiArrowUp size={14} />
                      ) : (
                        <FiArrowDown size={14} />
                      )}

                      {trade.type}
                    </span>
                  </td>

                  {/* Volume */}
                  <td className="px-4 py-4 text-sm text-slate-300">
                    {trade.volume}
                  </td>

                  {/* Open */}
                  <td className="px-4 py-4 text-sm text-slate-400">
                    {trade.openPrice}
                  </td>

                  {/* Close */}
                  <td className="px-4 py-4 text-sm text-slate-400">
                    {trade.closePrice}
                  </td>

                  {/* Profit */}
                  <td className="px-4 py-4">
                    <span
                      className={`text-sm font-medium ${
                        isProfit ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {trade.profit}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                      {trade.status}
                    </span>
                  </td>

                  {/* Time */}
                  <td className="px-5 py-4 text-right text-xs text-slate-500">
                    {trade.time}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col gap-3 border-t border-slate-800 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">Showing 1–7 of 128 trades</p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous page"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-500 transition hover:border-slate-600 hover:text-white"
          >
            <FiChevronLeft size={16} />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white"
          >
            1
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-sm text-slate-400 transition hover:text-white"
          >
            2
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-sm text-slate-400 transition hover:text-white"
          >
            3
          </button>

          <button
            type="button"
            aria-label="Next page"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-500 transition hover:border-slate-600 hover:text-white"
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
