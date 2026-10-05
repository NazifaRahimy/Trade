"use client";
import {useTranslation} from "react-i18next";

import {motion} from "framer-motion";
import {FiTrendingUp} from "react-icons/fi";

export default function PerformanceHeader() {
  const {t} = useTranslation();
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiTrendingUp size={20} />
          </div>

          <span className="text-sm font-medium text-blue-600">
            {t("copyTradingPerformance.performance")}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          {t("copyTradingPerformance.copyTradingPerformanceTitle")}
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          {t("copyTradingPerformance.copyTradingPerformanceDescription")}
        </p>
      </div>

      <select className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500">
        <option>
          {t("copyTradingPerformance.copyTradingPerformanceLast30Days")}
        </option>

        <option>
          {t("copyTradingPerformance.copyTradingPerformanceLast3Months")}
        </option>

        <option>
          {t("copyTradingPerformance.copyTradingPerformanceLast6Months")}
        </option>

        <option>
          {t("copyTradingPerformance.copyTradingPerformanceAllTime")}
        </option>
      </select>
    </motion.div>
  );
}
