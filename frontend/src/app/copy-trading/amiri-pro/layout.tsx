import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | Amiri Pro",
    description: "خدمات و امکانات حرفه‌ای Amiri Pro را مشاهده و مدیریت کنید.",
  },
  en: {
    title: "Trade-platform | Amiri Pro",
    description:
      "Explore and manage the professional features and services of Amiri Pro.",
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

export default function AmiriProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
