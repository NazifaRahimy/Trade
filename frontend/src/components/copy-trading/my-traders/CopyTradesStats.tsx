"use client";

import {useTranslation} from "react-i18next";
import {FiDollarSign, FiPercent, FiTrendingUp, FiUsers} from "react-icons/fi";
interface CopyTradesStatsProps {
  data?: {
    active_traders?: number;
    activeTraders?: number;
    investment?: number | string;
    total_investment?: number | string;
    total_profit?: number | string;
    totalProfit?: number | string;
    return?: number | string;
    return_percentage?: number | string;
    returnPercentage?: number | string;
  };
}
export default function CopyTradesStats({data}: CopyTradesStatsProps) {
  const {t} = useTranslation();
  const activeTraders = data?.active_traders ?? data?.activeTraders ?? 0;
  const investment = data?.investment ?? data?.total_investment ?? 0;
  const totalProfit = data?.total_profit ?? data?.totalProfit ?? 0;
  const returnPercentage =
    data?.return ?? data?.return_percentage ?? data?.returnPercentage ?? 0;

  const stats = [
    {
      title: t("copyTradingMyTraders.activeTraders"),
      value: activeTraders,
      icon: FiUsers,
      description: t("copyTradingMyTraders.activeTradersDescription"),
      iconClass: "bg-blue-50 text-blue-600",
    },
    {
      title: t("copyTradingMyTraders.investment"),
      value: `$${Number(investment).toLocaleString()}`,
      icon: FiDollarSign,
      description: t("copyTradingMyTraders.investmentDescription"),
      iconClass: "bg-violet-50 text-violet-600",
    },
    {
      title: t("copyTradingMyTraders.totalProfit"),
      value: `$${Number(totalProfit).toLocaleString()}`,
      icon: FiTrendingUp,
      description: t("copyTradingMyTraders.totalProfitDescription"),
      iconClass: "bg-emerald-50 text-emerald-600",
    },
    {
      title: t("copyTradingMyTraders.return"),
      value: `${returnPercentage}%`,
      icon: FiPercent,
      description: t("copyTradingMyTraders.returnDescription"),
      iconClass: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                  {stat.value}
                </p>
              </div>
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${stat.iconClass}`}
              >
                <Icon size={20} />
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">{stat.description}</p>
          </div>
        );
      })}
    </section>
  );
}
