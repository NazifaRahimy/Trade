"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {FiCopy} from "react-icons/fi";

export default function OverviewHeader() {
  return (
    <motion.div
      initial={{opacity: 0, y: -15}}
      animate={{opacity: 1, y: 0}}
      className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center"
    >
      <div>
        <p className="text-sm font-medium text-blue-600">Copy Trading</p>

        <h1 className="mt-1 text-2xl font-bold text-slate-950 lg:text-3xl">
          Copy Trading Dashboard
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Discover professional traders, copy their strategies and monitor your
          copy trading performance from one place.
        </p>
      </div>

      <Link
        href="/copy-trading/my-traders"
        className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
      >
        <FiCopy />
        Explore Traders
      </Link>
    </motion.div>
  );
}
