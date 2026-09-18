"use client";
import Link from "next/link";
import {motion} from "framer-motion";
import {
  FiActivity,
  FiArrowUpRight,
  FiClock,
  FiTrendingUp,
} from "react-icons/fi";

export default function ActiveCopyTraders() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-slate-500">Your Active Copy Trader</p>

        <h2 className="mt-1 text-xl font-bold text-slate-950">
          Active Copy Traders
        </h2>
      </div>

      <motion.div
        initial={{opacity: 0, y: 15}}
        animate={{opacity: 1, y: 0}}
        className="rounded-2xl border border-slate-200 p-5"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-600">
              A
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-slate-950">
                  Amiri Pro Trader
                </h3>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                  Active
                </span>
              </div>

              <p className="mt-1 text-sm text-slate-500">Forex & Gold</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            <div>
              <p className="text-xs text-slate-400">Investment</p>

              <p className="mt-1 font-semibold text-slate-900">$5,000</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Profit</p>

              <p className="mt-1 font-semibold text-emerald-600">+$1,284.60</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Return</p>

              <p className="mt-1 font-semibold text-emerald-600">+24.82%</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Win Rate</p>

              <p className="mt-1 font-semibold text-slate-900">82.4%</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/copy-trading/performance"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <FiActivity size={16} />
              View Performance
            </Link>

            <Link
              href="/copy-trading/copy-settings"
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Copy Settings
              <FiArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-5 grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <FiTrendingUp className="text-emerald-600" />

            <div>
              <p className="text-xs text-slate-400">Copy Status</p>

              <p className="text-sm font-semibold text-slate-900">
                Copying Active
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FiActivity className="text-blue-600" />

            <div>
              <p className="text-xs text-slate-400">Active Positions</p>

              <p className="text-sm font-semibold text-slate-900">
                3 Positions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FiClock className="text-purple-600" />

            <div>
              <p className="text-xs text-slate-400">Copy Ratio</p>

              <p className="text-sm font-semibold text-slate-900">1 : 1</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
