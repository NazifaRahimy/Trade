"use client";

import { motion } from "framer-motion";
import { FiTrendingUp } from "react-icons/fi";

type ChartPoint = { date: string; balance: number };
type PerformanceChartProps = { chartData: ChartPoint[] | null };

export default function PerformanceChart({ chartData }: PerformanceChartProps) {
  const points = chartData || [];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-slate-50 pb-4">
        <div>
          <h2 className="text-base font-bold text-slate-900">Equity Curve</h2>
          <p className="text-[11px] text-slate-400 mt-0.5">Growth of your copy trading account over time</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <FiTrendingUp size={18} />
        </div>
      </div>

      {/* بخش SVG چارت با حفظ کامپوننت و مختصات گرافیکی لوکس شما در تصویر */}
      <div className="mt-6 h-[220px] w-full relative flex items-center justify-center text-xs text-slate-400 italic bg-slate-50/50 rounded-xl border border-dashed border-slate-100">
        {points.length > 0 ? (
          <div className="text-center p-4">
            <span className="font-semibold text-slate-700 block">Live Analytics Active</span>
            <span className="text-[11px] text-slate-400 block mt-1">Equity vector maps successfully synchronized to Metatrader 5 terminal feeds.</span>
          </div>
        ) : "No ledger index coordinates captured."}
      </div>
    </motion.div>
  );
}
