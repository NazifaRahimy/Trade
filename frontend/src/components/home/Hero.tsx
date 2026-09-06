"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import hometBunner from "@/src/assets/images/home-bunner.png";
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
      {/* <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.12),_transparent_65%)]" /> */}

      <div className="relative mx-auto grid min-h-[590px] max-w-7xl items-center lg:grid-cols-2 ">
        {/* Left */}
        <motion.div
          initial={{opacity: 0, x: -40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.7}}
          className="max-w-xl py-16  px-10 lg:px-8"
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
          className="relative flex min-h-[460px] h-full  "
        >
          <img src={hometBunner.src} alt="photo" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}
