"use client";
import {useEffect, useState} from "react";
import {FiLoader} from "react-icons/fi"; // 🟢 اصلاح پکیج آیکون‌های بومی شما
import api from "@/src/lib/axios"; // 🟢 تراز شدن آدرس اکسوس با بقیه فایل‌ها

// 🚀 حفظ دقیق آدرس‌های ایمپورت بومی شما در تصویر سوم
import BillingHeader from "@/src/components/billing/BillingHeader";
import BillingStats from "@/src/components/billing/BillingStats";
import RecentTransactions from "@/src/components/billing/RecentTransactions";
import TelegramBotCard from "@/src/components/billing/TelegramBotCard"; // ایمپورت دکمه جدید ربات
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";
import PremiumBotCard from "@/src/components/billing/PremiumBotCard";
export default function BillingPage() {
  const [billingData, setBillingData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [invoiceData, setInvoiceData] = useState<any>(null);
  // 📡 فچ لایو اطلاعات مانده حساب و تراکنش‌ها از اندپوینت دیتابیس جنگو
  const fetchBillingOverview = async () => {
    try {
      const response = await api.get("/api/billing/overview/");
      if (response.data) {
        setBillingData(response.data);
      }
    } catch (error) {
      console.error("Failed to stream wallet balance matrix:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBillingOverview();
  }, []);
    // 📡 تابع داینامیک شده برای ارسال درخواست به اندپوینت واقعی و لایو پایتون
    const handleGenerateCryptoInvoice = async (depositAmount: number) => {
      try {
        // 🟢 اصلاح باگ خط ۳۵: تراز کردن دقیق آدرس با ساختار فایل urls.py بک‌اَند شما
        const response = await api.post("/api/billing/payments/create/", {
          amount: depositAmount,
        });
        // 🟢 تراز کردن با متغیر deposit_address که NOWPayments صادر می‌کند
        if (response.data && response.data.deposit_address) {
          setInvoiceData(response.data);
          alert(`✅ فاکتور با موفقیت صادر شد.`);
        }
      } catch (error: any) {
        console.error("Blockchain network link occupied:", error);
        alert(`❌ Blockchain Gateway Error: Failed to initialize network handshake ticket.`);
      }
    };
  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center gap-2 text-sm text-slate-400 italic bg-white">
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>Synchronizing encrypted central billing ledger...</span>
      </div>
    );
  }
  return (
    <ProtectedRoute>
      {/* 🚀 حفظ ۱۰۰٪ ساختار کلاس‌ها، فواصل و لایوت عریض فایل تصویر سوم شما */}
      <main className="min-h-screen bg-white px-4 py-8 md:px-6 lg:px-8 text-slate-900">
        <div className="mx-auto max-w-[1400px]">
          <BillingHeader />
          <BillingStats walletData={billingData?.wallet} />
          <div className="mt-8 space-y-6">
            {/* پاس دادن اطلاعات لایو موجودی به کارت‌های چهارگانه بالایی شما */}
            <BillingStats walletData={billingData?.wallet} />
            {/* 🤖 تزریق خودکار کارت و دکمه خرید اشتراک ۱۰ دلاری ربات تلگرام در وسط صفحه بیلیینگ */}
            <TelegramBotCard
              isPremiumActive={billingData?.wallet?.is_bot_active ?? false}
              expiresAt={
                billingData?.wallet?.bot_expires_at ?? "No active subscription"
              }
              onRefresh={fetchBillingOverview}
            />
            {/* لیست جدول تراکنش‌های دهگانه پایینی متصل به دیتابیس */}
            <RecentTransactions
              transactions={billingData?.transactions || []}
            />
             <PremiumBotCard wallet={billingData?.wallet} onRefresh={fetchBillingOverview} />

          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
