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
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-slate-900">
        Account Information
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {accountInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon size={18} />
              </div>

              {/* Information */}
              <div>
                <p className="text-xs text-slate-500">{item.label}</p>

                <p className="mt-1 text-sm font-medium text-slate-900">
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
