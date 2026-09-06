"use client";

import {motion} from "framer-motion";
import {FiUserPlus, FiLink, FiPieChart, FiTrendingUp} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiUserPlus,
    title: "Create an Account",
    description: "Sign up and create your personal account.",
  },
  {
    number: "02",
    icon: FiLink,
    title: "Connect Your Broker",
    description: "Connect your broker or exchange account securely.",
  },
  {
    number: "03",
    icon: FiPieChart,
    title: "Choose a Plan",
    description: "Select the subscription or service that suits you.",
  },
  {
    number: "04",
    icon: FiTrendingUp,
    title: "Start Learning",
    description: "Explore market strategies and follow your selected service.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            How Copy Trading Works
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            Simple Steps to Start{" "}
            <span className="text-blue-600">Learning</span>
          </h2>
        </div>
        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{opacity: 0, y: 15}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.25}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{y: -5}}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Glass Overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/40 to-blue-100/30 backdrop-blur-[2px]" />

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-400/10 blur-2xl" />

                  <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />
                </div>
                {/* Card Content */}
                <div className="z-10 relative">
                  <div className="absolute -left-1  -top-5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>

                  <div className="mx-auto mt-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600  transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {step.description}
                  </p>
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute -right-8 top-1/2 hidden w-16 border-t border-dashed border-blue-300 transition-colors duration-300 group-hover:border-blue-400  md:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
