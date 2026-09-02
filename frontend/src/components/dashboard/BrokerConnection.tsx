"use client";

import {motion} from "framer-motion";
import {FiLink, FiCheck} from "react-icons/fi";

export default function BrokerConnection() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Broker Connection</p>

          <h3 className="mt-1 font-bold text-white">Trading Account</h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
          <FiLink />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-950 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
          <FiCheck className="text-emerald-400" />
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Connected</p>

          <p className="text-xs text-slate-500">Account is connected</p>
        </div>
      </div>

      <button className="mt-4 w-full rounded-xl border border-slate-700 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500 hover:text-blue-400">
        Manage Connection
      </button>
    </motion.div>
  );
}
