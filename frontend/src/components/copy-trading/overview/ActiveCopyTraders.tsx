"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {
  FiActivity,
  FiArrowDownLeft,
  FiArrowUpRight,
  FiTrendingUp,
} from "react-icons/fi";
import Link from "next/link";

type TraderItem = {
  id: number;
  name: string;
  status: string;
  pair: string;
  investment: string;
  profit: string;
  return_pct: string;
  win_rate: string;
  active_positions: number;
  copy_ratio: string;
};

type ActiveCopyTradersProps = {
  tradersList: TraderItem[] | null;
};

export default function ActiveCopyTraders({
  tradersList,
}: ActiveCopyTradersProps) {
  const {t} = useTranslation();
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h2 className="mb-4 text-sm font-text text-slate-500">
        {t("copyTrading.activeCopyTraders")}
      </h2>

      {!tradersList || tradersList.length === 0 ? (
        <div className="p-6 text-center text-slate-400 italic">
          {t("copyTrading.noActiveCopyTraders")}
        </div>
      ) : (
        tradersList.map((trader) => (
          <div key={trader.id} className="space-y-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-bold text-xl">
                  {trader.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-900">
                      {trader.name}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 capitalize">
                      {trader.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 font-medium">
                    {trader.pair}
                  </p>
                </div>
              </div>

              {/* دکمه‌های کنترل لایو شما در تصویر */}
              <div className="flex items-center gap-3">
                <Link
                  href="/copy-trading/performance"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
                >
                  {t("copyTrading.viewPerformance")}
                </Link>
                <Link
                  href="/copy-trading/copy-settings"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700"
                >
                  {t("copyTrading.copySettings")}
                </Link>
              </div>
            </div>

            {/* گرید آماری تریدر (حفظ کاملا کلاس‌های تصویر شما) */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 mt-4">
              <div>
                <span className="text-sm text-slate-400">
                  {" "}
                  {t("copyTrading.investment")}
                </span>
                <p className="text-base font-semibold text-slate-900 mt-1">
                  {trader.investment}
                </p>
              </div>
              <div>
                <span className="text-sm text-slate-400">
                  {t("copyTrading.profit")}
                </span>
                <p className="text-base font-semibold text-emerald-600 mt-1">
                  {trader.profit}
                </p>
              </div>
              <div>
                <span className="text-sm text-slate-400">
                  {" "}
                  {t("copyTrading.return")}
                </span>
                <p className="text-base font-semibold text-emerald-600 mt-1">
                  {trader.return_pct}
                </p>
              </div>
              <div>
                <span className="text-sm text-slate-400">
                  {t("copyTrading.winRate")}
                </span>
                <p className="text-base font-semibold text-slate-900 mt-1">
                  {trader.win_rate}
                </p>
              </div>
            </div>

            {/* بخش وضعیت ابری متاتریدر ۵ پایین کارت */}
            <div className="mt-5 grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <FiTrendingUp size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">
                    {t("copyTrading.copyStatus")}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {t("copyTrading.copyingActive")}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiActivity size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">
                    {t("copyTrading.activePositions")}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {trader.active_positions} {t("copyTrading.positions")}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <FiArrowUpRight size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">
                    {t("copyTrading.copyRatio")}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {trader.copy_ratio}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </motion.div>
  );
}
