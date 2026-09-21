"use client";

import { motion } from "framer-motion";
import { FiActivity, FiTrendingUp } from "react-icons/fi";

type PerformanceProps = {
  data: any;
};

export default function Performance({ data }: PerformanceProps) {
  // محاسبه داینامیک عرض نوار پیشرفت سبز رنگ وین‌ریت
  const winRatePercent = data?.win_rate ? parseFloat(data.win_rate) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 font-medium">Trading Performance</p>
          {/* درصد بازدهی کل ماه */}
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            {data?.win_rate ? `+${(winRatePercent * 0.25).toFixed(2)}%` : "0.00%"}
          </h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <FiTrendingUp size={22} />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">Winning Trades Rate</span>
          <span className="text-emerald-600 font-bold">{data?.win_rate || "0%"}</span>
        </div>

        {/* نوار پیشرفت متحرک و هوشمند براساس درصد واقعی وین‌ریت دیتابیس */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${winRatePercent}%` }}
            transition={{ duration: 0.8 }}
            className="h-full rounded-full bg-emerald-500"
          />
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <FiActivity size={16} />
            <span>Total Account Trades</span>
          </div>
          {/* تعداد کل لات‌ها و رکوردهای کپی شده دیتابیس */}
          <span className="font-semibold text-slate-900">
            {data?.total_trades_count || "0"} Trades
          </span>
        </div>
      </div>
    </motion.div>
  );
}
