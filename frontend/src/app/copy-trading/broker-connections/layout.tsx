import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | اتصال بروکرها",
    description:
      "حساب‌های بروکر خود را متصل و اتصال‌های معاملاتی خود را مدیریت کنید.",
  },
  en: {
    title: "Trade-platform | Broker Connections",
    description:
      "Connect your broker accounts and manage your trading connections.",
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

export default function BrokerConnectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
