"use client";

import {motion} from "framer-motion";
import {FiTarget, FiBookOpen} from "react-icons/fi";

export default function AboutStory() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <motion.div
            initial={{opacity: 0, y: 15}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.5}}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
              Turning Market Experience
              <span className="block text-blue-600">
                Into A Smarter Journey
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-600 md:text-base">
              Amiri Finance Academy was created to shorten the difficult
              learning journey of financial markets by bringing years of
              practical experience, market knowledge and tested strategies
              together in one platform.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              Mr. Ebrahim Amiri has spent more than seven years working across
              Forex and Cryptocurrency markets, gaining experience through
              different market conditions and using modern trading platforms and
              analytical tools.
            </p>
          </motion.div>

          {/* Mission cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            <motion.div
              initial={{opacity: 0, y: 15}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.25}}
              transition={{duration: 0.5}}
              whileHover={{y: -4}}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiTarget size={22} />
              </div>

              <h3 className="mt-5 font-bold text-slate-900">Our Mission</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Make the trading journey simpler through structured education,
                market insights and disciplined risk management.
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 15}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.25}}
              transition={{duration: 0.5, delay: 0.1}}
              whileHover={{y: -4}}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiBookOpen size={22} />
              </div>

              <h3 className="mt-5 font-bold text-slate-900">Our Approach</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                We focus on practical knowledge, responsible decision-making and
                understanding market risk rather than promising guaranteed
                results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
