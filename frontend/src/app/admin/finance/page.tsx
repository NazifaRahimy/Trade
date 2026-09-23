import Link from "next/link";
import {FiArrowLeft, FiBarChart2} from "react-icons/fi";

import AdminFinanceStats from "@/src/components/billing/admin/AdminFinanceStats";
import RevenueBreakdown from "@/src/components/billing/admin/RevenueBreakdown";

export default function AdminFinancePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-600"
        >
          <FiArrowLeft />
          Back to Website
        </Link>

        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm text-blue-600">
            <FiBarChart2 />
            <span>Administration</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Finance Overview
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            Monitor platform revenue, service performance, and master trader
            payouts.
          </p>
        </div>

        <AdminFinanceStats />

        <RevenueBreakdown />
      </div>
    </main>
  );
}
