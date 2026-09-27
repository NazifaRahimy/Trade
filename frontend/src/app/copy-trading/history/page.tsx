"use client";

import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import api from "@/src/lib/axios";

import HistoryHeader from "@/src/components/copy-trading/history/HistoryHeader";
import HistoryTable from "@/src/components/copy-trading/history/HistoryTable";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

export default function HistoryPage() {
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 📡 واکشی لایو تاریخچه معاملات بسته شده از اندپوینت بک‌اَند جنگو
  useEffect(() => {
    const fetchTradeHistory = async () => {
      try {
        const response = await api.get("/api/copy-trading/history/");
        if (response.data) {
          setHistoryData(response.data);
        }
      } catch (error) {
        console.error("Failed to stream account historical order ledger:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTradeHistory();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center gap-2 text-sm text-slate-400 italic bg-white">
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>Synchronizing live MetaTrader 5 order history ledger...</span>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      {/* 🚀 حفظ ۱۰۰٪ لایوت عریض و کلاس‌های اختصاصی شما در تصویر چهارم */}
      <main className="min-h-screen bg-white text-slate-950">
        <div className="space-y-6 p-5 md:p-8 lg:p-10 max-w-[1700px] mx-auto w-full">
          <HistoryHeader />
          
          {/* پاس دادن اطلاعات آنلاین دیتابیس به جدول اصلی */}
          <HistoryTable historyList={historyData} />
        </div>
      </main>
    </ProtectedRoute>
  );
}
