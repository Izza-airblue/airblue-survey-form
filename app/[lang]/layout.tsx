import type { ReactNode } from "react";
import type { Language } from "../lib/translations";
import { LanguageProvider } from "../providers/LanguageProvider";

interface LayoutProps {
  children: ReactNode;
  params: {
    lang: Language;
  };
}

export default function LangLayout({ children, params }: LayoutProps) {
  const { lang } = params;

  return (
    <html lang={lang} dir={lang === "ur" ? "rtl" : "ltr"}>
      <body>
        <LanguageProvider lang={lang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}