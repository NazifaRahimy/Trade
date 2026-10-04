import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | تنظیمات کپی",
    description: "تنظیمات و ترجیحات مربوط به معاملات کپی خود را مدیریت کنید.",
  },
  en: {
    title: "Trade-platform | Copy Settings",
    description: "Manage your copy trading settings and preferences.",
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

export default function CopySettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
