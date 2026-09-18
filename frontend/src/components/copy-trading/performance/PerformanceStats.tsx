"use client";

import {motion} from "framer-motion";
import {
  FiDollarSign,
  FiPercent,
  FiTarget,
  FiTrendingDown,
  FiTrendingUp,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Profit",
    value: "+$1,284.60",
    description: "Net profit from copied trades",
    icon: FiDollarSign,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "ROI",
    value: "+12.45%",
    description: "Return on investment",
    icon: FiTrendingUp,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Win Rate",
    value: "76.4%",
    description: "Winning copied trades",
    icon: FiTarget,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Maximum Drawdown",
    value: "6.42%",
    description: "Largest portfolio decline",
    icon: FiTrendingDown,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    title: "Profit Factor",
    value: "2.18",
    description: "Profitability ratio",
    icon: FiPercent,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function PerformanceStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.title}
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}
              >
                <Icon size={21} />
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500">{stat.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
