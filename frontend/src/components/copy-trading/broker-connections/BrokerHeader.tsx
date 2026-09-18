"use client";

import {motion} from "framer-motion";
import {FiLink, FiShield} from "react-icons/fi";

export default function BrokerHeader() {
  return (
    <motion.div
      initial={{opacity: 0, y: -15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="mb-7"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FiLink size={19} />
            </div>

            <span className="text-sm font-medium text-blue-600">
              Broker Connection
            </span>
          </div>

          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Connect Your Broker
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Connect your trading account to manage your trades and monitor your
            portfolio from one place.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5">
          <FiShield className="text-emerald-600" size={17} />

          <span className="text-xs font-medium text-emerald-700">
            Secure Connection
          </span>
        </div>
      </div>
    </motion.div>
  );
}
