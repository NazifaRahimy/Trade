"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiArrowUpRight,
  FiClock,
  FiCopy,
  FiDollarSign,
  FiGrid,
  FiLink,
  FiSettings,
  FiTrendingUp,
  FiUsers,
  FiLoader,
  FiPercent,
  FiShield
} from "react-icons/fi";
import api from "@/src/lib/axios";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

export default function ActiveCopyTradersPage() {
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 📡 ۱. فچ آنلاین اطلاعات پورتفو و لیست تریدرها از بک‌اَند جنگو
  useEffect(() => {
    const fetchActiveTradersMetrics = async () => {
      try {
        const response = await api.get("/api/copy-trading/overview/");
        if (response.data) {
          setDashboardData(response.data);
        }
      } catch (error) {
        console.error("Critical Matrix Failure: Failed to stream active provider nodes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchActiveTradersMetrics();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center gap-2 text-sm text-slate-400 italic bg-white">
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>Synchronizing live active copy-trading nodes...</span>
      </div>
    );
  }

  const activeTraders = dashboardData?.active_traders || [];

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-50/50 p-4 md:p-6 lg:p-8 w-full text-slate-900">
        <div className="space-y-6 w-full max-w-[1700px] mx-auto">
          
          <h2 className="text-xl font-bold text-slate-900 mb-4">Your Active Copy Traders</h2>

          {activeTraders.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center text-slate-400 italic">
              No active master traders are being copied on your MetaTrader 5 account yet.
            </div>
          ) : (
            // 🚀 ۲. لوپ داینامیک: تک‌تک کارت‌های تریدرها به صورت سریالی رندر و زیر هم لیست می‌شوند
            activeTraders.map((trader: any) => (
              <div key={trader.id} className="space-y-6 bg-transparent w-full mb-8">
                
                {/* 🟩 بخش اول: مشخصات اصلی تریدر و دکمه‌های ناوبری (حفظ ۱۰۰٪ استایل تصویر شما) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-bold text-lg">
                        {trader.name?.charAt(0) || "T"}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">{trader.name}</h3>
                          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-600">
                            {trader.status || "Active"}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-400 mt-0.5">{trader.pair || "Forex & Gold"}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link href="/copy-trading/performance" className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition">
                        View Performance
                      </Link>
                      <Link href="/copy-trading/copy-settings" className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-700 transition">
                        Copy Settings
                      </Link>
                    </div>
                  </div>

                  {/* گرید مقادیر مبالغ سود و زیان (میانی) */}
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-slate-50 pt-5">
                    <div>
                      <span className="text-xs text-slate-400 font-medium">Investment</span>
                      <p className="text-base font-bold text-slate-900 mt-1">{trader.investment || "$0.00"}</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-medium">Profit</span>
                      <p className="text-base font-bold text-emerald-600 mt-1">{trader.profit || "$0.00"}</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-medium">Return</span>
                      <p className="text-base font-bold text-emerald-600 mt-1">{trader.return_pct || "0.00%"}</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-medium">Win Rate</span>
                      <p className="text-base font-bold text-slate-900 mt-1">{trader.win_rate || "0.0%"}</p>
                    </div>
                  </div>

                  {/* نوار وضعیت ابر متاتریدر انتهای کارت */}
                  <div className="mt-5 grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <FiTrendingUp size={18} />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">Copy Status</span>
                        <span className="text-sm font-semibold text-slate-900">Copying Active</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <FiActivity size={18} />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">Active Positions</span>
                        <span className="text-sm font-semibold text-slate-900">{trader.active_positions || 0} Positions</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                        <FiPercent size={17} />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">Copy Ratio</span>
                        <span className="text-sm font-semibold text-slate-900">{trader.copy_ratio || "1:1"}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 🟨 بخش دوم: آمار معاملاتی تفکیکی پیشرفته (Trading Statistics) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <FiActivity size={19} />
                    </div>
                    <div>
                      <h2 className="font-semibold text-slate-900 text-base">Trading Statistics</h2>
                      <p className="text-xs text-slate-400">Detailed trading performance nodes.</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex justify-between items-center">
                      <span className="text-xs text-slate-500 font-medium">Total Trades</span>
                      <span className="text-sm font-bold text-slate-900">{trader.total_trades || 0}</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex justify-between items-center">
                      <span className="text-xs text-slate-500 font-medium">Profit Factor</span>
                      <span className="text-sm font-bold text-emerald-600">{trader.profit_factor || "0.00"}</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex justify-between items-center">
                      <span className="text-xs text-slate-500 font-medium">Average Win</span>
                      <span className="text-sm font-bold text-emerald-600">{trader.avg_win || "$0.00"}</span>
                    </div>
                  </div>
                </motion.div>

                {/* 🟧 بخش سوم: ابزار مانیتورینگ مدیریت ریسک (Risk Management) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                      <FiShield size={19} />  
                    </div>
                    <div>
                      <h2 className="font-semibold text-slate-900 text-base">Risk Management</h2>
                      <p className="text-xs text-slate-400">Monitor and control your copy-trading risk.</p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex justify-between items-center">
                      <span className="text-xs text-slate-500 font-medium">Max Drawdown</span>
                      <span className="text-sm font-bold text-red-600">{trader.max_drawdown || "0.00%"}</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex justify-between items-center">
                      <span className="text-xs text-slate-500 font-medium">Stop Loss</span>
                      <span className="text-sm font-bold text-red-600">{trader.stop_loss || "0.00%"}</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex justify-between items-center">
                      <span className="text-xs text-slate-500 font-medium">Take Profit</span>
                      <span className="text-sm font-bold text-emerald-600">{trader.take_profit || "0.00%"}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))
          )}

        </div>
      </main>
    </ProtectedRoute>
  );
}