"use client";

import {useSearchParams} from "next/navigation";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCheck,
  FiCreditCard,
  FiCopy,
  FiSend,
} from "react-icons/fi";

export default function PaymentPage() {
  const searchParams = useSearchParams();

  const service = searchParams.get("service");

  const isTelegram = service === "telegram";

  const plan = {
    name: isTelegram ? "Telegram Bot" : "Copy Trading",
    price: isTelegram ? "$10" : "$30",
    period: isTelegram ? "/ week" : "/ month",
    description: isTelegram
      ? "Automated trading with Telegram bot, signals, risk control, and account monitoring."
      : "Follow professional traders and automatically copy their trading strategies.",
    icon: isTelegram ? FiSend : FiCopy,
    features: isTelegram
      ? [
          "Telegram trading bot",
          "Trading signals",
          "Risk control",
          "Account monitoring",
        ]
      : [
          "Professional traders",
          "Automatic copy trading",
          "Active positions",
          "Portfolio analytics",
        ],
  };

  const Icon = plan.icon;

  return (
    <main className="mx-auto w-full max-w-[1100px] px-5 py-8 md:px-8 lg:px-10">
      {/* Back */}
      <Link
        href="/subscription"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
      >
        <FiArrowLeft size={16} />
        Back to Subscription
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">Payment</h1>

        <p className="mt-2 text-sm text-slate-500">
          Complete your payment to activate your subscription.
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
                Payment Method
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Select your preferred payment method.
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

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Cryptocurrency Payment
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Pay securely using cryptocurrency.
                </p>
              </div>
            </div>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
              <FiCheck size={12} />
            </span>
          </button>

          {/* Payment Button */}
          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-[0.99]"
          >
            Pay {plan.price}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-slate-400">
            Your subscription will be activated after the payment is
            successfully verified.
          </p>
        </section>

        {/* Order Summary */}
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Order Summary
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
            {plan.features.map((feature) => (
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
              <p className="text-xs text-slate-500">Total</p>

              <p className="mt-1 text-xs text-slate-400">
                Subscription {plan.period}
              </p>
            </div>

            <div className="text-right">
              <span className="text-2xl font-semibold text-slate-900">
                {plan.price}
              </span>

              <span className="ml-1 text-xs text-slate-500">{plan.period}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
