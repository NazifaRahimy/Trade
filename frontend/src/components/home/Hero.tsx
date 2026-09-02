"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {
  FiArrowRight,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiBarChart2,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-blue-100/40">
      {/* Background */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.12),_transparent_65%)]" />

      <div className="relative mx-auto grid min-h-[590px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <motion.div
          initial={{opacity: 0, x: -40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.7}}
          className="max-w-xl"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-600">
            Professional Copy Trading & Signals
          </p>

          <h1 className="text-4xl font-black leading-[1.15] text-slate-900 sm:text-5xl lg:text-6xl">
            Trade Smarter.
            <br />
            <span className="text-blue-600">Grow Consistently.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
            Benefit from 7+ years of real market experience in Forex and
            Cryptocurrency. Learn, analyze and build better trading habits with
            structured strategies.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="group flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              Get Started Now
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-blue-300 bg-white px-7 py-3.5 text-center text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <FiShield className="text-blue-600" />
              Secure & Transparent
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <FiUsers className="text-blue-600" />
              Trusted by 1000+ Traders
            </div>
          </div>
        </motion.div>

        {/* Right Trading Mockup */}
        <motion.div
          initial={{opacity: 0, x: 50, scale: 0.95}}
          animate={{opacity: 1, x: 0, scale: 1}}
          transition={{duration: 0.8, delay: 0.15}}
          className="relative flex min-h-[460px] items-center justify-center"
        >
          {/* Chart Card */}
          <div className="absolute right-0 top-10 hidden h-80 w-72 rounded-3xl border border-white bg-white/80 p-5 shadow-2xl backdrop-blur-md sm:block">
            <div className="flex justify-between">
              <div>
                <p className="text-[10px] text-slate-400">BTC/USDT</p>
                <p className="mt-1 text-lg font-bold text-slate-900">
                  $67,892.68
                </p>
              </div>

              <span className="text-xs font-bold text-green-500">+2.26%</span>
            </div>

            <div className="mt-10 flex h-36 items-end gap-2">
              {[30, 48, 35, 58, 43, 68, 55, 80, 62, 95, 74, 100].map(
                (height, i) => (
                  <div
                    key={i}
                    style={{height: `${height}%`}}
                    className="flex-1 rounded-t bg-blue-200"
                  />
                ),
              )}
            </div>

            <div className="mt-5 h-1 rounded-full bg-blue-100">
              <div className="h-full w-2/3 rounded-full bg-blue-500" />
            </div>
          </div>

          {/* Phone */}
          <div className="relative z-10 h-[430px] w-[220px] rotate-[6deg] rounded-[35px] border-[7px] border-slate-900 bg-white shadow-2xl">
            {/* Speaker */}
            <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-slate-900" />

            <div className="px-4 pt-10">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-slate-400">Total Balance</span>

                <FiBarChart2 className="text-blue-500" />
              </div>

              <div className="mt-1 text-2xl font-black text-slate-900">
                $24,790.50
              </div>

              <div className="mt-1 text-[9px] font-bold text-green-500">
                +12.45%
              </div>

              {/* Phone Chart */}
              <div className="mt-8 flex h-32 items-end gap-1">
                {[25, 35, 28, 48, 42, 62, 55, 70, 60, 85, 76, 92].map(
                  (height, i) => (
                    <div
                      key={i}
                      style={{height: `${height}%`}}
                      className="flex-1 rounded-t bg-gradient-to-t from-blue-400 to-green-300"
                    />
                  ),
                )}
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 p-3">
                <div className="flex justify-between text-[9px]">
                  <span className="text-slate-500">Active Copy Trading</span>

                  <span className="font-bold text-green-500">+12.45%</span>
                </div>

                <div className="mt-3 h-2 rounded-full bg-white">
                  <div className="h-full w-3/4 rounded-full bg-blue-500" />
                </div>
              </div>

              <button className="mt-5 w-full rounded-lg bg-blue-600 py-2 text-[10px] font-bold text-white">
                View Details
              </button>
            </div>

            {/* Bottom Nav */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-slate-100 bg-white py-3 text-[8px] text-slate-400">
              <span className="font-bold text-blue-600">Home</span>
              <span>Trades</span>
              <span>Portfolio</span>
              <span>More</span>
            </div>
          </div>

          {/* Profit Badge */}
          <motion.div
            animate={{y: [0, -8, 0]}}
            transition={{duration: 3, repeat: Infinity}}
            className="absolute right-0 top-36 z-20 rounded-2xl bg-green-50 px-5 py-4 shadow-lg"
          >
            <p className="text-xs text-green-600">↗ Profits</p>
            <p className="mt-1 font-bold text-green-600">+12.45%</p>
          </motion.div>

          {/* Risk Badge */}
          <div className="absolute bottom-14 right-2 z-20 rounded-2xl bg-blue-50 px-6 py-4 shadow-lg">
            <p className="text-xs font-bold text-blue-600">🛡 Risk</p>

            <p className="mt-1 text-sm font-bold text-blue-700">Managed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
