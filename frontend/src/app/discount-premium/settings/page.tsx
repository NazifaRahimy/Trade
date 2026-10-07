"use client";

import React, { useState, useEffect } from "react";
import StrategySettings from "@/src/components/discount-premium/Settings/StrategySettings";
import BrokerConnect from "@/src/components/discount-premium/Settings/BrokerConnect";
import RiskSettings from "@/src/components/discount-premium/Settings/RiskSettings";
import api from "@/src/lib/axios"; 

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [mt5Servers, setMt5Servers] = useState<string[]>([]);
  const [supportedBrokers, setSupportedBrokers] = useState<string[]>([]);
  // 🔌 ۱. استیت‌های داینامیک مقادیر فرم متاتریدر ۵
  const [brokerFields, setBrokerFields] = useState({
    mt5_server: "",
    mt5_login: "",
    mt5_password: ""
  });

  // 🔒 ۲. استیت‌های داینامیک مدیریت ریسک و وزن پوزیشن‌ها
  const [riskFields, setRiskFields] = useState({
    risk_percent: "",
    custom_lot: "",
    max_open_trades: "",
    symbol: "XAUUSD",
    structure_timeframe: "M5",
    entry_timeframe: "M1",
    min_rr: "1:2",
    max_risk_pct: "2"
  });

  
  // 🔔 ۴. استیت‌های داینامیک سوئیچ‌های نوتیفیکیشن و هشدارها
  const [notifications, setNotifications] = useState({ newSetup: false, entryAlert: false, tpHit: false, slHit: false });

  // 🧠 ۵. استیت‌های داینامیک فیلترهای استراتژی ICT
  const [strategyFlags, setStrategyFlags] = useState({ premiumDiscount: false, fvg: false, bos: false, choch: false });

  // 📡 واکشی لیست کارگزاری‌های فعال از سرور پایتون
  useEffect(() => {
    const fetchServers = async () => {
      try {
        const res = await api.get("/api/market-data/broker/symbols/");
        if (res.data && res.data.servers) {
          setMt5Servers(res.data.servers);
        }
      } catch (e) {
        console.error("Failed to stream live MT5 broker servers:", e);
      }
    };
    fetchServers();
  }, []);
  useEffect(() => {
  const fetchSupportedBrokers = async () => {
    try {
      const response = await api.get("/api/user/broker-list/");

      if (response.data?.supported_brokers) {
        setSupportedBrokers(response.data.supported_brokers);
      }
    } catch (error) {
      console.error("Failed to load supported brokers:", error);
    }
  };

  fetchSupportedBrokers();
}, []);
  // 📡 واکشی ۱۰۰٪ داینامیک تنظیمات قبلی از دیتابیس لایو جنگو
  useEffect(() => {
    const loadSavedSettingsFeeds = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) return;

      const response = await api.get("/api/user/broker/");
        if (response.data) {
          const d = response.data;
          
          setBrokerFields({
            mt5_server: d.broker?.mt5_server || "",
            mt5_login: d.broker?.mt5_login ? String(d.broker.mt5_login) : "",
            mt5_password: d.broker?.mt5_password || ""
          });

          setRiskFields({
            risk_percent: d.risk?.risk_percent ? String(d.risk.risk_percent) : "",
            custom_lot: d.risk?.custom_lot ? String(d.risk.custom_lot) : "",
            max_open_trades: d.risk?.max_open_trades ? String(d.risk.max_open_trades) : "",
            symbol: d.risk?.symbol || "XAUUSD",
            structure_timeframe: d.risk?.structure_timeframe || "M5",
            entry_timeframe: d.risk?.entry_timeframe || "M1",
            min_rr: d.risk?.min_rr || "1:2",
            max_risk_pct: d.risk?.risk_percent ? String(d.risk.risk_percent) : "2"
          });

          setNotifications({
            newSetup: Boolean(d.notifications?.newSetup),
            entryAlert: Boolean(d.notifications?.entryAlert),
            tpHit: Boolean(d.notifications?.tpHit),
            slHit: Boolean(d.notifications?.slHit)
          });

          setStrategyFlags({
            premiumDiscount: Boolean(d.strategy?.premiumDiscount),
            fvg: Boolean(d.strategy?.fvg),
            bos: Boolean(d.strategy?.bos),
            choch: Boolean(d.strategy?.choch)
          });
        }
      } catch (err) {
        console.error("Failed to load initial server configurations:", err);
      }
    };
    loadSavedSettingsFeeds();
  }, []);

  // 🚀 شلیک هم‌زمان تمام پکت‌ها به بک‌اَند
  const handleSaveAllSettings = async () => {
    setLoading(true);
    setSuccessMsg("");
    try {
      await api.post("/api/user/broker/",  {
        mt5_login: parseInt(brokerFields.mt5_login) || 0,
        mt5_password: brokerFields.mt5_password,
        mt5_server: brokerFields.mt5_server,
        risk_percent: parseFloat(riskFields.risk_percent) || 0.0,
        max_open_trades: parseInt(riskFields.max_open_trades) || 0,
        custom_lot: parseFloat(riskFields.custom_lot) || 0.0,
        symbol: riskFields.symbol,
        structure_timeframe: riskFields.structure_timeframe,
        entry_timeframe: riskFields.entry_timeframe,
        min_rr: riskFields.min_rr,

        alert_new_setup: notifications.newSetup,
        alert_entry: notifications.entryAlert,
        alert_tp: notifications.tpHit,
        alert_sl: notifications.slHit,
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
    <div className="w-full space-y-6 bg-white p-6 rounded-2xl">
      {/* هدر صفحه تنظیمات */}
      <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">Configure trading, strategy, take profit and notification preferences.</p>
        </div>
      </div>

      <div className="w-fit rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider">
        Strategy Settings
      </div>

      {/* نمایش نوتیفیکیشن موفقیت اتمیک دیتابیس */}
      {successMsg && (
        <div className="rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-700 border border-emerald-200">
          {successMsg}
        </div>
      )}

      {/* 🟢 رندر ۱۰۰٪ تمیز، خط‌به‌خط و بدون دوقلو شدن فرم‌ها بر اساس منطق گرید پلتفرم شما */}
      <div className="space-y-6">
      <BrokerConnect
        fields={brokerFields}
        setFields={setBrokerFields}
        mt5Servers={mt5Servers}
        supportedBrokers={supportedBrokers}
      />        
      <RiskSettings
          {...({
            fields: riskFields,
            setFields: setRiskFields,
          } as any)}
        />
        <StrategySettings enabled={strategyFlags} setEnabled={setStrategyFlags} />
      </div>

      {/* دکمه ثبت نهایی متمرکز */}
      <div className="flex justify-end border-t border-gray-100 pt-5">
        <button
          type="button"
          disabled={loading}
          onClick={handleSaveAllSettings}
          className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
        >
          {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>}
          Save Settings
        </button>
      </div>
    </div>
  );
}
