"use client";

import { useEffect, useState } from "react";
import api from "@/src/lib/axios";

// ایمپورت ابزارک‌های فیکس شده شما
import PositionsHeader from "@/src/components/copy-trading/active-positions/PositionsHeader";
import PositionsStats from "@/src/components/copy-trading/active-positions/PositionsStats";
import ActivePositionsTable from "@/src/components/copy-trading/active-positions/ActivePositionsTable";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

export default function ActivePositionsPage() {
  const [positions, setPositions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLivePositions = async () => {
    try {
      const response = await api.get("/api/copy-trading/active-positions/");
      if (response.data) {
        setPositions(response.data);
      }
    } catch (error) {
      console.error("Error pooling active MT5 ledger streams:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔄 فچ آنی به محض ورود + ایجاد لوپ مانیتورینگ خودکار هر ۱۰ ثانیه یک‌بار برای سودها
  useEffect(() => {
    fetchLivePositions();
    const interval = setInterval(fetchLivePositions, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center gap-2 text-sm text-slate-400 italic bg-white">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600" />
        <span>Streaming active ledger positions from broker...</span>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50/50 p-4 lg:p-6 w-full max-w-[1700px] mx-auto space-y-6">
        {/* ۱. هدر صفحه */}
        <PositionsHeader />
        
        {/* ۲. ۴ کارت محاسباتی بالای صفحه (کامپوننت زنده شده شما) */}
        <PositionsStats positions={positions} />
        
        {/* ۳. جدول اصلی معاملات لایو (کامپوننت زنده شده شما) */}
        <ActivePositionsTable positions={positions} />
      </div>
    </ProtectedRoute>
  );
}
