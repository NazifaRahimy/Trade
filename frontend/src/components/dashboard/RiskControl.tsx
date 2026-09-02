"use client";

import {motion} from "framer-motion";

export default function RiskControl() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
    >
      <h2 className="text-lg font-bold text-white">Risk Control</h2>

      <div className="mt-7 flex flex-col items-center">
        {/* Gauge */}
        <div className="relative h-28 w-56 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-56 w-56 rounded-full"
            style={{
              background:
                "conic-gradient(from 270deg, #22c55e 0deg 80deg, #facc15 80deg 125deg, #fb923c 125deg 150deg, #ef4444 150deg 180deg, transparent 180deg)",
            }}
          />

          <div className="absolute left-5 top-5 h-46 w-46 rounded-full bg-slate-900" />

          {/* Needle */}
          <div className="absolute bottom-3 left-1/2 h-20 w-1 origin-bottom -translate-x-1/2 rotate-[35deg] rounded-full bg-white" />

          <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-slate-800 ring-2 ring-slate-600" />
        </div>

        <div className="-mt-1 text-center">
          <p className="text-2xl font-bold text-white">2.3%</p>

          <p className="text-xs text-slate-400">Current Risk</p>
        </div>

        <div className="mt-3 flex w-full justify-between text-xs text-slate-400">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>

      <button className="mt-5 w-full rounded-lg bg-slate-800 py-3 text-sm font-semibold text-white hover:bg-slate-700">
        Adjust Settings
      </button>
    </motion.div>
  );
}
