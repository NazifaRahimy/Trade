"use client";

import {motion} from "framer-motion";
import {
  FiUsers,
  FiActivity,
  FiDollarSign,
  FiMessageCircle,
} from "react-icons/fi";

const stats = [
  {
    icon: FiUsers,
    value: "7+",
    title: "Years of",
    subtitle: "Experience",
  },
  {
    icon: FiUsers,
    value: "1000+",
    title: "Happy",
    subtitle: "Traders",
  },
  {
    icon: FiDollarSign,
    value: "$20M+",
    title: "Managed Trading",
    subtitle: "Volume",
  },
  {
    icon: FiMessageCircle,
    value: "24/7",
    title: "Customer",
    subtitle: "Support",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-100 bg-white py-7">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.value}
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{delay: index * 0.1}}
              className="flex items-center justify-center gap-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Icon />
              </div>

              <div>
                <p className="font-black text-slate-900">{stat.value}</p>

                <p className="text-[10px] text-slate-500">
                  {stat.title}
                  <br />
                  {stat.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
