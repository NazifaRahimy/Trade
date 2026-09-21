"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiLoader } from "react-icons/fi";
import api from "../../../lib/axios"; // ایمپورت هسته شبکه جهت ارسال فیلترها به آدرس پوشه آمار داشبورد stats
import TradeFilters from "./TradeFilters";
import TradeStats from "./TradeStats";

export default function TradeTable() {
  const [trades, setTrades] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 📦 استیت‌های مربوط به فیلترهای داینامیک ارسالی به جنگو
  const [search, setSearch] = useState("");
  const [days, setDays] = useState("30");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");

  // 📡 تابع اصلی لود معاملات دیتابیس جنگو بر اساس فیلترهای انتخابی کاربر
  const fetchTradesFromDatabase = async () => {
    try {
      setLoading(true);
      // ارسال پارامترهای فیلتر فرانت به اندپوینت متمرکز آمار داشبورد شما
      const response = await api.get("/api/stats/trade-history/", {
        params: {
          days: days,
          type: type,
          status: status,
          search: search,
        },
      });

      if (response.data) {
        setTrades(response.data.recent_trades || []);
        setSummary(response.data.summary || null);
      }
    } catch (error) {
      console.error("Failed to load real trade history rows:", error);
    } finally {
      setLoading(false);
    }
  };

  // رفرش خودکار و آنی جدول به محض اینکه کاربر هر فیلتری را تغییر دهد
  useEffect(() => {
    fetchTradesFromDatabase();
  }, [days, type, status, search]);

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.2}}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header */}
      <div className="p-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Recent Trades
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Showing your latest trading activity
            </p>
          </div>

          <span className="text-xs text-slate-500">128 trades total</span>
        </div>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[950px] border-collapse">
          <thead>
            <tr className="border-y border-slate-200 bg-slate-50 text-left">
              <th className="px-5 py-3 text-xs font-medium text-slate-500">
                Pair
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Type
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Volume
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Open Price
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Close Price
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Profit / Loss
              </th>

              <th className="px-4 py-3 text-xs font-medium text-slate-500">
                Status
              </th>

              <th className="px-5 py-3 text-right text-xs font-medium text-slate-500">
                Time
              </th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade, index) => {
              const isBuy = trade.type === "Buy";
              const isProfit = trade.profit.startsWith("+");

              return (
                <motion.tr
                  key={`${trade.pair}-${index}`}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{
                    duration: 0.3,
                    delay: 0.25 + index * 0.05,
                  }}
                  className="border-b border-slate-200 transition hover:bg-slate-50"
                >
                  {/* Pair */}
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-slate-900">
                      {trade.pair}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                        isBuy ? "text-blue-600" : "text-red-600"
                      }`}
                    >
                      {isBuy ? (
                        <FiArrowUp size={14} />
                      ) : (
                        <FiArrowDown size={14} />
                      )}

                      {trade.type}
                    </span>
                  </td>

                  {/* Volume */}
                  <td className="px-4 py-4 text-sm text-slate-700">
                    {trade.volume}
                  </td>

                  {/* Open */}
                  <td className="px-4 py-4 text-sm text-slate-600">
                    {trade.openPrice}
                  </td>

                  {/* Close */}
                  <td className="px-4 py-4 text-sm text-slate-600">
                    {trade.closePrice}
                  </td>

                  {/* Profit */}
                  <td className="px-4 py-4">
                    <span
                      className={`text-sm font-medium ${
                        isProfit ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {trade.profit}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                      {trade.status}
                    </span>
                  </td>

                  {/* Time */}
                  <td className="px-5 py-4 text-right text-xs text-slate-500">
                    {trade.time}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col gap-3 border-t border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">Showing 1–7 of 128 trades</p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous page"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
          >
            <FiChevronLeft size={16} />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white"
          >
            1
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
          >
            2
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
          >
            3
          </button>

          <button
            type="button"
            aria-label="Next page"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
