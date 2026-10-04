"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiCopy, FiMessageSquare, FiHeadphones} from "react-icons/fi";

const services = [
  {
    icon: FiCopy,
    title: "about.copyTrading",
    text: "about.copyTradingDescription",
  },
  {
    icon: FiMessageSquare,
    title: "about.tradingSignals",
    text: "about.tradingSignalsDescription",
  },
  {
    icon: FiHeadphones,
    title: "about.supportAndGuidance",
    text: "about.supportAndGuidanceDescription",
  },
];
export default function AboutServices() {
  const {t} = useTranslation();
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.5}}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t("about.whatWeOffer")}
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
              {t("about.servicesDesignedAround")}
              <span className="block text-blue-600">
                {t("about.yourTradingJourney")}
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              {t("about.servicesDescription")}
            </p>
          </motion.div>

          <div className="grid gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{opacity: 0, x: 20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true, amount: 0.25}}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  whileHover={{x: 5}}
                  className="group flex gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:border-blue-100 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {t(service.title)}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {t(service.text)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
