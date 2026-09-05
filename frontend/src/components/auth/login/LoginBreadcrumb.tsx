"use client";

import Link from "next/link";
import {FiChevronRight, FiHome} from "react-icons/fi";

export default function LoginBreadcrumb() {
  return (
    <section className="bg-transparent py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-5 flex items-center justify-center gap-2 text-sm">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-blue-600"
          >
            <FiHome className="text-sm" />
            <span>Home</span>
          </Link>

          <FiChevronRight className="text-slate-400" />

          <span className="font-medium text-blue-600">Login</span>
        </div>

        {/* Page Title */}
        <div className="text-center">
          <h1 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
            Sign in to your account
          </h1>

          <p className="text-sm text-slate-800 md:text-base">
            Sign in to access your account.
          </p>
        </div>
      </div>
    </section>
  );
}
