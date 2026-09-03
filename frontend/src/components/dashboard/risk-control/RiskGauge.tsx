"use client";

import {motion} from "framer-motion";

export default function RiskGauge() {
  const risk = 23;

  return (
    <motion.div
      initial={{opacity: 0, y: 30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h3 className="mb-6 text-xl font-semibold text-slate-900">
        Current Risk Level
      </h3>

      <div className="flex justify-center">
        <div className="relative h-44 w-44">
          {/* Gauge Circle */}
          <div className="absolute inset-0 rounded-full border-[12px] border-emerald-100" />

          {/* Risk Value */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-slate-900">{risk}%</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-sm font-medium text-emerald-600">
        Low Risk
      </p>
    </motion.div>
  );
}
