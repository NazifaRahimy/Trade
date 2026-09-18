"use client";

import {motion} from "framer-motion";
import {FiArrowDownRight, FiArrowUpRight, FiDollarSign} from "react-icons/fi";

export default function ProfitLossOverview() {
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiDollarSign size={19} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900">Profit & Loss</h2>

          <p className="text-sm text-slate-500">
            Overview of your trading results
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-slate-500">Gross Profit</span>

            <span className="font-semibold text-emerald-600">+$1,682.40</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[78%] rounded-full bg-emerald-500" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-slate-500">Gross Loss</span>

            <span className="font-semibold text-red-600">-$397.80</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[22%] rounded-full bg-red-500" />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-emerald-50 p-4">
          <div className="flex items-center gap-2 text-emerald-600">
            <FiArrowUpRight size={17} />

            <span className="text-sm font-medium">Winning Trades</span>
          </div>

          <p className="mt-2 text-xl font-bold text-slate-900">32</p>
        </div>

        <div className="rounded-xl bg-red-50 p-4">
          <div className="flex items-center gap-2 text-red-600">
            <FiArrowDownRight size={17} />

            <span className="text-sm font-medium">Losing Trades</span>
          </div>

          <p className="mt-2 text-xl font-bold text-slate-900">10</p>
        </div>
      </div>
    </motion.div>
  );
}
