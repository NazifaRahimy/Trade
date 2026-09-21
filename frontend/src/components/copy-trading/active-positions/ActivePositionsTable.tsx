"use client";

import { motion } from "framer-motion";
import { FiActivity, FiTrendingUp, FiTrendingDown } from "react-icons/fi";

type ActivePositionsTableProps = {
  positions: any[];
};

export default function ActivePositionsTable({ positions }: ActivePositionsTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm w-full"
    >
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiActivity size={16} />
          </div>
          <h2 className="text-sm font-bold text-slate-900">Live Copied Positions</h2>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="p-3">Symbol</th>
              <th className="p-3">Trader</th>
              <th className="p-3">Direction</th>
              <th className="p-3">Lot Size</th>
              <th className="p-3">Entry Price</th>
              <th className="p-3">Live Profit/Loss</th>
              <th className="p-3">Open Time</th>
            </tr>
          </thead>
          <tbody className="text-xs text-slate-700 divide-y divide-slate-50">
            {positions.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-8 text-center text-slate-400 italic">
                  No active copier trades streaming on MT5 account right now.
                </td>
              </tr>
            ) : (
              positions.map((pos) => {
                const isProfit = Number(pos.profit_loss) >= 0;
                return (
                  <tr key={pos.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-3 font-bold text-slate-900">{pos.symbol}</td>
                    <td className="p-3 text-slate-500">{pos.trader_name || "Master"}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-md font-semibold text-[10px] ${
                        pos.order_type === "BUY" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                      }`}>
                        {pos.order_type}
                      </span>
                    </td>
                    <td className="p-3 font-mono font-medium">{Number(pos.lot_size).toFixed(2)}</td>
                    <td className="p-3 font-mono text-slate-600">\${Number(pos.entry_price).toFixed(2)}</td>
                    <td className={`p-3 font-mono font-bold flex items-center gap-1 ${isProfit ? "text-emerald-600" : "text-red-600"}`}>
                      {isProfit ? <FiTrendingUp size={13} /> : <FiTrendingDown size={13} />}
                      {pos.profit_loss_display || `${isProfit ? "+" : ""}$${Number(pos.profit_loss).toFixed(2)}`}
                    </td>
                    <td className="p-3 text-slate-400 font-medium">{pos.open_time_display || "Just Now"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
