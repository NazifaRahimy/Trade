"use client";

import {useState} from "react";
import {useTranslation} from "react-i18next";

import CopyTradingSidebar from "@/src/components/copy-trading/CopyTradingSidebar";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";

export default function CopyTradingDashboardShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {i18n} = useTranslation();

  const isPersian = i18n.language.startsWith("fa");

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <CopyTradingSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className={`min-h-screen ${isPersian ? "lg:mr-64" : "lg:ml-64"}`}>
        {children}
      </main>
    </div>
  );
}
