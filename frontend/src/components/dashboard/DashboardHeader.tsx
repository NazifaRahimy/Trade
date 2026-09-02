"use client";

import {motion} from "framer-motion";
import {FiSearch, FiBell, FiChevronDown, FiMenu} from "react-icons/fi";

type DashboardHeaderProps = {
  onMenuClick: () => void;
};

export default function DashboardHeader({onMenuClick}: DashboardHeaderProps) {
  return (
    <header className="border-b border-slate-800 bg-slate-950 px-5 py-4 lg:px-8">
      <div className="flex items-center justify-between gap-4 lg:ml-64">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Welcome */}
          <motion.div
            initial={{opacity: 0, x: -15}}
            animate={{opacity: 1, x: 0}}
          >
            <p className="text-sm text-slate-300">Welcome back,</p>

            <div className="mt-1 flex items-center gap-3">
              <h1 className="text-lg font-bold text-white lg:text-2xl">
                Ebrahim Amiri
              </h1>

              <span className="rounded-full bg-blue-500/15 px-2 py-1 text-xs font-semibold text-blue-400 lg:px-3">
                Pro Trader
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <div className=" flex items-center gap-5">
          {/* Mobile Menu */}
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 md:hidden w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:bg-slate-800 hover:text-white lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu size={21} />
          </button>
          {/* Notification */}
          <button
            type="button"
            className="relative hidden md:flex text-slate-400 transition hover:text-white"
          >
            <FiBell className="text-xl" />

            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-blue-500 ring-2 ring-slate-950" />
          </button>

          {/* Profile */}
          <button type="button" className=" hidden md:flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-800">
              <span className="text-sm font-bold text-white">EA</span>
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold text-white">Ebrahim Amiri</p>
            </div>

            <FiChevronDown className="hidden text-slate-400 md:block" />
          </button>
        </div>
      </div>
    </header>
  );
}
