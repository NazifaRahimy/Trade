import type {Metadata} from "next";
import {cookies} from "next/headers";

import DashboardShell from "@/src/components/dashboard/DashboardShell";

const metadata = {
  fa: {
    title: "داشبورد ربات تلگرام",
    description:
      "داشبورد ربات تلگرام Trade-platform را مدیریت کنید و وضعیت حساب، اتصال بروکر و معاملات خود را مشاهده کنید.",
  },

  en: {
    title: "Telegram Bot Dashboard",
    description:
      "Manage your Trade-platform Telegram Bot dashboard and monitor your account, broker connection, and trades.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();

  const language = cookieStore.get("language")?.value === "en" ? "en" : "fa";

  return {
    title: metadata[language].title,
    description: metadata[language].description,
  };
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardShell>{children}</DashboardShell>;
}
