import type {Metadata} from "next";
import {cookies} from "next/headers";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../app/globals.css";

const metadata = {
  fa: {
    title: "خانه",
    description:
      "Trade-platform، پلتفرمی برای ارائه خدمات معاملاتی و مدیریت معاملات.",
  },

  en: {
    title: "Home",
    description:
      "Trade-platform, a platform for trading services and trade management.",
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

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
