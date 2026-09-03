"use client";

import {motion} from "framer-motion";
import {FiDollarSign, FiArrowUpRight} from "react-icons/fi";

export default function BalanceCard() {
  return (
    <motion.div
      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: 0}}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Available Balance</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">$18,450.20</h2>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiDollarSign size={22} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
        <div>
          <p className="text-xs text-slate-500">Equity</p>

          <p className="mt-1 font-semibold text-slate-900">$24,790.50</p>
        </div>

        <div>
          <p className="text-xs text-slate-500">Used Margin</p>

          <p className="mt-1 font-semibold text-slate-900">$6,340.30</p>
        </div>

        <div className="flex items-center gap-1 text-emerald-600">
          <FiArrowUpRight size={16} />
          <span className="text-sm font-medium">12.45%</span>
        </div>
      </div>
    </motion.div>
  );
}
