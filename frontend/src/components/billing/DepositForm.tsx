"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiClipboard,
  FiCopy,
  FiDollarSign,
  FiShield,
  FiLoader,
} from "react-icons/fi";
// 🚀 اتصال به کلاینت متمرکز شبکه پلتفرم شما جهت ارسال توکن احراز هویت
import api from "@/src/lib/axios";

export default function DepositForm() {
  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  // 📦 استیت‌های جدید برای ذخیره آنلاین اطلاعات فاکتور دریافتی از دیتابیس جنگو
  const [walletAddress, setWalletAddress] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [displayAmount, setDisplayAmount] = useState("");

  // 📡 شلیک درخواست ساخت فاکتور واقعی تتر به کارگزار ابری بک‌اَند
  const handleGenerate = async () => {
    if (!amount || Number(amount) <= 0) return;
    
    try {
      setLoading(true);
      const response = await api.post("/api/billing/payments/create/", {
        amount: amount,
      });

      if (response.data) {
        // مپ کردن مستقیم پاسخ لایو سرور بر روی متغیرهای گرافیکی کامپوننت شما
        setWalletAddress(response.data.deposit_address);
        setInvoiceId(`INV-${response.data.invoice_id}`);
        setDisplayAmount(`${response.data.amount} USDT`);
        setGenerated(true);
      }
    } catch (error) {
      alert("❌ Blockchain Gateway Error: Failed to initialize network handshake ticket.");
    } finally {
      setLoading(false);
    }
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* حفظ ساختار گرید دو ستونه شما در تصویر اول */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[14fr_11fr]">
        
        {/* 🟦 بخش فرم درخواست واریز (Deposit Form) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Deposit USDT</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Add funds to your account using the USDT TRC20 network.
          </p>

          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700">
              Deposit Amount
            </label>
            <div className="relative mt-2">
              <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-16 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                USDT
              </span>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700">
              Network
            </label>
            <div className="mt-2 rounded-xl border border-blue-200 bg-blue-50/50 p-4 py-3.5">
              <p className="text-sm font-medium text-slate-900">USDT - TRC20</p>
              <p className="mt-1 text-xs text-slate-500">TRON Network</p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGenerate}
              disabled={loading || !amount || Number(amount) <= 0}
              className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-200 disabled:opacity-80 flex items-center justify-center gap-2"
            >
              {loading ? <FiLoader className="animate-spin" size={16} /> : null}
              <span>{loading ? "Generating Securing Ticket..." : "Generate Payment"}</span>
            </button>
          </div>
        </div>

        {/* 🟥 بخش فاکتور و آدرس ولت (Payment Details) - حفظ کامل منطق شرطی تصویر دوم */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FiShield size={21} />
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Payment Details</h2>
              <p className="text-xs text-slate-500">Secure cryptocurrency payment.</p>
            </div>
          </div>

          <div className="mt-6">
            {!generated ? (
              // باکس حالت انتظار قبل از کلیک (مشابه خط ۸۸ تصویر دوم شما)
              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
                <FiClipboard className="mx-auto mb-3 text-slate-400" size={24} />
                <p className="text-sm font-medium text-slate-700">No Active Invoice</p>
                <p className="mt-1 text-xs text-slate-500">
                  Enter an amount and generate a payment to receive your wallet details.
                </p>
              </div>
            ) : (
              // لایوت رندر فاکتور کاملاً داینامیک شده به محض پاسخ موفق سرور (خط ۹۵ تصویر دوم شما)
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Wallet Address
                  </p>
                  <div className="rounded-xl border border-slate-200 bg-slate-100 p-4">
                    <p className="break-all text-xs font-mono leading-5 text-slate-700">
                      {walletAddress}
                    </p>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-blue-600 transition hover:text-blue-700"
                    >
                      {copied ? <FiCheck className="text-emerald-500" /> : <FiCopy />}
                      <span>{copied ? "Copied!" : "Copy Address"}</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500 font-medium">Amount</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {displayAmount}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500 font-medium">Invoice ID</p>
                    <p className="mt-1 truncate text-xs font-mono font-bold text-slate-900">
                      {invoiceId}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-4 text-xs font-medium text-orange-700 leading-normal">
                  Send only USDT using the TRCO20 network. Sending funds through another network may result in loss of funds.
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
