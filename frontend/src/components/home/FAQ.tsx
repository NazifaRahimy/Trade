"use client";

import {useState} from "react";
import {FiChevronDown} from "react-icons/fi";
import {motion, AnimatePresence} from "framer-motion";

const faqs = [
  {
    question: "What is Copy Trading?",
    answer:
      "Copy trading is a system that can allow a user's trading account to automatically follow selected trading activity, depending on the platform and service configuration.",
  },
  {
    question: "Is my money transferred to Amiri?",
    answer:
      "No. Your funds should remain in your own broker or exchange account. Always review the permissions, security model and terms of the platform before connecting an account.",
  },
  {
    question: "How much capital do I need?",
    answer:
      "The required amount depends on the broker, exchange and selected service. There is no guaranteed profit in financial markets, and users should only consider risks they understand.",
  },
  {
    question: "Which markets are supported?",
    answer:
      "The platform is designed around educational content and services related to Forex and Cryptocurrency markets.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "The connection process is designed to be straightforward, and support can guide users through the available setup process.",
  },
  {
    question: "Is profit guaranteed?",
    answer:
      "No. Financial markets involve risk and no trading strategy can guarantee a fixed profit.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        {/* FAQ Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            FAQ
          </p>

          <h2 className="mt- text-xl lg:text-3xl font-black text-slate-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500">
            Find answers to common questions about the academy, trading
            education and available services.
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
                    {faq.question}
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
                        {faq.answer}
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
