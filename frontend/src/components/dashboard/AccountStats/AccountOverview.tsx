"use client";

import { motion } from "framer-motion";
import { FiDollarSign, FiTrendingUp, FiTrendingDown, FiPercent } from "react-icons/fi";

type AccountOverviewProps = {
  data: any;
};

export default function AccountOverview({ data }: AccountOverviewProps) {
  const stats = [
    {
      title: "Account Balance",
      value: data?.account_balance || "\$0.00",
      description: "Current account balance",
      icon: FiDollarSign,
      iconClass: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Profit",
      value: data?.total_profit || "\$0.00",
      description: "Accumulated clean gains",
      icon: FiTrendingUp,
      iconClass: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Total Loss",
      value: data?.total_loss || "\$0.00",
      description: "From closed positions",
      icon: FiTrendingDown,
      iconClass: "bg-red-50 text-red-600",
    },
    {
      title: "Win Rate",
      value: data?.win_rate || "0%",
      description: "Historical hit ratio",
      icon: FiPercent,
      iconClass: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{stat.title}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{stat.value}</h3>
                <p className="mt-2 text-xs text-slate-400">{stat.description}</p>
              </div>
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconClass}`}>
                <Icon size={20} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
