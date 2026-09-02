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
          className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
        >
          <item.icon size={28} className="mb-4 text-blue-500" />

          <h4 className="text-slate-400">{item.title}</h4>

          <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
