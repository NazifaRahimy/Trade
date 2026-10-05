import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | کنترل ریسک",
    description:
      "تنظیمات مدیریت ریسک، سطح ریسک و کنترل معاملات حساب خود را مدیریت کنید.",
  },

  en: {
    title: "Trade-platform | Risk Control",
    description:
      "Manage your risk settings, risk levels, and trading risk controls.",
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

export default function RiskControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
