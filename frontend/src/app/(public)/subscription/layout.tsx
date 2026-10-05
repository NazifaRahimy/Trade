import type {Metadata} from "next";
import {cookies} from "next/headers";

const metadata = {
  fa: {
    title: "اشتراک",
    description: "اشتراک‌ها و خدمات معاملاتی Trade-platform را مشاهده کنید.",
  },

  en: {
    title: "Subscription",
    description: "Explore Trade-platform subscriptions and trading services.",
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

export default function SubscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
