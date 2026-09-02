"use client";

import {motion} from "framer-motion";
import {FiUser, FiCreditCard, FiGlobe, FiShield} from "react-icons/fi";

const accountInfo = [
  {
    label: "Account Type",
    value: "Professional",
    icon: FiUser,
  },
  {
    label: "Account ID",
    value: "TRD-48291",
    icon: FiCreditCard,
  },
  {
    label: "Base Currency",
    value: "USD",
    icon: FiGlobe,
  },
  {
    label: "Risk Profile",
    value: "Moderate",
    icon: FiShield,
  },
];

export default function AccountInfo() {
  return (
    <motion.section
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <h2 className="text-lg font-semibold text-white">Account Information</h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {accountInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl bg-slate-950 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <Icon size={18} />
              </div>

              <div>
                <p className="text-xs text-slate-500">{item.label}</p>

                <p className="mt-1 text-sm font-medium text-white">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
