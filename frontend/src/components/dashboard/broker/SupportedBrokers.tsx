"use client";

import {motion} from "framer-motion";
import {FiCheckCircle} from "react-icons/fi";

const brokers = [
  {
    name: "IC Markets",
    description: "Forex & CFD",
    initials: "IC",
  },
  {
    name: "Exness",
    description: "Forex & CFD",
    initials: "EX",
  },
  {
    name: "XM",
    description: "Forex & CFD",
    initials: "XM",
  },
  {
    name: "Pepperstone",
    description: "Forex & CFD",
    initials: "PS",
  },
];

export default function SupportedBrokers() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.2}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
    >
      <div className="mb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Supported Brokers
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Select one of the supported trading platforms.
        </p>
      </div>

      <div className="space-y-3">
        {brokers.map((broker) => (
          <div
            key={broker.name}
            className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-blue-200 hover:bg-blue-50/50"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-slate-700 shadow-sm">
              {broker.initials}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">
                {broker.name}
              </p>

              <p className="mt-0.5 text-xs text-slate-500">
                {broker.description}
              </p>
            </div>

            <FiCheckCircle
              className="text-emerald-600"
              opacity={0.8}
              size={17}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
