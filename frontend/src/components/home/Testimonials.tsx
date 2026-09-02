"use client";

import {motion} from "framer-motion";
import {FiStar, FiUser} from "react-icons/fi";

const testimonials = [
  {
    name: "James T.",
    role: "Forex Trader",
    text: "The educational structure helped me understand the market process much better.",
  },
  {
    name: "Sarah M.",
    role: "Crypto Investor",
    text: "Clear explanations, organized signals and useful risk-management guidance.",
  },
  {
    name: "David R.",
    role: "Full-time Trader",
    text: "The platform provides a simple way to follow the learning journey.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-center text-blue-600">
            What Our Clients Say
          </p>

          <h2 className="mt-2 text-xl text-center md:text-3xl font-black text-slate-900">
            Trusted by Traders Worldwide
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{opacity: 0, y: 25}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1}}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1 text-yellow-400">
                {Array.from({length: 5}).map((_, i) => (
                  <FiStar key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                “{item.text}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <FiUser />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {item.name}
                  </p>

                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
