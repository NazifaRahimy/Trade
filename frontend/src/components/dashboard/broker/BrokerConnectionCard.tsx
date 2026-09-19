"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiRefreshCw, FiServer, FiUser, FiInfo, FiLoader } from "react-icons/fi";
// 🚀 ایمپورت کردن سرویس‌های واقعی پلتفرم شما
import { getDashboardStats, toggleBotStatus } from "../../../lib/api"; 

export default function BrokerConnectionCard() {
  const [connection, setConnection] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [testing, setTesting] = useState(false);

  // 📡 فچ کردن آنلاین اطلاعات حساب جاری کاربر از دیتابیس جنگو
  const fetchCurrentConnection = async () => {
    try {
      const data = await getDashboardStats();
      // بررسی اینکه آیا کاربر قبلاً حسابی را متصل کرده است یا خیر
      if (data && data.is_active !== undefined) {
        setConnection(data);
      } else {
        setConnection(null);
      }
    } catch (error) {
      console.error("Error fetching current connection:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentConnection();
  }, []);

  // ⚡ دکمه تست اتصال (Test Connection)
  const handleTestConnection = async () => {
    try {
      setTesting(true);
      await getDashboardStats();
      alert("✅ Connection Status: Active & Synced with cloud node network.");
    } catch (err) {
      alert("❌ Connection Error: Cannot communicate with the terminal server.");
    } finally {
      setTesting(false);
    }
  };

  // 🔴 دکمه قطع اتصال (Disconnect Account)
  const handleDisconnect = async () => {
    if (!confirm("Are you sure you want to disconnect this trading account?")) return;
    try {
      await toggleBotStatus(false);
      alert("⚠️ Broker account deactivated successfully.");
      await fetchCurrentConnection(); // رفرش آنی کارت
    } catch (err) {
      alert("Error disconnecting account.");
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-sm text-slate-400 italic flex items-center justify-center gap-2 h-[240px]">
        <FiLoader className="animate-spin text-blue-600" size={18} />
        <span>Loading live connection state...</span>
      </div>
    );
  }
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Current Connection
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Your currently connected trading account
          </p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Connected
        </span>
      </div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-slate-900 shadow-sm">
            IC
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-slate-900">IC Markets</h3>
            <div className="mt-2 grid gap-2 text-xs text-slate-500 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <FiUser />
                <span>Account: #1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <FiServer />
                <span>Server: ICMarkets-Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          <FiRefreshCw size={16} />
          Test Connection
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100"
        >
          Disconnect
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600">
        <FiCheckCircle size={14} />
        Last checked a few moments ago
      </div>
    </motion.div>
  );
}
