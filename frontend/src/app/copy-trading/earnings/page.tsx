"use client";

// 🚀 ایمپورت کردن کامپوننت اصلی که در پوشه components ساختید
import MasterEarningsPage from "@/src/components/copy-trading/earnings/earnings";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

export default function EarningsRoute() {
  return (
    <ProtectedRoute>
      {/* رندر کردن بخش گرافیکی و فرم واریز و برداشت مستر */}
      <MasterEarningsPage />
    </ProtectedRoute>
  );
}
