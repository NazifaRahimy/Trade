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
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            How Copy Trading Works
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            Simple Steps to Start{" "}
            <span className="text-blue-600">Learning</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.12}}
                className="relative rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm"
              >
                <div className="absolute left-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                  {step.number}
                </div>

                <div className="mx-auto mt-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600">
                  <Icon />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">{step.title}</h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-8 top-1/2 hidden w-16 border-t border-dashed border-blue-300 md:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
