"use client";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {FiChevronDown} from "react-icons/fi";
import {motion, AnimatePresence} from "framer-motion";

const faqs = [
  {
    question: "home.whatIsCopyTrading",
    answer: "home.whatIsCopyTradingAnswer",
  },
  {
    question: "home.isMyMoneyTransferred",
    answer: "home.isMyMoneyTransferredAnswer",
  },
  {
    question: "home.howMuchCapital",
    answer: "home.howMuchCapitalAnswer",
  },
  {
    question: "home.whichMarketsSupported",
    answer: "home.whichMarketsSupportedAnswer",
  },
  {
    question: "home.doINeedTechnicalKnowledge",
    answer: "home.doINeedTechnicalKnowledgeAnswer",
  },
  {
    question: "home.isProfitGuaranteed",
    answer: "home.isProfitGuaranteedAnswer",
  },
];

export default function FAQ() {
  const {t} = useTranslation();
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        {/* FAQ Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            {t("home.faq")}
          </p>

          <h2 className="mt- text-xl lg:text-3xl font-black text-slate-900">
            {t("home.frequentlyAsked")}{" "}
            <span className="text-blue-600">{t("home.questions")}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500">
            {t("home.faqDescription")}
          </p>
        </div>

        {/* FAQ Questions */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isActive = active === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-slate-800">
                    {t(faq.question)}
                  </span>

                  <FiChevronDown
                    className={`shrink-0 text-blue-600 transition-transform ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{height: 0, opacity: 0}}
                      animate={{height: "auto", opacity: 1}}
                      exit={{height: 0, opacity: 0}}
                    >
                      <p className="px-5 pb-5 text-sm leading-6 text-slate-500">
                        {t(faq.answer)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
