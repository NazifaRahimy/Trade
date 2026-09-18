"use client";

import {motion} from "framer-motion";
import {FiInfo, FiShield} from "react-icons/fi";

export default function CopySettingsInfo() {
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5"
    >
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <FiInfo size={19} />
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">About Copy Settings</h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Your copy settings determine how trades from the professional trader
            are replicated on your connected trading account. Changes should be
            reviewed carefully before saving.
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-blue-700">
            <FiShield size={15} />
            Your funds remain in your connected broker account.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
