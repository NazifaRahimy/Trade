import type {Metadata} from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../app/globals.css";
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
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
