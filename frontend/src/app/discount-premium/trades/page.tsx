"use client";

import React, { useEffect, useState } from "react";
import TradesHeader from "@/src/components/discount-premium/Trades/TradesHeader";
import TradeStats from "@/src/components/discount-premium/Trades/TradeStats";
import OpenTrades from "@/src/components/discount-premium/Trades/OpenTrades";
import TradeHistory from "@/src/components/discount-premium/Trades/TradeHistory";
import api from "@/src/lib/axios"; // استفاده از اکسوس مرکزی تصفیه شده شما

export default function TradesPage() {
  // 🟢 اصلاح ساختار useStateها جهت ریشه‌کن شدن ارور کامپایل Next.js
  const [openPositions, setOpenPositions] = useState<any[]>([]);
  const [closedHistory, setClosedHistory] = useState<any[]>([]);
  const [statsSummary, setStatsSummary] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 📡 واکشی جریانی و لایو معاملات در جریان حساب متاتریدر ۵
  const fetchLiveTradesData = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      // ۱. واکشی اردرهای فعال جاری ربات طلا
      const openResponse = await api.get("/api/execution/trades/active/");
      if (openResponse.data) {
        setOpenPositions(openResponse.data);
      }

      // ۲. واکشی آمارهای کلی خلاصه سود روزانه و وین‌ریت
      const statsResponse = await api.get("/api/stats/overview/");
      if (statsResponse.data) {
        setStatsSummary(statsResponse.data);
      }
    } catch (err) {
      console.error("Trades telemetry link occupied:", err);
    } finally {
      setLoading(false);
    }
  };

  // 📡 واکشی آرشیو تاریخچه معاملات بسته شده دیتابیس
  useEffect(() => {
    const fetchTradeHistoryArchive = async () => {
      try {
        const response = await api.get("/api/stats/trade-history/");
        if (response.data) {
          setClosedHistory(response.data);
        }
      } catch (err) {
        console.error("History vault node offline:", err);
      }
    };

    fetchLiveTradesData();
    fetchTradeHistoryArchive();

    // ⏱️ ایجاد لوق پولینگ هوشمند ۵ ثانیه‌ای برای آپدیت لحظه‌ای معاملات
    const interval = setInterval(fetchLiveTradesData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 space-y-6">
      <TradesHeader />

      {/* 🟢 اصلاح خط ۶۸ پروپس بدون علامت تداخل نام */}
      <TradeStats stats={statsSummary} openCount={openPositions.length} />

      <OpenTrades positions={openPositions} refreshTrigger={fetchLiveTradesData} />

      <TradeHistory history={closedHistory} />
    </div>
  );
}
