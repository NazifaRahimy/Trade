"use client";

import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

import DiscountPremiumSidebar from "@/src/components/discount-premium/DiscountPremiumSidebar";
import DiscountPremiumHeader from "@/src/components/discount-premium/DiscountPremiumHeader";

export default function DiscountPremiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("auth-token");

      if (!token) {
        router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
        return;
      }

      setCheckingAuth(false);
    };

    checkAuth();

    window.addEventListener("auth-change", checkAuth);

    return () => {
      window.removeEventListener("auth-change", checkAuth);
    };
  }, [router, pathname]);

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-sm text-gray-500">Checking authentication...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <DiscountPremiumSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:ml-64">
        <DiscountPremiumHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="min-h-[calc(100vh-72px)] bg-white p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
