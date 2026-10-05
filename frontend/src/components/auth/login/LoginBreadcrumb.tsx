"use client";
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {FiChevronRight, FiHome} from "react-icons/fi";

export default function LoginBreadcrumb() {
  const {t, i18n} = useTranslation();

  const isPersian = i18n.language.startsWith("fa");

  return (
    <section className="bg-transparent py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-5 flex items-center justify-center gap-2 text-sm">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-blue-600"
          >
            <FiHome className="text-sm" />
            <span>{t("navBar.home")}</span>
          </Link>

          <FiChevronRight
            className={
              isPersian ? "rotate-180 text-slate-400" : "text-slate-400"
            }
          />

          <span className="font-medium text-blue-600"> {t("auth.login")}</span>
        </div>

        {/* Page Title */}
        <div className="text-center">
          <h1 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
            {t("auth.signInToAccount")}
          </h1>

          <p className="text-sm text-slate-800 md:text-base">
            {t("auth.signInToAccess")}
          </p>
        </div>
      </div>
    </section>
  );
}
