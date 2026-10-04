"use client";
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {motion} from "framer-motion";
import {FiArrowRight, FiArrowLeft} from "react-icons/fi";

export default function CTA() {
  const {t, i18n} = useTranslation();
  return (
    <section className="px-5 pb-10">
      <motion.div
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-10 shadow-xl shadow-blue-100 sm:px-12"
      >
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          <div
            className={`text-center ${
              i18n.language.startsWith("fa") ? "md:text-right" : "md:text-left"
            }`}
          >
            <h2 className="text-2xl font-black text-white">
              {t("home.readyToStartTradingJourney")}
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100">
              {t("home.ctaDescription")}
            </p>
          </div>

          <Link
            href="/register"
            className="group flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
          >
            {t("home.joinNow")}

            {i18n.language.startsWith("fa") ? (
              <FiArrowLeft className="transition group-hover:-translate-x-1 mt-1" />
            ) : (
              <FiArrowRight className="transition group-hover:translate-x-1" />
            )}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
