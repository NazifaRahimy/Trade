"use client";

import { motion } from "framer-motion";
import { FiActivity, FiDollarSign, FiTrendingUp, FiUsers } from "react-icons/fi";

// 🚀 ۱. تعریف دقیق ساختار دیتای زنده اندپوینت AdminFinanceOverviewAPIView بک‌اَند
type AdminFinanceStatsProps = {
  adminStats: {
    telegram_subscription_revenue: string;
    copy_trading_revenue: string;
    total_platform_revenue: string;
    total_master_payouts: string;
  } | null;
};

export default function AdminFinanceStats({ adminStats }: AdminFinanceStatsProps) {
  
  // 📊 ۲. مپ کردن دقیق متغیرهای لایو بک‌اَند روی آرایه و آیکون‌های بومی خودتان (حذف مقادیر ثابت)
  const stats = [
    {
      title: "Gross Platform Revenue",
      value: adminStats?.total_platform_revenue || "\$0.00", // جمع کل درآمد داینامیک پلتفرم
      description: "Total platform revenue.",
      icon: FiDollarSign,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Telegram Bot Revenue",
      value: adminStats?.telegram_subscription_revenue || "\$0.00", // درآمد لایو ربات تلگرام
      description: "Revenue from Telegram Bot.",
      icon: FiActivity,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Copy Trading Revenue",
      value: adminStats?.copy_trading_revenue || "\$0.00", // درآمد ۵ درصدی کپی‌تریدینگ
      description: "Revenue from Copy Trading.",
      icon: FiTrendingUp,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      title: "Master Trader Payouts",
      value: adminStats?.total_master_payouts || "\$0.00", // کل واریزی‌های سهم مستر تریدرها
      description: "Paid to master traders.",
      icon: FiUsers,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
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
