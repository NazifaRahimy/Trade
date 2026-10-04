import React from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

// 🟢 استایل بومی شما کاملاً حفظ شده و فقط دیتای واقعی بک‌اَند تزریق می‌شود
export default function SwingPoints({ data }: { data: any }) {
  // واکشی آرایه سقف و کف‌های فرکتالی از دیتای زنده ربات طلا
  const swings = data?.fractal_swings || [];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Swing Points</h3>
        <p className="text-sm text-gray-500">
          Detected fractal swing highs and lows for structural reference
        </p>
      </div>

      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
        {swings.length > 0 ? (
          swings.map((swing: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/50 p-3"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2 ${
                  swing.swing_type === "HIGH" 
                    ? "bg-rose-50 text-rose-600" 
                    : "bg-emerald-50 text-emerald-600"
                }`}>
                  {swing.swing_type === "HIGH" ? (
                    <FiArrowUpRight size={18} />
                  ) : (
                    <FiArrowDownRight size={18} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {swing.swing_type === "HIGH" ? "Swing High" : "Swing Low"}
                    {swing.structure_type ? ` (${swing.structure_type})` : ""}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(swing.candle_timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm font-bold text-gray-900">
                  \${parseFloat(swing.price).toFixed(2)}
                </p>
                <p className="text-xs text-gray-400">Confirmed</p>
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-sm text-gray-400">
            No fractal swing points received from MT5 yet.
          </div>
        )}
      </div>
    </div>
  );
}
