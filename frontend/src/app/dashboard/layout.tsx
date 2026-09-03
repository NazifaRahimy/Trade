"use client";

import {useState} from "react";

import Sidebar from "@/src/components/dashboard/Sidebar";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen  text-black">
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="min-h-screen lg:ml-64">{children}</main>
    </div>
  );
}
