"use client";
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {FiArrowLeft, FiArrowRight, FiCreditCard, FiPlus} from "react-icons/fi";
import {motion} from "framer-motion";

export default function BillingHeader() {
  const {t, i18n} = useTranslation();
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
          <span>{t("billing.financialCenter")}</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {t("billing.billing")}
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
          {t("billing.billingDescription")}
        </p>
      </div>

      <Link
        href="/billing/wallet"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        <FiPlus />
        {t("billing.addFunds")}

        {i18n.language.startsWith("fa") ? (
          <FiArrowLeft className="mt-1" />
        ) : (
          <FiArrowRight className="mt-1" />
        )}
      </Link>
    </motion.div>
  );
}
