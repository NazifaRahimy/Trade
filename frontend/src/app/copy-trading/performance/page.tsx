"use client";

import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
// 🚀 اصلاح آدرس ایمپورت اکسوس برای رفع ارور خط ۵
import api from "@/src/lib/axios";

// 🚀 اصلاح مسیرهای ایمپورت با حذف عبارت اضافی /src بومی خودتان (خطوط ۸ تا ۱۳)
import PerformanceHeader from "@/src/components/copy-trading/performance/PerformanceHeader";
import PerformanceStats from "@/src/components/copy-trading/performance/PerformanceStats";
import PerformanceChart from "@/src/components/copy-trading/performance/PerformanceChart";
import ProfitLossOverview from "@/src/components/copy-trading/performance/ProfitLossOverview";
import PerformanceBreakdown from "@/src/components/copy-trading/performance/PerformanceBreakdown";
import DailyPerformance from "@/src/components/copy-trading/performance/DailyPerformance";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

export default function PerformancePage() {
  const [perfData, setPerfData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 📡 واکشی زنده اطلاعات آنالیز حسابداری از بک‌اَند جنگو
  useEffect(() => {
    const fetchPerformanceMetrics = async () => {
      try {
        const response = await api.get("/api/copy-trading/performance/metrics/");
        if (response.data) {
          setPerfData(response.data);
        }
      } catch (error) {
        console.error("Failed to stream account auditing metrics:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPerformanceMetrics();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center gap-2 text-sm text-slate-400 italic bg-white">
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>Auditing MetaTrader 5 closed order history sequences...</span>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      {/* 🚀 حفظ ۱۰۰٪ استایل، کلاس‌ها و لایوت عریض اختصاصی شما در تصویر */}
      <main className="min-h-screen bg-white text-slate-900">
        <div className="space-y-6 p-5 md:p-8 lg:p-10 max-w-[1700px] mx-auto w-full">
          
          <PerformanceHeader />
          
          {/* 📊 پاس دادن متغیرهای زنده به کامپوننت‌ها جهت برطرف شدن نهایی خطوط قرمز */}
          <PerformanceStats stats={perfData?.metrics} />

          <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            <PerformanceChart chartData={perfData?.equity_curve} />
            <ProfitLossOverview pnlData={perfData?.pnl_overview} />
          </section>

          <PerformanceBreakdown breakdownData={perfData?.breakdown} />
          
          <DailyPerformance dailyData={perfData?.daily_performance} />

        </div>
      </main>
    </ProtectedRoute>
  );
}