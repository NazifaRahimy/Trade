"use client";
import {useTranslation} from "react-i18next";

import {motion} from "framer-motion";
import {FiActivity, FiAward, FiTrendingUp, FiPieChart} from "react-icons/fi";

// ساختار دریافت اطلاعات خلاصه مالی از دیتابیس واقعی جنگو
type TradeStatsProps = {
  summary: {
    total_trades: number;
    winning_trades: number;
    win_rate: string;
    total_profit: string;
    total_loss: string;
    trading_volume: number;
  } | null;
};

export default function TradeStats({summary}: TradeStatsProps) {
  // اگر دیتا هنوز لود نشده بود، مقادیر صفر نمایش داده شوند
  const displayStats = summary || {
    total_trades: 0,
    winning_trades: 0,
    win_rate: "0%",
    total_profit: "\$0.00",
    total_loss: "\$0.00",
    trading_volume: 0,
  };
  const {t} = useTranslation();
  const cards = [
    {
      title: t("telegramBotTradeHistory.totalTrades"),
      value: displayStats.total_trades,
      change: t("telegramBotTradeHistory.winning", {
        count: displayStats.winning_trades,
      }),
      icon: FiActivity,
      iconStyle: "bg-blue-50 text-blue-600",
    },
    {
      title: t("telegramBotTradeHistory.winRate"),
      value: displayStats.win_rate,
      change: t("telegramBotTradeHistory.realHistoricalStats"),
      icon: FiAward,
      iconStyle: "bg-purple-50 text-purple-600",
    },
    {
      title: t("telegramBotTradeHistory.totalProfit"),
      value: displayStats.total_profit,
      change: t("telegramBotTradeHistory.loss", {
        amount: displayStats.total_loss,
      }),
      icon: FiTrendingUp,
      iconStyle: "bg-emerald-50 text-emerald-600",
    },
    {
      title: t("telegramBotTradeHistory.tradingVolume"),
      value: `${displayStats.trading_volume} ${t(
        "telegramBotTradeHistory.lots",
      )}`,
      change: t("telegramBotTradeHistory.accumulatedVolume"),
      icon: FiPieChart,
      iconStyle: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-6">
      {/* 🚀 رندر کاملاً داینامیک و فیکس شده حلقه بدون ارور ۵۰۰ */}
      {cards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: index * 0.08}}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-slate-500 font-medium">{stat.title}</p>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                {stat.value}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1">{stat.change}</p>
            </div>
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconStyle}`}
            >
              <Icon size={19} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
