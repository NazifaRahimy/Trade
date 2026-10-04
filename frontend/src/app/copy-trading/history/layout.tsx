import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | تاریخچه",
    description:
      "تاریخچه معاملات کپی‌شده و فعالیت‌های معاملاتی خود را مشاهده کنید.",
  },
  en: {
    title: "Trade-platform | History",
    description: "View your copy trading history and past trading activities.",
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

export default function HistoryLayout({children}: {children: React.ReactNode}) {
  return children;
}
