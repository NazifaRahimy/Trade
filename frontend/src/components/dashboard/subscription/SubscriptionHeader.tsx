"use client";

import {motion} from "framer-motion";
import {FiCreditCard} from "react-icons/fi";

export default function SubscriptionHeader() {
  return (
    <motion.div
      initial={{opacity: 0, y: -15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45}}
      className="mb-7"
    >
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
          <FiCreditCard size={19} />
        </div>

        <span className="text-sm font-medium text-blue-400">Subscription</span>
      </div>

      <h1 className="text-2xl font-semibold text-white md:text-3xl">
        Subscription
      </h1>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
        Manage your subscription and keep your trading account active.
      </p>
    </motion.div>
  );
}
