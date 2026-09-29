"use client";

import {useState} from "react";

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

const initialTrades: OpenTrade[] = [
  {
    id: "TRD-1042",
    symbol: "XAUUSD",
    direction: "BUY",
    entry: "4325.10",
    currentPrice: "4331.40",
    stopLoss: "4315.00",
    takeProfit: "4345.00",
    pnl: "+$63.00",
    rr: "1 : 2.5",
    duration: "18 min",
    status: "Open",
  },
  {
    id: "TRD-1041",
    symbol: "EURUSD",
    direction: "BUY",
    entry: "1.17420",
    currentPrice: "1.17510",
    stopLoss: "1.17280",
    takeProfit: "1.17800",
    pnl: "+$9.00",
    rr: "1 : 2.7",
    duration: "31 min",
    status: "Open",
  },
  {
    id: "TRD-1040",
    symbol: "GBPUSD",
    direction: "SELL",
    entry: "1.34210",
    currentPrice: "1.34140",
    stopLoss: "1.34420",
    takeProfit: "1.33600",
    pnl: "+$21.50",
    rr: "1 : 2.9",
    duration: "46 min",
    status: "Open",
  },
];

export default function OpenTrades() {
  const [trades, setTrades] = useState(initialTrades);

  const handleClose = (id: string) => {
    setTrades((current) => current.filter((trade) => trade.id !== id));
  };

  return (
    <div className="mb-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Open Trades</h2>

            <p className="mt-1 text-sm text-gray-500">
              Live positions currently managed by the trading bot.
            </p>
          </div>

          <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            {trades.length} Active
          </span>
        </div>
      </div>

      {trades.length === 0 ? (
        <div className="p-10 text-center">
          <p className="text-sm font-medium text-gray-600">No open trades</p>

          <p className="mt-1 text-xs text-gray-400">
            There are currently no active positions.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Trade
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Direction
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Entry
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Current
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  SL
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  TP
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  P/L
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  R:R
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Duration
                </th>

                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {trades.map((trade) => (
                <tr
                  key={trade.id}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <td className="px-5 py-4">
                    <p className="text-sm font-bold text-gray-900">
                      {trade.symbol}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">{trade.id}</p>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        trade.direction === "BUY"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {trade.direction}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-700">
                    {trade.entry}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                    {trade.currentPrice}
                  </td>

                  <td className="px-5 py-4 text-sm text-red-600">
                    {trade.stopLoss}
                  </td>

                  <td className="px-5 py-4 text-sm text-green-600">
                    {trade.takeProfit}
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-green-600">
                    {trade.pnl}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-700">
                    {trade.rr}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-500">
                    {trade.duration}
                  </td>

                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => handleClose(trade.id)}
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
