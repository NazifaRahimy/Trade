"use client";

import { motion } from "framer-motion";
import { FiClock, FiDownload } from "react-icons/fi";
// 🚀 ایمپورت هسته شبکه برای دانلود فایل
import api from "../../../lib/axios"; 

export default function TradeHistoryHeader() {
  
  // 📥 تابع دانلود خودکار تاریخچه معاملات به صورت فایل اکسل/CSV مستقیم از جنگو
  const handleExportCSV = async () => {
    try {
      // درخواست دانلود فایل از اندپوینت بک‌اَند
      const response = await api.get("/api/stats/trade-history/export/", {
        responseType: "blob", // تعیین فرمت blob برای دانلود فایل اکسل
      });
      
      // ساخت لینک دانلود اتوماتیک در مرورگر کاربر
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "trade_history.csv"); // نام فایل دانلودی
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert("❌ Failed to export history. Server endpoint not configured yet.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
    >
      {/* بخش عنوان و توضیحات کاملاً بدون تغییر باقی بماند */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <FiClock size={19} />
          </div>
          <span className="text-sm font-medium text-blue-600">Trade History</span>
        </div>
        <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">Trade History</h1>
        <p className="mt-2 text-sm text-slate-500">Review and analyze your recent trading activity.</p>
      </div>

      {/* 🔘 متصل کردن دکمه اکسپورت به تابع دانلود شبکه */}
      <button
        type="button"
        onClick={handleExportCSV} // 👈 فعال‌سازی کلیک دکمه دانلود
        className="flex w-fit items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600"
      >
        <FiDownload size={16} />
        Export History
      </button>
    </motion.div>
  );
}
