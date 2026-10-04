import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform |  تراکنش‌ها",
    description: "تاریخچه تراکنش‌های مالی حساب خود را مشاهده کنید.",
  },
  en: {
    title: "Trade-platform | Transactions",
    description: "View your financial transaction history.",
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

export default function TransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
