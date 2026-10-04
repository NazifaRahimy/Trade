import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "پرداخت",
    description:
      "پرداخت هزینه سرویس و مدیریت اطلاعات پرداخت حساب خود را انجام دهید.",
  },

  en: {
    title: "Payment",
    description:
      "Complete your service payment and manage your account payment details.",
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

export default function PaymentLayout({children}: {children: React.ReactNode}) {
  return children;
}
