import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | عملکرد",
    description: "عملکرد معاملات کپی‌شده و نتایج معاملاتی خود را بررسی کنید.",
  },
  en: {
    title: "Trade-platform | Performance",
    description: "Review your copy trading performance and trading results.",
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

export default function PerformanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
