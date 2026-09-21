"use client";

import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
// 🚀 ایمپورت کلاینت اصلی شبکه شما
import api from "@/src/lib/axios"; 
import AccountOverview from "@/src/components/dashboard/AccountStats/AccountOverview";
import BalanceCard from "@/src/components/dashboard/AccountStats/BalanceCard";
import TradingStats from "@/src/components/dashboard/AccountStats/TradingStats";
import AccountInfo from "@/src/components/dashboard/AccountStats/AccountInfo";

export default function AccountStatusPage() {
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 📡 فچ کردن یکجای آمار لایو متاتریدر ۵ از اندپوینت تجاری جنگو شما
  useEffect(() => {
    const fetchLiveMetrics = async () => {
      try {
        const response = await api.get("/api/user/dashboard-overview/");
        if (response.data) {
          setDashboardData(response.data);
        }
      } catch (error) {
        console.error("Critical: Failed to stream account metrics:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLiveMetrics();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 w-full items-center justify-center gap-2 text-sm text-slate-400 italic">
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>Synchronizing institutional ledger nodes...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {/* 🚀 پاس دادن دیتای زنده و واقعی سرور به تک تک ابزارک‌های طراح فرانت */}
      <AccountOverview data={dashboardData} />
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <BalanceCard data={dashboardData} />
          <TradingStats data={dashboardData} />
        </div>
        <div className="lg:col-span-1 space-y-6">
        <AccountInfo data={dashboardData} />
        </div>
      </div>
    </div>
  );
}
