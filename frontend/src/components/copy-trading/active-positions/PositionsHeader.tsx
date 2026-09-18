"use client";

import {motion} from "framer-motion";
import {FiActivity, FiRefreshCw} from "react-icons/fi";

export default function PositionsHeader() {
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
            <FiActivity size={20} />
          </div>

          <span className="text-sm font-medium text-blue-600">
            Copy Trading
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Active Positions
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Monitor your currently open positions that are being copied from the
          professional trader.
        </p>
      </div>

      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
      >
        <FiRefreshCw size={16} />
        Refresh
      </button>
    </motion.div>
  );
}
