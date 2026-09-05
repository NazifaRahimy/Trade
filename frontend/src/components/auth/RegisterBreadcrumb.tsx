"use client";

import Link from "next/link";
import {FiChevronRight, FiHome} from "react-icons/fi";

export default function RegisterBreadcrumb() {
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

          <span className="font-medium text-blue-600">Register</span>
        </div>

        {/* Page Title */}
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Create Account
          </h1>

          <p className="text-sm text-black md:text-base ">
            Create your account and start your trading journey today.
          </p>
        </div>
      </div>
    </section>
  );
}
