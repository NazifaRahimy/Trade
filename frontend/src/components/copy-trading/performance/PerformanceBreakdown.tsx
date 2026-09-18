"use client";

import {motion} from "framer-motion";
import {FiBarChart2, FiClock, FiTarget, FiTrendingDown} from "react-icons/fi";

const data = [
  {
    label: "Best Trade",
    value: "+$124.80",
    icon: FiTrendingUpIcon,
  },
  {
    label: "Worst Trade",
    value: "-$48.20",
    icon: FiTrendingDown,
  },
  {
    label: "Average Trade",
    value: "+$30.58",
    icon: FiBarChart2,
  },
  {
    label: "Avg. Holding Time",
    value: "4h 32m",
    icon: FiClock,
  },
];

function FiTrendingUpIcon() {
  return <FiTarget size={19} />;
}

export default function PerformanceBreakdown() {
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-lg font-bold text-slate-900">
        Performance Breakdown
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Key statistics from your copied trades.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {data.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-xl border border-slate-100 bg-slate-50/60 p-4"
            >
              <div className="flex items-center gap-2 text-slate-500">
                <Icon size={18} />

                <span className="text-sm">{item.label}</span>
              </div>

              <p className="mt-2 text-lg font-bold text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
