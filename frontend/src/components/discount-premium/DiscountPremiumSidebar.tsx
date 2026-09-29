"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {AnimatePresence, motion} from "framer-motion";
import {
  FiActivity,
  FiBarChart2,
  FiBriefcase,
  FiHome,
  FiLogOut,
  FiSettings,
  FiTarget,
  FiX,
  FiGrid,
} from "react-icons/fi";
import Logo from "@/src/assets/images/logo.png";

interface DiscountPremiumSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    label: "Overview",
    href: "/discount-premium",
    icon: FiGrid,
  },
  {
    label: "Market",
    href: "/discount-premium/market",
    icon: FiBarChart2,
  },
  {
    label: "Strategy",
    href: "/discount-premium/strategy",
    icon: FiTarget,
  },
  {
    label: "Signals",
    href: "/discount-premium/signals",
    icon: FiActivity,
  },
  {
    label: "Trades",
    href: "/discount-premium/trades",
    icon: FiBriefcase,
  },
  {
    label: "Settings",
    href: "/discount-premium/settings",
    icon: FiSettings,
  },
];

export default function DiscountPremiumSidebar({
  isOpen,
  onClose,
}: DiscountPremiumSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("auth-firstName");
    localStorage.removeItem("auth-lastName");
    localStorage.removeItem("auth-username");
    localStorage.removeItem("auth-email");
    localStorage.removeItem("auth-photo");

    window.dispatchEvent(new Event("auth-change"));

    onClose();
    router.push("/login");
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <>
      {/* ================================================= */}
      {/* DESKTOP SIDEBAR */}
      {/* ================================================= */}

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-slate-800 bg-slate-950 lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-[72px] items-center border-b border-slate-800 px-4">
            <Image
              src={Logo}
              alt="AMIRI Logo"
              className="h-[50px] w-[100px] rounded-md object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-9">
            <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Main Menu
            </p>

            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                (item.href !== "/discount-premium" &&
                  pathname.startsWith(item.href));

              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{x: 4}}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom */}
          <div className="border-t border-slate-800 p-4">
            <button
              type="button"
              onClick={() => handleNavigation("/")}
              className="mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
            >
              <FiHome className="h-4 w-4" />
              <span>Back Home</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-red-950/40 hover:text-red-400"
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

            {/* Mobile Sidebar */}
            <motion.aside
              initial={{x: "-100%"}}
              animate={{x: 0}}
              exit={{x: "-100%"}}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="fixed left-0 top-0 z-[60] h-screen w-72 border-r border-slate-800 bg-slate-950 lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Mobile Header */}
                <div className="flex h-[87px] shrink-0 items-center justify-between border-b border-slate-800 px-4">
                  <Image
                    src={Logo}
                    alt="AMIRI Logo"
                    className="h-10 w-[90px] object-contain"
                  />

                  <button
                    type="button"
                    onClick={onClose}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
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

                  {menuItems.map((item) => {
                    const Icon = item.icon;

                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/discount-premium" &&
                        pathname.startsWith(item.href));

                    return (
                      <Link key={item.href} href={item.href} onClick={onClose}>
                        <motion.div
                          whileTap={{scale: 0.98}}
                          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                            isActive
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                              : "text-slate-400 hover:bg-slate-900 hover:text-white"
                          }`}
                        >
                          <Icon className="text-lg" />
                          <span>{item.label}</span>
                        </motion.div>
                      </Link>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => handleNavigation("/")}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
                  >
                    <FiHome className="h-4 w-4" />
                    <span>Back Home</span>
                  </button>
                </nav>

                {/* Mobile Bottom */}
                <div className="shrink-0 border-t border-slate-800 p-4">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-red-950/40 hover:text-red-400"
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
