import type {Metadata} from "next";
import I18nProvider from "../components/providers/I18nProvider";
import LanguageProvider from "../components/providers/LanguageProvider";
import "../app/globals.css";
export const metadata: Metadata = {
  title: {
    default: "Trade-platform ",
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
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <I18nProvider>
          <LanguageProvider />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
