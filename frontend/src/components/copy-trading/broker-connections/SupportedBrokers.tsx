"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiLoader } from "react-icons/fi";
// 🚀 اتصال به کلاینت متمرکز شبکه پلتفرم شما
import api from "@/src/lib/axios";

export default function SupportedBrokers() {
  // 📦 ۱. استیت داینامیک برای ذخیره نام کارگزاران دریافت شده از دیتابیس جنگو
  const [brokers, setBrokers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // 📡 ۲. فچ کردن زنده لیست بروکرهای ثبت شده در پنل ادمین جنگو به محض لود شدن صفحه
  useEffect(() => {
    const fetchBrokersFromDatabase = async () => {
      try {
        const response = await api.get("/api/user/broker-list/");
        if (response.data && response.data.supported_brokers) {
          setBrokers(response.data.supported_brokers);
        }
      } catch (error) {
        console.error("Critical: Failed to load dynamic brokers list from database:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBrokersFromDatabase();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-xs text-slate-400 italic flex items-center justify-center gap-2 min-h-[200px]">
        <FiLoader className="animate-spin text-blue-600" size={16} />
        <span>Loading verified broker nodes...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4"
    >
      <div>
        <h3 className="font-semibold text-slate-900 text-sm">Supported Brokers</h3>
        <p className="text-xs text-slate-400 mt-1">Select one of the supported trading platforms.</p>
      </div>

      <div className="space-y-2">
        {brokers.length === 0 ? (
          <p className="text-xs text-slate-400 italic p-3 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
            No active brokers registered in the core ledger yet.
          </p>
        ) : (
          // 🚀 ۳. رندر کاملاً داینامیک بروکرهای واقعی همراه با استخراج خودکار ۲ حرف اول برای لوگوی متنی
          brokers.map((brokerName, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                {/* تولید اتوماتیک لوگو با حروف بزرگ مثل IC یا EX بر اساس نام واقعی بروکر در دیتابیس */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white font-bold text-xs text-slate-800 border border-slate-100 shadow-sm">
                  {brokerName.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-800 block">{brokerName}</span>
                  <span className="text-[10px] text-slate-400">Forex & CFD Verified</span>
                </div>
              </div>
              <FiCheckCircle className="text-emerald-500 shrink-0" size={16} />
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}
