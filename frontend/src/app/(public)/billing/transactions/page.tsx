import Link from "next/link";
import {FiArrowLeft, FiClock} from "react-icons/fi";
import TransactionsTable from "@/src/components/billing/TransactionsTable";

export default function TransactionsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <Link
          href="/billing"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-600"
        >
          <FiArrowLeft />
          Back to Billing
        </Link>

        <div className="mb-8 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm text-blue-600">
            <FiClock />
            <span>Financial History</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Transactions
          </h1>

          <p className="max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            View your deposits, subscriptions, and copy trading transactions.
          </p>
        </div>

        <TransactionsTable />
      </div>
    </main>
  );
}
