"use client";

import {useEffect, useState, useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiGrid,
  FiCopy,
  FiLogOut,
} from "react-icons/fi";

import logo from "../../assets/images/logo.png";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Subscription",
    href: "/subscription",
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("auth-token");

      setIsLoggedIn(Boolean(token));
    };

    // Check when Header loads
    checkAuth();

    // Listen for login/register/google login
    window.addEventListener("auth-change", checkAuth);

    return () => {
      window.removeEventListener("auth-change", checkAuth);
    };
  }, []);

  // USER DATA
  const firstName =
    typeof window !== "undefined"
      ? localStorage.getItem("auth-firstName") ||
        localStorage.getItem("auth-username") ||
        "User"
      : "User";

  const email =
    typeof window !== "undefined"
      ? localStorage.getItem("auth-email") || ""
      : "";

  const photo =
    typeof window !== "undefined"
      ? localStorage.getItem("auth-photo") || ""
      : "";

  const userInitial = firstName.charAt(0).toUpperCase();

  //  CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ACTIVE NAVIGATION

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("auth-firstName");
    localStorage.removeItem("auth-lastName");
    localStorage.removeItem("auth-username");
    localStorage.removeItem("auth-email");
    localStorage.removeItem("auth-photo");

    window.dispatchEvent(new Event("auth-change"));

    setIsDropdownOpen(false);
    setIsMenuOpen(false);

    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* ==========================================
            HEADER ROW
        ========================================== */}

        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <img
              src={logo.src}
              alt="Amiri Finance Academy"
              className="h-[48px] w-auto md:h-[50px] md:w-[110px]"
            />
          </Link>

          {/* ==========================================
              DESKTOP NAVIGATION
          ========================================== */}

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

                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-7 -translate-x-1/2 rounded-full bg-blue-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ==========================================
              DESKTOP ACTIONS
          ========================================== */}

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
                {/* Profile Button */}

                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 transition hover:border-blue-500 hover:bg-slate-800"
                >
                  <div className="hidden text-left px-4 py-1 lg:block truncate text-sm font-semibold text-white">
                    Services
                  </div>

                  <FiChevronDown
                    className={`text-slate-400 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ==========================================
                    DROPDOWN
                ========================================== */}

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-2 shadow-2xl shadow-black/30">
                    {/* User Info */}

                    <div className="mb-2 flex items-center gap-3 rounded-xl bg-slate-900 p-3">
                      {photo ? (
                        <img
                          src={photo}
                          alt={firstName}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                          {userInitial}
                        </div>
                      )}

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">
                          {firstName}
                        </p>

                        <p className="truncate text-xs text-slate-400">
                          {email || "Member"}
                        </p>
                      </div>
                    </div>

                    {/* Dashboard */}

                    <Link
                      href="/dashboard"
                      onClick={() => setIsDropdownOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-normal transition ${
                        pathname === "/dashboard"
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <FiGrid className="text-lg" />

                      <span>Telegram Bot Dashboard</span>
                    </Link>

                    {/* Copy Trading */}

                    <Link
                      href="/copy-trading"
                      onClick={() => setIsDropdownOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-normal transition ${
                        pathname.startsWith("/copy-trading")
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <FiCopy className="text-lg" />

                      <span>Copy Trading Dashboard</span>
                    </Link>

                    <div className="my-2 border-t border-slate-800" />

                    {/* Logout */}

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-red-950/40 hover:text-red-400"
                    >
                      <FiLogOut className="text-lg" />

                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ==========================================
              MOBILE BUTTON
          ========================================== */}

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="relative z-[100] flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-white transition hover:border-blue-500 hover:text-blue-500"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* ==========================================
            MOBILE MENU
        ========================================== */}

        {isMenuOpen && (
          <div className="border-t border-slate-800 bg-slate-950 md:hidden">
            <nav className="py-3">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block border-b border-slate-800 px-4 py-4 text-sm font-medium ${
                      active
                        ? "text-blue-500"
                        : "text-white hover:text-blue-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {!isLoggedIn ? (
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="mx-3 mt-4 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-blue-700"
                >
                  Login
                </Link>
              ) : (
                <>
                  {/* Mobile Dashboard */}

                  <Link
                    href="/dashboard"
                    onClick={closeMenu}
                    className={` mt-4 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                      pathname === "/dashboard"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    <FiGrid />

                    <span>Dashboard</span>
                  </Link>

                  {/* Mobile Copy Trading */}

                  <Link
                    href="/copy-trading"
                    onClick={closeMenu}
                    className={` mt-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                      pathname.startsWith("/copy-trading")
                        ? "bg-blue-600 text-white"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    <FiCopy />

                    <span>Copy Trading</span>
                  </Link>

                  {/* Mobile Logout */}

                  <button
                    type="button"
                    onClick={handleLogout}
                    className=" mt-2 flex w-[calc(100%-2rem)] items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-400 hover:bg-red-950/40 hover:text-red-400"
                  >
                    <FiLogOut />

                    <span>Logout</span>
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
