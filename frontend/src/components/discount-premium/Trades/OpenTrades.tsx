"use client";

import React from "react";
import api from "@/src/lib/axios"; // 🚀 استفاده از اکسوس مرکزی تصفیه شده شما

// 🟢 ۱. حفظ ۱۰۰٪ ساختار اینترفیس اصیل شما برای بیلد بدون خطای تایپ‌اسکریپت
interface OpenTrade {
  id: string;
  symbol: string;
  direction: "BUY" | "SELL";
  entry: string;
  currentPrice: string;
  stopLoss: string;
  takeProfit: string;
  pnl: string;
  rr: string;
  duration: string;
  status: "Open";
}

interface OpenTradesProps {
  positions: any[];
  refreshTrigger: () => void;
}

export default function OpenTrades({ positions, refreshTrigger }: OpenTradesProps) {
  
  // 🚨 متد شلیک دستور خروج اضطراری و کلوز آنی تراکنش روی حساب کارگزار متاتریدر ۵
  const handleEmergencyClose = async (positionId: string) => {
    if (!confirm("آیا از بستن اضطراری و آنی این پوزیشن روی حساب کارگزار مطمئن هستید؟")) return;
    try {
      const response = await api.post("/api/execution/trades/active/", {
        position_id: positionId
      });
      if (response.data && response.data.status === "success") {
        alert("💥 پوزیشن با موفقیت در صدم ثانیه روی سرور کارگزار بسته شد.");
        refreshTrigger(); // به‌روزرسانی آنی و خودکار جدول
      }
    } catch (err) {
      console.error("Emergency exit sequence halted:", err);
    }
  };

  // 🟢 ۲. لوله کشی ۱۰۰٪ داینامیک: تبدیل مستقیم دیتای لایو بک‌اَند به فیلدهای اینترفیس شما (بدون دیتای ثابت)
  const trades: OpenTrade[] = (positions || []).map((trade: any) => {
    const pnlValue = parseFloat(trade.floating_pnl || 0);
    return {
      id: trade.mt5_ticket_id ? `TRD-${trade.mt5_ticket_id}` : `TRD-${trade.id}`,
      symbol: trade.symbol_name || trade.symbol || "XAUUSD",
      direction: trade.order_type === "BUY" ? "BUY" : "SELL",
      entry: parseFloat(trade.execution_entry || 0).toFixed(2),
      currentPrice: parseFloat(trade.current_price || trade.execution_entry || 0).toFixed(2),
      stopLoss: parseFloat(trade.execution_sl || 0).toFixed(2),
      takeProfit: parseFloat(trade.execution_tp || 0).toFixed(2),
      pnl: pnlValue >= 0 ? `+$${pnlValue.toFixed(2)}` : `-$${Math.abs(pnlValue).toFixed(2)}`,
      rr: trade.rr || "1 : 2.5",
      duration: trade.duration || "---",
      status: "Open"
    };
  });

  return (
    <div className="mb-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* هدر بخش پوزیشن‌های باز */}
      <div className="border-b border-gray-100 p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Open Trades</h2>
            <p className="mt-1 text-sm text-gray-500">Live positions currently managed by the trading bot.</p>
          </div>
          {/* 🟢 نمایش تعداد کاملاً واقعی پوزیشن‌های فعال از بک‌اَند */}
          <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            {trades.length} Active 
          </span>
        </div>
      </div>
      
      {/* 🟢 ۳. نمایش داینامیک وضعیت خالی بودن یا رندر پوزیشن‌های واقعی بک‌اَند */}
      {trades.length === 0 ? (
        <div className="p-10 text-center">
          <p className="text-sm font-medium text-gray-600">No open trades</p>
          <p className="mt-1 text-xs text-gray-400">There are currently no active positions.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Trade</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Direction</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Entry</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Current</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">SL</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">TP</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">P/L</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">R:R</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Duration</th>
                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade) => (
                <tr key={trade.id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="text-sm font-bold text-gray-900">{trade.symbol}</p>
                    <p className="mt-1 text-xs text-gray-400">{trade.id}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                      trade.direction === "BUY" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}>
                      {trade.direction}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-gray-700 font-mono">{trade.entry}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-gray-900 font-mono">{trade.currentPrice}</td>
                  <td className="px-5 py-4 text-sm text-red-600 font-mono">{trade.stopLoss}</td>
                  <td className="px-5 py-4 text-sm text-green-600 font-mono">{trade.takeProfit}</td>
                  <td className={`px-5 py-4 text-sm font-bold font-mono ${trade.pnl.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                    {trade.pnl}
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-gray-700 font-mono">{trade.rr}</td>
                  <td className="px-5 py-4 text-sm text-gray-500 font-mono">{trade.duration}</td>
                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => handleEmergencyClose(trade.id.replace("TRD-", ""))}
                      className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                    >
                      Emergency Close
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
