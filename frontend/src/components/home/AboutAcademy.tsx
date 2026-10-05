"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiAward, FiShield, FiTrendingUp, FiUsers} from "react-icons/fi";
import logo from "../../assets/images/aboutPhoto.png";

const benefits = [
  {
    icon: FiAward,
    title: "home.sevenPlusYears",
    text: "home.tradingExperience",
  },
  {
    icon: FiTrendingUp,
    title: "home.forexCrypto",
    text: "home.specialist",
  },
  {
    icon: FiUsers,
    title: "home.trustedBrokers",
    text: "home.partnerships",
  },
  {
    icon: FiShield,
    title: "home.riskManagement",
    text: "home.focused",
  },
];
export default function AboutAcademy() {
  const {t} = useTranslation();
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        {/* Content */}
        <motion.div
          initial={{opacity: 0, x: 40}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
        >
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            {t("home.aboutAmiriFinanceAcademy")}
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
            {t("home.turningMarketExperience")}
            <br />
            <span className="text-blue-600">{t("home.intoYourSuccess")}</span>
          </h2>

          <p className="mt-6 leading-7 text-slate-600">
            {t("home.aboutDescription")}
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            {t("home.aboutMission")}
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {" "}
                      {t(item.title)}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {t(item.text)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        {/* Visual */}
        <motion.div
          initial={{opacity: 0, x: -40}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={logo.src}
              alt={t("home.aboutAcademyImageAlt")}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 right-5 rounded-2xl bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <span className="text-lg font-black">7+</span>
              </div>

              <div>
                <p className="font-bold text-slate-900"> {t("home.years")}</p>
                <p className="text-xs text-slate-500">
                  {" "}
                  {t("home.experience")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
