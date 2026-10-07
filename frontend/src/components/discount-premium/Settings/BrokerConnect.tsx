"use client";

import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import api from "@/src/lib/axios"; // 🚀 استفاده از اکسوس بومی تصفیه شده شما

// 🟢 تغییر ورودی تابع: اتصال مستقیم به فیلدها و آرایه سرورهای ادمین که از صفحه اصلی (پدر) پاس داده می‌شوند
export default function BrokerConnect({ fields, setFields, mt5Servers , supportedBrokers }: any) {
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });
  const [selectedBroker, setSelectedBroker] = useState("");

  // 🚀 متد شلیک و اتصال آنی حساب به اندپوینت متمرکز بک‌اَند جهت تست اتصال
  const handleConnectBroker = async () => {
    if (!fields?.mt5_login || !fields?.mt5_password) {
      setStatusMsg({ type: "error", text: "❌ لطفاً شماره حساب و رمز عبور را وارد کنید." });
      return;
    }

    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    try {
      const response = await api.post("/api/user/broker/", {
        mt5_login: intValue(fields.mt5_login),
        mt5_password: fields.mt5_password,
        mt5_server: fields.mt5_server,
      });

      if (response.status === 200) {
        setStatusMsg({ type: "success", text: "✅ حساب متاتریدر ۵ با موفقیت متصل و لایو شد." });
      }
    } catch (error: any) {
      console.error("Broker connection fault:", error);
      setStatusMsg({
        type: "error",
        text: error.response?.data?.detail || "❌ اتصال به بروکر ناموفق بود. مشخصات را بررسی کنید.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-lg font-semibold text-gray-900">MT5 Account Connection</h2>
        <p className="mt-1 text-sm text-gray-500">Connect your MetaTrader 5 account to use the trading robot.</p>
      </div>

      {/* نمایش پیام وضعیت شبکه */}
      {statusMsg.text && (
        <div className={`mt-4 rounded-xl p-3 text-xs font-medium border ${
          statusMsg.type === "success" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"
        }`}>
          {statusMsg.text}
        </div>
      )}

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* فیلد انتخاب سرور کاملاً داینامیک شده */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">MT5 Server</label>
          <select
            value={fields?.mt5_server || ""}
            onChange={(e) => setFields({ ...fields, mt5_server: e.target.value })}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          >
            <option value="">-- Select Broker Server --</option>
            
            {/* 🎯 رندر ۱۰۰٪ داینامیک سرورهایی که شما در داشبورد ادمین اضافه کردید */}
          
          {supportedBrokers?.map((brokerName: string, index: number) => (
            <option key={index} value={brokerName}>
              {brokerName}
            </option>
    ))}
          </select>
        </div>

        {/* فیلد لاگین متصل به استیت پدر */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Account Login</label>
          <input
            type="text"
            value={fields?.mt5_login || ""}
            onChange={(e) => setFields({ ...fields, mt5_login: e.target.value })}
            placeholder="Enter account login"
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* field پسورد متصل به استیت پدر */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Password</label>
          <input
            type="password"
            value={fields?.mt5_password || ""}
            onChange={(e) => setFields({ ...fields, mt5_password: e.target.value })}
            placeholder="Enter password"
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="text-xs font-semibold text-gray-500">Connection Status</p>
          <div className="mt-1 flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${statusMsg.type === "success" ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
            <span className="text-xs text-gray-500">
              {statusMsg.type === "success" ? "MT5 Account Linked" : "MT5 account is not connected"}
            </span>
          </div>
        </div>

        <button
          type="button"
          disabled={loading}
          onClick={handleConnectBroker}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-50 flex items-center gap-1"
        >
          {loading && <FiLoader className="animate-spin" size={12} />}
          Connect MT5
        </button>
      </div>
    </section>
  );
}

function intValue(val: string) {
  if (!val) return 0;
  return parseInt(String(val).replace(/[^0-9]/g, "")) || 0;
}
