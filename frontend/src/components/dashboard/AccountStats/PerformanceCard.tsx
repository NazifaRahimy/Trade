"use client";

import {motion} from "framer-motion";
import {FiActivity, FiTrendingUp} from "react-icons/fi";

export default function PerformanceCard() {
  return (
    <motion.div
      initial={{opacity: 0, x: 20}}
      animate={{opacity: 1, x: 0}}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Trading Performance</p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">+18.72%</h2>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <FiTrendingUp size={22} />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-500">Winning Trades</span>

            <span className="font-medium text-slate-900">72.8%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={{width: 0}}
              animate={{width: "72.8%"}}
              transition={{duration: 0.8}}
              className="h-full rounded-full bg-emerald-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Total Trades</span>

          <div className="flex items-center gap-2 text-slate-900">
            <FiActivity size={16} />
            <span className="font-medium">126</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
