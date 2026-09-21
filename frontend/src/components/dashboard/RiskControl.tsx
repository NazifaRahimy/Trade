"use client";

import { useState } from "react";
// 🚀 ۱. ایمپورت دقیق تمام کامپوننت‌های فرعی
import RiskStats from "./risk-control/RiskStats";
import RiskGauge from "./risk-control/RiskGauge"; // 📡 دایره کامل داینامیک شما
import RiskSettings from "./risk-control/RiskSettings";
import EmergencyStop from "./risk-control/EmergencyStop";

// 📊 ۲. کامپوننت داخلی نیم‌دایره عقربه‌دار (دارای Needle)
function HalfCircleNeedleGauge({ currentRisk }: { currentRisk: number }) {
  const maxRiskScale = 20; 
  const safeRisk = Math.min(Math.max(currentRisk, 0), maxRiskScale);
  const needleRotation = (safeRisk / maxRiskScale) * 180 - 90;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">Risk Control Gauge</h2>
      <div className="mt-7 flex flex-col items-center">
        <div className="relative h-28 w-56 overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-56 w-56 rounded-full" 
            style={{ 
              background: "conic-gradient(from 270deg, #22c55e 0deg 80deg, #facc15 80deg 125deg, #fb923c 125deg 150deg, #ef4444 150deg 180deg, transparent 180deg)" 
            }} 
          />
          <div className="absolute left-5 top-5 h-46 w-46 rounded-full bg-white" />
          
          <div 
            className="absolute bottom-0 left-1/2 h-20 w-1 origin-bottom bg-slate-800 rounded-full" 
            style={{ 
              transform: `translateX(-50%) rotate(${needleRotation}deg)`, 
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" 
            }} 
          />
          <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-slate-700 ring-2 ring-slate-300" />
        </div>
        
        <div className="-mt-1 text-center">
          <p className="text-2xl font-bold text-slate-900">{currentRisk}%</p>
          <p className="text-xs text-slate-500">Current Risk Scale</p>
        </div>
      </div>
    </div>
  );
}

// 🏢 ۳. کامپوننت اصلی مدیریت صفحه داشبورد ریسک
export default function RiskControl() {
  const [totalRisk, setTotalRisk] = useState<number>(20); 
  const [botActive, setBotActive] = useState<boolean>(true); 

  return (
    <div className="space-y-6">
      {/* آمار کارت‌های بالایی */}
      <RiskStats totalRisk={totalRisk} botActive={botActive} />




      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
        {/* ستون سمت چپ: شامل هر دو مدل عقربه و دکمه امِرجنسی */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 w-full">
          {/* 🚀 عقربه دایره‌ای داینامیک جذاب شما در اینجا اضافه شد */}
          <RiskGauge currentRisk={totalRisk} />
          
          {/* نیم‌دایره عقربه‌دار */}
          <HalfCircleNeedleGauge currentRisk={totalRisk} />

          {/* دکمه توقف اضطراری ربات با فانکشن اصلاح‌شده برای رفع ارور تصویر قبلی */}
     {/* 🛑 تغییر این خط در فایل پدر */}
      <EmergencyStop botActive={botActive} onToggleBot={() => setBotActive(!botActive)} />

        </div>

        {/* ستون سمت راست: فرم اصلی تنظیمات ریسک */}

      </div>
      <div className="space-y-6 lg:col-span-2">
          <RiskSettings totalRisk={totalRisk} setTotalRisk={setTotalRisk} />
        </div>
    </div>
  );
}
