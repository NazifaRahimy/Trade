import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | معامله‌گران من",
    description:
      "معامله‌گران مورد نظر خود را مشاهده و معامله‌گران فعال برای کپی را مدیریت کنید.",
  },
  en: {
    title: "Trade-platform | My Traders",
    description:
      "View your selected traders and manage traders available for copy trading.",
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

export default function MyTradersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
