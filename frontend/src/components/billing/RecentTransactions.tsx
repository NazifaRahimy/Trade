"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {FiArrowDownLeft, FiArrowUpRight, FiChevronRight} from "react-icons/fi";

const transactions = [
  {
    id: "TX-1001",
    type: "Deposit",
    service: "USDT Wallet",
    date: "Sep 22, 2026",
    amount: "+$500.00",
    status: "Completed",
  },
  {
    id: "TX-1002",
    type: "Subscription",
    service: "Telegram Bot",
    date: "Sep 20, 2026",
    amount: "-$10.00",
    status: "Completed",
  },
  {
    id: "TX-1003",
    type: "Copy Trading",
    service: "Copy Trading",
    date: "Sep 18, 2026",
    amount: "-$30.00",
    status: "Completed",
  },
  {
    id: "TX-1004",
    type: "Deposit",
    service: "USDT Wallet",
    date: "Sep 15, 2026",
    amount: "+$1,500.00",
    status: "Completed",
  },
];

export default function RecentTransactions() {
  return (
    <motion.section
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Transactions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest financial activity.
          </p>
        </div>

        <Link
          href="/billing/transactions"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          View All
          <FiChevronRight />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wider text-slate-500">
              <th className="px-5 py-4 font-medium">Transaction</th>
              <th className="px-5 py-4 font-medium">Service</th>
              <th className="px-5 py-4 font-medium">Date</th>
              <th className="px-5 py-4 font-medium">Amount</th>
              <th className="px-5 py-4 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => {
              const isDeposit = transaction.type === "Deposit";

              return (
                <tr
                  key={transaction.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                          isDeposit
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {isDeposit ? <FiArrowDownLeft /> : <FiArrowUpRight />}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {transaction.type}
                        </p>

                        <p className="text-xs text-slate-500">
                          {transaction.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {transaction.service}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500">
                    {transaction.date}
                  </td>

                  <td
                    className={`px-5 py-4 text-sm font-semibold ${
                      isDeposit ? "text-emerald-600" : "text-slate-900"
                    }`}
                  >
                    {transaction.amount}
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}
