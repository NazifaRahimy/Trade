"use client";

import React from "react";

const notifications = [
  {
    id: "newSetup",
    title: "New Setup Alert",
    description: "Notify when a new valid trading setup is detected.",
  },
  {
    id: "entryAlert", // 🟢 همگام‌سازی کلید با استیت entryAlert تعریف شده در فایل پدر شما
    title: "Entry Alert",
    description: "Notify when price reaches the confirmed entry zone.",
  },
  {
    id: "tpHit", // 🟢 همگام‌سازی کلید با استیت tpHit تعریف شده در فایل پدر شما
    title: "TP Hit Alert",
    description: "Notify when a take profit level is reached.",
  },
  {
    id: "slHit", // 🟢 همگام‌سازی کلید با استیت slHit تعریف شده در فایل پدر شما
    title: "SL Hit Alert",
    description: "Notify when the stop loss level is reached.",
  },
];

// 🟢 اتصال ورودی تابع به پروپس‌های داینامیک و متمرکز صفحه اصلی شما
export default function NotificationSettings({ enabled, setEnabled }: { enabled: any; setEnabled: any }) {
  
  const toggle = (id: string) => {
    setEnabled((current: any) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        <p className="mt-1 text-sm text-gray-500">
          Choose which trading events should trigger notifications.
        </p>
      </div>
      <div className="mt-2 divide-y divide-gray-100">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center justify-between gap-4 py-4"
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {notification.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {notification.description}
              </p>
            </div>

            {/* 🟢 لایو شدن سوئیچ‌ها: حفظ کامل کلاس‌ها و پوزیشن‌های انیمیشنی شما + گارد اختیاری ? جهت جلوگیری از کرش */}
            <button
              type="button"
              onClick={() => toggle(notification.id)}
              aria-label={`Toggle ${notification.title}`}
              className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                enabled?.[notification.id] ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                  enabled?.[notification.id] ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
