"use client";

import {useState} from "react";
import {FiActivity, FiRefreshCw, FiLoader} from "react-icons/fi";
import api from "@/src/lib/axios";
import {useTranslation} from "react-i18next";
interface TelegramBotCardProps {
  isPremiumActive: boolean;
  expiresAt: string | null;
  onRefresh: () => void;
}

export default function TelegramBotCard({
  isPremiumActive,
  expiresAt,
  onRefresh,
}: TelegramBotCardProps) {
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation();
  const handleActivateBot = async () => {
    try {
      setLoading(true);
      // شلیک درخواست کسر ۱۰ دلار به اندپوینت بک‌اَند مصوب شده
      const response = await api.post(
        "/api/billing/subscriptions/telegram/activate/",
      );
      alert(
        `✅ Subscription Active: ${response.data.message || "Bot node successfully whitelisted!"}`,
      );
      onRefresh(); // به‌روزرسانی آنی موجودی ولت در صفحه اصلی بیلیینگ
    } catch (error: any) {
      alert(
        `❌ Payment Rejected: ${error.response?.data?.detail || "Insufficient wallet funding. Please top-up via USDT first."}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm mt-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiActivity size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {t("billing.telegramBotPremiumIntegration")}
            </h3>
            <p className="text-xs text-slate-400">
              {t("billing.fixedSubscriptionCharge")}
            </p>
          </div>
        </div>

        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            isPremiumActive
              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
              : "bg-red-50 text-red-600 border border-red-200"
          }`}
        >
          {isPremiumActive
            ? t("billing.activePlan")
            : t("billing.expiredInactive")}
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs text-slate-400 block font-medium">
            {t("billing.accessExpirationSequence")}
          </span>
          <p className="text-sm font-bold text-slate-800 mt-1">
            {expiresAt || t("billing.noActiveLicense")}
          </p>
        </div>

        <button
          type="button"
          onClick={handleActivateBot}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? (
            <FiLoader className="animate-spin" size={14} />
          ) : (
            <FiRefreshCw size={14} />
          )}
          <span>
            {isPremiumActive
              ? `${t("billing.renewLicense")} ($10.00)`
              : `${t("billing.activateLicense")} ($10.00)`}
          </span>
        </button>
      </div>
    </div>
  );
}
