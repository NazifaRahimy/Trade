"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import Link from "next/link";
import {FiCopy} from "react-icons/fi";

export default function OverviewHeader() {
  const {t} = useTranslation();
  return (
    <motion.div
      initial={{opacity: 0, y: -15}}
      animate={{opacity: 1, y: 0}}
      className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center"
    >
      <div>
        <p className="text-sm font-medium text-blue-600">
          {t("copyTrading.copyTrading")}
        </p>

        <h1 className="mt-1 text-2xl font-bold text-slate-950 lg:text-3xl">
          {t("copyTrading.dashboardTitle")}
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          {t("copyTrading.dashboardDescription")}
        </p>
      </div>

      <Link
        href="/copy-trading/my-traders"
        className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
      >
        <FiCopy />
        {t("copyTrading.exploreTraders")}
      </Link>
    </motion.div>
  );
}
