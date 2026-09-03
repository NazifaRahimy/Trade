"use client";

import {motion} from "framer-motion";
import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiPercent,
} from "react-icons/fi";

const stats = [
  {
    title: "Account Balance",
    value: "$24,790.50",
    description: "Current account balance",
    icon: FiDollarSign,
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "Total Profit",
    value: "$4,290.30",
    description: "+18.72% this month",
    icon: FiTrendingUp,
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Total Loss",
    value: "$1,120.40",
    description: "From closed positions",
    icon: FiTrendingDown,
    iconClass: "bg-red-50 text-red-500",
  },
  {
    title: "Win Rate",
    value: "72.8%",
    description: "+4.65% improvement",
    icon: FiPercent,
    iconClass: "bg-purple-50 text-purple-600",
  },
];

export default function AccountOverview() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.title}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: index * 0.08}}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{stat.title}</p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {stat.value}
                </h3>

                <p className="mt-2 text-xs text-slate-500">
                  {stat.description}
                </p>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconClass}`}
              >
                <Icon size={20} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
