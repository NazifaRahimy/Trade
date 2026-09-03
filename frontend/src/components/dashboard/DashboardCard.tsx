"use client";

import {motion} from "framer-motion";
import type {IconType} from "react-icons";

type DashboardCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon: IconType;
  trend?: string;
};

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
}: DashboardCardProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      whileHover={{y: -4}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div>
          {/* Title */}
          <p className="text-sm text-slate-500">{title}</p>

          {/* Value */}
          <h3 className="mt-2 text-2xl font-bold text-slate-900">{value}</h3>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
          )}
        </div>

        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon className="text-xl" />
        </div>
      </div>

      {/* Trend */}
      {trend && (
        <div className="mt-4">
          <span className="text-xs font-medium text-emerald-600">{trend}</span>
        </div>
      )}
    </motion.div>
  );
}
