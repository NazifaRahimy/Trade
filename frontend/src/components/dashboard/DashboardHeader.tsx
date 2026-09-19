"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";
type DashboardHeaderProps = {
  onMenuClick: () => void;
};
type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
};
export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const [user, setUser] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
  });
  useEffect(() => {
    const loadUser = () => {
      const email = localStorage.getItem("auth-email") || "";
      const username = localStorage.getItem("auth-username") || "";
      const photo = localStorage.getItem("auth-photo") || "";
      // به عنوان نام نمایشی بردار و حرف اول آن را بزرگ کن (مثلا amiri -> Amiri)
      let extractedName = "Trader";
      if (username) {
        extractedName = username.split("@")[0];
        extractedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);
      } else if (email) {
        extractedName = email.split("@")[0];
        extractedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);
      }
      setUser({
        firstName: extractedName,
        lastName: "",
        email,
        photo,
      });
    };
    loadUser();
    // گوش دادن به رویداد لاگین برای به‌روزرسانی آنی نام هدر بدون نیاز به رفرش دستی
    window.addEventListener("auth-change", loadUser);

    return () => {
      window.removeEventListener("auth-change", loadUser);
    };
  }, []);
  const fullName = user.firstName.trim();

  const userInitial = user.firstName
    ? user.firstName.charAt(0).toUpperCase()
    : "U";
  return (
    <header className="border-b border-slate-200 bg-white px-5 py-4 text-slate-900 lg:px-8">
      <div className="flex items-center justify-between gap-4 lg:ml-64">
        
        {/* Left Section: Welcome Message */}
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-xs text-slate-400 font-medium">Welcome back,</p>
            <div className="mt-1 flex items-center gap-2">
              {/* 🚀 رندر کاملا داینامیک نام واقعی یا استخراج‌شده تریدر */}
              <h1 className="text-lg font-bold text-slate-900 lg:text-xl">
                {fullName || "Pro Trader"}
              </h1>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-600">
                Pro Trader
              </span>
            </div>
          </motion.div>
        </div>
        {/* Right Section: Actions & Profile */}
        <div className="flex items-center gap-5">
          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu size={21} />
          </button>

          {/* Alert Notification Bell */}
          <button
            type="button"
            className="relative hidden text-slate-500 transition hover:text-slate-900 lg:flex"
            aria-label="Notifications"
          >
            <FiBell className="text-xl" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white" />
          </button>

          {/* Profile */}
          <button type="button" className="hidden items-center gap-3 lg:flex">
            {/* Profile Image / Initial */}
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100">
              {user.photo ? (
                <Image
                  src={user.photo}
                  alt={fullName}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />
              ) : (
                <span className="text-xs font-bold text-slate-600">
                  {userInitial}
                </span>
              )}
            </div>
            {/* Profile Meta Meta Text */}
            <div className="hidden text-left md:block">
              <p className="text-xs font-semibold text-slate-800 transition group-hover:text-slate-900">
                {fullName}
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5 max-w-[120px] truncate">
                {user.email}
              </p>
            </div>
            <FiChevronDown className="hidden text-slate-400 md:block transition group-hover:text-slate-600" size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
