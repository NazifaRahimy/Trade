"use client";

import React, { useState, useEffect } from "react";
import SignalsHeader from "@/src/components/discount-premium/Signals/SignalsHeader";
import SignalRadar from "@/src/components/discount-premium/Signals/SignalRadar";
import SignalFilters from "@/src/components/discount-premium/Signals/SignalFilters";
import SignalCard from "@/src/components/discount-premium/Signals/SignalCard";
import SignalDetails from "@/src/components/discount-premium/Signals/SignalDetails";
import api from "@/src/lib/axios"; // کلاینت اکسوس بومی شما

export default function SignalsPage() {
  const [signals, setSignals] = useState<any[]>([]);
  const [selectedSignal, setSelectedSignal] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // متغیرهای فیلتر کردن زنده روی آرایه خروجی
  const [symbolFilter, setSymbolFilter] = useState("All");
  const [directionFilter, setDirectionFilter] = useState("All");
  const [timeframeFilter, setTimeframeFilter] = useState("All");

  // 📡 پولینگ لایو سیگنال‌های اسکنر بازار از بک‌اَند هر ۱۰ ثانیه یک‌بار
  useEffect(() => {
    const fetchLiveScannerSignals = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) return;

        const response = await api.get("/api/scanner/signals/active/");
        if (response.data) {
          setSignals(response.data);
          
          // حفظ انتخاب سیگنال جاری کاربر در زمان رفرش داده‌ها
          if (response.data.length > 0) {
            setSelectedSignal((current: any) => {
              if (current) {
                return response.data.find((s: any) => s.id === current.id) || response.data[0];
              }
              return response.data[0];
            });
          }
        }
      } catch (err) {
        console.error("Scanner signal channel connection error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveScannerSignals();
    const interval = setInterval(fetchLiveScannerSignals, 10000);
    return () => clearInterval(interval);
  }, []);

  // اعمال داینامیک فیلترها روی دیتای دریافتی پایتون قبل از رندر
  const filteredSignals = signals.filter((sig) => {
    const matchSymbol = symbolFilter === "All" || sig.symbol === symbolFilter;
    const matchDirection = directionFilter === "All" || sig.direction === directionFilter;
    const matchTimeframe = timeframeFilter === "All" || sig.timeframe === timeframeFilter;
    return matchSymbol && matchDirection && matchTimeframe;
  });

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 space-y-6">
      <SignalsHeader />
      
      {/* پاس دادن کل سیگنال‌ها برای محاسبه داینامیک تعداد پدینگ و سترانگ */}
      <SignalRadar signals={signals} />
      
      {/* متصل کردن فیلترهای بومی شما به ست‌کننده‌های وضعیت پدر */}
      <SignalFilters 
        symbol={symbolFilter} setSymbol={setSymbolFilter}
        direction={directionFilter} setDirection={setDirectionFilter}
        timeframe={timeframeFilter} setTimeframe={setTimeframeFilter}
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-4 xl:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900">Pending Signals</h2>
          <p className="text-xs text-gray-500 -mt-3">Signals currently waiting for execution confirmation.</p>
          
          <div className="space-y-3">
            {filteredSignals.length > 0 ? (
              filteredSignals.map((signal) => (
                <SignalCard
                  key={signal.id}
                  signal={signal}
                  selected={selectedSignal?.id === signal.id}
                  onSelect={() => setSelectedSignal(signal)}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-12 text-center text-sm text-gray-400">
                No active signals matching the current matrix configuration.
              </div>
            )}
          </div>
        </div>

        {/* سایدبار سمت راست: نمایش جزئیات سیگنال انتخابی */}
        <div className="xl:col-span-1">
          <div className="xl:sticky xl:top-6">
            {selectedSignal ? (
              <SignalDetails signal={selectedSignal} />
            ) : (
              <div className="rounded-2xl bg-white p-6 border border-gray-200 text-center text-sm text-gray-400">
                Select a scanner node setup to review structural matrix conditions.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
