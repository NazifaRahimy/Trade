"use client";
import Link from "next/link";
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
import DepositForm from "@/src/components/billing/DepositForm";
import {useTranslation} from "react-i18next";
export default function WalletPage() {
  const {t, i18n} = useTranslation();
  return (
    <main className="min-h-screen bg-white px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <Link
          href="/billing"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-600"
        >
          {i18n.language.startsWith("fa") ? (
            <FiArrowRight className="mt-1" />
          ) : (
            <FiArrowLeft />
          )}

          {t("wallet.backToBilling")}
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {t("wallet.wallet")}
          </h1>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            {t("wallet.walletDescription")}
          </p>
        </div>

        <DepositForm />
      </div>
    </main>
  );
}
