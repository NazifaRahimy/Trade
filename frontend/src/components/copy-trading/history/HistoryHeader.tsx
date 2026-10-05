"use client";

import {FiClock} from "react-icons/fi";
import {useTranslation} from "react-i18next";
export default function HistoryHeader() {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiClock size={20} />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            {t("copyTradingHistory.tradeHistory")}
          </h1>
        </div>

        <p className="text-sm text-slate-500">
          {t("copyTradingHistory.tradeHistoryDescription")}
        </p>
      </div>
    </div>
  );
}
