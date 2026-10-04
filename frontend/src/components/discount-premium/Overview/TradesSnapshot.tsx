"use client";
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function TradesSnapshot({ trades }: { trades: any[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">Trades</p>
          <h2 className="mt-1 text-lg font-semibold text-gray-900">Open Trades</h2>
        </div>
        <Link href="/discount-premium/trades" className="flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700">
          View Trades <FiArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-5 space-y-3 max-h-[240px] overflow-y-auto">
        {trades.length > 0 ? (
          trades.map((trade: any) => {
            const pnl = parseFloat(trade.floating_pnl || 0);
            return (
              <div key={trade.id} className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-gray-900 font-mono">{trade.symbol_name || "XAUUSD"}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                    trade.order_type === "BUY" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                  }`}>
                    {trade.order_type}
                  </span>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-bold font-mono ${pnl >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {pnl >= 0 ? `+$${pnl.toFixed(2)}` : `-$${Math.abs(pnl).toFixed(2)}`}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-8 text-center text-xs text-gray-400 font-sans">
            No active open positions detected on MT5 terminal.
          </div>
        )}
      </div>
    </div>
  );
}
