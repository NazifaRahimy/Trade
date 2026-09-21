"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";
// 🚀 ۱. ایمپورت کردن کلاینت اصلی شبکه پلتفرم شما
import api from "../../lib/axios"; 

export default function AccountAllocation() {
  const [allocation, setAllocation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 📡 ۲. فچ کردن آنلاین سهم واقعی دارایی‌های حساب از دیتابیس جنگو
  useEffect(() => {
    const fetchPortfolioAllocation = async () => {
      try {
        // خواندن دیتای زنده دارایی‌ها از اندپوینت متمرکز آمار داشبورد شما
        const response = await api.get("/api/stats/overview/");
        if (response.data && response.data.portfolio_allocation) {
          setAllocation(response.data.portfolio_allocation);
        } else {
          // مقادیر ایمن پیش‌فرض تجاری در صورت خالی بودن دیتابیس کاربر تازه
          setAllocation({
            total_value: response.data.total_balance || "$0.00",
            forex_pct: 100,
            crypto_pct: 0,
            cash_pct: 0
          });
        }
      } catch (error) {
        console.error("Failed to load portfolio allocation details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolioAllocation();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-sm text-slate-400 italic flex items-center justify-center gap-2">
        <FiLoader className="animate-spin text-blue-600" size={18} />
        <span>Calculating portfolio allocation...</span>
      </div>
    );
  }

  // 📈 ۳. فرمول ریاضی محاسبه زاویه چرخش دایره بر اساس درصدهای واقعی دیتابیس
  const forexDeg = (allocation.forex_pct * 3.6).toFixed(1);
  const cryptoDeg = (Number(forexDeg) + (allocation.crypto_pct * 3.6)).toFixed(1);

  // تولید داینامیک گرادیان رنگی دایره بر اساس سهم بازارها
  const dynamicGradient = `conic-gradient(#2563eb 0deg ${forexDeg}deg, #22c55e ${forexDeg}deg ${cryptoDeg}deg, #fb923c ${cryptoDeg}deg 360deg)`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <p className="text-sm font-medium text-slate-500">Account Allocation</p>
      <h3 className="mt-1 text-xl font-bold text-slate-900">Portfolio</h3>

      {/* 🔄 Donut Chart کامپایل شده به صورت کاملا داینامیک بر اساس محاسبات بالا */}
      <div className="my-8 flex justify-center">
        <div 
          style={{ background: dynamicGradient }}
          className="relative flex h-40 w-40 items-center justify-center rounded-full shadow-inner transition-all duration-500"
        >
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm">
            <div className="text-center">
              <p className="text-xs font-medium text-slate-500">Total</p>
              {/* موجودی کل واقعی کاربر */}
              <p className="text-lg font-bold text-slate-900">{allocation.total_value}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Allocation Items */}
      <div className="space-y-4">
        <AllocationItem label="Forex" value={`${allocation.forex_pct}%`} color="bg-blue-500" />
        <AllocationItem label="Crypto" value={`${allocation.crypto_pct}%`} color="bg-emerald-500" />
        <AllocationItem label="Cash" value={`${allocation.cash_pct}%`} color="bg-orange-400" />
      </div>
    </motion.div>
  );
}

function AllocationItem({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${color}`} />
        <span className="text-slate-600 font-medium">{label}</span>
      </div>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}
