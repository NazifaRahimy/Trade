"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLink, FiCheck, FiX, FiLoader } from "react-icons/fi";
import { useRouter } from "next/navigation"; // 🚀 ابزار ناوبری بومی نکست برای دکمه
import { getDashboardStats } from "../../lib/api"; // 🚀 ایمپورت تابع تجاری پلتفرم شما

export default function BrokerConnection() {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  // 📡 ۱. استعلام وضعیت زنده اتصال حساب معاملاتی از بک‌اَند جنگو
  useEffect(() => {
    const checkActiveConnection = async () => {
      try {
        const data = await getDashboardStats();
        // بررسی فیلد اتصال سشن ابری MetaApi که در بک‌اند تنظیم کردیم
        if (data && data.broker_connection_status?.is_connected) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      } catch (error) {
        console.error("Failed to fetch broker connection brief status:", error);
        setIsConnected(false);
      } {
        setLoading(false);
      }
    };
    checkActiveConnection();
  }, []);

  // 🚀 ۲. هدایت کاربر به صفحه اصلی فرم تنظیمات بروکر هنگام کلیک روی دکمه
  const handleManageRedirect = () => {
    router.push("/dashboard/broker-form");
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-[210px] flex items-center justify-center gap-2">
        <FiLoader className="animate-spin text-blue-600" size={18} />
        <span className="text-xs text-slate-400 italic">Checking gateway link...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Broker Connection</p>
          <h3 className="mt-1 font-bold text-slate-900">Trading Account</h3>
        </div>

        {/* Link Icon */}
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
          isConnected ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-400"
        }`}>
          <FiLink />
        </div>
      </div>

      {/* 🔄 Connection Status کاملاً داینامیک بر اساس وضعیت واقعی دیتابیس */}
      {isConnected ? (
        <div className="mt-5 flex items-center gap-3 rounded-xl bg-emerald-50/50 border border-emerald-100 p-4 transition-all">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
            <FiCheck className="text-emerald-600" size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Connected</p>
            <p className="text-xs text-emerald-600 font-medium">Cloud execution is active</p>
          </div>
        </div>
      ) : (
        <div className="mt-5 flex items-center gap-3 rounded-xl bg-rose-50/50 border border-rose-100 p-4 transition-all">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50">
            <FiX className="text-rose-600" size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Disconnected</p>
            <p className="text-xs text-rose-500 font-medium">Copy-trade routing is paused</p>
          </div>
        </div>
      )}

      {/* 🔘 متصل کردن دکمه مدیریت به سیستم ناوبری روتور */}
      <button
        type="button"
        onClick={handleManageRedirect}
        className="mt-4 w-full rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-600 transition hover:border-blue-500 hover:text-blue-600 active:scale-[0.99]"
      >
        Manage Connection
      </button>
    </motion.div>
  );
}
