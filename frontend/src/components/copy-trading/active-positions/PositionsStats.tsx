"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiDollarSign, FiLink, FiActivity } from "react-icons/fi";

type PositionsStatsProps = {
  positions: any[];
};

export default function PositionsStats({ positions }: PositionsStatsProps) {
  // 📊 محاسبات کاملا داینامیک ریاضی بر روی معاملات باز زنده متاتریدر ۵ کاربر
  const openPositionsCount = positions.length;
  const totalVolume = positions.reduce((sum, pos) => sum + Number(pos.lot_size), 0);
  const totalFloatingPnL = positions.reduce((sum, pos) => sum + Number(pos.profit_loss), 0);
  
  const stats = [
    {
      title: "Open Positions",
      value: openPositionsCount,
      description: "Currently active live",
      icon: FiActivity,
      iconBg: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Volume",
      value: `${totalVolume.toFixed(2)} Lots`,
      description: "Combined market volume",
      icon: FiBarChart2,
      iconBg: "bg-purple-50 text-purple-600",
    },
    {
      title: "Floating P/L",
      value: `${totalFloatingPnL >= 0 ? "+" : ""}$${totalFloatingPnL.toFixed(2)}`,
      description: "Current unrealized P/L",
      icon: FiDollarSign,
      iconBg: totalFloatingPnL >= 0 ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600",
      valueClass: totalFloatingPnL >= 0 ? "text-emerald-600" : "text-red-600",
    },
    {
      title: "Copy Status",
      value: openPositionsCount > 0 ? "Active" : "Idle",
      description: openPositionsCount > 0 ? "Trades are being copied" : "Waiting for master trades",
      icon: FiLink,
      iconBg: openPositionsCount > 0 ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-6 w-full">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-slate-400 font-medium">{stat.title}</p>
              <h3 className={`text-xl font-bold mt-2 text-slate-900 ${stat.valueClass || ""}`}>
                {stat.value}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1">{stat.description}</p>
            </div>
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconBg}`}>
              <Icon size={18} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
