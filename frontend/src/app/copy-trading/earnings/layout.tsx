import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | درآمدها",
    description:
      "درآمدها، سود حاصل از معاملات و اطلاعات مالی کپی تریدینگ خود را مشاهده کنید.",
  },
  en: {
    title: "Trade-platform | Earnings",
    description:
      "View your earnings, trading profits, and copy trading financial information.",
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

export default function EarningsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
