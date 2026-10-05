import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "ورود",
    description:
      "وارد حساب Trade-platform خود شوید و به داشبورد معاملاتی و خدمات معاملاتی خود دسترسی پیدا کنید.",
  },

  en: {
    title: "Login",
    description:
      "Sign in to your Trade-platform account to access your trading dashboard and manage your trading services.",
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

export default function LoginLayout({children}: {children: React.ReactNode}) {
  return children;
}
