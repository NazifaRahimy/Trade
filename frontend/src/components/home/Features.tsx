"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiCopy, FiBarChart2, FiShield, FiHeadphones} from "react-icons/fi";
const services = [
  {
    icon: FiCopy,
    title: "home.copyTrading",
    description: "home.copyTradingDescription",
  },
  {
    icon: FiBarChart2,
    title: "home.tradingSignals",
    description: "home.tradingSignalsDescription",
  },
  {
    icon: FiShield,
    title: "home.riskManagementService",
    description: "home.riskManagementDescription",
  },
  {
    icon: FiHeadphones,
    title: "home.accountSupport",
    description: "home.accountSupportDescription",
  },
];

export default function Features() {
  const {t} = useTranslation();
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            {t("home.ourServices")}
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            {t("home.professionalSolutionsFor")}
            <span className="text-blue-600">{t("home.smartTraders")}</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                whileHover={{y: -6, scale: 1.01}}
                className="rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                  <Icon />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {t(service.title)}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {t(service.description)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
