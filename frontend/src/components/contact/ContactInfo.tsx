// "use client";

// import {motion} from "framer-motion";
// import {FiClock, FiMail, FiPhone} from "react-icons/fi";

// const contactItems = [
//   {
//     icon: FiPhone,
//     title: "Phone Number",
//     value: "+93 XXX XXX XXX",
//   },
//   {
//     icon: FiMail,
//     title: "Email Address",
//     value: "support@amirifinance.com",
//   },
//   {
//     icon: FiClock,
//     title: "Working Hours",
//     value: "Saturday - Thursday | 8:00 AM - 5:00 PM",
//   },
// ];

// export default function ContactInfo() {
//   return (
//     <section className="bg-slate-50 py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid gap-6 md:grid-cols-3">
//           {contactItems.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{opacity: 0, y: 25}}
//               whileInView={{opacity: 1, y: 0}}
//               transition={{delay: index * 0.15}}
//               viewport={{once: true}}
//               className="rounded-2xl border bg-white p-8 shadow-sm"
//             >
//               <item.icon size={32} className="mb-4 text-blue-600" />

//               <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>

//               <p className="text-slate-600">{item.value}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   // );
// }
"use client";

import {motion} from "framer-motion";
import {FiClock, FiMail, FiPhone, FiMapPin} from "react-icons/fi";

const contactItems = [
  {
    icon: FiMapPin,
    title: "Office Address",
    value: (
      <>
        Kabul, Afghanistan
        <br />
        Karte 4, Main Street
      </>
    ),
  },
  {
    icon: FiPhone,
    title: "Phone Number",
    value: (
      <>
        +93 77 123 4567
        <br />
        +93 78 123 4567
      </>
    ),
  },
  {
    icon: FiMail,
    title: "Email Address",
    value: (
      <>
        info@amirifinance.com
        <br />
        support@amirifinance.com
      </>
    ),
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
