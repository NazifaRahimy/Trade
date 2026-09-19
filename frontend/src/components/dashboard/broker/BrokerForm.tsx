"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiEye, FiEyeOff, FiKey, FiLock, FiServer, FiUser, FiWifi, FiTag, FiLoader,
} from "react-icons/fi";
import api from "../../../lib/axios"; 

// 🚀 ۱. ایمپورت کردن وب‌سرویس اصلی پلتفرم شما
import { updateBrokerConnection } from "../../../lib/api"; 

export default function BrokerForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [dbBrokers, setDbBrokers] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    broker: "", // مقدار اولیه را خالی می‌گذاریم تا کاربر خودش انتخاب کند
    accountType: "live",
    accountId: "",
    server: "",
    symbol: "XAUUSD",
    password: "",
    apiKey: ""
  });
  useEffect(() => {
    const loadSupportedBrokers = async () => {
      try {
        const response = await api.get("/api/user/broker-list/");
        if (response.data && response.data.supported_brokers) {
          setDbBrokers(response.data.supported_brokers);
          
          if (response.data.supported_brokers.length > 0) {
            setFormData(prev => ({ ...prev, broker: response.data.supported_brokers[0] }));
          }
        }
      } catch (error) {
        console.error("Failed to load backend dynamic brokers list:", error);
      }
    };
    loadSupportedBrokers();
  }, []);


  // 📝 ۳. تابع ذخیره‌سازی داینامیک تغییرات اینپوت‌ها در حافظه موقت
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📡 ۴. تابع اصلی ارسال اطلاعات فرم به بک‌اَند جنگو
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.accountId || !formData.password || !formData.server) {
      alert("⚠️ Configuration Error: Please fill in Account ID, Server, and Password fields.");
      return;
    }

    try {
      setLoading(true);

      // بسته‌بندی اطلاعات دقیقاً بر اساس فرمت ورودی تابع شما در فایل api.tsx
      const payload = {
        mt5_login: Number(formData.accountId),
        mt5_password: formData.password,
        mt5_server: formData.server
      };

      // اجرای درخواست واقعی به بک‌اَند جنگو
      await updateBrokerConnection(payload);
      
      alert("✅ Authentication Successful: Your MT5 terminal has been linked to the copy-trade cloud engine.");
    } catch (error: any) {
      console.error("Broker synchronization failed:", error);
      alert("❌ Authentication Rejected: Connection failed. Verify your login details and matching MT5 server architecture.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
    >
      <div className="mb-6">
        <h2 className="text-base font-semibold text-slate-900">Broker Account</h2>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          Enter your broker account credentials to establish a connection.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Broker Dropdown Select */}
        <div>
          <label htmlFor="broker" className="mb-2 block text-sm font-medium text-slate-700">
            Broker
          </label>
          <div className="relative">
            <FiWifi className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <select
              id="broker"
              name="broker"
              value={formData.broker}
              onChange={handleChange}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
            >
              {/* 🚀 ۵. رندر داینامیک نام بروکرهای واقعی ثبت شده در ادمین جنگو به جای گزینه‌های فیک قدیمی */}
              {dbBrokers.length === 0 ? (
                <option value="">Loading verified brokers...</option>
              ) : (
                dbBrokers.map((brokerName, index) => (
                  <option key={index} value={brokerName.toLowerCase().replace(/\s+/g, '-')}>
                    {brokerName}
                  </option>
                ))
              )}
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Account Type Setup */}
        <div>
          <label htmlFor="accountType" className="mb-2 block text-sm font-medium text-slate-700">
            Account Type
          </label>
          <select
            id="accountType"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
          >
            <option value="live">Live Account</option>
            <option value="demo">Demo Account</option>
          </select>
        </div>

        {/* Account ID + Server Inputs Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="accountId" className="mb-2 block text-sm font-medium text-slate-700">
              Account ID / Login
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
              <input
                id="accountId"
                name="accountId"
                type="text"
                value={formData.accountId}
                onChange={handleChange} // 👈 متصل شد
                placeholder="1234567"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
              />
            </div>
          </div>
          <div>
            <label htmlFor="server" className="mb-2 block text-sm font-medium text-slate-700">
              Server
            </label>
            <div className="relative">
              <FiServer className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
              <input
                id="server"
                name="server"
                type="text"
                value={formData.server}
                onChange={handleChange} // 👈 متصل شد
                placeholder="ICMarkets-Live"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
              />
            </div>
          </div>
        </div>

        {/* Target Symbol Customization */}
        <div>
          <label htmlFor="symbol" className="mb-2 block text-sm font-medium text-slate-700">
            Symbol
          </label>
          <div className="relative">
            <FiTag className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input
              id="symbol"
              name="symbol"
              type="text"
              value={formData.symbol}
              onChange={handleChange} // 👈 متصل شد
              placeholder="XAUUSD"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
            />
          </div>
        </div>

        {/* Terminal Access Password */}
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange} // 👈 متصل شد
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 pr-11 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
            </button>
          </div>
        </div>

        {/* Supplementary API Key Field */}
        <div>
          <label htmlFor="apiKey" className="mb-2 block text-sm font-medium text-slate-700">
            API Key <span className="ml-2 text-xs font-normal text-slate-400">(Optional)</span>
          </label>
          <div className="relative">
            <FiKey className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input
              id="apiKey"
              name="apiKey"
              type="text"
              value={formData.apiKey}
              onChange={handleChange} // 👈 متصل شد
              placeholder="Enter API key if required"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-10 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
            />
          </div>
        </div>

        {/* Remember Profile Session */}
        <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-slate-300 bg-white text-blue-600 focus:ring-blue-500"
          />
          <span>Remember this account</span>
        </label>

        {/* Submit Connection Anchor */}
        <button
          type="submit"
          disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin" size={17} />
              <span>Connecting to Cloud Node...</span>
            </>
          ) : (
            <span>Connect Broker</span>
          )}
        </button>
      </form>
    </motion.div>
  );
}
