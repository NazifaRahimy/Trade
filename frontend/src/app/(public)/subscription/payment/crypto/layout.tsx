import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | پرداخت ارز دیجیتال ",
    description:
      "پرداخت هزینه سرویس از طریق ارز دیجیتال و مشاهده اطلاعات پرداخت.",
  },

  en: {
    title: " Trade-platform | Crypto Payment",
    description:
      "Pay for your service using cryptocurrency and view your payment details.",
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

export default function CryptoLayout({children}: {children: React.ReactNode}) {
  return children;
}
