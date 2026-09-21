"use client";

// 🚀 اصلاح دقیق و اصولی آدرس‌های امپورت مطابق پوشه‌بندی فیزیکی شما در منوی سمت چپ
import CopySettingsHeader from "@/src/components/copy-trading/copy-settings/CopySettingsHeader";
import CopySettingsPanel from "@/src/components/copy-trading/copy-settings/CopySettingsPanel";
import CopySettingsInfo from "@/src/components/copy-trading/copy-settings/CopySettingsInfo";

export default function CopySettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-900">
      <div className="mx-auto max-w-[1700px] space-y-6 p-4 md:p-6 lg:p-8 w-full">
        <CopySettingsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
          <div className="lg:col-span-2 w-full">
            <CopySettingsPanel />
          </div>

          <div className="lg:col-span-1 w-full">
            <CopySettingsInfo />
          </div>
        </div>
      </div>
    </main>
  );
}
