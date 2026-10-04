"use client";
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {motion} from "framer-motion";
import {FiArrowRight, FiArrowLeft, FiHelpCircle} from "react-icons/fi";

export default function ContactFaq() {
  const {t, i18n} = useTranslation();
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="
            mx-auto flex max-w-6xl
            flex-col items-center justify-between
            gap-6 rounded-2xl
            bg-slate-50 px-6 py-7
            sm:flex-row sm:px-8
          "
        >
          {/* Left - Icon + Text */}
          <div className="flex items-center gap-5">
            {/* Question Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600">
              <FiHelpCircle size={30} strokeWidth={2} className="text-white" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {t("contact.lookingForQuickAnswers")}
              </h3>

              <p className="mt-1 max-w-lg text-sm leading-6 text-slate-500">
                {t("contact.faqDescription")}
              </p>
            </div>
          </div>

          {/* View FAQ Button */}
          <Link
            href="/#faq"
            className="
              inline-flex shrink-0
              items-center justify-center gap-2
              rounded-lg
              border border-blue-500
              px-7 py-3
              text-sm font-semibold text-blue-600
              transition-all duration-300
              hover:bg-blue-600
              hover:text-white
            "
          >
            {t("contact.viewFaq")}
            {i18n.language.startsWith("fa") ? (
              <FiArrowLeft size={18} className="mt-1" />
            ) : (
              <FiArrowRight size={18} />
            )}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
