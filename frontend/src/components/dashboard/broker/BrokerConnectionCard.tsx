"use client";

import {motion} from "framer-motion";
import {FiCheckCircle, FiRefreshCw, FiServer, FiUser} from "react-icons/fi";

export default function BrokerConnectionCard() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45}}
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/10"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-white">
            Current Connection
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Your currently connected trading account
          </p>
        </div>

        <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Connected
        </span>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-slate-900">
            IC
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-white">IC Markets</h3>

            <div className="mt-2 grid gap-2 text-xs text-slate-400 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <FiUser />
                <span>Account: #1234567</span>
              </div>

              <div className="flex items-center gap-2">
                <FiServer />
                <span>Server: ICMarkets-Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-500/40 hover:bg-slate-800"
        >
          <FiRefreshCw size={16} />
          Test Connection
        </button>

        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
        >
          Disconnect
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
        <FiCheckCircle size={14} />
        Last checked a few moments ago
      </div>
    </motion.div>
  );
}
