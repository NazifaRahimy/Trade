"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiArrowDownLeft, FiArrowUpRight, FiDollarSign} from "react-icons/fi";

type ProfitLossOverviewProps = {
  pnlData: {
    gross_profit: string;
    gross_loss: string;
    winning_trades: number;
    losing_trades: number;
  } | null;
};

export default function ProfitLossOverview({pnlData}: ProfitLossOverviewProps) {
  const {t} = useTranslation();
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiDollarSign size={18} />
        </div>
        <div>
          <h2 className="text-base font-bold text-slate-900">
            {t("copyTradingPerformance.copyTradingPerformanceProfitLoss")}
          </h2>

          <p className="text-xs text-slate-400">
            {t(
              "copyTradingPerformance.copyTradingPerformanceProfitLossDescription",
            )}{" "}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-50 pb-2">
          <span className="text-xs font-medium text-slate-500">
            {t("copyTradingPerformance.copyTradingPerformanceGrossProfit")}
          </span>
          <span className="text-sm font-bold text-emerald-600">
            {pnlData?.gross_profit || "$0.00"}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-slate-50 pb-2">
          <span className="text-xs font-medium text-slate-500">
            {" "}
            {t("copyTradingPerformance.copyTradingPerformanceGrossLoss")}
          </span>
          <span className="text-sm font-bold text-red-600">
            {pnlData?.gross_loss || "$0.00"}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="rounded-xl bg-emerald-50/50 p-3 text-center border border-emerald-100/50">
            <span className="text-[11px] text-slate-400 block font-medium">
              {" "}
              {t("copyTradingPerformance.copyTradingPerformanceWinningTrades")}
            </span>
            <span className="text-base font-extrabold text-emerald-600 mt-1 block">
              {pnlData?.winning_trades || 0}
            </span>
          </div>
          <div className="rounded-xl bg-red-50/50 p-3 text-center border border-red-100/50">
            <span className="text-[11px] text-slate-400 block font-medium">
              {" "}
              {t("copyTradingPerformance.copyTradingPerformanceLosingTrades")}
            </span>
            <span className="text-base font-extrabold text-red-600 mt-1 block">
              {pnlData?.losing_trades || 0}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
