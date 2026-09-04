"use client";
import contactBunner from "@/src/assets/images/cantact-bunner.png";
import {motion} from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="relative h-[450px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${contactBunner.src})`,
      }}
    >
      <div className="container relative z-10 mx-auto flex h-full items-center px-4">
        <motion.div
          initial={{opacity: 0, y: 25}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="max-w-2xl"
        >
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            Contact Us
          </h1>

          <p className="text-lg text-slate-300">
            We're always ready to answer your questions and help you get started
            with our trading services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
