"use client";

import React from "react";

// 🟢 اتصال ورودی تابع به مشخصات کیف پول و پکیج کلاینت که از بک‌اَند لود شده است
export default function AppearanceSettings({ wallet }: { wallet: any }) {
  
  // تشخیص داینامیک نوع پکیج کاربر جهت نمایش در باکس ظاهر
  const currentModel = wallet?.active_revenue_model === "MONTHLY_PACKAGE" 
    ? "Fixed Monthly Subscription ($30.00)" 
    : "5% Performance Profit Share";

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-lg font-semibold text-gray-900">Appearance</h2>

        <p className="mt-1 text-sm text-gray-500">
          Choose the appearance of your Discount-Premium dashboard.
        </p>
      </div>

      <div className="mt-5">
        {/* حفظ ۱۰۰٪ لایوت و رنگ‌بندی آبی بومی و شیک شما */}
        <div className="rounded-xl border border-blue-500 bg-blue-50/50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-lg">
              ☀
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">Light Mode</p>

              <p className="mt-1 text-xs text-gray-500">
                Your dashboard currently uses the light theme with **{currentModel}**.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
