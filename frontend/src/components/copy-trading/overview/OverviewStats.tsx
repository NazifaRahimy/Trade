"use client";

import {
  FiDollarSign,
  FiCopy,
  FiTrendingUp,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

// 🚀 تعریف تایپ پرپس ورودی برای دریافت دیتای زنده از صفحه مادر
type OverviewStatsProps = {
  statsData: {
    total_balance: string;
    copy_trading_balance: string;
    total_profit: string;
    active_traders: number;
    win_rate: string;
  } | null;
};

export default function OverviewStats({ statsData }: OverviewStatsProps) {
  const stats = [
    {
      title: "Total Balance",
      value: statsData?.total_balance || "\$0.00",
      icon: FiDollarSign,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Copy Trading Balance",
      value: statsData?.copy_trading_balance || "\$0.00",
      icon: FiCopy,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: "Total Profit",
      value: statsData?.total_profit || "\$0.00",
      icon: FiTrendingUp,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Active Traders",
      value: statsData?.active_traders?.toString() || "0",
      icon: FiUsers,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Win Rate",
      value: statsData?.win_rate || "0.0%",
      icon: FiTarget,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-text text-slate-500">{stat.title}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  {stat.value}
                </h3>
              </div>
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}>
                <Icon size={21} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}