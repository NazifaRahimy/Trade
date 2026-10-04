"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiBarChart2} from "react-icons/fi";

type DailyItem = {day: string; profit: number};
type DailyPerformanceProps = {dailyData: DailyItem[] | null};

export default function DailyPerformance({dailyData}: DailyPerformanceProps) {
  const {t} = useTranslation();
  const data = dailyData || [];
  const maxVal =
    data.length > 0
      ? Math.max(...data.map((item) => Math.abs(item.profit)))
      : 100;

  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-slate-50 pb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-bold text-slate-900">
            {" "}
            {t("copyTradingPerformance.copyTradingPerformanceDailyPerformance")}
          </h2>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <FiBarChart2 size={16} />
        </div>
      </div>

      <div className="mt-6 flex h-48 items-end justify-between gap-2 border-b border-slate-100 pb-2 px-2">
        {data.map((item) => {
          const isProfit = item.profit >= 0;
          const heightPct = `${Math.max(5, (Math.abs(item.profit) / maxVal) * 100)}%`;

          return (
            <div
              key={item.day}
              className="flex h-full flex-col items-center justify-end flex-1"
            >
              <span
                className={`text-[10px] font-bold ${isProfit ? "text-emerald-600" : "text-red-500"}`}
              >
                {isProfit ? "+" : ""}
                {item.profit}
              </span>
              <div
                style={{height: heightPct}}
                className={`w-full max-w-[36px] rounded-t-lg transition-all duration-500 ${isProfit ? "bg-emerald-500" : "bg-red-400"}`}
              />
              <span className="mt-2 text-[11px] font-semibold text-slate-400">
                {item.day}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
