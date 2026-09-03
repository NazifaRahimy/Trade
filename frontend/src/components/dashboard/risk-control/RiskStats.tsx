"use client";

import {FiShield, FiTrendingDown, FiAlertTriangle} from "react-icons/fi";

const stats = [
  {
    title: "Max Daily Loss",
    value: "2%",
    icon: FiTrendingDown,
  },
  {
    title: "Protection Status",
    value: "Active",
    icon: FiShield,
  },
  {
    title: "Risk Alerts",
    value: "1",
    icon: FiAlertTriangle,
  },
];

export default function RiskStats() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <item.icon size={28} className="mb-4 text-blue-600" />

          <h4 className="text-sm font-medium text-slate-500">{item.title}</h4>

          <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
