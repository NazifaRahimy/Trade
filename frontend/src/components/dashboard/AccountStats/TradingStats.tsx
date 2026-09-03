"use client";

import {motion} from "framer-motion";
import {FiBarChart2, FiTarget, FiClock, FiRepeat} from "react-icons/fi";

const items = [
  {
    label: "Total Trades",
    value: "126",
    icon: FiBarChart2,
  },
  {
    label: "Winning Trades",
    value: "92",
    icon: FiTarget,
  },
  {
    label: "Average Duration",
    value: "4h 32m",
    icon: FiClock,
  },
  {
    label: "Active Trades",
    value: "8",
    icon: FiRepeat,
  },
];

export default function TradingStats() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Trading Statistics
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: index * 0.08}}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm">
                  <Icon size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">{item.label}</p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
