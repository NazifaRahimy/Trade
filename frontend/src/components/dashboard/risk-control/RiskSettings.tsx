"use client";

import {FiSave, FiInfo} from "react-icons/fi";
import {motion} from "framer-motion";
import {useState} from "react";

type RiskSettingsProps = {
  totalRisk: number;
  setTotalRisk: (value: number) => void;
};

export default function RiskSettings({
  totalRisk,
  setTotalRisk,
}: RiskSettingsProps) {
  const [firstEntry, setFirstEntry] = useState(10);
  const [secondEntry, setSecondEntry] = useState(10);
  const [maxOpenTrades, setMaxOpenTrades] = useState(7);
  const [tradeVolume, setTradeVolume] = useState(0.01);

  return (
    <motion.div
      initial={{opacity: 0, y: 10}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-slate-900">Risk Settings</h3>

        <p className="mt-1 text-sm text-slate-500">
          Configure your trading risk parameters
        </p>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {/* Total Risk */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Total Risk %
          </label>

          <div className="relative">
            <input
              type="number"
              min={0}
              max={100}
              step={1}
              value={totalRisk}
              onChange={(e) => setTotalRisk(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
              %
            </span>
          </div>
        </div>

        {/* First Entry */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            First Entry %
          </label>

          <div className="relative">
            <input
              type="number"
              min={0}
              max={100}
              step={1}
              value={firstEntry}
              onChange={(e) => setFirstEntry(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
              %
            </span>
          </div>
        </div>

        {/* Second Entry */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Second Entry %
          </label>

          <div className="relative">
            <input
              type="number"
              min={0}
              max={100}
              step={1}
              value={secondEntry}
              onChange={(e) => setSecondEntry(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
              %
            </span>
          </div>
        </div>

        {/* Trade Volume */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">
              Trade Volume
            </label>

            <span className="text-xs text-slate-500">0.01 – 3.00</span>
          </div>

          <input
            type="number"
            min={0.01}
            max={3}
            step={0.01}
            value={tradeVolume}
            onChange={(e) => {
              const value = Number(e.target.value);

              if (value >= 0.01 && value <= 3) {
                setTradeVolume(value);
              }
            }}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
          />

          <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
            <FiInfo />

            <span>Trade volume must be between 0.01 and 3.00</span>
          </div>
        </div>

        {/* Max Open Trades */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Max Open Trades
          </label>

          <input
            type="number"
            min={1}
            value={maxOpenTrades}
            onChange={(e) => setMaxOpenTrades(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* Save */}
        <motion.button
          whileHover={{scale: 1.01}}
          whileTap={{scale: 0.98}}
          type="button"
          className="mt-6 flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-medium text-white transition hover:bg-blue-700"
        >
          <FiSave size={18} />
          Save Changes
        </motion.button>
      </div>
    </motion.div>
  );
}
