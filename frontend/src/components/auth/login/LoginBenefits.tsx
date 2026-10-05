"use client";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import Logo from "@/src/assets/images/logo.png";
import {motion} from "framer-motion";
import {FiBarChart2, FiBookOpen, FiShield} from "react-icons/fi";
import photoregister from "@/src/assets/images/photoregister.png";

export default function LoginBenefits() {
  const {t, i18n} = useTranslation();
  const isPersian = i18n.language.startsWith("fa");
  const benefits = [
    {
      icon: FiBarChart2,
      title: "loginBenefits.accurateSignals",
      description: "loginBenefits.accurateSignalsDescription",
    },
    {
      icon: FiBookOpen,
      title: "loginBenefits.educationalCourses",
      description: "loginBenefits.educationalCoursesDescription",
    },
    {
      icon: FiShield,
      title: "loginBenefits.riskManagement",
      description: "loginBenefits.riskManagementDescription",
    },
  ];

  return (
    <motion.div
      initial={{opacity: 0, x: -30}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      className={`flex h-full flex-col  relative justify-center rounded-t-md lg:rounded-t-none ${isPersian ? "lg:rounded-tl-3xl lg:rounded-bl-3xl" : "lg:rounded-tr-3xl  lg:rounded-br-3xl"}   bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white `}
    >
      {/* Logo / Brand */}
      <div className=" flex justify-center ">
        <img
          src={Logo.src}
          alt="Amiri Finance Academy"
          className="h-auto  w-[100px] mt-2 object-contain"
        />
      </div>

      <div className="w-full px-8 py-4   ">
        {/* Heading */}
        <div className="mb-6">
          <h3 className="mb-4 text-xl text-center font-bold">
            {t("loginBenefits.welcome")}
          </h3>

          <p className="text-sm leading-7 text-slate-300 text-center">
            {t("loginBenefits.welcomeDescription")}
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-4 ">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{opacity: 0, y: 15}}
                animate={{opacity: 1, y: 0}}
                transition={{
                  duration: 0.4,
                  delay: 0.15 * index,
                }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-900 text-blue-400">
                  <Icon size={22} />
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-semibold">
                    {" "}
                    {t(item.title)}
                  </h4>

                  <p className="text-xs leading-6 text-slate-400">
                    {t(item.description)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Bottom image */}
      <div className="relative h-[105px] sm:h-[150px]  md:h-[190px] lg:h-[98px]"></div>
      <div
        className={`absolute bottom-0 left-0 w-full   ${isPersian ? "lg:rounded-bl-3xl" : "lg:rounded-br-3xl"}`}
      >
        <svg>{/* candlestick + trend line */}</svg>

        <img
          src={photoregister.src}
          alt="coins"
          className={`absolute -bottom-5  ${isPersian ? "lg:rounded-bl-3xl" : "lg:rounded-br-3xl"}  md:bottom-0 right-0 w-full`}
        />
      </div>
    </motion.div>
  );
}
