"use client";

import {motion} from "framer-motion";
import {FiCheck, FiStar} from "react-icons/fi";

const plans = [
  {
    name: "Basic",
    price: "$19",
    period: "/ month",
    description: "For traders getting started.",
    features: ["Trading dashboard", "Account monitoring", "Trade history"],
  },
  {
    name: "Pro Trader",
    price: "$39",
    period: "/ month",
    description: "For active traders.",
    features: [
      "Everything in Basic",
      "Advanced risk control",
      "Broker connection",
      "Portfolio analytics",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$69",
    period: "/ month",
    description: "For advanced trading needs.",
    features: [
      "Everything in Pro",
      "Advanced analytics",
      "Priority support",
      "Extended account tools",
    ],
  },
];

export default function SubscriptionPlans() {
  return (
    <motion.section
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.2}}
      className="mt-6"
    >
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-white">Subscription Plans</h2>

        <p className="mt-1 text-sm text-slate-500">
          Choose a plan that fits your trading needs.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{
              duration: 0.4,
              delay: 0.25 + index * 0.08,
            }}
            className={`relative rounded-2xl border p-5 md:p-6 ${
              plan.popular
                ? "border-blue-500/50 bg-blue-500/[0.06]"
                : "border-slate-800 bg-slate-900/70"
            }`}
          >
            {plan.popular && (
              <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">
                <FiStar size={12} />
                Popular
              </div>
            )}

            <h3 className="text-base font-semibold text-white">{plan.name}</h3>

            <p className="mt-2 min-h-[40px] text-xs leading-5 text-slate-500">
              {plan.description}
            </p>

            <div className="mt-5">
              <span className="text-3xl font-semibold text-white">
                {plan.price}
              </span>

              <span className="ml-1 text-xs text-slate-500">{plan.period}</span>
            </div>

            <div className="my-5 h-px bg-slate-800" />

            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-sm text-slate-300"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <FiCheck size={12} />
                  </span>

                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "border border-slate-700 bg-slate-800/50 text-slate-200 hover:border-blue-500/40 hover:bg-slate-800"
              }`}
            >
              {plan.name === "Pro Trader" ? "Current Plan" : "Choose Plan"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
