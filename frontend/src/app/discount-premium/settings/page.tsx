"use client";

import React, { useState, useEffect } from "react";
import TradingSettings from "@/src/components/discount-premium/Settings/TradingSettings";
import StrategySettings from "@/src/components/discount-premium/Settings/StrategySettings";
import TakeProfitSettings from "@/src/components/discount-premium/Settings/TakeProfitSettings";
import NotificationSettings from "@/src/components/discount-premium/Settings/NotificationSettings";
import AppearanceSettings from "@/src/components/discount-premium/Settings/AppearanceSettings";
import BrokerConnect from "@/src/components/discount-premium/Settings/BrokerConnect";
import RiskSettings from "@/src/components/discount-premium/Settings/RiskSettings";
import api from "@/src/lib/axios"; // کلاینت اکسوس بومی شما

const BrokerConnectWithProps = BrokerConnect as React.ComponentType<any>;
const RiskSettingsWithProps = RiskSettings as React.ComponentType<any>;
const StrategySettingsWithProps = StrategySettings as React.ComponentType<any>;

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // 🔌 ۱. مقادیر فرم متاتریدر ۵
  const [brokerFields, setBrokerFields] = useState({
    mt5_server: "MetaQuotes-Demo",
    mt5_login: "",
    mt5_password: ""
  });

  // 🔒 ۲. پارامترهای مدیریت ریسک و وزن پوزیشن‌ها
  const [riskFields, setRiskFields] = useState({
    risk_percent: "2",
    custom_lot: "0.10",
    max_open_trades: "3"
  });

  // 📊 ۳. پارامترهای تارگت‌های حد سود (Take Profit)
  const [tpSettings, setTpSettings] = useState({
    tp1: "Previous High/Low",
    tp2: "Liquidity Target",
    tp3: "Extended Target"
  });

  // 🔔 ۴. سوئیچ‌های نوتیفیکیشن و هشدارها
  const [notifications, setNotifications] = useState({
    newSetup: false,
    entryAlert: false,
    tpHit: true,
    slHit: true
  });
  const [strategyFlags, setStrategyFlags] = useState({
    premiumDiscount: true,
    fvg: true,
    bos: true,
    choch: false,
  });


  // 📡 واکشی اولیه تنظیمات ذخیره شده از دیتابیس جنگو به محض لود شدن صفحه
  useEffect(() => {
    const loadSavedSettingsFeeds = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) return;

        const response = await api.get("/api/user/broker/");
        if (response.data) {
          // در صورت وجود دیتای قبلی روی سرور، فیلدها خودکار پر می‌شوند
        }
      } catch (err) {
        console.error("Failed to load initial server configurations", err);
      }
    };
    loadSavedSettingsFeeds();
  }, []);

  // 🚀 ۵. ادغام نهایی تمام پکت‌ها در یک تابع واحد (بدون تداخل و حذف کدهای قبلی)
  // 🚀 ۵. ادغام نهایی تمام پکت‌ها در یک تابع واحد (بدون تداخل و حذف کدهای قبلی)
  const handleSaveAllSettings = async () => {
    setLoading(true);
    setSuccessMsg("");
    try {
      // الف) شلیک اطلاعات حساب کارگزاری متاتریدر ۵
      if (brokerFields.mt5_login) {
        await api.post("/api/user/broker/", {
          mt5_login: parseInt(brokerFields.mt5_login) || 0,
          mt5_password: brokerFields.mt5_password,
          mt5_server: brokerFields.mt5_server
        });
      }

      // ب) شلیک فیلترهای کنترل ریسک، حد سودها، هشدارهای نوتیفیکیشن و فیلترهای استراتژی یک‌جا به پایتون
      await api.post("/api/user/broker/", {
        risk_percent: parseFloat(riskFields.risk_percent) || 2.0,
        max_open_trades: parseInt(riskFields.max_open_trades) || 3,
        custom_lot: parseFloat(riskFields.custom_lot) || 0.10,
        tp_1_method: tpSettings.tp1,
        tp_2_method: tpSettings.tp2,
        tp_3_method: tpSettings.tp3,
        alert_new_setup: notifications.newSetup,
        alert_entry: notifications.entryAlert,
        alert_tp: notifications.tpHit,
        alert_sl: notifications.slHit,
        
        // 🟢 🚀 فیلترهای چهارگانه ICT ربات شما که در اینجا چفت می‌شوند:
        require_premium_discount: strategyFlags.premiumDiscount,
        require_fvg: strategyFlags.fvg,
        require_bos: strategyFlags.bos,
        require_choch: strategyFlags.choch,
      });

      setSuccessMsg("✅ تمام تنظیمات ربات طلا با موفقیت در دیتابیس ذخیره و لایو شد.");
    } catch (error) {
      console.error("❌ Failed to push setting packets:", error);
      alert("خطا در ذخیره‌سازی تنظیمات. اتصال سرور جنگو را بررسی کنید.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="space-y-6 bg-white p-6">
      {/* هدر تنظیمات */}
      <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Configure trading, strategy, take profit and notification preferences.
          </p>
        </div>
      </div>

      <span className="w-fit rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
        STRATEGY SETTINGS
      </span>

      {/* نمایش پیام موفقیت در صورت ثبت دیتابیس */}
      {successMsg && (
        <div className="rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-700 border border-emerald-200">
          {successMsg}
        </div>
      )}

      {/* 🟢 تمام کامپوننت‌های اصیل شما بدون دستکاری گرافیک رندر می‌شوند */}
      <BrokerConnectWithProps fields={brokerFields} setFields={setBrokerFields} />
      <RiskSettingsWithProps fields={riskFields} setFields={setRiskFields} />
      <TradingSettings />
      <StrategySettingsWithProps enabled={strategyFlags} setEnabled={setStrategyFlags} />
      <TakeProfitSettings />
      <NotificationSettings />
      <AppearanceSettings />

      {/* 🚀 دکمه ذخیره نهایی متمرکز و بدون تداخل نام دو تابع */}
      <div className="flex justify-end border-t border-gray-100 pt-4">
        <button
          type="button"
          disabled={loading}
          onClick={handleSaveAllSettings}
          className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
          ) : null}
          Save Settings
        </button>
      </div>
    </div>
  );
}
