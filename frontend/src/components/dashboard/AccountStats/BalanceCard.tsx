"use client";

import { motion } from "framer-motion";
import { FiDollarSign, FiArrowUpRight } from "react-icons/fi";

type BalanceCardProps = {
  data: any;
};

export default function BalanceCard({ data }: BalanceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 font-medium">Available Balance</p>
          {/* موجودی در دسترس داینامیک */}
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {data?.available_balance || "$0.00"}
          </h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiDollarSign size={22} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
        <div>
          <p className="text-xs text-slate-500">Equity</p>
          {/* اکویتی واقعی حساب */}
          <p className="text-sm font-semibold text-slate-900 mt-1">
            {data?.equity || "$0.00"}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">Used Margin</p>
          {/* مارجین درگیر معامله */}
          <p className="text-sm font-semibold text-slate-900 mt-1">
            {data?.used_margin || "$0.00"}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600">
        <FiArrowUpRight size={16} />
        <span>Margin Level Percent: <strong>{data?.margin_level_percent || "0%"}</strong></span>
      </div>
    </motion.div>
  );
}
