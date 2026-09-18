"use client";

import {motion} from "framer-motion";
import {FiTrendingUp} from "react-icons/fi";

export default function PerformanceChart() {
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Equity Curve</h2>

          <p className="mt-1 text-sm text-slate-500">
            Growth of your copy trading account over time
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <FiTrendingUp size={19} />
        </div>
      </div>

      <div className="mt-6 h-[280px] w-full">
        <svg
          viewBox="0 0 800 280"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="performanceFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>

          <line x1="0" y1="60" x2="800" y2="60" stroke="#e2e8f0" />

          <line x1="0" y1="120" x2="800" y2="120" stroke="#e2e8f0" />

          <line x1="0" y1="180" x2="800" y2="180" stroke="#e2e8f0" />

          <line x1="0" y1="240" x2="800" y2="240" stroke="#e2e8f0" />

          <path
            d="M0 220
               C60 210 90 215 130 195
               C170 175 190 185 230 170
               C270 155 300 165 340 145
               C380 125 410 140 450 115
               C490 92 520 110 555 90
               C600 65 630 82 670 60
               C710 42 750 50 800 30
               L800 280
               L0 280 Z"
            fill="url(#performanceFill)"
          />

          <path
            d="M0 220
               C60 210 90 215 130 195
               C170 175 190 185 230 170
               C270 155 300 165 340 145
               C380 125 410 140 450 115
               C490 92 520 110 555 90
               C600 65 630 82 670 60
               C710 42 750 50 800 30"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <circle cx="800" cy="30" r="6" fill="#2563eb" />
        </svg>
      </div>

      <div className="mt-3 flex justify-between text-xs text-slate-400">
        <span>Start of Period </span>
        <span>Today</span>
      </div>
    </motion.div>
  );
}
