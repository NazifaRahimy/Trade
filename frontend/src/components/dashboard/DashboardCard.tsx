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
      className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl shadow-black/10"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h3 className="mt-2 text-2xl font-bold text-white">{value}</h3>

          {subtitle && (
            <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
          )}
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
          <Icon className="text-xl" />
        </div>
      </div>

      {trend && (
        <div className="mt-4">
          <span className="text-xs font-medium text-emerald-400">{trend}</span>
        </div>
      )}
    </motion.div>
  );
}
