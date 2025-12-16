import type { ReactNode } from "react";
import { LanguageProvider } from "../providers/LanguageProvider";

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const lang = params.lang === "ur" ? "ur" : "en";
  return (
    <html lang={lang} dir={lang === "ur" ? "rtl" : "ltr"}>
      <body>{children}</body>
    </html>
  );
}