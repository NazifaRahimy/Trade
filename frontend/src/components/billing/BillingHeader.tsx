"use client";

import Link from "next/link";
import {FiArrowRight, FiCreditCard, FiPlus} from "react-icons/fi";
import {motion} from "framer-motion";

export default function BillingHeader() {
  return (
    <motion.div
      initial={{opacity: 0, y: -15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
    >
      <div>
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
          <FiCreditCard className="text-blue-600" />
          <span>Financial Center</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Billing
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
          Manage your balance, cryptocurrency payments, and transaction history
          in one place.
        </p>
      </div>

      <Link
        href="/billing/wallet"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        <FiPlus />
        Add Funds
        <FiArrowRight />
      </Link>
    </motion.div>
  );
}
