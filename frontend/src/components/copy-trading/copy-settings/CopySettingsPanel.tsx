"use client";

import { useEffect, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSave, FiLoader, FiCheckCircle } from "react-icons/fi";
// 🚀 اتصال به کلاینت متمرکز شبکه پلتفرم شما
import api from "@/src/lib/axios";

function ToggleRow({
  label,
  description,
  enabled,
  onChange,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-slate-800">{label}</div>
        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>

      <button
        type="button"
        aria-label={label}
        onClick={onChange}
        className={[
          "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2",
          enabled ? "border-blue-500 bg-blue-500" : "border-slate-300 bg-slate-200",
        ].join(" ")}
      >
        <span
          className={[
            "inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-200",
            enabled ? "translate-x-5" : "translate-x-1",
          ].join(" ")}
        />
      </button>
    </div>
  );}
export default function CopySettingsPanel() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [pausing, setPausing] = useState(false); // 🟢 استیت جدید جهت تفکیک کامل لودینگ دکمه استاپ از ذخیره
  const [copyMode, setCopyMode] = useState("percentage");
  const [copyRatio, setCopyRatio] = useState(100);
  const [maxDrawdown, setMaxDrawdown] = useState(10);
  const [maxDailyLoss, setMaxDailyLoss] = useState(5);
  const [maxLotSize, setMaxLotSize] = useState(1.0);
  const [maxOpenPositions, setMaxOpenPositions] = useState(5);
  const [copyNewTrades, setCopyNewTrades] = useState(true);
  const [copyStopLoss, setCopyStopLoss] = useState(true);
  const [copyTakeProfit, setCopyTakeProfit] = useState(true);
  const [pauseCopying, setPauseCopying] = useState(false);
  const loadCloudSettings = async () => {
    try {
      const response = await api.get("/api/copy-trading/copy-settings/");
      if (response.data) {
        const d = response.data;
        setCopyMode(d.copy_type || "Percentage");
        setCopyRatio(d.copy_ratio || 100);
        setMaxDailyLoss(d.max_daily_loss || 5);
        setMaxOpenPositions(d.max_open_positions || 5);
        setCopyNewTrades(d.copy_new_trades !== false);
        setCopyStopLoss(d.copy_sl !== false);
        setCopyTakeProfit(d.copy_tp !== false);
        setPauseCopying(d.is_paused === true);
      }
    } catch (error) {
      console.error("Failed to fetch cloud copy configuration:", error);
    } finally {
      setLoading(false);
    }};
  useEffect(() => {
    loadCloudSettings();
  }, []);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      setSuccessMsg("");
      const payload = {
        copy_type: copyMode,
        copy_ratio: Number(copyRatio),
        max_daily_loss: Number(maxDailyLoss),
        max_open_positions: Math.floor(Number(maxOpenPositions)),
        copy_new_trades: copyNewTrades,
        copy_sl: copyStopLoss,
        copy_tp: copyTakeProfit,
        is_paused: pauseCopying,
      };
      const response = await api.post("/api/copy-trading/copy-settings/", payload);
      if (response.data && response.data.status === "success") {
        setSuccessMsg("Strategy parameters successfully deployed to cloud network.");
        setTimeout(() => setSuccessMsg(""), 4000);
        // ری‌لود کردن اطلاعات جهت آپدیت شدن استیت‌ها
        if (typeof loadCloudSettings === "function") loadCloudSettings();
      }
    } catch (error) {
      console.error("Cloud Sync Error:", error);
      alert("❌ Cloud Sync Error: Failed to commit modifications.");
    } finally {
      setSaving(false);
    }
  };
  const handleTogglePause = async () => {
    try {
      setPausing(true); // 🟢 فقط دکمه استاپ لودینگ می‌گیرد
      setSuccessMsg("");
      const targetState = !pauseCopying;
      await api.post("/api/copy-trading/copy-settings/", {
        is_paused: targetState
      });
      setPauseCopying(targetState);
      setSuccessMsg(targetState ? "Copy trading paused successfully." : "Copy trading successfully resumed.");
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (error: any) {
      if (error.response?.status === 400) {
        alert("❌ شما هنوز هیچ مستر تریدری را کپی نکرده‌اید! ابتدا یک تریدر را فعال کنید.");
      } else {
        alert("❌ Failed to change copy trading lifecycle state.");
      }
    } finally {
      setPausing(false);
    }};
  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center gap-2 text-sm text-slate-400 italic bg-white rounded-2xl border border-slate-100">
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>Synchronizing allocation protocols...</span>
      </div>
    );}
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-lg font-bold text-slate-900">Copy Settings</h2>
        <p className="mt-1 text-sm text-slate-500">
          Configure how trades from Amiri Pro Trader are copied to your account.
        </p>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {/* Copy Mode */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Copy Mode
          </label>
          <select
            value={copyMode}
            onChange={(e) => setCopyMode(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
            <option value="Percentage">Percentage</option>
            <option value="Fixed Lot">Fixed Lot</option>
          </select>
        </div>
        {/* Copy Ratio */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Copy Ratio / Multiplier
          </label>
          <div className="relative">
            <input
              type="number"
              min="10"
              max="300"
              value={copyRatio}
              onChange={(e) => setCopyRatio(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
              %
            </span>
          </div>
        </div>
        {/* Maximum Drawdown */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Maximum Drawdown
          </label>
          <div className="relative">
            <input
              type="number"
              min="1"
              max="100"
              value={maxDrawdown}
              onChange={(e) => setMaxDrawdown(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
              %
            </span>
          </div>
        </div>
        {/* Maximum Daily Loss */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Maximum Daily Loss
          </label>
          <div className="relative">
            <input
              type="number"
              min="1"
              max="100"
              value={maxDailyLoss}
              onChange={(e) => setMaxDailyLoss(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
              %
            </span>
          </div>
        </div>
        {/* Maximum Lot Size */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Maximum Lot Size
          </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={maxLotSize}
            onChange={(e) => setMaxLotSize(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        {/* Maximum Open Positions */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Maximum Open Positions
          </label>
          <input
            type="number"
            min="1"
            max="50"
            value={maxOpenPositions}
            onChange={(e) => setMaxOpenPositions(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/>
        </div>
      </div>
      {/* Trade Controls */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <h3 className="text-base font-bold text-slate-900">Trade Controls</h3>
        <p className="mt-1 text-sm text-slate-500">
          Choose which parts of the professional trader's trades should be
          copied.
        </p>
        <div className="mt-5 space-y-4">
          <ToggleRow
            label="Copy New Trades"
            description="Automatically copy new trades opened by the trader."
            enabled={copyNewTrades}
            onChange={() => setCopyNewTrades(!copyNewTrades)} />
          <ToggleRow
            label="Copy Stop Loss"
            description="Apply the trader's stop loss to copied trades."
            enabled={copyStopLoss}
            onChange={() => setCopyStopLoss(!copyStopLoss)} />
          <ToggleRow
            label="Copy Take Profit"
            description="Apply the trader's take profit to copied trades."
            enabled={copyTakeProfit}
            onChange={() => setCopyTakeProfit(!copyTakeProfit)} />
          <ToggleRow
            label="Pause Copying"
            description="Temporarily stop copying new trades without disconnecting the account."
            enabled={pauseCopying}
            onChange={() => setPauseCopying(!pauseCopying)} />
        </div>
      </div>
      {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-between sm:items-center">
          <button
            type="button"
            onClick={handleTogglePause}
            disabled={saving || pausing}
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
            {pausing ? <FiLoader className="animate-spin" size={16} /> : null}
            <span>{pausing ? "Pausing..." : pauseCopying ? "Resume Copying" : "Stop Copying"}</span>
          </button>
        <button
          type="button" 
          onClick={(e) => handleSubmit(e)}  // 👈 شلیک مستقیم تابع با کلیک
          disabled={saving || pausing}

          className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
          {saving ? <FiLoader className="animate-spin" size={16} /> : <FiSave size={16} />}
          <span>{saving ? "Deploying..." : "Save Settings"}</span>
        </button>
        </div>
    </motion.div>
  );}