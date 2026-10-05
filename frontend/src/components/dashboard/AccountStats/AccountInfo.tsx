"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiUser, FiCreditCard, FiGlobe, FiShield} from "react-icons/fi";

// 🚀 تعریف ساختار داده‌های دریافتی از دیتابیس
type AccountInfoProps = {
  data: any;
};

export default function AccountInfo({data}: AccountInfoProps) {
  // نقشه‌برداری داینامیک فیلدهای بک‌اَند روی آیکون‌ها
  const {t} = useTranslation();

  const items = [
    {
      label: t("telegramBotAccountStatus.accountType"),
      value:
        data?.account_type === "live"
          ? t("telegramBotAccountStatus.professionalLive")
          : t("telegramBotAccountStatus.demoAccount"),
      icon: FiUser,
    },
    {
      label: t("telegramBotAccountStatus.accountId"),
      value: data?.mt5_login
        ? `#${data.mt5_login}`
        : t("telegramBotAccountStatus.notLinked"),
      icon: FiCreditCard,
    },
    {
      label: t("telegramBotAccountStatus.baseCurrency"),
      value: t("telegramBotAccountStatus.usd"),
      icon: FiGlobe,
    },
    {
      label: t("telegramBotAccountStatus.riskProfile"),
      value: data?.risk_percent
        ? `${t("telegramBotAccountStatus.risk")}: ${data.risk_percent}%`
        : t("telegramBotAccountStatus.moderate"),
      icon: FiShield,
    },
  ];
  return (
    <motion.section
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-3 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-slate-900">
        {t("telegramBotAccountStatus.accountInformation")}
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
