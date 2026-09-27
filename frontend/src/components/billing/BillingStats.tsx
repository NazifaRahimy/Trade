"use client";

import { motion } from "framer-motion";
import {
  FiArrowDownLeft,
  FiArrowUpRight,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";
// 🚀 ۱. تراز تمام فیلدها با خروجی واقعی دیتابیس جنگو
type BillingStatsProps = {
  walletData: {
    available_balance: string;
    frozen_balance: string;
    total_deposits: string;
    total_paid_fees: string;
    account_activity: string; // متغیر داینامیک جدید کارت چهارم
  } | null;
};
export default function BillingStats({ walletData }: BillingStatsProps) {
  // 📊 ۲. مپ کردن مستقیم متغیرها روی استایل‌ها و آیکون‌های بومی خودتان
  const stats = [
    {
      title: "Available Balance",
      value: walletData?.available_balance || "\$0.00",
      description: "Current account balance.",
      icon: FiDollarSign,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Deposits",
      value: walletData?.total_deposits || "\$0.00",
      description: "Total funds deposited.",
      icon: FiArrowDownLeft,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Total Paid Fees",
      value: walletData?.total_paid_fees || "\$0.00",
      description: "Total fees & subscriptions paid.",
      icon: FiArrowUpRight,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "Account Activity",
      value: walletData?.account_activity || "0.0%", // 🚀 اتصال لایو کارت چهارم (حذف کامل عدد ثابت قبلی)
      description: "Net growth trajectory return.",
      icon: FiTrendingUp,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-hover hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  {stat.value}
                </h2>
              </div>
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}
              >
                <Icon size={21} />
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500">{stat.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
