import type { ReactNode } from "react";
import { LanguageProvider } from "../providers/LanguageProvider";

interface LangLayoutProps {
  children: ReactNode;
  params: { lang: string }; // always string here
}

export default function LangLayout({ children, params }: LangLayoutProps) {
  // Narrow the language to allowed values
  const lang = params.lang === "ur" ? "ur" : "en";

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