"use client";
import {useTranslation} from "react-i18next";
import {useEffect, useState, useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import {CiLogout} from "react-icons/ci";
import {usePathname, useRouter} from "next/navigation";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiCreditCard,
  FiGrid,
  FiCopy,
  FiLogOut,
  FiBarChart2,
  FiGlobe,
  FiCheck,
} from "react-icons/fi";

import logo from "../../assets/images/logo.png";

const navItems = [
  {
    key: "navBar.home",
    href: "/",
  },
  {
    key: "navBar.about",
    href: "/about",
  },
  {
    key: "navBar.contact",
    href: "/contact",
  },
  {
    key: "navBar.subscription",
    href: "/subscription",
  },
  {
    key: "navBar.billing",
    href: "/billing",
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const {t, i18n} = useTranslation();

  const language: "fa" | "en" = i18n.language?.startsWith("en") ? "en" : "fa";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = i18n.language === "fa" ? "fa" : "en";
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);
  useEffect(() => {
    const handleLanguageClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleLanguageClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleLanguageClickOutside);
    };
  }, []);
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("auth-token");
      const role = localStorage.getItem("auth-role");

      setIsLoggedIn(Boolean(token));
      setIsAdmin(role === "admin");
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

  const handleLanguageChange = async (lang: "fa" | "en") => {
    console.log("Selected language:", lang);

    await i18n.changeLanguage(lang);

    localStorage.setItem("language", lang);

    document.cookie = `language=${lang}; path=/; max-age=31536000; SameSite=Lax`;

    console.log("Cookie:", document.cookie);

    setIsLanguageOpen(false);

    window.location.reload();
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950">
      <div className="px-4 max-w-[1400px] mx-auto  ">
        {/* ==========================================
            HEADER ROW
        ========================================== */}

        <div className="flex h-20 items-center justify-between ">
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
                  {t(item.key)}

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
          {/* Language Switcher */}
          <div className="flex gap-4 w-full justify-end md:w-auto">
            <div ref={languageRef} className="relative">
              <button
                type="button"
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm font-medium text-white transition hover:border-blue-500 hover:bg-slate-800"
              >
                <FiGlobe className="text-base text-blue-500" />

                <span>
                  {language === "fa"
                    ? t("language.persian")
                    : t("language.english")}
                </span>

                <FiChevronDown
                  className={`text-slate-400 transition-transform ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-3 w-36 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-1.5 shadow-2xl shadow-black/30">
                  {/* فارسی */}
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("fa")}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${
                      language === "fa"
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span>{t("language.persian")}</span>

                    {language === "fa" && <FiCheck className="text-base" />}
                  </button>

                  {/* English */}
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("en")}
                    className={`mt-1 flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${
                      language === "en"
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span>{t("language.english")}</span>

                    {language === "en" && <FiCheck className="text-base" />}
                  </button>
                </div>
              )}
            </div>
            {/* Menu Button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="relative z-[100] flex md:hidden h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-white transition hover:border-blue-500 hover:text-blue-500"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
            <div className="hidden items-center gap-3 md:flex">
              {!isLoggedIn ? (
                <Link
                  href="/login"
                  className="rounded-lg border border-blue-600 px-6 py-2.5 text-sm font-medium text-blue-500 transition hover:bg-blue-600 hover:text-white"
                >
                  {t("auth.login")}
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
                      {t("navBar.services.title")}
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
                    <div
                      className={`absolute ${
                        i18n.language.startsWith("fa") ? "left-0" : "right-0 "
                      } mt-3 w-60 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-2 shadow-2xl shadow-black/30`}
                    >
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
                            {email || t("user.member")}
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

                        <span>{t("navBar.services.telegramDashboard")}</span>
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

                        <span>{t("navBar.services.copyTradingDashboard")}</span>
                      </Link>
                      <Link
                        href="/discount-premium"
                        onClick={() => setIsDropdownOpen(false)}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium transition ${
                          pathname === "/discount-premium"
                            ? "bg-blue-600 text-white"
                            : "text-slate-300 hover:bg-slate-900 hover:text-white"
                        }`}
                      >
                        <FiBarChart2 className="text-base" />
                        <span>
                          {t("navBar.services.discountPremiumDashboard")}
                        </span>
                      </Link>
                      {isAdmin && (
                        <Link
                          href="/admin/finance"
                          onClick={() => setIsDropdownOpen(false)}
                          className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-normal transition ${
                            pathname.startsWith("/admin/finance")
                              ? "bg-blue-600 text-white"
                              : "text-slate-300 hover:bg-slate-800 hover:text-white"
                          }`}
                        >
                          <FiCreditCard className="text-lg" />
                          <span>{t("navBar.services.adminFinance")}</span>
                        </Link>
                      )}

                      <div className="my-2 border-t border-slate-800" />

                      {/* Logout */}

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-red-950/40 hover:text-red-400"
                      >
                        {i18n.language.startsWith("fa") ? (
                          <CiLogout className="text-lg" />
                        ) : (
                          <FiLogOut className="text-lg" />
                        )}

                        <span>{t("auth.logout")}</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
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
                    {t(item.key)}
                  </Link>
                );
              })}

              {!isLoggedIn ? (
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="mx-3 mt-4 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-blue-700"
                >
                  {t("auth.login")}
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

                    <span>{t("navBar.services.telegramDashboard")}</span>
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

                    <span>{t("navBar.services.copyTradingDashboard")}</span>
                  </Link>
                  <Link
                    href="/discount-premium"
                    onClick={closeMenu}
                    className={` mt-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                      pathname.startsWith("/copy-trading")
                        ? "bg-blue-600 text-white"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    <FiBarChart2 className="text-base" />
                    <span>{t("navBar.services.discountPremiumDashboard")}</span>
                  </Link>

                  {isAdmin && (
                    <Link
                      href="/admin/finance"
                      onClick={closeMenu}
                      className={` mt-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                        pathname.startsWith("/copy-trading")
                          ? "bg-blue-600 text-white"
                          : "bg-slate-900 text-white"
                      }`}
                    >
                      <FiCreditCard className="text-lg" />

                      <span>{t("navBar.services.adminFinance")}</span>
                    </Link>
                  )}

                  {/* Mobile Logout */}

                  <button
                    type="button"
                    onClick={handleLogout}
                    className=" mt-2 flex w-[calc(100%-2rem)] items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-400 hover:bg-red-950/40 hover:text-red-400"
                  >
                    {i18n.language.startsWith("fa") ? (
                      <CiLogout className="text-lg" />
                    ) : (
                      <FiLogOut className="text-lg" />
                    )}

                    <span>{t("auth.logout")}</span>
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
