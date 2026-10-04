"use client";

import React, { useState } from "react";
import api from "@/src/lib/axios"; // 🚀 استفاده از اکسوس بومی تصفیه شده شما

export default function BrokerConnect() {
  const [server, setServer] = useState("MetaQuotes-Demo");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  // 🚀 متد شلیک اطلاعات حساب به اندپوینت متمرکز بک‌اَند
  const handleConnectBroker = async () => {
    if (!login || !password) {
      setStatusMsg({ type: "error", text: "❌ لطفاً شماره حساب و رمز عبور را وارد کنید." });
      return;
    }

    setLoading(false);
    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    try {
      const response = await api.post("/api/user/broker/", {
        mt5_login: intValue(login),
        mt5_password: password,
        mt5_server: server,
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
        {/* فیلد انتخاب سرور */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">MT5 Server</label>
          <select
            value={server}
            onChange={(e) => setServer(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          >
            <option value="MetaQuotes-Demo">MetaQuotes-Demo</option>
            <option value="Exness-MT5-Trial9">Exness-MT5-Trial9</option>
            <option value="Alpari-MT5-Demo">Alpari-MT5-Demo</option>
          </select>
        </div>

        {/* فیلد لاگین */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Account Login</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Enter account login"
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* فیلد پسورد */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          {loading && <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></span>}
          Connect MT5
        </button>
      </div>
    </section>
  );
}

function intValue(val: string) {
  return parseInt(val.replace(/[^0-9]/g, "")) || 0;
}
