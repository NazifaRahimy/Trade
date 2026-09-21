"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiLoader } from "react-icons/fi";
// 🚀 ۱. ایمپورت ابزارهای رسم نمودار استاندارد و کلاینت شبکه متمرکز شما
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import api from "../../lib/axios"; 

export default function PortfolioChart() {
  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setDays] = useState("30"); // وضعیت فیلتر بازه زمانی ۳۰ روزه

  // 📡 ۲. فچ کردن آنلاین تاریخچه رشد بالانس حساب از دیتابیس جنگو
  const fetchGrowthData = async () => {
    try {
      setLoading(true);
      // ارسال درخواست به اندپوینت آمار داشبورد با پارامتر بازه زمانی انتخاب شده
      const response = await api.get("/api/stats/overview/", {
        params: { days: timeframe }
      });
      
      if (response.data && response.data.growth_chart_data) {
        // دیتای دریافتی باید آرایه‌ای شامل کدهای تاریخ و بالانس باشد: [{ date: 'May 04', balance: 1050 }, ...]
        setChartData(response.data.growth_chart_data);
      } else {
        // دیتای پیش‌فرض ایمن در صورت نبود ترید قبلی برای حساب‌های تازه ثبت‌نام شده
        setChartData([
          { date: "Day 1", balance: response.data.total_balance || 0 },
          { date: "Current", balance: response.data.total_balance || 0 }
        ]);
      }
    } catch (error) {
      console.error("Critical: Failed to load portfolio growth timeline:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGrowthData();
  }, [timeframe]); // به محض تغییر منوی کشویی روزها، نمودار فوراً مجدداً فچ و نوسازی می‌شود

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Portfolio Growth</h2>
          <p className="text-xs text-slate-400 mt-0.5">Live account equity performance curve</p>
        </div>

        {/* 🔘 ۳. تبدیل دکمه ساده قدیمی به منوی انتخابی داینامیک برای تغییر روزها */}
        <div className="relative">
          <select
            value={timeframe}
            onChange={(e) => setDays(e.target.value)}
            className="appearance-none flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 pl-3 pr-8 py-2 text-xs font-medium text-slate-600 outline-none cursor-pointer transition hover:bg-slate-100 hover:text-slate-900"
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 90 Days</option>
          </select>
          <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
        </div>
      </div>

      {/* 🚀 ۴. رندر کردن نمودار Area داینامیک و زنده به جای کدهای ثابت SVG قدیمی */}
      <div className="h-64 w-full flex items-center justify-center">
        {loading ? (
          <div className="text-center text-sm text-slate-400 italic flex items-center gap-2">
            <FiLoader className="animate-spin text-blue-600" size={18} />
            <span>Calculating account growth nodes...</span>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              {/* خطوط شطرنجی پس‌زمینه کم‌رنگ */}
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              
              {/* محور افقی تاریخ‌ها */}
              <XAxis dataKey="date" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} dy={10} />
              
              {/* محور عمودی مقادیر دلار */}
              <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              
              {/* باکس نمایش جزییات قیمت با نگه داشتن ماوس روی نمودار */}
              <Tooltip 
                contentStyle={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)" }}
                labelStyle={{ fontSize: "11px", fontWeight: "600", color: "#64748b" }}
                itemStyle={{ fontSize: "13px", fontWeight: "700", color: "#2563eb" }}
                formatter={(value: any) => [`$${Number(value).toLocaleString()}`, "Balance"]}
              />
              
              {/* لایه رنگی زیر منحنی هماهنگ با تم آبی لوکس شما */}
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              
              {/* خط اصلی منحنی رشد */}
              <Area 
                type="monotone" 
                dataKey="balance" 
                stroke="#2563eb" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorBalance)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </motion.div>
  );
}
