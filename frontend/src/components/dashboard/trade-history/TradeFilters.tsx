"use client";

import {FiCalendar, FiFilter, FiSearch} from "react-icons/fi";
import {useTranslation} from "react-i18next";
// 🚀 ۱. تعریف پرپس‌ها برای فرستادن فیلترها به جدول اصلی معاملات
type TradeFiltersProps = {
  search: string;
  setSearch: (val: string) => void;
  days: string;
  setDays: (val: string) => void;
  type: string;
  setType: (val: string) => void;
  status: string;
  setStatus: (val: string) => void;
};

export default function TradeFilters({
  search,
  setSearch,
  days,
  setDays,
  type,
  setType,
  status,
  setStatus,
}: TradeFiltersProps) {
  const {t} = useTranslation();

  return (
    <div className="border-b border-slate-200 p-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* Search */}
        <div className="relative w-full xl:max-w-xs">
          <FiSearch
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder={t("telegramBotTradeHistory.searchPlaceholder")}
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* Date */}
          <div className="relative">
            <FiCalendar
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <select
              defaultValue="30"
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-8 text-sm text-slate-700 outline-none focus:border-blue-500"
            >
              <option value="7">
                {" "}
                {t("telegramBotTradeHistory.last7Days")}
              </option>
              <option value="30">
                {" "}
                {t("telegramBotTradeHistory.last30Days")}
              </option>
              <option value="90">
                {t("telegramBotTradeHistory.last90Days")}
              </option>
              <option value="all">
                {" "}
                {t("telegramBotTradeHistory.allTime")}
              </option>
            </select>
          </div>
          {/* Type */}
          <select
            defaultValue="all"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500"
          >
            <option value="all">
              {" "}
              {t("telegramBotTradeHistory.allTypes")}
            </option>
            <option value="buy"> {t("telegramBotTradeHistory.buy")}</option>
            <option value="sell"> {t("telegramBotTradeHistory.sell")}</option>
          </select>
          {/* Status */}
          <select
            defaultValue="all"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500"
          >
            <option value="all">
              {" "}
              {t("telegramBotTradeHistory.allStatus")}
            </option>
            <option value="closed">
              {t("telegramBotTradeHistory.closed")}
            </option>
            <option value="open">{t("telegramBotTradeHistory.open")}</option>
          </select>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <FiFilter size={14} />
        <span> {t("telegramBotTradeHistory.appliedMessage")}</span>
      </div>
    </div>
  );
}
