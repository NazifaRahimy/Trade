"use client";

import Image from "next/image";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {FiBell, FiChevronDown, FiMenu} from "react-icons/fi";

type DashboardHeaderProps = {
  onMenuClick: () => void;
};

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
};

export default function DashboardHeader({onMenuClick}: DashboardHeaderProps) {
  const [user, setUser] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
  });

  // ==========================================
  // GET USER DATA
  // ==========================================
  useEffect(() => {
    const loadUser = () => {
      const firstName = localStorage.getItem("auth-firstName") || "";
      const lastName = localStorage.getItem("auth-lastName") || "";
      const email = localStorage.getItem("auth-email") || "";
      const photo = localStorage.getItem("auth-photo") || "";

      setUser({
        firstName,
        lastName,
        email,
        photo,
      });
    };

    loadUser();

    window.addEventListener("auth-change", loadUser);

    return () => {
      window.removeEventListener("auth-change", loadUser);
    };
  }, []);

  // ==========================================
  // USER INFO
  // ==========================================
  const fullName = `${user.firstName} ${user.lastName}`.trim();

  const userInitial = user.firstName
    ? user.firstName.charAt(0).toUpperCase()
    : user.email
      ? user.email.charAt(0).toUpperCase()
      : "U";

  return (
    <header className="border-b border-slate-200 bg-white px-5 py-4 text-slate-900 lg:px-8">
      <div className="flex items-center justify-between gap-4 lg:ml-64">
        {/* Left */}
        <div className="flex items-center gap-3">
          <motion.div
            initial={{opacity: 0, x: -15}}
            animate={{opacity: 1, x: 0}}
          >
            <p className="text-sm text-slate-500">Welcome back,</p>

            <div className="mt-1 flex items-center gap-3">
              <h1 className="text-lg font-bold text-slate-900 lg:text-2xl">
                {fullName || "User"}
              </h1>

              <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 lg:px-3">
                Pro Trader
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          {/* Mobile Menu */}
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 md:hidden"
            aria-label="Open menu"
          >
            <FiMenu size={21} />
          </button>

          {/* Notification */}
          <button
            type="button"
            className="relative hidden text-slate-500 transition hover:text-slate-900 md:flex"
            aria-label="Notifications"
          >
            <FiBell className="text-xl" />

            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-blue-500 ring-2 ring-white" />
          </button>

          {/* Profile */}
          <button type="button" className="hidden items-center gap-3 md:flex">
            {/* Profile Image / Initial */}
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100">
              {user.photo ? (
                <Image
                  src={user.photo}
                  alt={fullName || "User"}
                  width={44}
                  height={44}
                  className="h-11 w-11 object-cover"
                />
              ) : (
                <span className="text-sm font-bold text-slate-700">
                  {userInitial}
                </span>
              )}
            </div>

            {/* User Name */}
            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold text-slate-900">
                {fullName || "User"}
              </p>
            </div>

            {/* <FiChevronDown className="hidden text-slate-400 md:block" /> */}
          </button>
        </div>
      </div>
    </header>
  );
}
