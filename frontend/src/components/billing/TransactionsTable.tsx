"use client";

import {useMemo, useState} from "react";
import {motion} from "framer-motion";
import {FiArrowDownLeft, FiArrowUpRight, FiSearch} from "react-icons/fi";

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
  {
    id: "TX-1005",
    type: "Subscription",
    service: "Telegram Bot",
    date: "Sep 12, 2026",
    amount: "-$10.00",
    status: "Pending",
  },
];

export default function TransactionsTable() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch =
        transaction.id.toLowerCase().includes(search.toLowerCase()) ||
        transaction.service.toLowerCase().includes(search.toLowerCase());

      const matchesType = type === "All" || transaction.type === type;

      return matchesSearch && matchesType;
    });
  }, [search, type]);

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Search & Filter */}
      <div className="border-b border-slate-200 p-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search transaction..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          >
            <option value="All">All Types</option>
            <option value="Deposit">Deposit</option>
            <option value="Subscription">Subscription</option>
            <option value="Copy Trading">Copy Trading</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px]">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wider text-slate-500">
              <th className="px-5 py-4">Transaction</th>
              <th className="px-5 py-4">Service</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Amount</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((transaction) => {
              const isDeposit = transaction.type === "Deposit";

              return (
                <tr
                  key={transaction.id}
                  className="border-b border-slate-100 last:border-0 transition hover:bg-slate-50"
                >
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
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

                  <td className="px-5 py-5 text-sm text-slate-600">
                    {transaction.service}
                  </td>

                  <td className="px-5 py-5 text-sm text-slate-500">
                    {transaction.date}
                  </td>

                  <td
                    className={`px-5 py-5 text-sm font-semibold ${
                      isDeposit ? "text-emerald-600" : "text-slate-900"
                    }`}
                  >
                    {transaction.amount}
                  </td>

                  <td className="px-5 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        transaction.status === "Completed"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredTransactions.length === 0 && (
        <div className="px-5 py-12 text-center text-sm text-slate-500">
          No transactions found.
        </div>
      )}
    </motion.div>
  );
}
