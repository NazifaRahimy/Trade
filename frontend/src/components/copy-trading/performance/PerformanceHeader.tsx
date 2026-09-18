"use client";

import {motion} from "framer-motion";
import {FiTrendingUp} from "react-icons/fi";

export default function PerformanceHeader() {
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiTrendingUp size={20} />
          </div>

          <span className="text-sm font-medium text-blue-600">
            Copy Trading
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Performance
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Track the performance and profitability of your copied trades over
          time.
        </p>
      </div>

      <select className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500">
        <option>Last 30 Days</option>
        <option>Last 3 Months</option>
        <option>Last 6 Months</option>
        <option>All Time</option>
      </select>
    </motion.div>
  );
}
