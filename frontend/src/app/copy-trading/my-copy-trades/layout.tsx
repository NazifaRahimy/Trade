import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | کپی معاملات من",
    description:
      "معاملات کپی‌شده و فعالیت‌های معاملاتی خود را مشاهده و مدیریت کنید.",
  },
  en: {
    title: "Trade-platform | My Copy Trades",
    description: "View and manage your copied trades and trading activities.",
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

export default function MyCopyTradesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
