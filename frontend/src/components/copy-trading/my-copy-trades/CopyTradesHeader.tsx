"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiCopy, FiInfo} from "react-icons/fi";

export default function CopyTradesHeader() {
  const {t} = useTranslation();
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiCopy size={24} />
        </div>

        <div>
          <div className="mb-1 flex items-center gap-2 text-sm font-medium text-blue-600">
            <span>{t("myCopyTrading.copyTradingLabel")}</span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            {" "}
            {t("myCopyTrading.myCopyTradesTitle")}
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            {t("myCopyTrading.myCopyTradesDescription")}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-700">
        <FiInfo size={17} />
        <span>{t("myCopyTrading.automaticCopyNotice")}</span>
      </div>
    </motion.div>
  );
}
