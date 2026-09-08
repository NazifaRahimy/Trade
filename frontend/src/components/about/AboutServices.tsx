"use client";

import {motion} from "framer-motion";
import {FiCopy, FiMessageSquare, FiHeadphones} from "react-icons/fi";

const services = [
  {
    icon: FiCopy,
    title: "Copy Trading",
    text: "Follow selected trading strategies through a structured copy-trading system.",
  },
  {
    icon: FiMessageSquare,
    title: "Trading Signals",
    text: "Receive market insights and educational trade ideas based on technical and fundamental analysis.",
  },
  {
    icon: FiHeadphones,
    title: "Support & Guidance",
    text: "Our support team helps users throughout the account connection and service setup process.",
  },
];

export default function AboutServices() {
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
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
              Services Designed Around
              <span className="block text-blue-600">Your Trading Journey</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Our platform combines practical market experience with modern
              services designed to make accessing trading education, insights
              and copy-trading tools easier.
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
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {service.text}
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
