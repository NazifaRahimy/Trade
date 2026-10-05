import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "درباره ما",
    description: "با Trade-platform و خدمات معاملاتی ما بیشتر آشنا شوید.",
  },

  en: {
    title: "About Us",
    description: "Learn more about Trade-platform and our trading services.",
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

export default function AboutLayout({children}: {children: React.ReactNode}) {
  return children;
}
