"use client";

import {motion} from "framer-motion";
import {FiCopy, FiInfo} from "react-icons/fi";

export default function CopyTradesHeader() {
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
            <FiCopy size={20} />
          </div>

          <span className="text-sm font-medium text-blue-600">
            Copy Trading
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          My Copy Trades
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          View and monitor the trades that are copied from the professional
          trader to your connected trading account.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <FiInfo className="text-blue-500" size={18} />

        <span className="text-sm text-slate-600">
          Copying is currently{" "}
          <span className="font-semibold text-emerald-600">Active</span>
        </span>
      </div>
    </motion.div>
  );
}
