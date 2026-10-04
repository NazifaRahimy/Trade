"use client";

import { useEffect, useState } from "react";
import {
  FiLogOut,
  FiHome,
  FiGrid,
  FiLink,
  FiCopy,
  FiActivity,
  FiTrendingUp,
  FiSettings,
  FiClock,
  FiX,
  FiCreditCard,
  FiDollarSign,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import logo from "@/src/assets/images/logo.png";
import api from "@/src/lib/axios";

interface CopyTradingSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function CopyTradingSidebar({
  isOpen = false,
  onClose,
}: CopyTradingSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [userRole, setUserRole] = useState<string>("follower");

  // دریافت نقش واقعی کاربر
  useEffect(() => {
    const fetchUserProfileRole = async () => {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        return;
      }

      try {
        const response = await api.get("/api/user/profile/");

        const role = response.data?.role;

        if (role) {
          setUserRole(role);
        }
      } catch (error) {
        console.error(
          "Security Alert: Failed to fetch profile role.",
          error
        );
      }
    };

    fetchUserProfileRole();
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    localStorage.removeItem("auth-username");
    localStorage.removeItem("auth-firstName");
    localStorage.removeItem("auth-lastName");
    localStorage.removeItem("auth-email");
    localStorage.removeItem("auth-photo");
    localStorage.removeItem("auth-role");

    window.dispatchEvent(new Event("auth-change"));

    if (onClose) {
      onClose();
    }

    router.replace("/login");
  };

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

  const isActive = (href: string) => {
    if (href === "/copy-trading") {
      return pathname === "/copy-trading";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
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
        <div className="flex h-[80px] items-center justify-between border-b border-slate-800 px-6">
          <div
            onClick={onClose}
            className="flex w-full items-center justify-between"
          >
            <Image
              src={logo}
              alt="Amiri Finance Academy"
              className="h-auto w-[80px]"
            />
          </div>

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
        <div className="flex-1 overflow-y-auto px-4 pt-6">
          <Link
            href="/"
            onClick={onClose}
            className="hidden items-center gap-2 px-4 pb-4 text-sm font-medium text-slate-300 transition hover:text-white lg:flex"
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

            {/* Master Earnings */}
            {userRole === "master" && (
              <Link
                href="/copy-trading/earnings"
                onClick={onClose}
                className={`group flex items-center gap-4 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive("/copy-trading/earnings")
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <FiDollarSign
                  className={`h-5 w-5 shrink-0 ${
                    isActive("/copy-trading/earnings")
                      ? "text-white"
                      : "text-slate-400 group-hover:text-white"
                  }`}
                />

                <span>Master Earnings</span>
              </Link>
            )}

            {/* Mobile Back Home */}
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-4 rounded-xl px-4 py-2.5 text-sm font-medium lg:hidden"
            >
              <FiHome />
              <span>Back Home</span>
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <div className="border-t border-slate-800 p-3">
          <button
            type="button"
            onClick={handleLogout}
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