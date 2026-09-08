"use client";

import {motion} from "framer-motion";
import {FiMessageCircle} from "react-icons/fi";

export default function AboutQuote() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 15}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.25}}
          transition={{duration: 0.5}}
          className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-center shadow-xl md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
              <FiMessageCircle size={24} />
            </div>

            <p className="mt-7 text-lg font-medium leading-8 text-white md:text-2xl md:leading-10">
              “The financial markets are not a place for guesswork. They require
              discipline, statistics, market psychology and responsible risk
              management.”
            </p>

            <div className="mt-7">
              <p className="font-bold text-white">Ebrahim Amiri</p>

              <p className="mt-1 text-sm text-slate-400">
                Trader & Market Analyst
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
