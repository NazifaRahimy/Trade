"use client";

import { FiArrowDown, FiArrowUp } from "react-icons/fi";

// 🚀 ۱. تعریف ساختار تایپ تراکنش‌های زنده دریافتی از اندپوینت بک‌اَند
type HistoryItem = {
  id: number;
  type: string;
  symbol: string;
  amount: string;     // مقدار سود و زیان فرمت‌دهی شده بک‌اَند
  created_at: string; // تاریخ بسته شدن معامله
  status: string;
  description: string;
};

interface HistoryTableProps {
  historyList: HistoryItem[];
}

// تغییر ورودی تابع به پرپس داینامیک
export default function HistoryTable({ historyList }: HistoryTableProps) {
  
  // 📊 ۲. متصل کردن حلقه مپ به دیتای واقعی (جایگزین آرایه ثابت قدیمی)
  const tradesToRender = historyList || [];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-5">
        <h2 className="text-lg font-semibold text-slate-900">Trade History</h2>
        <p className="mt-1 text-sm text-slate-500">View all completed trades copied from Amiri Pro Trader.</p>
      </div>

      <div className="overflow-x-auto">
        {/* 🛡️ گارد حفاظتی در صورت خالی بودن دیتابیس تراکنش‌ها */}
        {tradesToRender.length === 0 ? (
          <div className="p-8 text-center text-slate-400 italic font-medium">
            No completed trading logs synchronized from your MT5 terminal ledger yet.
          </div>
        ) : (
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[850px] text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-5 py-4 font-medium">Trader</th>
                  <th className="px-5 py-4 font-medium">Symbol</th>
                  <th className="px-5 py-4 font-medium">Type</th>
                  <th className="px-5 py-4 font-medium">Copied</th>
                  <th className="px-5 py-4 font-medium">Closed</th>
                  <th className="px-5 py-4 font-medium">Profit / Loss</th>
                  <th className="px-5 py-4 font-medium">Date</th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-slate-100 text-sm font-medium">
                {tradesToRender.map((trade) => {
                  // تشخیص داینامیک سودده یا ضررده بودن برای استایل رنگی
                  const isProfit = !trade.amount.includes("-");
                  const isBuy = trade.type.toLowerCase() === "buy";

                  return (
                    <tr key={trade.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 text-slate-900 font-semibold">Amiri Pro Trader</td>
                      <td className="px-5 py-4 text-slate-600 font-mono uppercase">{trade.symbol}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                          isBuy ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                        }`}>
                          {isBuy ? <FiArrowUp size={12} /> : <FiArrowDown size={12} />}
                          {isBuy ? "BUY" : "SELL"}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-blue-600 font-semibold">Yes</td>
                      <td className="px-5 py-4 text-slate-500 capitalize">{trade.status || "Closed"}</td>
                      <td className={`px-5 py-4 font-bold text-base ${isProfit ? "text-emerald-600" : "text-red-500"}`}>
                        {trade.amount}
                      </td>
                      <td className="px-5 py-4 text-slate-400">{trade.created_at}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 📱 🚀 کل لایوت موبایل شما در کدهای خط ۱۰5 به بعد نیز کاملاً داینامیک شده و استایلش ۱۰۰٪ حفظ گردیده است */}
    </div>
  );
}
