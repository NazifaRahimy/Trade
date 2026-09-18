"use client";

import {motion} from "framer-motion";
import {
  FiCheckCircle,
  FiRefreshCw,
  FiServer,
  FiUser,
  FiDollarSign,
  FiActivity,
} from "react-icons/fi";

export default function BrokerConnectionCard() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Connected Account
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Your currently connected MT5 trading account
          </p>
        </div>

        <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Connected
        </span>
      </div>

      {/* Account */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex flex-col gap-5">
          {/* Broker information */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-slate-900 shadow-sm">
              IC
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-slate-900">IC Markets</h3>

              <div className="mt-2 grid gap-2 text-xs text-slate-500 sm:grid-cols-2">
                {/* MT5 Account */}
                <div className="flex items-center gap-2">
                  <FiUser size={15} />
                  <span>MT5 Account: #1234567</span>
                </div>

                {/* Server */}
                <div className="flex items-center gap-2">
                  <FiServer size={15} />
                  <span>Server: ICMarkets-Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Balance / Equity */}
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Balance */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <FiDollarSign size={15} />
                Balance
              </div>

              <p className="mt-2 text-lg font-semibold text-slate-900">
                $12,450.00
              </p>
            </div>

            {/* Equity */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <FiActivity size={15} />
                Equity
              </div>

              <p className="mt-2 text-lg font-semibold text-slate-900">
                $12,687.40
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          <FiRefreshCw size={16} />
          Test Connection
        </button>

        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100"
        >
          Disconnect
        </button>
      </div>

      {/* Last checked */}
      <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600">
        <FiCheckCircle size={14} />
        Last checked a few moments ago
      </div>
    </motion.div>
  );
}
