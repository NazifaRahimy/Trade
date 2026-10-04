"use client";

import { useState } from "react";
import { FiTrendingUp, FiLoader } from "react-icons/fi";
import api from "@/src/lib/axios";

export default function PremiumBotCard({ wallet, onRefresh }: any) {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(wallet?.active_revenue_model || "PERFORMANCE_FEE");

  // 📡 تابع ارسال درخواست سوئیچ پکیج یا پرداخت ۳۰ دلاری به بک‌اَند مرکزی جنگو
  const handleSwitchModel = async (chosenModel: string) => {
    try {
      setLoading(true);
      const response = await api.post("/api/billing/revenue-model/switch/", {
        dashboard_type: "premium_bot",
        revenue_model: chosenModel,
      });

      if (response.data && response.data.status === "success") {
        setModel(chosenModel);
        alert(`✅ پکیج ربات پریموم/دیسکونت با موفقیت تغییر یافت.`);
        if (onRefresh) onRefresh();
      }
    } catch (error: any) {
      if (error.response?.status === 402) {
        alert("❌ موجودی کیف پول کافی نیست! فعال‌سازی پکیج ماهیانه به ۳۰ دلار شارژ نیاز دارد.");
      } else {
        alert("❌ خطای ارتباط با سرور کارگزار درگاه.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <FiTrendingUp size={22} />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Premium / Discount Bot</h3>
            <p className="text-xs text-slate-500">ICT & FVG Algorithmic Gold Execution.</p>
          </div>
        </div>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
          model === "MONTHLY_PACKAGE" ? "bg-blue-50 text-blue-700" : "bg-emerald-50 text-emerald-700"
        }`}>
          {model === "MONTHLY_PACKAGE" ? "Fixed \$30/mo" : "5% Performance Fee"}
        </span>
      </div>

      <div className="border-t border-slate-100 pt-4">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Revenue Model Selection</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            onClick={() => handleSwitchModel("PERFORMANCE_FEE")}
            disabled={loading}
            className={`rounded-xl border p-3 text-left transition ${
              model === "PERFORMANCE_FEE" ? "border-emerald-500 bg-emerald-50/30" : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <p className="text-xs font-bold text-slate-800">5% Profit Share</p>
            <p className="mt-1 text-[11px] text-slate-400">Pay only when bot wins trades.</p>
          </button>

          <button
            onClick={() => handleSwitchModel("MONTHLY_PACKAGE")}
            disabled={loading}
            className={`rounded-xl border p-3 text-left transition ${
              model === "MONTHLY_PACKAGE" ? "border-blue-500 bg-blue-50/30" : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <p className="text-xs font-bold text-slate-800">Fixed Package</p>
            <p className="mt-1 text-[11px] text-slate-400">\$30.00 upfront for 30 days.</p>
          </button>
        </div>
      </div>
    </div>
  );
}
