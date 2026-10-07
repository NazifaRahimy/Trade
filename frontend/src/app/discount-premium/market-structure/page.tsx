"use client";

import React, { useEffect, useState } from "react";
import MarketHeader from "@/src/components/discount-premium/MarketStructure/MarketHeader";
import MarketRadar from "@/src/components/discount-premium/MarketStructure/MarketRadar";
import MarketTimeframe from "@/src/components/discount-premium/MarketStructure/MarketTimeframe";
import MarketStructureComponent from "@/src/components/discount-premium/MarketStructure/MarketStructure";
import MarketActivity from "@/src/components/discount-premium/MarketStructure/MarketActivity";
import api from "@/src/lib/axios"; // کلاینت اکسوس بومی شما

export default function MarketPage() {
  const [timeframe, setTimeframe] = useState("M5");
  const [radarData, setRadarData] = useState<any>(null);
  const [tickData, setTickData] = useState<any>(null);

  // ۱. پولینگ لایو دیتای استراتژی و ساختار (BOS/FVG/Zones) هر ۱۰ ثانیه یک‌بار
  useEffect(() => {
    const fetchRadarFeeds = async () => {
      try {
        const response = await api.get(`/api/market-data/gold-bot/live-radar/?symbol=XAUUSD&timeframe=${timeframe}`);
        if (response.data) setRadarData(response.data);
      } catch (err) {
        console.error("Radar network link delayed", err);
      }
    };
    fetchRadarFeeds();
    const interval = setInterval(fetchRadarFeeds, 10000);
    return () => clearInterval(interval);
  }, [timeframe]);

  // ۲. پولینگ قیمت زنده و اسپرد لحظه‌ای طلا مستقیم از متاتریدر ۵ هر ۳ ثانیه یک‌بار
  useEffect(() => {
    const fetchLiveTick = async () => {
      try {
        const response = await api.get("/api/market-data/market/tick/?symbol=XAUUSD");
        if (response.data) setTickData(response.data);
      } catch (err) {
        console.error("Tick data link occupied", err);
      }
    };
    fetchLiveTick();
    const interval = setInterval(fetchLiveTick, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-0 space-y-6">
      <MarketHeader />
      {/* پاس دادن دیتای تیک واقعی پایتون به کارت‌های بالای صفحه شما */}
      <MarketRadar tick={tickData} />
      <MarketTimeframe selected={timeframe} onChange={setTimeframe} />
      {/* پاس دادن دیتای ساختار و زون‌های تعادلی به کامپوننت بدنه شما */}
      <MarketStructureComponent data={radarData} />
      <MarketActivity data={radarData} />
    </div>
  );
}
