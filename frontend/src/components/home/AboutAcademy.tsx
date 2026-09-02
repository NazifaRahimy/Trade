"use client";

import {motion} from "framer-motion";
import {FiAward, FiShield, FiTrendingUp, FiUsers} from "react-icons/fi";
import logo from "../../assets/images/aboutPhoto.png";
const benefits = [
  {
    icon: FiAward,
    title: "7+ Years",
    text: "Trading Experience",
  },
  {
    icon: FiTrendingUp,
    title: "Forex & Crypto",
    text: "Specialist",
  },
  {
    icon: FiUsers,
    title: "Trusted Brokers",
    text: "Partnerships",
  },
  {
    icon: FiShield,
    title: "Risk Management",
    text: "Focused",
  },
];

export default function AboutAcademy() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
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
              alt="About Academy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 right-5 rounded-2xl bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <span className="text-lg font-black">7+</span>
              </div>

              <div>
                <p className="font-bold text-slate-900">Years</p>
                <p className="text-xs text-slate-500">Experience</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{opacity: 0, x: 40}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
        >
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            About Amiri Finance Academy
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
            Turning Market Experience
            <br />
            <span className="text-blue-600">Into Your Success</span>
          </h2>

          <p className="mt-6 leading-7 text-slate-600">
            Amiri Finance Academy is led by Mr. Ebrahim Amiri, a professional
            trader and market analyst with more than 7 years of hands-on
            experience in Forex and Cryptocurrency markets.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Our mission is simple: shorten your trading journey by providing
            proven strategies, advanced tools and structured learning resources.
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
                    <h3 className="font-bold text-slate-900">{item.title}</h3>

                    <p className="mt-1 text-xs text-slate-500">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
