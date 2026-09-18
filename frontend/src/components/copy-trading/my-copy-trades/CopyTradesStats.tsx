"use client";

import {motion} from "framer-motion";
import {FiActivity, FiDollarSign, FiTrendingUp, FiUsers} from "react-icons/fi";

const stats = [
  {
    title: "Active Traders",
    value: "1",
    description: "Currently copying",
    icon: FiUsers,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Investment",
    value: "$5,000",
    description: "Current copy investment",
    icon: FiDollarSign,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Total Profit",
    value: "+$1,284.60",
    description: "Profit from copy trading",
    icon: FiActivity,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Return",
    value: "+24.82%",
    description: "Overall copy return",
    icon: FiTrendingUp,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function CopyTradesStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
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
