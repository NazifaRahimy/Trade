"use client";

import {
  FiActivity,
  FiCheckCircle,
  FiXCircle,
  FiDollarSign,
} from "react-icons/fi";
import {useTranslation} from "react-i18next";
// 🚀 دقیقاً هم‌سطح شدن با اینترفیس خط ۱۲ فایل page.tsx شما
interface CopyTradesStatsProps {
  data: {
    total_trades?: number;
    winning_trades?: number;
    losing_trades?: number;
    total_profit?: number | string;
  };
}

export default function CopyTradesStats({data}: CopyTradesStatsProps) {
  const {t} = useTranslation();
  const stats = [
    {
      title: t("myCopyTrading.totalCopiedTrades"),
      value: data?.total_trades ?? 0,
      icon: FiActivity,
      iconBg: "bg-blue-50 text-blue-600",
    },
    {
      title: t("myCopyTrading.winningTrades"),
      value: data?.winning_trades ?? 0,
      icon: FiCheckCircle,
      iconBg: "bg-emerald-50 text-emerald-600",
    },
    {
      title: t("myCopyTrading.losingTrades"),
      value: data?.losing_trades ?? 0,
      icon: FiXCircle,
      iconBg: "bg-red-50 text-red-600",
    },
    {
      title: t("myCopyTrading.totalProfit"),
      value: data?.total_profit ?? "$0.00",
      icon: FiDollarSign,
      iconBg: "bg-blue-50 text-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  {stat.title}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {stat.value}
                </h3>
              </div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconBg}`}
              >
                <Icon size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
