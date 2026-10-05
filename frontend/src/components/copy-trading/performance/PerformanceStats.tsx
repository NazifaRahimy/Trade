"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {
  FiDollarSign,
  FiTrendingUp,
  FiTarget,
  FiAlertCircle,
  FiPercent,
} from "react-icons/fi";

type PerformanceStatsProps = {
  stats: {
    total_profit: string;
    roi: string;
    win_rate: string;
    max_drawdown: string;
    profit_factor: string;
  } | null;
};

export default function PerformanceStats({stats}: PerformanceStatsProps) {
  const {t} = useTranslation();
  const cardItems = [
    {
      title: t("copyTradingPerformance.copyTradingPerformanceTotalProfit"),
      value: stats?.total_profit || "$0.00",
      desc: t(
        "copyTradingPerformance.copyTradingPerformanceTotalProfitDescription",
      ),
      icon: FiDollarSign,
      bg: "bg-emerald-50",
      color: "text-emerald-600",
    },
    {
      title: t("copyTradingPerformance.copyTradingPerformanceRoi"),
      value: stats?.roi || "0.00%",
      desc: t("copyTradingPerformance.copyTradingPerformanceRoiDescription"),
      icon: FiTrendingUp,
      bg: "bg-blue-50",
      color: "text-blue-600",
    },
    {
      title: t("copyTradingPerformance.copyTradingPerformanceWinRate"),
      value: stats?.win_rate || "0.0%",
      desc: t(
        "copyTradingPerformance.copyTradingPerformanceWinRateDescription",
      ),
      icon: FiTarget,
      bg: "bg-indigo-50",
      color: "text-indigo-600",
    },
    {
      title: t("copyTradingPerformance.copyTradingPerformanceMaximumDrawdown"),
      value: stats?.max_drawdown || "0.00%",
      desc: t(
        "copyTradingPerformance.copyTradingPerformanceMaximumDrawdownDescription",
      ),
      icon: FiAlertCircle,
      bg: "bg-red-50",
      color: "text-red-600",
    },
    {
      title: t("copyTradingPerformance.copyTradingPerformanceProfitFactor"),
      value: stats?.profit_factor || "0.00",
      desc: t(
        "copyTradingPerformance.copyTradingPerformanceProfitFactorDescription",
      ),
      icon: FiPercent,
      bg: "bg-amber-50",
      color: "text-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {cardItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: index * 0.08}}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-hover hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  {item.title}
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  {item.value}
                </h2>
              </div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
              >
                <Icon size={19} />
              </div>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">{item.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
