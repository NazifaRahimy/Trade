"use client";

import Image from "next/image";
import Logo from "@/src/assets/images/logo.png";
import {motion} from "framer-motion";
import {FiBarChart2, FiBookOpen, FiShield} from "react-icons/fi";
import photoregister from "@/src/assets/images/photoregister.png";

export default function LoginBenefits() {
  const benefits = [
    {
      icon: FiBarChart2,
      title: "Accurate and Up-to-Date Signals",
      description:
        "Receive daily signals with technical analysis and practical market insights",
    },
    {
      icon: FiBookOpen,
      title: "Specialized Educational Courses",
      description:
        "Access educational courses from beginner to advanced levels in Persian",
    },
    {
      icon: FiShield,
      title: "Professional Risk Management",
      description:
        "Capital management and emotional control tools for consistent and sustainable trading",
    },
  ];

  return (
    <motion.div
      initial={{opacity: 0, x: -30}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      className="flex h-full flex-col  relative justify-center rounded-t-md lg:rounded-l-none  lg:rounded-r-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white "
    >
      {/* Logo / Brand */}
      <div className=" flex justify-center ">
        <Image
          src={Logo.src}
          alt="Amiri Finance Academy"
          width={150}
          height={50}
          className="h-auto mt-5 w-[170px] object-contain"
        />
      </div>

      <div className="w-full px-8 py-5   ">
        {/* Heading */}
        <div className="mb-6">
          <h3 className="mb-4 text-xl text-center font-bold">
            Welcome to Amiri Finance Academy
          </h3>

          <p className="text-sm leading-7 text-slate-300 text-center">
            Sign in to your account to access professional tools, trading
            signals, educational courses, and exclusive features.
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
                  <h4 className="mb-1 text-sm font-semibold">{item.title}</h4>

                  <p className="text-xs leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Bottom image */}
      <div className="relative h-[105px] sm:h-[150px]  md:h-[190px] lg:h-[98px]"></div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg>{/* candlestick + trend line */}</svg>

        <img
          src={photoregister.src}
          alt="coins"
          className="absolute -bottom-5  md:bottom-0 right-0 w-full"
        />
      </div>
    </motion.div>
  );
}
