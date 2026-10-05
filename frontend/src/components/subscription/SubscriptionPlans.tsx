"use client";
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {motion} from "framer-motion";
import {
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiCopy,
  FiSend,
} from "react-icons/fi";
const subscriptions = [
  {
    name: "subscription.telegramBot",
    service: "telegram",
    description: "subscription.telegramBotDescription",
    price: "$10",
    period: "subscription.week",
    icon: FiSend,
    features: [
      "subscription.telegramTradingBot",
      "subscription.tradingSignals",
      "subscription.riskControl",
      "subscription.accountMonitoring",
    ],
  },
];
export default function SubscriptionPlans() {
  const {t, i18n} = useTranslation();
  return (
    <motion.section
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.2}}
      className="mt-6"
    >
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          {t("subscription.subscriptionPlans")}
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          {t("subscription.chooseService")}{" "}
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {subscriptions.map((subscription, index) => {
          const Icon = subscription.icon;
          return (
            <motion.div
              key={subscription.name}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.4,
                delay: 0.25 + index * 0.08,
              }}
              className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md md:p-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {t(subscription.name)}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {t("subscription.weeklySubscription")}
                    </p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className="mt-5 min-h-[48px] text-sm leading-6 text-slate-500">
                {t(subscription.description)}
              </p>
              {/* Price */}
              <div className="mt-5">
                <span className="text-3xl font-semibold text-slate-900">
                  {subscription.price}
                </span>
                <span className="ml-1 text-xs text-slate-500">
                  {t(subscription.period)}
                </span>
              </div>
              {/* Divider */}
              <div className="my-5 h-px bg-slate-200" />
              {/* Features */}
              <ul className="space-y-3">
                {subscription.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-slate-700"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <FiCheck size={12} />
                    </span>
                    {t(feature)}
                  </li>
                ))}
              </ul>
              {/* Action */}
              <Link
                href={`/subscription/payment?service=${subscription.service}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-[0.99]"
              >
                {t("subscription.choose")} {t(subscription.name)}
                {i18n.language.startsWith("fa") ? (
                  <FiArrowLeft size={16} className="mt-1" />
                ) : (
                  <FiArrowRight size={16} className="mt-1" />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
