"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiLink, FiShield} from "react-icons/fi";

export default function BrokerHeader() {
  const {t} = useTranslation();
  return (
    <motion.div
      initial={{opacity: 0, y: -15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="mb-7"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FiLink size={19} />
            </div>

            <span className="text-sm font-medium text-blue-600">
              {t("copyTradingBrokerConnections.brokerConnection")}
            </span>
          </div>

          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            {t("copyTradingBrokerConnections.connectYourBroker")}
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            {t("copyTradingBrokerConnections.headerDescription")}
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5">
          <FiShield className="text-emerald-600" size={17} />

          <span className="text-xs font-medium text-emerald-700">
            {t("copyTradingBrokerConnections.secureConnection")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
