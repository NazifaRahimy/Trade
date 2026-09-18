"use client";

import {motion} from "framer-motion";
import {FiSettings} from "react-icons/fi";

export default function CopySettingsHeader() {
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiSettings size={20} />
          </div>

          <span className="text-sm font-medium text-blue-600">
            Copy Trading
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Copy Settings
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Manage how trades from the professional trader are copied to your
          connected trading account.
        </p>
      </div>

      <span className="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
        Copying Active
      </span>
    </motion.div>
  );
}
