"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {
  FiCheck,
  FiClipboard,
  FiCopy,
  FiDollarSign,
  FiShield,
} from "react-icons/fi";

export default function DepositForm() {
  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);

  const walletAddress = "TRXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  const invoiceId = "INV-2026-000184";

  const handleGenerate = () => {
    if (!amount || Number(amount) <= 0) return;

    setGenerated(true);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(walletAddress);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_0.8fr]"
    >
      {/* Deposit Form */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Deposit USDT</h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add funds to your account using the USDT TRC20 network.
          </p>
        </div>

        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Deposit Amount
          </label>

          <div className="relative">
            <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-20 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
              USDT
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Network
          </label>

          <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3.5">
            <p className="text-sm font-medium text-slate-900">USDT - TRC20</p>

            <p className="mt-1 text-xs text-slate-500">Tron network</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          disabled={!amount || Number(amount) <= 0}
          className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Generate Payment
        </button>
      </div>

      {/* Payment Details */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <FiShield className="text-xl" />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900">Payment Details</h2>

            <p className="text-xs text-slate-500">
              Secure cryptocurrency payment
            </p>
          </div>
        </div>

        {!generated ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
            <FiClipboard className="mx-auto mb-3 text-2xl text-slate-400" />

            <p className="text-sm text-slate-500">
              Enter an amount and generate a payment to receive your wallet
              details.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
                Wallet Address
              </p>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="break-all text-sm leading-6 text-slate-700">
                  {walletAddress}
                </p>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700"
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                  {copied ? "Copied" : "Copy Address"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Amount</p>

                <p className="mt-1 font-semibold text-slate-900">
                  {amount} USDT
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Invoice ID</p>

                <p className="mt-1 truncate font-semibold text-slate-900">
                  {invoiceId}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
              <p className="text-xs leading-5 text-orange-700">
                Send only USDT using the TRC20 network. Sending funds through
                another network may result in loss of funds.
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
