"use client";

import {useEffect, useState} from "react";
import {FiLoader} from "react-icons/fi";
// 🚀 اتصال به کلاینت متمرکز شبکه پلتفرم شما جهت ارسال توکن‌های احراز هویت
import api from "@/src/lib/axios";

// 📦 ایمپورت دقیق بخش‌های سه‌گانه لایوت بر اساس کامپوننت‌های فرانت‌اَند شما

import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

import CopyTradesHeader from "@/src/components/copy-trading/my-traders/CopyTradesHeader";
import CopyTradesStats from "@/src/components/copy-trading/my-traders/CopyTradesStats";
import MyCopyTrader from "@/src/components/copy-trading/my-traders/MyCopyTrader";
export default function MyTradersPage() {
  const [copyData, setCopyData] = useState<any>(null);
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 📡 فچ هم‌زمان دیتای خلاصه وضعیت پورتفو و لیست اشتراک‌های دیتابیس جنگو
  const fetchMyCopyPortfolio = async () => {
    try {
      // دریافت آمارهای کارت‌های ۴ گانه از خلاصه وضعیت سرور
      const overviewRes = await api.get("/api/copy-trading/overview/");
      if (overviewRes.data) {
        setCopyData(overviewRes.data);
      }

      // دریافت لیست تمام مسترهایی که کاربر Najib در حال کپی آنهاست
      const tradersRes = await api.get("/api/copy-trading/my-traders/");
      if (tradersRes.data) {
        setSubscriptions(tradersRes.data);
      }
    } catch (error) {
      console.error("Critical: Failed to stream copy portfolio nodes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyCopyPortfolio();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center gap-2 text-sm text-slate-400 italic bg-white">
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>Synchronizing copy portfolio nodes...</span>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      {/* 🚀 لایوت متوازن و عریض پلتفرم کاملاً هماهنگ با بقیه صفحات داشبورد شما */}
      <main className="min-h-screen bg-slate-50/50 text-slate-900 w-full max-w-[1700px] mx-auto p-4 md:p-6 lg:p-8">
        <div className="space-y-6 w-full">
          {/* ۱. هدر منو */}
          <CopyTradesHeader />

          {/* ۲. کارت‌های آماری چهارگانه بالا (دیتا به صورت پرپس پاس داده می‌شود) */}
          <CopyTradesStats data={copyData?.stats} />

          {/* ۳. بخش نمایش تریدرها به همراه دکمه‌های زنده کنترل وضعیت ابری */}
          <MyCopyTrader
            subscriptions={subscriptions}
            onRefresh={fetchMyCopyPortfolio}
          />
        </div>
      </main>
    </ProtectedRoute>
  );
}
