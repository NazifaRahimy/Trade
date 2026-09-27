"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDownLeft,
  FiArrowUpRight,
  FiSearch,
} from "react-icons/fi";

// 🚀 ۱. تعریف دقیق ساختار ورودی دیتای لایو بک‌اَند
type TransactionItem = {
  id: number;
  type: string;
  amount: string;
  status: string;
  date: string;
  description: string;
};

type TransactionsTableProps = {
  transactions: TransactionItem[];
};

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  // 🔍 ۲. حفظ کامل منطق فیلتر و سرچ بومی خودتان در تصویر اول (خطوط ۴۷ تا ۵۵)
  const filteredTransactions = (transactions || []).filter((transaction) => {
    const matchesType = type === "All" || transaction.type === type;
    
    // هماهنگ‌سازی فیلد سرچ متنی بر اساس نام یا توصیف تراکنش دیتابیس
    const descriptionText = transaction.description || "";
    const matchesSearch =
      transaction.type.toLowerCase().includes(search.toLowerCase()) ||
      descriptionText.toLowerCase().includes(search.toLowerCase()) ||
      transaction.id.toString().includes(search);

    return matchesSearch && matchesType;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      {/* بخش ابزارهای سرچ و فیلتر (حفظ کامل کلاس‌های تصویر اول) */}
      <div className="border-b border-slate-100 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search transactions..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
          >
            <option value="All">All Types</option>
            <option value="deposit">Deposit</option>
            <option value="sub_payment">Subscription</option>
            <option value="performance_fee">Copy Trading</option>
          </select>
        </div>
      </div>

      {/* 🖥️ جدول نمایش تراکنش‌ها (حفظ ۱۰۰٪ کلاس‌های چیدمان تصویر اول و دوم) */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-50">
              <th className="p-4 pl-6">Transaction</th>
              <th className="p-4">Service</th>
              <th className="p-4">Date</th>
              <th className="p-4">Amount</th>
              <th className="p-4 pr-6">Status</th>
            </tr>
          </thead>

          <tbody className="text-xs divide-y divide-slate-50">
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-400 italic font-medium">
                  No transactions found matching your filtering parameters.
                </td>
              </tr>
            ) : (
              filteredTransactions.map((transaction) => {
                const isDeposit = transaction.type === "deposit";

                return (
                  <tr
                    key={transaction.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-xl ${
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
                        <div>
                          <span className="text-sm font-medium text-slate-900 capitalize">
                            {transaction.type.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 text-slate-500">
                      <span className="block font-medium">ID: #{transaction.id}</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {transaction.description || "System Automated Settlement Ledger"}
                      </span>
                    </td>

                    <td className="p-4 text-slate-400 font-medium">{transaction.date}</td>

                    <td
                      className={`p-4 font-bold text-sm ${
                        isDeposit ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {isDeposit ? "+" : ""}{transaction.amount}
                    </td>

                    <td className="p-4 pr-6">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
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
