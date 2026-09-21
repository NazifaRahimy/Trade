"use client";

import {
  FiActivity,
  FiCheckCircle,
  FiDollarSign,
  FiXCircle,
} from "react-icons/fi";

interface CopyTradesStatsProps {
  data?: {
    total_trades?: number;
    winning_trades?: number;
    losing_trades?: number;
    total_profit?: number | string;
  };
}

export default function CopyTradesStats({data}: CopyTradesStatsProps) {
  const stats = [
    {
      title: "Total Copied Trades",
      value: data?.total_trades ?? 0,
      icon: FiActivity,
    },
    {
      title: "Winning Trades",
      value: data?.winning_trades ?? 0,
      icon: FiCheckCircle,
    },
    {
      title: "Losing Trades",
      value: data?.losing_trades ?? 0,
      icon: FiXCircle,
    },
    {
      title: "Total Profit",
      value: `$${Number(data?.total_profit ?? 0).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
      icon: FiDollarSign,
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
                <p className="text-sm text-slate-500">{stat.title}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon size={21} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
