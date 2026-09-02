"use client";

import {motion} from "framer-motion";
import {FiClock, FiRefreshCw} from "react-icons/fi";

export default function SubscriptionProgress() {
  const totalDays = 30;
  const remainingDays = 12;
  const usedDays = totalDays - remainingDays;
  const progress = (usedDays / totalDays) * 100;

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45, delay: 0.1}}
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-white">
            Subscription Status
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Track your remaining subscription time.
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
          <FiClock size={19} />
        </div>
      </div>

      <div className="mt-7">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-semibold text-white">{remainingDays}</p>

            <p className="mt-1 text-xs text-slate-500">days remaining</p>
          </div>

          <p className="text-xs text-slate-500">
            {usedDays} of {totalDays} days used
          </p>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            initial={{width: 0}}
            animate={{width: `${progress}%`}}
            transition={{duration: 0.8, delay: 0.3}}
            className="h-full rounded-full bg-blue-500"
          />
        </div>

        <div className="mt-3 flex justify-between text-xs text-slate-500">
          <span>May 01</span>
          <span>May 31</span>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-[0.99]"
      >
        <FiRefreshCw size={16} />
        Renew Subscription
      </button>
    </motion.div>
  );
}
