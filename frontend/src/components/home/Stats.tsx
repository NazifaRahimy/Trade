"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {
  FiUsers,
  FiActivity,
  FiDollarSign,
  FiMessageCircle,
} from "react-icons/fi";

const stats = [
  {
    icon: FiActivity,
    value: "7+",
    title: "home.yearsOf",
    subtitle: "home.experience",
  },
  {
    icon: FiUsers,
    value: "1000+",
    title: "home.happy",
    subtitle: "home.traders",
  },
  {
    icon: FiDollarSign,
    value: "$20M+",
    title: "home.managedTrading",
    subtitle: "home.volume",
  },
  {
    icon: FiMessageCircle,
    value: "24/7",
    title: "home.customer",
    subtitle: "home.support",
  },
];

export default function Stats() {
  const {t} = useTranslation();
  return (
    <section className="border-y border-slate-100 bg-white py-7">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.value}
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="flex items-center justify-center gap-3"
            >
              <motion.div
                whileHover={{scale: 1.1, rotate: 4}}
                transition={{duration: 0.2}}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white"
              >
                <Icon />
              </motion.div>
              <div>
                <p className="font-black text-slate-900">{stat.value}</p>

                <p className="text-[10px] text-slate-500">
                  {t(stat.title)}
                  <br />
                  {t(stat.subtitle)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
