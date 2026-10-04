"use client";

import {useEffect, useState} from "react";
import {I18nextProvider} from "react-i18next";
import i18n from "../../i18n";

export default function I18nProvider({children}: {children: React.ReactNode}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "fa" || savedLanguage === "en") {
      i18n.changeLanguage(savedLanguage);
    } else {
      i18n.changeLanguage("fa");
      localStorage.setItem("language", "fa");
    }

    setReady(true);
  }, []);

  if (!ready) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
