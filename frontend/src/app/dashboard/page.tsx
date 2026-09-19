"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDollarSign, FiTrendingUp, FiActivity, FiTarget, FiLoader } from "react-icons/fi";

// 🚀 ایمپورت‌های کاملاً استاندارد و تایید شده توسط شما
import api from "@/src/lib/axios"; 
import DashboardCard from "@/src/components/dashboard/DashboardCard";
import PortfolioChart from "@/src/components/dashboard/PortfolioChart";
import AccountAllocation from "@/src/components/dashboard/AccountAllocation";
import BrokerConnection from "@/src/components/dashboard/BrokerConnection";
import RiskControl from "@/src/components/dashboard/RiskControl"; 
import RecentTrades from "@/src/components/dashboard/RecentTrades";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 📡 دریافت آنلاین و یکجای اطلاعات حساب متاتریدر ۵ از بک‌اَند جنگو
  useEffect(() => {
    const fetchLiveDashboardData = async () => {
      try {
        const response = await api.get("/api/user/dashboard-overview/");
        if (response.data) {
          setStats(response.data);
        }
      } catch (error) {
        console.error("Critical: Failed to stream real-time dashboard ledger:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLiveDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center gap-2 text-sm text-slate-400 italic bg-white">
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>Synchronizing institutional cloud nodes...</span>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50/50 p-4 lg:p-6 text-slate-900 w-full  overflow-x-hidden">
        <main className="space-y-6 w-full">
          
          {/* هدر بالایی وب‌سایت */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2"
          >
            <h1 className="text-xl font-bold text-slate-900 md:text-2xl">Financial Overview</h1>
            <p className="text-xs text-slate-500 mt-1">
              Monitor your active copy-trade terminals and asset execution ratios in real-time.
            </p>
          </motion.div>

          {/* 📊 ردیف اول: ۴ کارت آمار زنده متصل به دیتابیس */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 w-full">
            <DashboardCard
              title="Account Balance"
              value={stats?.account_balance || "$0.00"}
              subtitle="Live MetaTrader 5 Balance"
              icon={FiDollarSign}
            />
            <DashboardCard
              title="Total Net Profit"
              value={stats?.total_profit || "$0.00"}
              subtitle="Accumulated trade gains"
              icon={FiTrendingUp}
              trend="+ Profit active"
            />
            <DashboardCard
              title="Win Rate Ratio"
              value={stats?.win_rate || "0%"}
              subtitle="Historical hit formula"
              icon={FiTarget}
            />
            <DashboardCard
              title="Available Capital"
              value={stats?.available_balance || "$0.00"}
              subtitle="Free margin safety buffer"
              icon={FiActivity}
            />
          </section>

          {/* 🚀 مگا گرید دو ستونه سراسری (چپ ۷۰٪ برای جداول و نمودارها | راست ۳۰٪ برای پنل ریسک) */}
          <div className="grid grid-cols-1  gap-6 w-full items-start">
            
            {/* 🟦 ستون سمت چپ (عریض) */}
            <div className=" space-y-6 w-full">
              {/* بخش نمودار رشد و پورتفو کنار هم */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="md:col-span-2 w-full">
                  <PortfolioChart />
                </div>
                <div className="md:col-span-1 w-full">
                  <AccountAllocation />
                </div>
              </div>

              {/* کارت وضعیت اتصال کارگزار */}
              <div className="w-full">
              <BrokerConnection />
              </div>

              {/* جدول آخرین معاملات کپی شده */}
            
            </div>

            {/* 🟥 ستون سمت راست (مخصوص ایستگاه مدیریت ریسک متمرکز) */}

          <div className=" w-full bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                Risk Management Station
              </h3>
              <RiskControl />
            </div>
              <div className="w-full">
                <RecentTrades />
              </div>
          </div>

        </main>
      </div>
    </ProtectedRoute>
  );
}
