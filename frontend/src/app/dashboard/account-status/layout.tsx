import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | وضعیت حساب",
    description:
      "وضعیت حساب معاملاتی، اتصال و اطلاعات حساب خود را مشاهده کنید.",
  },

  en: {
    title: "Trade-platform | Account Status",
    description:
      "View your trading account status, connection, and account information.",
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

export default function AccountStatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
