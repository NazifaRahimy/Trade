"use client";

import {
  FiActivity,
  FiBarChart2,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

const stats = [
  {
    title: "Balance",
    value: "$10,000.00",
    icon: FiDollarSign,
  },
  {
    title: "Equity",
    value: "$10,245.80",
    icon: FiTrendingUp,
  },
  {
    title: "Daily P/L",
    value: "+$245.80",
    icon: FiActivity,
  },
  {
    title: "Open Trades",
    value: "2",
    icon: FiBarChart2,
  },
];

export default function MarketSummary() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">{item.title}</p>

              <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                <Icon size={18} />
              </div>
            </div>

            <p className="mt-3 text-2xl font-bold text-gray-900">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
