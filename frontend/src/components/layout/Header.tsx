"use client";

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {FiMenu, FiX} from "react-icons/fi";

import logo from "../../assets/images/logo.png";

type HeaderProps = {
  isLoggedIn?: boolean;
};

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
];

export default function Header({isLoggedIn = false}: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    console.log("BUTTON CLICK");
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <Image
              src={logo}
              alt="Amiri Finance Academy"
              priority
              className="h-[48px] w-auto md:h-[50px] md:w-[120px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden h-full items-center gap-8 md:flex lg:gap-10">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex h-full items-center px-1 text-sm font-medium transition-colors ${
                    active
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}

                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-7 -translate-x-1/2 rounded-full bg-blue-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-lg border border-blue-600 px-6 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile / Tablet Actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Hamburger */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="relative z-[100] flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 bg-white md:hidden">
            <nav className="py-3">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block border-b border-gray-100 px-4 py-4 text-sm font-medium ${
                      active
                        ? "text-blue-600"
                        : "text-slate-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {!isLoggedIn && (
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="mx-4 mt-4 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-blue-700"
                >
                  Login
                </Link>
              )}

              {isLoggedIn && (
                <Link
                  href="/dashboard"
                  onClick={closeMenu}
                  className="mx-4 mt-4 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-blue-700"
                >
                  Dashboard
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
