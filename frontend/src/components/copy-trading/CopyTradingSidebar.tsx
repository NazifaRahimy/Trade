"use client";
import {FiLogOut, FiHome} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {
  FiGrid,
  FiLink,
  FiCopy,
  FiActivity,
  FiTrendingUp,
  FiSettings,
  FiClock,
  FiX,
} from "react-icons/fi";

import logo from "@/src/assets/images/logo.png";

interface CopyTradingSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  {
    name: "Overview",
    href: "/copy-trading",
    icon: FiGrid,
  },
  {
    name: "Broker Connections",
    href: "/copy-trading/broker-connections",
    icon: FiLink,
  },
  {
    name: "My Copy Trades",
    href: "/copy-trading/my-copy-trades",
    icon: FiCopy,
  },
  {
    name: "Active Positions",
    href: "/copy-trading/active-positions",
    icon: FiActivity,
  },
  {
    name: "Performance",
    href: "/copy-trading/performance",
    icon: FiTrendingUp,
  },
  {
    name: "Copy Settings",
    href: "/copy-trading/copy-settings",
    icon: FiSettings,
  },
  {
    name: "History",
    href: "/copy-trading/history",
    icon: FiClock,
  },
];

export default function CopyTradingSidebar({
  isOpen = false,
  onClose,
}: CopyTradingSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/copy-trading") {
      return pathname === "/copy-trading";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-slate-950 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex h-[89px] items-center justify-between border-b border-slate-800 px-6">
          <div
            onClick={onClose}
            className="flex items-center justify-between w-full "
          >
            <Image
              src={logo}
              alt="Amiri Finance Academy"
              className="h-auto w-[80px]"
            />
          </div>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* Main Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-7">
          <Link
            href="/"
            onClick={onClose}
            className=" hidden lg:flex items-center px-4 pb-4 gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <FiHome className="h-4 w-4" />
            <span>Back Home</span>
          </Link>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center gap-4 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    active
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${
                      active
                        ? "text-white"
                        : "text-slate-400 group-hover:text-white"
                    }`}
                  />

                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Link
              href="/"
              className={`group flex lg:hidden items-center gap-4 rounded-xl px-4 py-2.5 text-sm font-medium transition-all `}
            >
              <FiHome />

              <span>Back Home</span>
            </Link>
          </nav>
        </div>

        {/* Copy Trading Label */}
        <div className="border-t border-slate-800 p-3">
          {/* Logout */}
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-red-950/40 hover:text-red-400"
          >
            <FiLogOut />

            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
