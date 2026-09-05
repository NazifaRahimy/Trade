import type {Metadata} from "next";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../app/globals.css";
import {html} from "motion/react-m";
export const metadata: Metadata = {
  title: {
    default: "Trade-platform | Home",
    template: "Trade-platform | %s",
  },
  description: "Trade-platform",
};

export default function RootLayout({
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
