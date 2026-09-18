"use client";

import {motion} from "framer-motion";
import {FiActivity, FiArrowDownRight, FiArrowUpRight} from "react-icons/fi";

const positions = [
  {
    symbol: "EUR/USD",
    trader: "Amiri Pro Trader",
    direction: "BUY",
    lotSize: "0.10",
    entry: "1.0850",
    current: "1.0872",
    stopLoss: "1.0800",
    takeProfit: "1.0920",
    pnl: "+$22.40",
    percentage: "+2.06%",
    openTime: "18 Sep, 09:42",
  },
  {
    symbol: "GBP/USD",
    trader: "Amiri Pro Trader",
    direction: "SELL",
    lotSize: "0.08",
    entry: "1.2710",
    current: "1.2690",
    stopLoss: "1.2760",
    takeProfit: "1.2640",
    pnl: "+$18.50",
    percentage: "+1.57%",
    openTime: "18 Sep, 10:15",
  },
  {
    symbol: "XAU/USD",
    trader: "Amiri Pro Trader",
    direction: "BUY",
    lotSize: "0.05",
    entry: "2320.50",
    current: "2325.20",
    stopLoss: "2310.00",
    takeProfit: "2340.00",
    pnl: "+$47.00",
    percentage: "+2.02%",
    openTime: "18 Sep, 11:03",
  },
];

export default function ActivePositionsTable() {
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Open Positions</h2>

          <p className="mt-1 text-sm text-slate-500">
            Monitor all currently open copied positions.
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiActivity size={19} />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[1400px]">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Symbol
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Trader
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Buy / Sell
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Lot Size
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Entry Price
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Current Price
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Stop Loss
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Take Profit
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Profit / Loss
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Open Time
              </th>
            </tr>
          </thead>

          <tbody>
            {positions.map((position) => {
              const isBuy = position.direction === "BUY";

              return (
                <tr
                  key={`${position.symbol}-${position.openTime}`}
                  className="border-b border-slate-100 last:border-0 transition hover:bg-slate-50/50"
                >
                  {/* Symbol */}
                  <td className="px-5 py-4">
                    <span className="font-semibold text-slate-900">
                      {position.symbol}
                    </span>
                  </td>

                  {/* Trader */}
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-slate-700">
                      {position.trader}
                    </span>
                  </td>

                  {/* Direction */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        isBuy
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {isBuy ? (
                        <FiArrowUpRight size={13} />
                      ) : (
                        <FiArrowDownRight size={13} />
                      )}

                      {position.direction}
                    </span>
                  </td>

                  {/* Lot Size */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {position.lotSize}
                  </td>

                  {/* Entry */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {position.entry}
                  </td>

                  {/* Current */}
                  <td className="px-5 py-4 text-sm font-medium text-slate-700">
                    {position.current}
                  </td>

                  {/* Stop Loss */}
                  <td className="px-5 py-4 text-sm text-red-500">
                    {position.stopLoss}
                  </td>

                  {/* Take Profit */}
                  <td className="px-5 py-4 text-sm text-emerald-600">
                    {position.takeProfit}
                  </td>

                  {/* P/L */}
                  <td className="px-5 py-4">
                    <p className="font-semibold text-emerald-600">
                      {position.pnl}
                    </p>

                    <p className="mt-0.5 text-xs text-emerald-500">
                      {position.percentage}
                    </p>
                  </td>

                  {/* Open Time */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {position.openTime}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="space-y-3 p-4 md:hidden">
        {positions.map((position) => {
          const isBuy = position.direction === "BUY";

          return (
            <div
              key={`${position.symbol}-${position.openTime}`}
              className="rounded-xl border border-slate-200 p-4"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900">
                    {position.symbol}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {position.trader}
                  </p>

                  <span
                    className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                      isBuy
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {isBuy ? (
                      <FiArrowUpRight size={12} />
                    ) : (
                      <FiArrowDownRight size={12} />
                    )}

                    {position.direction}
                  </span>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-emerald-600">
                    {position.pnl}
                  </p>

                  <p className="text-xs text-emerald-500">
                    {position.percentage}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-400">Lot Size</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {position.lotSize}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Open Time</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {position.openTime}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Entry Price</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {position.entry}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Current Price</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {position.current}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Stop Loss</p>
                  <p className="mt-1 text-sm font-medium text-red-500">
                    {position.stopLoss}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Take Profit</p>
                  <p className="mt-1 text-sm font-medium text-emerald-600">
                    {position.takeProfit}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
