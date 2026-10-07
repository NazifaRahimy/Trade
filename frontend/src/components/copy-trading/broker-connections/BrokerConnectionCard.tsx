"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiRefreshCw, FiServer, FiUser, FiInfo, FiLoader } from "react-icons/fi";
import api from "@/src/lib/axios"; 
import { getDashboardStats } from "@/src/lib/api";

export default function BrokerConnectionCard() {
  const [account, setAccount] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [testing, setTesting] = useState(false);
  // 🟢 نام متغیر تغییر دهنده وضعیت باید دقیقاً ست شود:
const [connection, setConnection] = useState<any>(null);
  
// 🟢 ۱. تابع تست زنده اتصال حساب متاتریدر ۵ کاربر به بروکر طلا
  const handleTestConnection = async () => {
    setTesting(true);
    try {
      // اتصال لایو به هسته بررسی پسورد و هندشیک متاتریدر ۵
      await api.post("/api/market-data/broker/connect/", {
        mt5_login: connection?.mt5_login,
        mt5_password: connection?.mt5_password,
        mt5_server: connection?.mt5_server
      });
      
      // به‌روزرسانی کارت پس از موفقیت‌آمیز بودن تست اتصال
      await fetchConnection();
    } catch (error) {
      console.error("Error testing broker connection:", error);
    } finally {
      setTesting(false);
    }
  };

// 🟢 ۲. تابع فچ کردن دیتای واقعی و زنده حساب متاتریدر ۵ کاربر از دیتابیس ربات طلا
const fetchConnection = async () => {
  try {
    // تغییر آدرس قدیمی به اندپوینت واقعی فچ حساب معاملاتی طلا
    const response = await api.get("/api/market-data/broker/connect/");
    
    if (response.data && response.data.mt5_login) {
      setConnection(response.data);
    } else {
      setConnection(null);
    }
  } catch (error) {
    console.error("Error loading active broker connection:", error);
  } finally {
    setLoading(false);
  }
};


useEffect(() => {
  const fetchCurrentConnection = async () => {
    // 🟢 گارد حفاظتی: اگر توکن هنوز در مرورگر لود نشده، اصلاً درخواست فرستاده نشود
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (!token) {
        console.log("Awaiting token initialization...");
        return; 
      }
    }

    try {
      setLoading(true);
      // تابع فچ دیتا یا لود داشبورد شما
      const data = await getDashboardStats(); 
      if (data) {
        setConnection(data);
      }else {
          // اگر آمار داشبورد خالی بود، مستقیماً دیتای واقعی دیتابیس فچ می‌شود
          await fetchConnection();
        }
    } catch (error) {
      console.error("Error loading active broker connection:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchCurrentConnection();
}, []);


  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-sm text-slate-400 italic flex items-center justify-center gap-2 h-[240px]">
        <FiLoader className="animate-spin text-blue-600" size={18} />
        <span>Loading live connection state...</span>
      </div>
    );
  }
  const isConnected = connection && (connection.status === "CONNECTED" || connection.is_active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Current Connection</h2>
          <p className="mt-1 text-xs text-slate-500">Your currently connected trading account</p>
        </div>

        <span className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${
          isConnected 
            ? "border-emerald-200 bg-emerald-50 text-emerald-700" 
            : "border-slate-200 bg-slate-50 text-slate-500"
        }`}>
          <span className={`h-1.5 w-1.5 rounded-full ${isConnected ? "bg-emerald-500" : "bg-slate-400"}`} />
          {isConnected ? "Connected" : "Inactive"}
        </span>
      </div>

      {account ? (
        <>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-slate-900 shadow-sm border border-slate-100">
                MT5
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Login Account: #{account.mt5_login}</h3>
                <div className="mt-2 grid gap-2 text-xs text-slate-500 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <FiUser className="text-slate-400" />
                    <span>Server: {account.mt5_server}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiServer className="text-slate-400" />
                    <span>Symbol: {account.gold_symbol || "XAUUSD"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleTestConnection}
              disabled={testing}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 w-full"
            >
              <FiRefreshCw className={`${testing ? "animate-spin text-blue-600" : ""}`} size={16} />
              {testing ? "Testing..." : "Test Connection"}
            </button>
          </div>
        </>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6 text-center">
          <FiInfo className="mx-auto text-slate-400 mb-2" size={24} />
          <h4 className="text-sm font-semibold text-slate-800">No Broker Linked</h4>
          <p className="text-xs text-slate-400 mt-1">Please fill out the form below to synchronize your account.</p>
        </div>
      )}
    </motion.div>
  );
}
