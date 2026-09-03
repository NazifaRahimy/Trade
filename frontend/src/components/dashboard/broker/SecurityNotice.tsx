"use client";

import {motion} from "framer-motion";
import {FiLock, FiShield} from "react-icons/fi";

export default function SecurityNotice() {
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45, delay: 0.25}}
      className="rounded-2xl border border-blue-200 bg-blue-50 p-5"
    >
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <FiShield size={19} />
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <FiLock className="text-blue-600" size={14} />
            Your credentials are secure
          </h3>

          <p className="mt-2 text-xs leading-5 text-slate-600">
            Your broker credentials are protected and used only for establishing
            a connection with your trading account.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
