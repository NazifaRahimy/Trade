import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "مدیریت مالی",
    description:
      "مدیریت مالی پلتفرم، درآمدها، کارمزدها و گزارش‌های مالی را مشاهده کنید.",
  },

  en: {
    title: "Admin Finance",
    description:
      "Manage platform finances, revenue, fees, and financial reports.",
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

export default function AdminFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
