"use client";

import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {FiArrowLeft, FiCheck, FiCopy, FiCreditCard} from "react-icons/fi";

export default function CryptoPaymentPage() {
  const searchParams = useSearchParams();

  const service = searchParams.get("service");

  const isTelegram = service === "telegram";

  const planName = isTelegram ? "Telegram Bot" : "Copy Trading";
  const price = isTelegram ? "$10" : "$30";
  const period = isTelegram ? "/ week" : "/ month";

  const walletAddress = "TRX8xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

  return (
    <main className="mx-auto w-full max-w-[800px] px-5 py-8 md:px-8">
      {/* Back */}
      <Link
        href={`/subscription/payment?service=${service}`}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
      >
        <FiArrowLeft size={16} />
        Back to Payment
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          Cryptocurrency Payment
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Send the exact amount to the wallet address below.
        </p>
      </div>

      {/* Payment Card */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        {/* Service */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiCreditCard size={22} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">{planName}</h2>

            <p className="mt-1 text-sm text-slate-500">Subscription {period}</p>
          </div>
        </div>

        <div className="my-6 h-px bg-slate-200" />

        {/* Amount */}
        <div className="text-center">
          <p className="text-sm text-slate-500">Amount to Pay</p>

          <p className="mt-2 text-4xl font-semibold text-slate-900">{price}</p>
        </div>

        {/* Payment Code */}
        <div className="mt-8">
          <p className="mb-2 text-sm font-medium text-slate-700">
            Payment Code
          </p>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <code className="break-all text-sm text-slate-700">
                {walletAddress}
              </code>

              <button
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:text-blue-600"
                title="Copy payment code"
              >
                <FiCopy size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 rounded-xl bg-blue-50 p-4">
          <h3 className="text-sm font-semibold text-slate-900">
            Payment Instructions
          </h3>

          <ul className="mt-3 space-y-2">
            <li className="flex gap-2 text-sm text-slate-600">
              <FiCheck className="mt-0.5 shrink-0 text-emerald-600" />
              Send exactly {price}.
            </li>

            <li className="flex gap-2 text-sm text-slate-600">
              <FiCheck className="mt-0.5 shrink-0 text-emerald-600" />
              Send the payment to the address above.
            </li>

            <li className="flex gap-2 text-sm text-slate-600">
              <FiCheck className="mt-0.5 shrink-0 text-emerald-600" />
              Your subscription will be activated after verification.
            </li>
          </ul>
        </div>

        {/* Verification */}
        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          I Have Completed the Payment
        </button>
      </section>
    </main>
  );
}
