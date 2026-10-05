"use client";

import {useState} from "react";
import {useTranslation} from "react-i18next";

import Sidebar from "@/src/components/dashboard/Sidebar";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";

export default function DashboardShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {i18n} = useTranslation();

  const isPersian = i18n.language === "fa";

  return (
    <div dir={isPersian ? "rtl" : "ltr"} className="min-h-screen text-black">
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className={`min-h-screen ${isPersian ? "lg:mr-64" : "lg:ml-64"}`}>
        {children}
      </main>
    </div>
  );
}
