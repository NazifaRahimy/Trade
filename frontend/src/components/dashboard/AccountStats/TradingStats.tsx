"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiBarChart2, FiTarget, FiClock, FiRepeat} from "react-icons/fi";
type TradingStatsProps = {
  data: any;
};
export default function TradingStats({data}: TradingStatsProps) {
  const {t} = useTranslation();
  const items = [
    {
      label: t("telegramBotAccountStatus.totalTrades"),
      value:
        data?.total_trades_count || t("telegramBotAccountStatus.zeroValue"),
      icon: FiBarChart2,
    },
    {
      label: t("telegramBotAccountStatus.winningTrades"),
      value:
        data?.winning_trades_count || t("telegramBotAccountStatus.zeroValue"),
      icon: FiTarget,
    },
    {
      label: t("telegramBotAccountStatus.averageDuration"),
      value: t("telegramBotAccountStatus.averageDurationValue"),
      icon: FiClock,
    },
    {
      label: t("telegramBotAccountStatus.activeTrades"),
      value:
        data?.active_trades_count || t("telegramBotAccountStatus.zeroValue"),
      icon: FiRepeat,
    },
  ];
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900 mb-5">
        {t("telegramBotAccountStatus.tradingStatistics")}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: index * 0.05}}
              className="flex items-center gap-3 rounded-xl border border-slate-50 bg-slate-50/50 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-100 text-blue-600">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">
                  {item.label}
                </p>
                <p className="text-base font-bold text-slate-900 mt-0.5">
                  {item.value}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
