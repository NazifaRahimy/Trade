// components/layout/Footer.tsx

import Link from "next/link";
import {FaTelegram, FaInstagram, FaYoutube} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <img
              src={logo.src}
              alt="Amiri Finance Academy"
              className="h-12 w-auto mb-4"
            />

            <p className="text-sm leading-7 text-slate-300">
              Professional copy trading and signals provider for Forex and
              Cryptocurrency markets.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-slate-400 transition hover:text-blue-400"
              >
                <FaTelegram size={20} />
              </a>

              <a
                href="#"
                className="text-slate-400 transition hover:text-blue-400"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="text-slate-400 transition hover:text-blue-400"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Account</h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/login" className="hover:text-blue-400">
                  Login
                </Link>
              </li>

              <li>
                <Link href="/register" className="hover:text-blue-400">
                  Register
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="hover:text-blue-400">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  Telegram Support
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@amirifinance.com"
                  className="hover:text-blue-400"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-400">
            © 2025 Amiri Finance Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
