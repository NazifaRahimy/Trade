import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | موقعیت‌های فعال  ",
    description:
      "موقعیت‌های معاملاتی فعال خود را مشاهده و وضعیت آن‌ها را مدیریت کنید.",
  },
  en: {
    title: "Trade-platform | Active Positions",
    description:
      "View your active trading positions and monitor their current status.",
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

export default function ActivePositionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
