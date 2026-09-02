"use client";

import {motion} from "framer-motion";
import {FiChevronDown} from "react-icons/fi";

export default function PortfolioChart() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Portfolio Growth</h2>

        <button className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-xs text-slate-300">
          Last 30 Days
          <FiChevronDown />
        </button>
      </div>

      <div className="mt-7 h-64 w-full">
        <svg
          viewBox="0 0 800 260"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          {/* Horizontal lines */}
          {[30, 75, 120, 165, 210].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="800"
              y2={y}
              stroke="currentColor"
              className="text-slate-800"
            />
          ))}

          {/* Area */}
          <path
            d="
              M0 205
              L35 195
              L70 198
              L105 180
              L140 175
              L175 150
              L210 158
              L245 138
              L280 160
              L315 145
              L350 155
              L385 125
              L420 130
              L455 110
              L490 115
              L525 95
              L560 105
              L595 80
              L630 95
              L665 65
              L700 75
              L735 50
              L770 75
              L800 60
              L800 240
              L0 240
              Z
            "
            fill="currentColor"
            className="text-blue-500/10"
          />

          {/* Line */}
          <path
            d="
              M0 205
              L35 195
              L70 198
              L105 180
              L140 175
              L175 150
              L210 158
              L245 138
              L280 160
              L315 145
              L350 155
              L385 125
              L420 130
              L455 110
              L490 115
              L525 95
              L560 105
              L595 80
              L630 95
              L665 65
              L700 75
              L735 50
              L770 75
              L800 60
            "
            fill="none"
            stroke="currentColor"
            className="text-blue-500"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Current point */}
          <circle
            cx="800"
            cy="60"
            r="6"
            fill="currentColor"
            className="text-blue-400"
          />
        </svg>
      </div>

      <div className="mt-2 flex justify-between text-xs text-slate-500">
        <span>Apr 20</span>
        <span>Apr 27</span>
        <span>May 04</span>
        <span>May 11</span>
        <span>May 18</span>
      </div>
    </motion.div>
  );
}
