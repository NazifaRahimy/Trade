"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiDollarSign, FiArrowUpRight} from "react-icons/fi";

type BalanceCardProps = {
  data: any;
};

export default function BalanceCard({data}: BalanceCardProps) {
  const {t} = useTranslation();
  return (
    <motion.div
      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: 0}}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 font-medium">
            {t("telegramBotAccountStatus.availableBalance")}
          </p>
          {/* موجودی در دسترس داینامیک */}
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {data?.available_balance ||
              t("telegramBotAccountStatus.zeroAmount")}
          </h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiDollarSign size={22} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
        <div>
          <p className="text-xs text-slate-500">
            {t("telegramBotAccountStatus.equity")}
          </p>
          {/* اکویتی واقعی حساب */}
          <p className="text-sm font-semibold text-slate-900 mt-1">
            {data?.equity || t("telegramBotAccountStatus.zeroAmount")}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">
            {t("telegramBotAccountStatus.usedMargin")}
          </p>
          {/* مارجین درگیر معامله */}
          <p className="text-sm font-semibold text-slate-900 mt-1">
            {data?.used_margin || t("telegramBotAccountStatus.zeroAmount")}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600">
        <FiArrowUpRight size={16} />
        <span>
          {t("telegramBotAccountStatus.marginLevelPercent")}:
          <strong className="px-1">
            {data?.margin_level_percent ||
              t("telegramBotAccountStatus.zeroPercent")}
          </strong>
        </span>
      </div>
    </motion.div>
  );
}
