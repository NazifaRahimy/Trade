"use client";

import React, { useEffect, useState } from "react";
import OverviewHeader from "@/src/components/discount-premium/Overview/OverviewHeader";
import OverviewStats from "@/src/components/discount-premium/Overview/OverviewStats";
import MarketSnapshot from "@/src/components/discount-premium/Overview/MarketSnapshot";
import StrategySnapshot from "@/src/components/discount-premium/Overview/StrategySnapshot";
import SignalsSnapshot from "@/src/components/discount-premium/Overview/SignalsSnapshot";
import TradesSnapshot from "@/src/components/discount-premium/Overview/TradesSnapshot";
import RecentActivity from "@/src/components/discount-premium/Overview/RecentActivity";
import api from "@/src/lib/axios"; 

export default function DiscountPremiumOverview() {
  const [overviewData, setOverviewData] = useState<any>(null);
  const [tickData, setTickData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 📡 واکشی جریانی اطلاعات رادار استراتژی و آمارهای کلی بک‌اَند به صورت کاملاً داینامیک
  const fetchDashboardCentralFeeds = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      // 🟢 ارسال درخواست به اندپوینت‌های واقعی پایتون شما
      const radarRes = await api.get("/api/gold-bot/live-radar/?symbol=XAUUSD&timeframe=M5");
      const statsRes = await api.get("/api/stats/overview/");

      if (radarRes.data && statsRes.data) {
        setOverviewData({
          radar: radarRes.data,
          stats: statsRes.data
        });
      }
    } catch (err) {
      console.error("Dashboard core polling occupied:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardCentralFeeds();
    
    // ⏱️ واکشی ۳ ثانیه‌ای قیمت زنده طلا (Bid/Ask/Spread) مستقیم و داینامیک از متاتریدر ۵
    const fetchTick = async () => {
      try {
        // 🟢 تراز کردن مسیر اندپوینت با بک‌اَند جهت رفع قطعی ارور ۵۰۴ در محیط لوکال
        const res = await api.get("/api/market-data/market/tick/?symbol=XAUUSD");
        if (res.data) {
          setTickData(res.data);
        }
      } catch (e) {
        console.error("Tick hub delay:", e);
      }
    };

    fetchTick();
    
    // راه‌اندازی تایمرهای پولینگ داینامیک سرور
    const tickInterval = setInterval(fetchTick, 3000);
    const dataInterval = setInterval(fetchDashboardCentralFeeds, 5000);

    return () => {
      clearInterval(tickInterval);
      clearInterval(dataInterval);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/30 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <OverviewHeader />
        
        {/* تزریق داینامیک آمارهای واقعی دیتابیس */}
        <OverviewStats 
          stats={overviewData?.stats} 
          openCount={overviewData?.radar?.active_positions?.length || 0} 
        />
        
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <MarketSnapshot tick={tickData} data={overviewData?.radar} />
          <StrategySnapshot data={overviewData?.radar} />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <SignalsSnapshot signals={overviewData?.radar?.active_signals || []} />
          <TradesSnapshot trades={overviewData?.radar?.active_positions || []} />
        </div>

        <RecentActivity events={overviewData?.radar?.breakout_events || []} />
      </div>
    </div>
  );
}
