"use client";

import React from "react";

const settings = [
  {
    id: "premiumDiscount",
    title: "Premium / Discount Filter",
    description: "Only allow setups inside valid premium or discount zones.",
  },
  {
    id: "fvg",
    title: "FVG Confirmation",
    description: "Require a valid Fair Value Gap before confirming a setup.",
  },
  {
    id: "bos",
    title: "BOS Confirmation",
    description: "Require a confirmed Break of Structure.",
  },
  {
    id: "choch",
    title: "CHoCH Confirmation",
    description: "Use Change of Character as an additional confirmation.",
  },
];

// 🟢 تغییر خط ۲۷: ورودی تابع را به پروپس‌های داینامیک صفحه اصلی متصل می‌کنیم
export default function StrategySettings({ enabled, setEnabled }: { enabled: any, setEnabled: any }) {
  
  const toggleSetting = (id: string) => {
    setEnabled((current: any) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Strategy Settings
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Control which confirmations are required for a valid setup.
        </p>
      </div>
      <div className="mt-2 divide-y divide-gray-100">
        {settings.map((setting) => (
          <div
            key={setting.id}
            className="flex items-center justify-between gap-4 py-4" >
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {setting.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {setting.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggleSetting(setting.id)}
              aria-label={`Toggle ${setting.title}`}
              className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                enabled[setting.id] ? "bg-blue-600" : "bg-gray-200"
              }`}  >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                  enabled[setting.id] ? "left-6" : "left-1"
                }`} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
