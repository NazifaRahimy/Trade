"use client";

import React from "react";

interface HistoryTrade {
  id: string;
  symbol: string;
  direction: "BUY" | "SELL";
  entry: string;
  exit: string;
  pnl: string;
  rr: string;
  duration: string;
  closedAt: string;
  status: "win" | "loss";
}

export default function TradeHistory({ history }: { history: any }) {
  // 🟢 تصفیه و فکس ریشه‌ای ارور تصویر شما: تبدیل قطعی ورودی به آرایه تحت هر شرایطی
  const safeHistory = Array.isArray(history) 
    ? history 
    : history && typeof history === "object" && Array.isArray(history.results)
    ? history.results
    : [];

  const trades: HistoryTrade[] = safeHistory.map((trade: any) => {
    const pnlValue = parseFloat(trade.pnl || 0);
    return {
      id: trade.id ? `TRD-${trade.id}` : "---",
      symbol: trade.symbol || "XAUUSD",
      direction: trade.direction === "BUY" ? "BUY" : "SELL",
      entry: parseFloat(trade.entry || 0).toFixed(2),
      exit: parseFloat(trade.exit || 0).toFixed(2),
      pnl: pnlValue >= 0 ? `+$${pnlValue.toFixed(2)}` : `-$${Math.abs(pnlValue).toFixed(2)}`,
      rr: trade.rr || "1 : 2.5",
      duration: trade.duration || "---",
      closedAt: trade.closed_at ? new Date(trade.closed_at).toLocaleDateString() : "---",
      status: pnlValue >= 0 ? "win" : "loss"
    };
  });

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 p-5">
        <h2 className="text-lg font-semibold text-gray-900">Trade History</h2>
        <p className="mt-1 text-sm text-gray-500">Archive of completed robot trades.</p>
      </div>

      {trades.length === 0 ? (
        <div className="p-10 text-center text-sm text-gray-400 font-sans">
          No completed trades archive found in the database.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Trade</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Direction</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Entry</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Exit</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">P/L</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">R:R</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Duration</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Closed At</th>
                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Status</th>
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
                  <td className="px-5 py-4 text-sm font-semibold text-gray-900 font-mono">{trade.exit}</td>
                  <td className={`px-5 py-4 text-sm font-bold font-mono ${trade.pnl.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                    {trade.pnl}
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-gray-700 font-mono">{trade.rr}</td>
                  <td className="px-5 py-4 text-sm text-gray-500 font-mono">{trade.duration}</td>
                  <td className="px-5 py-4 text-sm text-gray-500 font-mono">{trade.closedAt}</td>
                  <td className="px-5 py-4 text-right">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                      trade.status === "win" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}>
                      {trade.status === "win" ? "WIN" : "LOSS"}
                    </span>
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
