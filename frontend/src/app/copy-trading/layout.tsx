"use client";

import {useState} from "react";

import CopyTradingSidebar from "@/src/components/copy-trading/CopyTradingSidebar";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";

export default function CopyTradingDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <CopyTradingSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="min-h-screen lg:ml-64">{children}</main>
    </div>
  );
}
