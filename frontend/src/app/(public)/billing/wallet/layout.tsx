import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "Trade-platform | کیف پول",
    description:
      "موجودی کیف پول خود را مشاهده و حساب معاملاتی خود را شارژ کنید.",
  },
  en: {
    title: " Trade-platform | Wallet",
    description:
      "View your wallet balance and add funds to your trading account.",
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

export default function WalletLayout({children}: {children: React.ReactNode}) {
  return children;
}
