import type {Metadata} from "next";
import {cookies} from "next/headers";

import CopyTradingDashboardShell from "@/src/components/copy-trading/CopyTradingDashboardShell";

const metadata = {
  fa: {
    title: "داشبورد کپی تریدینگ",
    description:
      "پلتفرم کپی تریدینگ Trade-platform را بررسی کنید و معاملات معامله‌گران موفق را کپی کنید.",
  },

  en: {
    title: "Copy Trading Dashboard",
    description:
      "Explore our copy trading platform and start copying successful traders.",
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

export default function CopyTradingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CopyTradingDashboardShell>{children}</CopyTradingDashboardShell>;
}
