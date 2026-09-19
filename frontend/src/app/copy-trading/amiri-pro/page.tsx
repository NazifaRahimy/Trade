"use client";

import {motion} from "framer-motion";
import {
  FiActivity,
  FiArrowLeft,
  FiBarChart2,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiPercent,
  FiShield,
  FiTarget,
  FiArrowUpRight,
  FiTrendingDown,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";
import Link from "next/link";

const stats = [
  {
    title: "Total Profit",
    value: "+$1,284.60",
    icon: FiDollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Return",
    value: "+24.82%",
    icon: FiTrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Win Rate",
    value: "76.4%",
    icon: FiTarget,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "Max Drawdown",
    value: "6.42%",
    icon: FiTrendingDown,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Profit Factor",
    value: "2.18",
    icon: FiPercent,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const performanceData = [
  18, 24, 21, 31, 28, 39, 36, 48, 44, 56, 61, 58, 68, 72,
];

const tradingStats = [
  {
    label: "Total Trades",
    value: "142",
  },
  {
    label: "Winning Trades",
    value: "108",
  },
  {
    label: "Losing Trades",
    value: "34",
  },
  {
    label: "Average Trade",
    value: "+$30.58",
  },
  {
    label: "Best Trade",
    value: "+$124.80",
  },
  {
    label: "Worst Trade",
    value: "-$48.20",
  },
];

export default function AmiriProTraderPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className=" space-y-6 p-5 md:p-8 lg:p-10">
        {/* Back */}
        <Link
          href="/copy-trading/my-copy-trades"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
        >
          <FiArrowLeft size={16} />
          Back to My Copy Trades
        </Link>

        {/* Trader Header */}
        <motion.div
          initial={{opacity: 0, y: 15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                <FiUser size={28} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold text-slate-900">
                    Amiri Pro Trader
                  </h1>

                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    <FiCheckCircle size={13} />
                    Active
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Professional Forex & Gold Trader
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <FiClock size={14} />
                    Trading for 7+ years
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FiActivity size={14} />
                    Forex & Gold
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-50 px-5 py-3">
              <p className="text-xs text-emerald-600">Current Status</p>

              <p className="mt-1 flex items-center gap-2 text-sm font-bold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Trading Active
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{opacity: 0, y: 15}}
                animate={{opacity: 1, y: 0}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {stat.title}
                    </p>

                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}
                  >
                    <Icon size={21} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Performance + Trading Style */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.8fr)]">
          {/* Performance Chart */}
          <motion.div
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4}}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Performance
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Trader performance over time.
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiBarChart2 size={19} />
              </div>
            </div>

            <div className="mt-8 flex h-[260px] items-end gap-2 border-b border-slate-200 px-2">
              {performanceData.map((value, index) => (
                <div key={index} className="flex h-full flex-1 items-end">
                  <motion.div
                    initial={{height: 0}}
                    animate={{height: `${value}%`}}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.04,
                    }}
                    className="w-full rounded-t-lg bg-blue-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-3 flex justify-between text-xs text-slate-400">
              <span>Start</span>
              <span>Current</span>
            </div>
          </motion.div>

          {/* Trading Style */}
          <motion.div
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 0.1}}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <FiActivity size={19} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Trading Style
                </h2>

                <p className="text-sm text-slate-500">
                  Professional trading profile
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <InfoRow label="Markets" value="Forex & Gold" />

              <InfoRow label="Strategy" value="Technical Analysis" />

              <InfoRow label="Risk Level" value="Moderate" />

              <InfoRow label="Average Holding" value="4h 32m" />

              <InfoRow label="Copy Ratio" value="1:1" />
            </div>
          </motion.div>
        </div>

        {/* Trading Statistics */}
        <motion.div
          initial={{opacity: 0, y: 15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiTrendingUp size={19} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Trading Statistics
              </h2>

              <p className="text-sm text-slate-500">
                Detailed trading performance.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tradingStats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-xs text-slate-500">{item.label}</p>

                <p className="mt-2 text-lg font-bold text-slate-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Risk Management */}
        <motion.div
          initial={{opacity: 0, y: 15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FiShield size={21} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Risk Management
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Amiri Pro Trader follows controlled risk management practices
                with defined drawdown and position limits.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="text-xs text-emerald-600">Risk Level</p>
              <p className="mt-1 font-bold text-slate-900">Moderate</p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-xs text-blue-600">Maximum Drawdown</p>
              <p className="mt-1 font-bold text-slate-900">6.42%</p>
            </div>

            <div className="rounded-xl bg-violet-50 p-4">
              <p className="text-xs text-violet-600">Profit Factor</p>
              <p className="mt-1 font-bold text-slate-900">2.18</p>
            </div>
          </div>
        </motion.div>

        {/* Copy Trader */}
        <motion.div
          initial={{opacity: 0, y: 15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          className="rounded-2xl border border-blue-100 bg-blue-50 p-5 md:p-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Copy Amiri Pro Trader
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Your account is currently copying this trader with a 1:1 copy
                ratio.
              </p>
            </div>

            <Link
              href="/copy-trading/copy-settings"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Manage Copy Settings
              <FiArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function InfoRow({label, value}: {label: string; value: string}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
      <span className="text-sm text-slate-500">{label}</span>

      <span className="text-sm font-semibold text-slate-900">{value}</span>
    </div>
  );
}
