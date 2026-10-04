"use client";

import React, { useEffect, useState } from "react";
import StrategyHeader from "@/src/components/discount-premium/Strategy/StrategyHeader";
import StrategyOverview from "@/src/components/discount-premium/Strategy/StrategyOverview";
import TradingChart from "@/src/components/discount-premium/Strategy/TradingChart";
import PremiumDiscount from "@/src/components/discount-premium/Strategy/PremiumDiscount";
import FVGOverlay from "@/src/components/discount-premium/Strategy/FVGOverlay";
import TradeSetup from "@/src/components/discount-premium/Strategy/TradeSetup";
import RiskSummary from "@/src/components/discount-premium/Strategy/RiskSummary";
import StrategyConditions from "@/src/components/discount-premium/Strategy/StrategyConditions";
import api from "@/src/lib/axios"; // 🚀 استفاده از اکسوس مرکزی تصفیه شده شما

export default function StrategyPage() {
  const [radarData, setRadarData] = useState<any>(null);
  const [tickData, setTickData] = useState<any>(null);

  // 📡 پولینگ دیتای استراتژی (گپ‌های FVG، زون‌های تعادلی و روند مارکت) هر ۱۰ ثانیه یک‌بار
  useEffect(() => {
    const fetchStrategyRadar = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) return;
        const response = await api.get("/api/gold-bot/live-radar/?symbol=XAUUSD&timeframe=M5");
        if (response.data) setRadarData(response.data);
      } catch (err) {
        console.error("Strategy telemetry link delayed", err);
      }
    };
    fetchStrategyRadar();
    const interval = setInterval(fetchStrategyRadar, 10000);
    return () => clearInterval(interval);
  }, []);

  // ⚡ پولینگ قیمت زنده (Bid/Ask) مستقیم از ترمینال متاتریدر ۵ هر ۳ ثانیه یک‌بار
  useEffect(() => {
    const fetchLiveTickFeeds = async () => {
      try {
        const response = await api.get("/api/market-data/market/tick/?symbol=XAUUSD");
        if (response.data) setTickData(response.data);
      } catch (err) {
        console.error("Tick hub link occupied", err);
      }
    };
    fetchLiveTickFeeds();
    const interval = setInterval(fetchLiveTickFeeds, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6 space-y-6">
      <StrategyHeader />
      
      {/* 🟢 تزریق دیتای واقعی با Props به کامپوننت‌های اصیل شما بدون تغییر استایل */}
      <StrategyOverview data={radarData} tick={tickData} />
      
      <section className="mb-6">
        <TradingChart data={radarData} tick={tickData} />
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <PremiumDiscount data={radarData} tick={tickData} />
        <FVGOverlay data={radarData} />
      </div>

      <section className="mb-6">
        <TradeSetup data={radarData} />
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <RiskSummary />
        <StrategyConditions data={radarData} />
      </div>
    </div>
  );
}
