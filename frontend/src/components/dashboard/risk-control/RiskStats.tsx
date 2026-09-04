"use client";

import {FiShield, FiTrendingDown, FiAlertTriangle} from "react-icons/fi";

type RiskStatsProps = {
  totalRisk: number;
  botActive: boolean;
};

export default function RiskStats({totalRisk, botActive}: RiskStatsProps) {
  const stats = [
    {
      title: "Max Daily Loss",
      value: `${totalRisk}%`,
      icon: FiTrendingDown,
    },
    {
      title: "Protection Status",
      value: botActive ? "Active" : "Inactive",
      icon: FiShield,
    },
    {
      title: "Risk Alerts",
      value: "1",
      icon: FiAlertTriangle,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <Icon size={28} className="mb-4 text-blue-600" />

            <h4 className="text-sm font-medium text-slate-500">{item.title}</h4>

            <p className="mt-2 text-2xl font-bold text-slate-900">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
