"use client";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import Logo from "@/src/assets/images/logo.png";
import photoregister from "@/src/assets/images/photoregister.png";
import {motion} from "framer-motion";
import {
  FiTrendingUp,
  FiShield,
  FiBarChart2,
  FiHeadphones,
} from "react-icons/fi";

const features = [
  {
    icon: FiTrendingUp,
    title: "register.signalsTitle",
    desc: "register.signalsDescription",
  },
  {
    icon: FiBarChart2,
    title: "register.analysisTitle",
    desc: "register.analysisDescription",
  },
  {
    icon: FiShield,
    title: "register.riskManagementTitle",
    desc: "register.riskManagementDescription",
  },
  {
    icon: FiHeadphones,
    title: "register.supportTitle",
    desc: "register.supportDescription",
  },
];

export default function RegisterBenefits() {
  const {t, i18n} = useTranslation();
  const isPersian = i18n.language.startsWith("fa");
  return (
    <motion.div
      initial={{opacity: 0, x: 30}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      className={`relative h-full rounded-t-md lg:rounded-t-none ${isPersian ? "lg:rounded-tl-3xl lg:rounded-bl-3xl" : "lg:rounded-tr-3xl lg:rounded-br-3xl"}   min-h-[650px] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white`}
    >
      <div className="w-full px-8 py-5  z-20">
        {/* Logo */}
        <div className="mb-6 flex justify-center ">
          <Image
            src={Logo.src}
            alt="Amiri Finance Academy"
            width={150}
            height={50}
            className="h-auto w-[170px] object-contain"
          />
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-xl font-bold">
            {t("register.benefitsTitle")}
          </h2>

          <p className="text-sm leading-7 text-slate-300">
            {t("register.benefitsDescription")}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-5">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                  <Icon className="text-xl text-blue-400" />
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold">
                    {t(item.title)}
                  </h3>

                  <p className="text-xs leading-6 text-slate-400">
                    {t(item.desc)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom image */}
      <div className="relative  h-[50px] md:hidden"></div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg>{/* candlestick + trend line */}</svg>

        <img
          src={photoregister.src}
          alt="coins"
          className="absolute -bottom-5 md:bottom-0 right-0 w-full"
        />
      </div>
    </motion.div>
  );
}
