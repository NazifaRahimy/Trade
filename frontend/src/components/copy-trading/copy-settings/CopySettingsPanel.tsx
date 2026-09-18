"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {FiSave} from "react-icons/fi";

export default function CopySettingsPanel() {
  const [copyMode, setCopyMode] = useState("Percentage");
  const [copyRatio, setCopyRatio] = useState(100);
  const [maxDrawdown, setMaxDrawdown] = useState(10);
  const [maxDailyLoss, setMaxDailyLoss] = useState(5);
  const [maxLotSize, setMaxLotSize] = useState(1);
  const [maxOpenPositions, setMaxOpenPositions] = useState(5);

  const [copyNewTrades, setCopyNewTrades] = useState(true);
  const [copyStopLoss, setCopyStopLoss] = useState(true);
  const [copyTakeProfit, setCopyTakeProfit] = useState(true);
  const [pauseCopying, setPauseCopying] = useState(false);

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

      {/* Save */}
      <button
        type="button"
        className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        <FiSave size={16} />
        Save Settings
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
