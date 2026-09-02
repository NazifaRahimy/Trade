"use client";

import {motion} from "framer-motion";
import {FiActivity, FiTrendingUp} from "react-icons/fi";

export default function PerformanceCard() {
  return (
    <motion.div
      initial={{opacity: 0, x: 20}}
      animate={{opacity: 1, x: 0}}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Trading Performance</p>

          <h2 className="mt-2 text-2xl font-bold text-white">+18.72%</h2>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
          <FiTrendingUp size={22} />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-400">Winning Trades</span>

            <span className="text-white">72.8%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{width: 0}}
              animate={{width: "72.8%"}}
              transition={{duration: 0.8}}
              className="h-full rounded-full bg-emerald-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Total Trades</span>

          <div className="flex items-center gap-2 text-white">
            <FiActivity size={16} />
            <span>126</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
