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
import api from "@/src/lib/axios";

export default function StrategyPage() {
  const [radarData, setRadarData] = useState<any>(null);
  const [tickData, setTickData] = useState<any>(null);

  useEffect(() => {
    const fetchStrategyRadar = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) return;

        const [m1Response, m5Response] = await Promise.all([
          api.get(
            "/api/market-data/gold-bot/live-radar/?symbol=XAUUSD&timeframe=M1"
          ),
          api.get(
            "/api/market-data/gold-bot/live-radar/?symbol=XAUUSD&timeframe=M5"
          ),
        ]);

        if (m1Response.data && m5Response.data) {
          setRadarData({
            ...m5Response.data,
            timeframes: {
              M1: m1Response.data,
              M5: m5Response.data,
            },
          });
        }
      } catch (err) {
        console.error("Strategy telemetry link delayed", err);
      }
    };

    fetchStrategyRadar();

    const interval = setInterval(fetchStrategyRadar, 10000);

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
        <RiskSummary data={radarData} />
        <StrategyConditions data={radarData} />
      </div>
    </div>
  );
}
