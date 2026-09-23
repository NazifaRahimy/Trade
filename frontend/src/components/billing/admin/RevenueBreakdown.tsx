"use client";

import {motion} from "framer-motion";
import {FiArrowUpRight, FiDollarSign} from "react-icons/fi";

const revenue = [
  {
    service: "Telegram Bot",
    revenue: "$9,420.00",
    traderPayout: "$2,100.00",
    netRevenue: "$7,320.00",
  },
  {
    service: "Copy Trading",
    revenue: "$15,430.00",
    traderPayout: "$5,100.00",
    netRevenue: "$10,330.00",
  },
];

export default function RevenueBreakdown() {
  return (
    <motion.section
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiDollarSign />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Revenue Breakdown
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Platform revenue and master trader payouts.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wider text-slate-500">
              <th className="px-5 py-4">Service</th>
              <th className="px-5 py-4">Gross Revenue</th>
              <th className="px-5 py-4">Trader Payout</th>
              <th className="px-5 py-4">Net Revenue</th>
            </tr>
          </thead>

          <tbody>
            {revenue.map((item) => (
              <tr
                key={item.service}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
              >
                <td className="px-5 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <FiArrowUpRight />
                    </div>

                    <span className="text-sm font-medium text-slate-900">
                      {item.service}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-5 text-sm text-slate-600">
                  {item.revenue}
                </td>

                <td className="px-5 py-5 text-sm text-orange-600">
                  {item.traderPayout}
                </td>

                <td className="px-5 py-5 text-sm font-semibold text-emerald-600">
                  {item.netRevenue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}
