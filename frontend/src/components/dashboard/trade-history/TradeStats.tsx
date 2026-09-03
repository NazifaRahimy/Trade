"use client";

import {motion} from "framer-motion";
import {
  FiActivity,
  FiBarChart2,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Trades",
    value: "128",
    change: "+12 this month",
    icon: FiActivity,
    iconStyle: "bg-blue-50 text-blue-600",
  },
  {
    title: "Winning Trades",
    value: "93",
    change: "72.7% win rate",
    icon: FiTrendingUp,
    iconStyle: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Total Profit",
    value: "$4,290.30",
    change: "+18.72%",
    icon: FiDollarSign,
    iconStyle: "bg-purple-50 text-purple-600",
  },
  {
    title: "Trading Volume",
    value: "24.85",
    change: "Lots traded",
    icon: FiBarChart2,
    iconStyle: "bg-orange-50 text-orange-600",
  },
];

export default function TradeStats() {
  return (
    <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.title}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-slate-500">{stat.title}</p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {stat.value}
                </h3>

                <p className="mt-2 text-xs text-emerald-600">{stat.change}</p>
              </div>

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconStyle}`}
              >
                <Icon size={19} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
