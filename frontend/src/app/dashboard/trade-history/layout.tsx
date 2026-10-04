import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | تاریخچه معاملات",
    description:
      "تاریخچه معاملات انجام‌شده و عملکرد معاملاتی حساب خود را مشاهده کنید.",
  },

  en: {
    title: "Trade-platform | Trade History",
    description:
      "View your completed trades and trading account performance history.",
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

export default function TradeHistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
