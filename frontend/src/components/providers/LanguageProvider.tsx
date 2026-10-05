"use client";

import {useEffect} from "react";
import {useTranslation} from "react-i18next";

export default function LanguageProvider() {
  const {i18n} = useTranslation();

  useEffect(() => {
    const language = i18n.language?.startsWith("en") ? "en" : "fa";

    const html = document.documentElement;

    html.lang = language;
    html.dir = language === "fa" ? "rtl" : "ltr";

    document.body.classList.remove("font-yekan", "font-estedad");

    if (language === "fa") {
      document.body.classList.add("font-yekan");
    } else {
      document.body.classList.add("font-estedad");
    }
  }, [i18n.language]);

  return null;
}
