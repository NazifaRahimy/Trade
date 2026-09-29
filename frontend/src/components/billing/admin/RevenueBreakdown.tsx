"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiDollarSign } from "react-icons/fi";

// 🚀 ۱. تعریف ساختار دقیق دیتای لایو دریافتی از اندپوینت ادمین بک‌اَند
type RevenueItem = {
  id: number;
  master_trader: string;
  follower: string;
  collected_fee: string;    // کل کارمزد ۲۰٪ کسر شده
  platform_share: string;   // سهم ۵٪ خالص سایت شما
  date: string;
};

type RevenueBreakdownProps = {
  revenueList: RevenueItem[];
};

export default function RevenueBreakdown({ revenueList }: RevenueBreakdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiDollarSign size={21} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Revenue Breakdown</h2>
            <p className="mt-1 text-sm text-slate-500">Platform revenue and master trader payouts.</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wider text-slate-500 bg-slate-50">
              <th className="px-5 py-4 pl-6">Service / Details</th>
              <th className="px-5 py-4">Gross Revenue (20%)</th>
              <th className="px-5 py-4">Trader Payout (15%)</th>
              <th className="px-5 py-4 pr-6">Net Revenue (5%)</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-100">
            {/* 🛡️ گارد امنیتی در صورت خالی بودن دیتابیس درآمدهای ادمین */}
            {!revenueList || revenueList.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-6 text-center text-slate-400 italic">
                  No revenue settlement logs recorded in the unified network ledger yet.
                </td>
              </tr>
            ) : (
              // 🚀 رندر ۱۰۰٪ داینامیک بر اساس ردیف‌های واقعی تراکنش‌های ثبت شده در بک‌اَند
              revenueList.map((item, index) => (
                <tr
                  key={item.id || index}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-5 py-5 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <FiArrowUpRight size={18} />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-slate-900 block">
                          Master: {item.master_trader}
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          Follower: {item.follower} • {item.date}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-5 text-slate-600 font-medium">
                    {item.collected_fee}
                  </td>

                  <td className="px-5 py-5 text-orange-600 font-medium">
                    {/* محاسبه سهم تریدر مستر (۱۵٪ از کل سود که معادل ۷۵٪ از کل کارمزد کسر شده است) */}
                    {item.collected_fee && !isNaN(parseFloat(item.collected_fee.replace('\$', '')))
                      ? `$${(parseFloat(item.collected_fee.replace('$', '')) * 0.75).toFixed(2)}`
                      : "\$0.00"}
                  </td>

                  <td className="px-5 py-5 text-emerald-600 font-semibold pr-6">
                    {item.platform_share}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
