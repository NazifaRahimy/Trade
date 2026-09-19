"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLoader, FiActivity } from "react-icons/fi";
import { useRouter } from "next/navigation"; // 🚀 ابزار ناوبری بومی نکست برای دکمه View All
import api from "../../lib/axios"; // 🚀 ایمپورت هسته مرکزی شبکه پلتفرم شما

export default function RecentTrades() {
  const router = useRouter();
  const [recentTrades, setRecentTrades] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 📡 ۱. فچ کردن زنده آخرین معاملات کپی‌شده از دیتابیس جنگو
  useEffect(() => {
    const fetchRecentTrades = async () => {
      try {
        // خواندن تاریخچه لایو از اندپوینت اختصاصی آمار داشبورد شما
        const response = await api.get("/api/stats/trade-history/", {
          params: { limit: 4 } // فقط ۴ ترید آخر را برای صفحه اصلی فچ کن تا باکس شلوغ نشود
        });
        
        if (response.data && response.data.recent_trades) {
          setRecentTrades(response.data.recent_trades);
        }
      } catch (error) {
        console.error("Failed to load home dashboard recent trades:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecentTrades();
  }, []);

  // 🚀 ۲. هدایت کاربر به صفحه تمام‌عرض تاریخچه معاملات با کلیک روی View All
  const handleViewAllRedirect = () => {
    router.push("/dashboard/trade-history");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 p-6">
        <div>
          <p className="text-sm font-medium text-slate-500">Activity</p>
          <h3 className="mt-1 text-xl font-bold text-slate-900">Recent Trades</h3>
        </div>

        {/* دکمه View All متصل به روتور ناوبری */}
        <button
          type="button"
          onClick={handleViewAllRedirect}
          className="text-xs font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View All
        </button>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs text-slate-500">
              <th className="px-6 py-4 font-medium">Asset</th>
              <th className="px-6 py-4 font-medium">Type</th>
              <th className="px-6 py-4 font-medium">Size</th>
              <th className="px-6 py-4 font-medium">Result</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-400">
                  <FiLoader className="animate-spin text-blue-600 mx-auto" size={18} />
                  <span className="mt-1 block text-xs">Syncing operations ledger...</span>
                </td>
              </tr>
            ) : recentTrades.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-400 italic text-sm">
                  <FiActivity className="mx-auto text-slate-300 mb-2" size={20} />
                  No live trades executed by the bot yet.
                </td>
              </tr>
            ) : (
              // 🚀 ۳. رندر کاملاً داینامیک سطرهای دیتابیس واقعی کاربران به جای کدهای فیک قبلی
              recentTrades.map((trade, idx) => (
                <tr
                  key={trade.id || idx}
                  className="border-b border-slate-100 transition last:border-0 hover:bg-slate-50/50"
                >
                  {/* Asset name (e.g. XAUUSD) */}
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    {trade.pair}
                  </td>

                  {/* Order Type (BUY / SELL) */}
                  <td
                    className={`px-6 py-4 text-xs font-bold ${
                      trade.type === "BUY" ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    {trade.type}
                  </td>

                  {/* Volume Lot size */}
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                    {trade.volume}
                  </td>

                  {/* Profit / Loss with real conditional coloring */}
                  <td
                    className={`px-6 py-4 text-sm font-bold ${
                      trade.is_profit ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    {trade.profit_loss}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
