"use client";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import Link from "next/link";
import {FiArrowLeft, FiArrowRight, FiBarChart2, FiLoader} from "react-icons/fi";

// 🚀 ۱. اصلاح دقیق آدرس‌های ایمپورت برای برطرف شدن باگ Turbopack
import api from "@/src/lib/axios";
import AdminFinanceStats from "@/src/components/billing/admin/AdminFinanceStats";
import RevenueBreakdown from "@/src/components/billing/admin/RevenueBreakdown";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

export default function AdminFinancePage() {
  const {t, i18n} = useTranslation();
  const [financeData, setFinanceData] = useState<any>(null);
  const [revenueList, setRevenueList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const isPersian = i18n.language.startsWith("fa");
  // 📡 ۲. فچ لایو اطلاعات پورتفوی سود خالص پلتفرم و ریز درآمدها از بک‌اَند جنگو
  useEffect(() => {
    const fetchAdminFinancials = async () => {
      try {
        // دریافت آمارهای کلان درآمد ربات و کپی‌ترید
        const statsResponse = await api.get(
          "/api/billing/admin/finance/overview/",
        );
        if (statsResponse.data) {
          setFinanceData(statsResponse.data);
        }

        // دریافت لیست ردیف‌های تاریخچه کارمزدها
        const revenueResponse = await api.get(
          "/api/billing/admin/finance/revenue/",
        );
        if (revenueResponse.data) {
          setRevenueList(revenueResponse.data);
        }
      } catch (error) {
        console.error(
          "Critical: Failed to stream platform revenue records:",
          error,
        );
      } finally {
        setLoading(false);
      }
    };
    fetchAdminFinancials();
  }, []);

  if (loading) {
    return (
      <div
        dir={isPersian ? "rtl" : "ltr"}
        className="flex h-screen w-full items-center justify-center gap-2 text-sm text-slate-400 italic bg-white"
      >
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>{t("adminFinance.synchronizing")}</span>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      {/* 🚀 ۳. حفظ کامل لایوت، تگ‌ها و کلاس‌های Tailwind اختصاصی خودتان در تصویر */}
      <main
        dir={isPersian ? "rtl" : "ltr"}
        className="min-h-screen bg-white px-4 py-8 md:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-600"
          >
            {i18n.language.startsWith("fa") ? (
              <FiArrowRight className=" mt-1" />
            ) : (
              <FiArrowLeft />
            )}
            {t("adminFinance.backToWebsite")}
          </Link>

          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2 text-sm text-blue-600">
              <FiBarChart2 />
              <span>{t("adminFinance.administration")}</span>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              {t("adminFinance.financeOverview")}
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              {t("adminFinance.financeDescription")}
            </p>
          </div>

          {/* 📊 ۴. پاس دادن دیتای زنده به عنوان پرپس و برطرف شدن خطوط قرمز ادیتور */}
          <AdminFinanceStats adminStats={financeData} />

          <RevenueBreakdown revenueList={revenueList} />
        </div>
      </main>
    </ProtectedRoute>
  );
}
