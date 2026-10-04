"use client";

import React from "react";
import { FiActivity, FiBarChart2, FiDollarSign, FiTrendingUp } from "react-icons/fi";

interface OverviewStatsProps {
  stats: any;
  openCount: number;
}

export default function OverviewStats({ stats, openCount }: OverviewStatsProps) {
  // 🟢 تراز کردن دقیق و خط به خط داده‌های پایتون با حفظ آیکون‌ها و استایل بومی شما
  const statsItems = [
    {
      title: "Open Trades",
      value: openCount !== undefined && openCount !== null ? openCount.toString() : "0",
      description: "Currently active",
      icon: FiActivity,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Pending Signals",
      value: stats?.todays_trades_count ? stats.todays_trades_count.toString() : "0",
      description: "Waiting for confirmation",
      icon: FiBarChart2,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Today's P/L",
      value: stats?.profit_today ? `+$${parseFloat(stats.profit_today).toFixed(2)}` : "+\$0.00",
      description: "Current daily result",
      icon: FiDollarSign,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Win Rate",
      value: stats?.win_rate ? `${stats.win_rate}%` : "0%",
      description: "Today's performance",
      icon: FiTrendingUp,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {statsItems.map((stat) => {
        const Icon = stat.icon;
        return (
          <div 
            key={stat.title} 
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900 font-mono">
                  {stat.value}
                </h2>
                <p className="mt-1 text-xs text-gray-400">{stat.description}</p>
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
