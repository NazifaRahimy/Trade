"use client";

import {motion} from "framer-motion";
import {FiClock, FiMail, FiPhone, FiMessageCircle} from "react-icons/fi";

const contactItems = [
  {
    icon: FiPhone,
    title: "Phone Number",
    value: <>+93 71 189 5929</>,
  },
  {
    icon: FiMessageCircle,
    title: "Telegram Support",
    value: (
      <>
        Available on Telegram
        <br />
        Direct Support
      </>
    ),
  },
  {
    icon: FiMail,
    title: "Email Address",
    value: <>Ibraibrahem.amiri94@gmail.com</>,
  },
  {
    icon: FiClock,
    title: "Working Hours",
    value: (
      <>
        Saturday - Thursday
        <br />
        8:00 AM - 5:00 PM
      </>
    ),
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{once: true}}
                className="
                  flex min-h-[180px] flex-col items-center justify-center
                  rounded-xl border border-slate-100
                  bg-white px-5 py-6
                  text-center
                  shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                "
              >
                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                  <Icon size={27} strokeWidth={1.8} className="text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-semibold text-slate-800">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-7 text-slate-500">{item.value}</p>

                {/* Blue line */}
                <span className="mt-3 h-[2px] w-6 rounded-full bg-blue-600" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
