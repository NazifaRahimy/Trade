"use client";
import {useTranslation} from "react-i18next";
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCreditCard,
  FiCopy,
  FiSend,
} from "react-icons/fi";

export default function PaymentPage() {
  const {t, i18n} = useTranslation();
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const isTelegram = service === "telegram";
  const plan = {
    name: isTelegram ? t("payment.telegramBot") : t("payment.copyTrading"),

    price: isTelegram ? "$10" : "$30",

    period: isTelegram ? t("payment.week") : t("payment.month"),

    description: isTelegram
      ? t("payment.telegramDescription")
      : t("payment.copyTradingDescription"),

    icon: isTelegram ? FiSend : FiCopy,

    features: isTelegram
      ? t("payment.telegramFeatures", {returnObjects: true})
      : t("payment.copyTradingFeatures", {returnObjects: true}),
  };
  const Icon = plan.icon;
  return (
    <main className="mx-auto w-full max-w-[1100px] px-5 py-8 md:px-8 lg:px-10">
      {/* Back */}
      <Link
        href="/subscription"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
      >
        {i18n.language.startsWith("fa") ? (
          <FiArrowRight size={16} />
        ) : (
          <FiArrowLeft size={16} />
        )}

        {t("payment.backToSubscription")}
      </Link>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          {" "}
          {t("payment.title")}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {t("payment.description")}
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        {/* Payment Section */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiCreditCard size={22} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                {t("payment.paymentMethod")}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {t("payment.selectPaymentMethod")}
              </p>
            </div>
          </div>
          {/* Payment Method */}
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-xl border-2 border-blue-600 bg-blue-50 p-4 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600">
                <FiCreditCard size={20} />
              </div>
              <div
                className={` ${
                  i18n.language.startsWith("fa") ? "text-right" : "text-left"
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  {t("payment.cryptocurrencyPayment")}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {t("payment.cryptocurrencyDescription")}
                </p>
              </div>
            </div>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
              <FiCheck size={12} />
            </span>
          </button>
          {/* Payment Button */}
          <Link
            href={`/subscription/payment/crypto?service=${service}`}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-[0.99]"
          >
            {t("payment.pay")} {plan.price}
          </Link>
          <p className="mt-4 text-center text-xs leading-5 text-slate-400">
            {t("payment.paymentVerification")}
          </p>
        </section>
        {/* Order Summary */}
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            {t("payment.orderSummary")}
          </h2>
          <div className="my-5 h-px bg-slate-200" />
          {/* Service */}
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Icon size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                {plan.description}
              </p>
            </div>
          </div>
          {/* Features */}
          <ul className="mt-6 space-y-3">
            {Array.isArray(plan.features) &&
              plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-sm text-slate-600"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <FiCheck size={12} />
                  </span>

                  {feature}
                </li>
              ))}
          </ul>
          <div className="my-6 h-px bg-slate-200" />
          {/* Price */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-slate-500">{t("payment.total")}</p>
              <p className="mt-1 text-xs text-slate-400">
                {t("payment.subscription")} {plan.period}
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-semibold text-slate-900">
                {plan.price}
              </span>
              <span className="mx-1 text-xs text-slate-500">{plan.period}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
