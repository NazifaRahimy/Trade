"use client";

import {motion} from "framer-motion";
import {FiCalendar, FiCheckCircle, FiCreditCard} from "react-icons/fi";

export default function CurrentSubscription() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs text-slate-500">Current Plan</p>

          <div className="mt-2 flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Pro Trader
            </h2>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
              <FiCheckCircle size={13} />
              Active
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Full access to your trading dashboard and platform features.
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiCreditCard size={22} />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FiCalendar size={14} />
            Start Date
          </div>

          <p className="mt-2 text-sm font-medium text-slate-800">
            May 01, 2025
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FiCalendar size={14} />
            Expiry Date
          </div>

          <p className="mt-2 text-sm font-medium text-slate-800">
            May 31, 2025
          </p>
        </div>
      </div>
    </motion.div>
  );
}
