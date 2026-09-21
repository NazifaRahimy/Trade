"use client";

import {FiArrowDown, FiArrowUp} from "react-icons/fi";
import Link from "next/link";
export interface CopyTrade {
  id: number | string;
  symbol: string;
  type: "BUY" | "SELL";
  volume?: number | string;
  entry_price?: number | string;
  exit_price?: number | string | null;
  profit?: number | string;
  status?: "OPEN" | "CLOSED";
  opened_at?: string;
  closed_at?: string | null;
}

interface MyCopyTradesProps {
  trades?: CopyTrade[];
}

// TEMPORARY DATA - فقط برای دیدن استایل
const demoTrades: CopyTrade[] = [
  {
    id: 1,
    symbol: "XAUUSD",
    type: "BUY",
    volume: 0.5,
    entry_price: 2650.5,
    exit_price: 2670.2,
    profit: 98.5,
    status: "CLOSED",
  },
  {
    id: 2,
    symbol: "EURUSD",
    type: "SELL",
    volume: 1,
    entry_price: 1.175,
    exit_price: 1.1695,
    profit: 55.0,
    status: "CLOSED",
  },
  {
    id: 3,
    symbol: "GBPUSD",
    type: "BUY",
    volume: 0.8,
    entry_price: 1.345,
    exit_price: 1.3515,
    profit: 52.0,
    status: "CLOSED",
  },
  {
    id: 4,
    symbol: "XAUUSD",
    type: "SELL",
    volume: 0.3,
    entry_price: 2685.4,
    exit_price: null,
    profit: 24.6,
    status: "OPEN",
  },
  {
    id: 5,
    symbol: "USDJPY",
    type: "BUY",
    volume: 0.7,
    entry_price: 148.2,
    exit_price: 148.85,
    profit: 45.5,
    status: "CLOSED",
  },
];

export default function MyCopyTrades({trades = demoTrades}: MyCopyTradesProps) {
  const displayTrades = trades.length > 0 ? trades : demoTrades;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 px-5 py-5">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Copied Trades</h2>

            <p className="mt-1 text-sm text-slate-500">
              Trades copied from Amiri Pro Trader
            </p>
          </div>

          <Link
            href="/copy-trading/amiri-pro"
            className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
          >
            Amiri Pro Trader
          </Link>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-5 py-4">Symbol</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">Volume</th>
              <th className="px-5 py-4">Entry</th>
              <th className="px-5 py-4">Exit</th>
              <th className="px-5 py-4">P&L</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {displayTrades.map((trade) => {
              const profit = Number(trade.profit ?? 0);
              const isBuy = trade.type === "BUY";
              const isOpen = trade.status === "OPEN";

              return (
                <tr key={trade.id} className="transition hover:bg-slate-50">
                  {/* Symbol */}
                  <td className="px-5 py-4">
                    <span className="font-semibold text-slate-900">
                      {trade.symbol}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        isBuy
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {isBuy ? (
                        <FiArrowUp size={13} />
                      ) : (
                        <FiArrowDown size={13} />
                      )}

                      {trade.type}
                    </span>
                  </td>

                  {/* Volume */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {trade.volume ?? "—"}
                  </td>

                  {/* Entry */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {trade.entry_price ?? "—"}
                  </td>

                  {/* Exit */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {trade.exit_price ?? "—"}
                  </td>

                  {/* Profit */}
                  <td className="px-5 py-4">
                    <span
                      className={`text-sm font-semibold ${
                        profit >= 0 ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {profit >= 0 ? "+" : ""}${profit.toFixed(2)}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        isOpen
                          ? "bg-blue-50 text-blue-600"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {trade.status ?? "CLOSED"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="divide-y divide-slate-100 md:hidden">
        {displayTrades.map((trade) => {
          const profit = Number(trade.profit ?? 0);
          const isBuy = trade.type === "BUY";

          return (
            <div key={trade.id} className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">{trade.symbol}</p>

                  <span
                    className={`mt-1 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      isBuy
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {isBuy ? (
                      <FiArrowUp size={13} />
                    ) : (
                      <FiArrowDown size={13} />
                    )}
                    {trade.type}
                  </span>
                </div>

                <span
                  className={`text-sm font-bold ${
                    profit >= 0 ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {profit >= 0 ? "+" : ""}${profit.toFixed(2)}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-slate-400">Volume</p>
                  <p className="mt-1 text-slate-700">{trade.volume ?? "—"}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Status</p>
                  <p className="mt-1 text-slate-700">
                    {trade.status ?? "CLOSED"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Entry</p>
                  <p className="mt-1 text-slate-700">
                    {trade.entry_price ?? "—"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Exit</p>
                  <p className="mt-1 text-slate-700">
                    {trade.exit_price ?? "—"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
