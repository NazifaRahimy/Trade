"use client";

import {motion} from "framer-motion";
import {
  FiArrowDownLeft,
  FiArrowUpRight,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";
import {useTranslation} from "react-i18next";
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
export default function BillingStats({walletData}: BillingStatsProps) {
  const {t} = useTranslation();
  const stats = [
    {
      title: t("billing.availableBalance"),
      value: walletData?.available_balance || "$0.00",
      description: t("billing.currentAccountBalance"),
      icon: FiDollarSign,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: t("billing.totalDeposits"),
      value: walletData?.total_deposits || "$0.00",
      description: t("billing.totalFundsDeposited"),
      icon: FiArrowDownLeft,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: t("billing.totalPaidFees"),
      value: walletData?.total_paid_fees || "$0.00",
      description: t("billing.totalFeesSubscriptionsPaid"),
      icon: FiArrowUpRight,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: t("billing.accountActivity"),
      value: walletData?.account_activity || "0.0%",
      description: t("billing.netGrowthTrajectoryReturn"),
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
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-hover hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>
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
