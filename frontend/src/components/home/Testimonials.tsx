"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiStar, FiUser} from "react-icons/fi";

const testimonials = [
  {
    name: "James T.",
    role: "home.jamesTraderRole",
    text: "home.jamesTestimonial",
  },
  {
    name: "Sarah M.",
    role: "home.sarahInvestorRole",
    text: "home.sarahTestimonial",
  },
  {
    name: "David R.",
    role: "home.davidTraderRole",
    text: "home.davidTestimonial",
  },
];

export default function Testimonials() {
  const {t} = useTranslation();
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-center text-blue-600">
            {t("home.whatOurClientsSay")}
          </p>

          <h2 className="mt-2 text-xl text-center md:text-3xl font-black text-slate-900">
            {t("home.trustedByTradersWorldwide")}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{opacity: 0, y: 15}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.25}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{y: -4}}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-lg"
            >
              <div className="flex gap-1 text-yellow-400">
                {Array.from({length: 5}).map((_, i) => (
                  <FiStar key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                {t(item.text)}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <FiUser />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {item.name}
                  </p>

                  <p className="text-xs text-slate-400"> {t(item.role)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
