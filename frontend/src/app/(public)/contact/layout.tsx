import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "تماس با ما",
    description:
      "با پشتیبانی Trade-platform در ارتباط باشید یا بازخورد خود را برای ما ارسال کنید.",
  },

  en: {
    title: "Contact",
    description:
      "Get in touch with Trade-platform support or send us your feedback.",
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

export default function ContactLayout({children}: {children: React.ReactNode}) {
  return children;
}
