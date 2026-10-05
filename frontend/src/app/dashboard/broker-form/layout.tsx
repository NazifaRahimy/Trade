import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | اتصال بروکر",
    description:
      "اطلاعات حساب بروکر خود را وارد کنید و اتصال حساب معاملاتی را مدیریت کنید.",
  },

  en: {
    title: "Trade-platform | Broker Connection",
    description:
      "Enter your broker account information and manage your trading account connection.",
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

export default function BrokerFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
