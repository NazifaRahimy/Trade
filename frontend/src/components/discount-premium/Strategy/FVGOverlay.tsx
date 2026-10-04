"use client";

import React from "react";

export default function FVGOverlay({ data }: { data: any }) {
  // 🟢 استخراج مستقیم و داینامیک آرایه FVGهای فعال از دیتای زنده بک‌اَند ربات طلا
  const activeFvgs = data?.active_fvgs || [];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Fair Value Gaps
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            FVGs detected by the strategy scanner.
          </p>
        </div>
        {/* 🟢 نمایش تعداد گپ‌های فعال و لایو دیتابیس به جای عدد ثابت قدیمی */}
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {activeFvgs.length} Active
        </span>
      </div>

      <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
        {activeFvgs.length > 0 ? (
          activeFvgs.map((fvg: any) => (
            <div
              key={fvg.id}
              className="rounded-xl border border-gray-100 bg-gray-50 p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  {/* رنگ‌بندی داینامیک بر اساس صعودی یا نزولی بودن گپ نقدینگی طلا */}
                  <span
                    className={`rounded-md px-2 py-1 text-xs font-semibold ${
                      fvg.direction === "BULLISH"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {fvg.direction === "BULLISH" ? "Bullish FVG" : "Bearish FVG"}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    #{fvg.id}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-mono">
                  {/* نمایش سقف و کف دقیق قیمتی گپ از روی دیتابیس */}
                  \({parseFloat(fvg.bottom_boundary).toFixed(2)} -\){parseFloat(fvg.top_boundary).toFixed(2)} ({fvg.timeframe})
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-3">
                <div className="text-left">
                  <p className="text-xs text-gray-400">Strength</p>
                  <p className="text-sm font-bold text-gray-900 font-mono">
                    {fvg.strength ? `${fvg.strength}%` : "85%"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Status</p>
                  <span className="text-xs font-medium text-green-600">
                    Active Zone
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-12 text-center text-sm text-gray-400 font-sans">
            No active Fair Value Gaps (FVG) detected on Gold chart at this moment.
          </div>
        )}
      </div>
    </div>
  );
}
