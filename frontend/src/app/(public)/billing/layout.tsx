import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "صورتحساب",
    description:
      "مدیریت صورتحساب، موجودی حساب و تراکنش‌های مالی خود را مشاهده کنید.",
  },

  en: {
    title: "Billing",
    description:
      "Manage your billing, account balance, and financial transactions.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();

  const language = cookieStore.get("language")?.value;

  console.log("SERVER LANGUAGE:", language);

  if (language === "en") {
    return metadata.en;
  }

  return metadata.fa;
}

export default function BillingLayout({children}: {children: React.ReactNode}) {
  return children;
}
