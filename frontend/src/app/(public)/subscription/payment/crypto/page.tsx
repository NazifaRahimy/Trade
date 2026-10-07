"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FiArrowLeft,
  FiCheck,
  FiCopy,
  FiCreditCard,
} from "react-icons/fi";

function CryptoPaymentContent() {
  const searchParams = useSearchParams();

  const service = searchParams.get("service");
  const isTelegram = service === "telegram";

  const planName = isTelegram ? "Telegram Bot" : "Copy Trading";
  const price = isTelegram ? "$10" : "$30";
  const period = isTelegram ? "/ week" : "/ month";

  const walletAddress = "TRX8xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

  return (
    <main className="mx-auto w-full max-w-[800px] px-5 py-8 md:px-8">
      <div className="mb-6">
        <Link
          href="/subscription"
          className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900"
        >
          <FiArrowLeft />
          Back to Subscription
        </Link>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-slate-50 px-6 py-6 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
              <FiCreditCard size={20} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Crypto Payment
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Complete your subscription payment using cryptocurrency.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6 md:p-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Selected Plan</p>

                <h2 className="mt-1 text-lg font-semibold text-slate-900">
                  {planName}
                </h2>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-slate-900">
                  {price}
                </p>

                <p className="text-xs text-slate-500">
                  {period}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Payment Instructions
            </h2>

            <div className="mt-4 space-y-3">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  1
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  Send the exact subscription amount to the wallet address
                  below.
                </p>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  2
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  Make sure you use the correct cryptocurrency network.
                </p>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  3
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  After payment, submit your transaction information for
                  verification.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Wallet Address
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  TRON / USDT
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  navigator.clipboard.writeText(walletAddress)
                }
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <FiCopy />
                Copy
              </button>
            </div>

            <div className="break-all rounded-xl bg-slate-100 p-4 font-mono text-sm text-slate-700">
              {walletAddress}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <FiCheck />
              </div>

              <div>
                <h3 className="font-semibold text-emerald-900">
                  Payment Verification
                </h3>

                <p className="mt-1 text-sm leading-6 text-emerald-800">
                  Your payment will be reviewed after the transaction is
                  submitted. Subscription activation will occur after
                  successful verification.
                </p>
              </div>
            </div>
          </div>

          <Link
            href={`/subscription/payment?service=${service || ""}`}
            className="flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Continue
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function CryptoPaymentPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-slate-50">
          <div className="text-sm text-slate-500">
            Loading payment...
          </div>
        </main>
      }
    >
      <CryptoPaymentContent />
    </Suspense>
  );
}
