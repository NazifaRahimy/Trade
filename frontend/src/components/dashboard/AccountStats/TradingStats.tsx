"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiTarget, FiClock, FiRepeat } from "react-icons/fi";

type TradingStatsProps = {
  data: any;
};

export default function TradingStats({ data }: TradingStatsProps) {
  const items = [
    {
      label: "Total Trades",
      value: data?.total_trades_count || "0",
      icon: FiBarChart2,
    },
    {
      label: "Winning Trades",
      value: data?.winning_trades_count || "0",
      icon: FiTarget,
    },
    {
      label: "Average Duration",
      value: "4h 32m", // ثابت به عنوان برآورد کلی یا دریافت داینامیک در آینده
      icon: FiClock,
    },
    {
      label: "Active Trades",
      value: data?.active_trades_count || "0", // پوزیشن‌های زنده در همین لحظه روی چارت MT5
      icon: FiRepeat,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900 mb-5">Trading Statistics</h2>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 rounded-xl border border-slate-50 bg-slate-50/50 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-100 text-blue-600">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">{item.label}</p>
                <p className="text-base font-bold text-slate-900 mt-0.5">{item.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
