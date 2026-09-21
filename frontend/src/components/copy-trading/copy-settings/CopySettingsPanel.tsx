"use client";

import { useEffect, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSave, FiLoader, FiCheckCircle } from "react-icons/fi";
// 🚀 اتصال به کلاینت متمرکز شبکه پلتفرم شما
import api from "@/src/lib/axios";

export default function CopySettingsPanel() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // ⚙️ ۱. دقیقاً همان استیت‌های بومی و تمیز خودتان در تصویر اول و دوم
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

  // 📡 ۲. متد GET: خواندن مستقیم اطلاعات ذخیره شده دیتابیس جنگو به محض لود شدن صفحه
  useEffect(() => {
    const loadCloudSettings = async () => {
      try {
        const response = await api.get("/api/copy-trading/settings/");
        if (response.data) {
          const d = response.data;
          // تبدیل فیلدهای مارک‌دار بک‌اَند پایتون به استیت‌های فرانت شما
          setCopyMode(d.copy_mode);
          setCopyRatio(d.copy_ratio_multiplier);
          setMaxDrawdown(d.maximum_drawdown_pct);
          setMaxDailyLoss(d.maximum_daily_loss_pct);
          setMaxLotSize(d.maximum_lot_size);
          setMaxOpenPositions(d.maximum_open_positions);
          setCopyNewTrades(d.copy_new_trades);
          setCopyStopLoss(d.copy_stop_loss);
          setCopyTakeProfit(d.copy_take_profit);
          setPauseCopying(d.status === "paused");
        }
      } catch (error) {
        console.error("Failed to fetch cloud copy configuration:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCloudSettings();
  }, []);

  // 📡 ۳. متد POST: ذخیره هم‌زمان تمام مقادیر فرم هنگام کلیک روی دکمه Save Settings
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      setSuccessMsg("");

      // بسته‌بندی متغیرهای محلی شما به فرمت فیلدهای دیتابیس جنگو
      const payload = {
        copy_mode: copyMode,
        copy_ratio_multiplier: Number(copyRatio),
        maximum_drawdown_pct: Number(maxDrawdown),
        maximum_daily_loss_pct: Number(maxDailyLoss),
        maximum_lot_size: Number(maxLotSize),
        maximum_open_positions: Math.floor(Number(maxOpenPositions)),
        copy_new_trades: copyNewTrades,
        copy_stop_loss: copyStopLoss,
        copy_take_profit: copyTakeProfit,
        status: pauseCopying ? "paused" : "active",
      };

      await api.post("/api/copy-trading/settings/", payload);
      setSuccessMsg("Strategy parameters successfully deployed to cloud network.");
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (error) {
      alert("❌ Cloud Sync Error: Failed to commit modifications.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center gap-2 text-sm text-slate-400 italic bg-white rounded-2xl border border-slate-100">
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>Synchronizing allocation protocols...</span>
      </div>
    );
  }



  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
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
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
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
              className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

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
              className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

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
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
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
            onChange={() => setCopyNewTrades(!copyNewTrades)}
          />

          <ToggleRow
            label="Copy Stop Loss"
            description="Apply the trader's stop loss to copied trades."
            enabled={copyStopLoss}
            onChange={() => setCopyStopLoss(!copyStopLoss)}
          />

          <ToggleRow
            label="Copy Take Profit"
            description="Apply the trader's take profit to copied trades."
            enabled={copyTakeProfit}
            onChange={() => setCopyTakeProfit(!copyTakeProfit)}
          />

          <ToggleRow
            label="Pause Copying"
            description="Temporarily stop copying new trades without disconnecting the account."
            enabled={pauseCopying}
            onChange={() => setPauseCopying(!pauseCopying)}
          />
        </div>
      </div>

      {/* Stop Copying */}
      <div className="mt-6 rounded-xl border border-red-100 bg-red-50 p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold text-red-700">Stop Copying</h3>

            <p className="mt-1 text-sm leading-5 text-red-600">
              Stop copying trades from Amiri Pro Trader.
            </p>
          </div>

          <button
            type="button"
            className="w-full rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100 sm:w-auto"
          >
            Stop Copying
          </button>
        </div>
      </div>
            {/* 🟢 نمایش پیام هماهنگی ابری درست بالای دکمه سابمیت شما */}
      {/* 🟢 نمایش پیام هماهنگی ابری درست بالای دکمه سابمیت شما */}
      {successMsg && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs font-medium text-emerald-700 flex items-center gap-2">
          <FiCheckCircle className="text-emerald-500" size={15} />
          <span>{successMsg}</span>
        </div>
      )}

      {/* 🚀 دکمه لوکس و زنده ذخیره تنظیمات حساب کپی ترید */}
      <button
        type="submit"
        disabled={saving}
        className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50 w-full md:w-auto"
      >
        {saving ? (
          <>
            <FiLoader className="animate-spin" size={16} />
            <span>Deploying...</span>
          </>
        ) : (
          <>
            <FiSave size={16} />
            <span>Save Settings</span>
          </>
        )}
      </button>

    </motion.div>
  );
}


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
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4">
      <div>
        <p className="text-sm font-semibold text-slate-900">{label}</p>

        <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
      </div>

      <button
        type="button"
        onClick={onChange}
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${
          enabled ? "bg-blue-600" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}
