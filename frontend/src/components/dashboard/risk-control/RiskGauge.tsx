"use client";

import {motion} from "framer-motion";

export default function RiskGauge() {
  const risk = 23;

  return (
    <motion.div
      initial={{opacity: 0, y: 30}}
      animate={{opacity: 1, y: 0}}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
    >
      <h3 className="mb-6 text-xl font-semibold text-white">
        Current Risk Level
      </h3>

      <div className="flex justify-center">
        <div className="relative h-44 w-44">
          <div className="absolute inset-0 rounded-full border-[12px] border-green-500/30" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">{risk}%</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-green-400">Low Risk</p>
    </motion.div>
  );
}
