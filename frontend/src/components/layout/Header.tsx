"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiGrid,
  FiCopy,
  FiCreditCard,
  FiLogOut,
} from "react-icons/fi";

import logo from "../../assets/images/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Subscription", href: "/subscription" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const checkAuth = () => {
    const token = localStorage.getItem("auth-token");
    const role = localStorage.getItem("auth-role");

    setIsLoggedIn(Boolean(token));
    setIsAdmin(role === "admin");
  };

  useEffect(() => {
    // بازرسی وضعیت احراز هویت در زمان لود اولیه و تغییر مسیر صفحات
    checkAuth();

    window.addEventListener("auth-change", checkAuth);
    return () => {
      window.removeEventListener("auth-change", checkAuth);
    };
  }, [pathname]);

  // واکشی دیتای کاربر با سپرهای ایمن SSR
  const firstName = typeof window !== "undefined" ? localStorage.getItem("auth-firstName") || localStorage.getItem("auth-username") || "User" : "User";
  const email = typeof window !== "undefined" ? localStorage.getItem("auth-email") || "" : "";
  const photo = typeof window !== "undefined" ? localStorage.getItem("auth-photo") || "" : "";
  const userInitial = firstName.charAt(0).toUpperCase();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("auth-firstName");
    localStorage.removeItem("auth-lastName");
    localStorage.removeItem("auth-username");
    localStorage.removeItem("auth-email");
    localStorage.removeItem("auth-photo");
    localStorage.removeItem("auth-role");

    window.dispatchEvent(new Event("auth-change"));
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950">
      <div className="px-4 max-w-[1400px] mx-auto">
        <div className="flex h-20 items-center justify-between">
          
          {/* لوگوی پلتفرم */}
          <Link href="/" onClick={closeMenu} className="flex shrink-0 items-center">
            <img src={logo.src} alt="Amiri Finance Academy" className="h-[48px] w-auto md:h-[50px] md:w-[110px]" />
          </Link>

          {/* منوی ناوبری دسکتاپ */}
          <nav className="hidden h-full items-center gap-8 md:flex lg:gap-10">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex h-full items-center px-1 text-sm font-medium transition-colors ${
                    active ? "text-blue-500" : "text-white hover:text-blue-500"
                  }`}
                >
                  {item.name}
                  {active && <span className="absolute bottom-0 left-1/2 h-[2px] w-7 -translate-x-1/2 rounded-full bg-blue-500" />}
                </Link>
              );
            })}
          </nav>

          {/* بخش دکمه‌های عملیاتی سمت راست */}
          <div className="hidden items-center gap-3 md:flex">
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="rounded-lg border border-blue-600 px-6 py-2.5 text-sm font-medium text-blue-500 transition hover:bg-blue-600 hover:text-white"
              >
                Login
              </Link>
            ) : (
              <div ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 transition hover:border-blue-500 hover:bg-slate-800 text-sm font-semibold text-white"
                >
                  <span>Services</span>
                  <FiChevronDown className={`text-slate-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-2 shadow-2xl shadow-black/30">
                    <div className="mb-2 flex items-center gap-3 rounded-xl bg-slate-900 p-3">
                      {photo ? (
                        <img src={photo} alt={firstName} className="h-10 w-10 rounded-full object-cover" />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                          {userInitial}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">{firstName}</p>
                        <p className="truncate text-xs text-slate-400">{email || "Member"}</p>
                      </div>
                    </div>

                    {/* دایرکتوری لینک‌های منوی دراپ‌داون مجلل شما */}
                    <Link href="/dashboard" onClick={() => setIsDropdownOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium transition ${pathname === "/dashboard" ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-900 hover:text-white"}`}>
                      <FiGrid className="text-base" />
                      <span>Telegram Bot Dashboard</span>
                    </Link>
                    <Link href="/copy-trading" onClick={() => setIsDropdownOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium transition ${pathname === "/copy-trading" ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-900 hover:text-white"}`}>
                      <FiCopy className="text-base" />
                      <span>Copy Trading Dashboard</span>
                    </Link>
                    <Link href="/billing" onClick={() => setIsDropdownOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium transition ${pathname === "/billing" ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-900 hover:text-white"}`}>
                      <FiCreditCard className="text-base" />
                      <span>Billing Wallet</span>
                    </Link>
                    <button type="button" onClick={handleLogout} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-400 hover:bg-red-950/40 hover:text-red-400 transition mt-1 border-t border-slate-900 pt-2">
                      <FiLogOut className="text-base" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
