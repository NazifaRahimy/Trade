"use client";
import photoA from "@/src/assets/images/phtotoA.png";
import {motion} from "framer-motion";
import {FiActivity, FiBarChart2, FiShield, FiTrendingUp} from "react-icons/fi";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <FiActivity />
              About Amiri Finance Academy
            </div>

            <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Experience That
              <span className="block text-blue-600">Moves With The Market</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Amiri Finance Academy is led by Mr. Ebrahim Amiri, a professional
              trader and market analyst with more than 7 years of experience
              across the Forex and Cryptocurrency markets.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">
                <FiTrendingUp className="text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">
                  7+ Years Experience
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">
                <FiShield className="text-green-600" />
                <span className="text-sm font-semibold text-slate-700">
                  Risk Focused
                </span>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{opacity: 0, x: 30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.7, delay: 0.1}}
            className="relative mx-auto w-full lg:max-w-lg "
          >
            {/* About Image */}
            <div>
              <img
                src={photoA.src}
                alt="Amiri Finance Academy Trading"
                className=" h-full lg:h-[440px] w-full ransition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
