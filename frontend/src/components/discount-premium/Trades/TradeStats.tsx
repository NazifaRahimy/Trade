"use client";

import React from "react";

interface TradeStatsProps {
  stats: any;
  openCount: number;
}

export default function TradeStats({ stats, openCount }: TradeStatsProps) {
  // پردازش مستقیم محاسبات داینامیک دریافتی از سرور پایتون
  const openTradesValue = openCount.toString();
  const todaysTradesValue = stats?.todays_trades_count?.toString() || "0";
  const profitTodayValue = stats?.profit_today ? `+$${parseFloat(stats.profit_today).toFixed(2)}` : "+\$0.00";
  const winRateValue = stats?.win_rate ? `${stats.win_rate}%` : "0%";

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {/* کارت اول */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">Open Trades</p>
        <h3 className="mt-2 text-2xl font-bold text-gray-900 font-mono">{openTradesValue}</h3>
        <p className="mt-1 text-xs text-gray-400">Currently active</p>
      </div>

      {/* کارت دوم */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">Today's Trades</p>
        <h3 className="mt-2 text-2xl font-bold text-gray-900 font-mono">{todaysTradesValue}</h3>
        <p className="mt-1 text-xs text-gray-400">Executed today</p>
      </div>

      {/* کارت سوم */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">Profit Today</p>
        <h3 className="mt-2 text-2xl font-bold text-green-600 font-mono">{profitTodayValue}</h3>
        <p className="mt-1 text-xs text-gray-400">Realized + floating</p>
      </div>

      {/* کارت چهارم */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-500">Win Rate</p>
        <h3 className="mt-2 text-2xl font-bold text-gray-900 font-mono">{winRateValue}</h3>
        <p className="mt-1 text-xs text-gray-400">Today's performance</p>
      </div>
    </div>
  );
}
