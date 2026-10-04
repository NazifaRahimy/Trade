"use client";

import {motion} from "framer-motion";
import {FiArrowDownLeft, FiArrowUpRight} from "react-icons/fi";
import Link from "next/link";

// 🚀 ۱. تعریف ساختار پرپس برای دریافت تراکنش‌های زنده از فایل مادر (صفحه بیلیینگ)
type TransactionItem = {
  id: number;
  type: string;
  amount: string;
  status: string;
  date: string;
  description: string;
};

type RecentTransactionsProps = {
  transactions: TransactionItem[];
};

export default function RecentTransactions({
  transactions,
}: RecentTransactionsProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-5 sm:p-6 sm:flex-row flex-col items-start">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Transactions
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Your latest financial activity.
          </p>
        </div>

        {/* لینک به صفحه آرشیو کامل تراکنش‌ها */}
        <Link
          href="/billing/transactions"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          View all transactions
          <FiArrowUpRight size={16} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <th className="p-4 pl-6">Transaction</th>
              <th className="p-4">Service</th>
              <th className="p-4">Date</th>
              <th className="p-4">Amount</th>
              <th className="p-4 pr-6">Status</th>
            </tr>
          </thead>

          <tbody className="text-xs divide-y divide-slate-50">
            {/* 🛡️ گارد امنیتی: در صورتی که کاربر هنوز تراکنشی نداشته باشد */}
            {!transactions || transactions.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-6 text-center text-slate-400 italic"
                >
                  No financial activity recorded in your database yet.
                </td>
              </tr>
            ) : (
              // 🚀 رندر ۱۰۰٪ داینامیک بر اساس آرایه دریافتی از دیتابیس جنگو
              transactions.map((transaction) => {
                const isDeposit = transaction.type === "deposit";

                return (
                  <tr
                    key={transaction.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                            isDeposit
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-orange-50 text-orange-600"
                          }`}
                        >
                          {isDeposit ? (
                            <FiArrowDownLeft size={16} />
                          ) : (
                            <FiArrowUpRight size={16} />
                          )}
                        </div>
                        <span className="text-sm font-medium text-slate-900 capitalize">
                          {transaction.type}
                        </span>
                      </div>
                    </td>

                    <td className="p-4 text-slate-500">
                      ID: #{transaction.id} -{" "}
                      {transaction.description || "System Ledger"}
                    </td>

                    <td className="p-4 text-slate-400">{transaction.date}</td>

                    <td
                      className={`p-4 font-semibold text-sm ${
                        isDeposit ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {transaction.amount}
                    </td>

                    <td className="p-4 pr-6">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                          transaction.status === "completed"
                            ? "bg-emerald-50 text-emerald-700"
                            : transaction.status === "failed"
                              ? "bg-red-50 text-red-700"
                              : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
