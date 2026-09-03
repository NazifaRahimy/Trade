"use client";

import {motion} from "framer-motion";
import {FiLink, FiCheck} from "react-icons/fi";

export default function BrokerConnection() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Broker Connection</p>

          <h3 className="mt-1 font-bold text-slate-900">Trading Account</h3>
        </div>

        {/* Link Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiLink />
        </div>
      </div>

      {/* Connection Status */}
      <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-50 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
          <FiCheck className="text-emerald-600" />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Connected</p>

          <p className="text-xs text-slate-500">Account is connected</p>
        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-4 w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 transition hover:border-blue-500 hover:text-blue-600"
      >
        Manage Connection
      </button>
    </motion.div>
  );
}
