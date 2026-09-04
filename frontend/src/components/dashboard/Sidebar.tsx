"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion";
import {FiLogOut, FiX} from "react-icons/fi";

import Logo from "@/src/assets/images/logo.png";
import {dashboardMenu} from "@/src/data/dashboardMenu";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({isOpen, onClose}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* ================================================= */}
      {/* DESKTOP SIDEBAR */}
      {/* ================================================= */}

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-[87px] items-center gap-3 border-b border-slate-200 px-4">
            <Image
              src={Logo}
              alt="AMIRI Logo"
              className="h-10 w-20 object-contain md:w-[120px]"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
            <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Main Menu
            </p>

            {dashboardMenu.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{x: 4}}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="text-lg" />

                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* User */}
          <div className="border-t border-slate-200 p-4">
            <div className="mb-3 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                EA
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  Ebrahim Amiri
                </p>

                <p className="text-xs text-slate-500">Premium Member</p>
              </div>
            </div>

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-red-50 hover:text-red-600"
            >
              <FiLogOut />

              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ================================================= */}
      {/* MOBILE / TABLET SIDEBAR */}
      {/* ================================================= */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.2}}
              onClick={onClose}
              className="fixed inset-0 z-50 bg-slate-900/40 lg:hidden"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{x: "-100%"}}
              animate={{x: 0}}
              exit={{x: "-100%"}}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="fixed left-0 top-0 z-[60] h-screen w-72 border-r border-slate-200 bg-white lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Mobile Logo Header */}
                <div className="flex h-[87px] shrink-0 items-center justify-between border-b border-slate-200 px-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={Logo}
                      alt="AMIRI Logo"
                      className="h-10 w-20 object-contain"
                    />

                    <div>
                      <h1 className="font-bold text-slate-900">AMIRI</h1>

                      <p className="text-[10px] uppercase tracking-wider text-slate-500">
                        Finance Academy
                      </p>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    aria-label="Close menu"
                  >
                    <FiX size={22} />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
                  <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Main Menu
                  </p>

                  {dashboardMenu.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                      <Link key={item.href} href={item.href} onClick={onClose}>
                        <motion.div
                          whileTap={{scale: 0.98}}
                          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                            isActive
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <Icon className="text-lg" />

                          <span>{item.label}</span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile User */}
                <div className="shrink-0 border-t border-slate-200 p-4">
                  <div className="mb-3 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                      EA
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        Ebrahim Amiri
                      </p>

                      <p className="text-xs text-slate-500">Premium Member</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-red-50 hover:text-red-600"
                  >
                    <FiLogOut />

                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
