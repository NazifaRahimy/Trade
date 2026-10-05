import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "ثبت‌نام",
    description:
      "حساب Trade-platform خود را ایجاد کنید و به داشبورد و خدمات معاملاتی خود دسترسی پیدا کنید.",
  },

  en: {
    title: "Register",
    description:
      "Create your Trade-platform account to access your trading dashboard and manage your trading services.",
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

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
