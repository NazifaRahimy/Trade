"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiBarChart2,
  FiClock,
} from "react-icons/fi";

type PerformanceBreakdownProps = {
  breakdownData: {
    best_trade: string;
    worst_trade: string;
    average_trade: string;
    avg_holding_time: string;
  } | null;
};

export default function PerformanceBreakdown({
  breakdownData,
}: PerformanceBreakdownProps) {
  const {t} = useTranslation();
  const gridItems = [
    {
      label: t("copyTradingPerformance.copyTradingPerformanceBestTrade"),
      value: breakdownData?.best_trade || "$0.00",
      icon: FiTrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: t("copyTradingPerformance.copyTradingPerformanceWorstTrade"),
      value: breakdownData?.worst_trade || "$0.00",
      icon: FiTrendingDown,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      label: t("copyTradingPerformance.copyTradingPerformanceAverageTrade"),
      value: breakdownData?.average_trade || "$0.00",
      icon: FiBarChart2,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: t(
        "copyTradingPerformance.copyTradingPerformanceAverageHoldingTime",
      ),
      value: breakdownData?.avg_holding_time || "0h 0m",
      icon: FiClock,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-base font-bold text-slate-900 border-b border-slate-50 pb-4">
        {" "}
        {t("copyTradingPerformance.copyTradingPerformanceBreakdown")}
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {gridItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-xl border border-slate-100 bg-slate-50/50 p-4"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <Icon size={16} className={item.color} />
                <span className="text-[11px] font-semibold">{item.label}</span>
              </div>
              <p className="mt-2 text-base font-bold text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
