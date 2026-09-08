"use client";

import {motion} from "framer-motion";
import {FiBarChart2, FiShield, FiTrendingUp} from "react-icons/fi";

const expertise = [
  {
    icon: FiBarChart2,
    title: "Forex & Crypto Markets",
    text: "Experience across major financial markets, including Forex and Cryptocurrency.",
  },
  {
    icon: FiTrendingUp,
    title: "Trading Platforms",
    text: "Practical experience with platforms such as Binance and MetaTrader 4 & 5.",
  },
  {
    icon: FiShield,
    title: "Risk Management",
    text: "A disciplined approach to position sizing, capital protection and managing market risk.",
  },
];

export default function AboutExpertise() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Expertise & Background
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Built On Years of Market Experience
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Practical experience, modern platforms and disciplined risk
            management form the foundation of our approach.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{opacity: 0, y: 15}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.25}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{y: -5}}
                className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
