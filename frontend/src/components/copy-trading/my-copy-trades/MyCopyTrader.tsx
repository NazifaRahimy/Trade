"use client";
import Link from "next/link";
import {motion} from "framer-motion";
import {
  FiActivity,
  FiArrowUpRight,
  FiCheckCircle,
  FiPause,
  FiPlay,
  FiTrendingDown,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

export default function MyCopyTrader() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45}}
      className="rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-slate-100 p-5 md:p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          {/* Trader Icon */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
            <FiUser size={25} />
          </div>

          {/* Trader Name */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold text-slate-900">
                Amiri Pro Trader
              </h2>

              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                <FiCheckCircle size={13} />
                Active
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Professional Forex & Gold Trader
            </p>
          </div>
        </div>

        {/* View Trader */}
        <Link
          href="/copy-trading/amiri-pro"
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          View Trader
          <FiArrowUpRight size={16} />
        </Link>
      </div>

      {/* Trader Information */}
      <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
        {/* Investment */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FiActivity size={15} />
            Investment
          </div>

          <p className="mt-2 text-lg font-semibold text-slate-900">$5,000</p>
        </div>

        {/* Profit */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FiTrendingUp size={15} />
            Profit
          </div>

          <p className="mt-2 text-lg font-semibold text-emerald-600">
            +$1,284.60
          </p>
        </div>

        {/* Return */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FiTrendingUp size={15} />
            Return
          </div>

          <p className="mt-2 text-lg font-semibold text-emerald-600">+24.82%</p>
        </div>

        {/* Drawdown */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FiTrendingDown size={15} />
            Drawdown
          </div>

          <p className="mt-2 text-lg font-semibold text-amber-600">6.42%</p>
        </div>
      </div>

      {/* Copy Status */}
      <div className="mx-5 mb-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 lg:mx-6 lg:mb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <p className="text-sm font-semibold text-emerald-700">
                Copy Status: Active
              </p>
            </div>

            <p className="mt-1 text-xs text-emerald-600">
              Your account is currently copying trades from Amiri Pro Trader.
            </p>
          </div>

          {/* Pause / Stop */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-amber-200 bg-white px-4 py-2 text-xs font-medium text-amber-600 transition hover:bg-amber-50"
            >
              <FiPause size={14} />
              Pause Copying
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50"
            >
              <FiActivity size={14} />
              Stop Copying
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-6">
        <div className="flex items-center gap-2">
          <FiCheckCircle className="text-emerald-500" size={15} />
          Copying is active
        </div>

        <div className="flex items-center gap-2">
          <FiPlay className="text-blue-500" size={15} />
          Copy Ratio: 1:1
        </div>
      </div>
    </motion.div>
  );
}
