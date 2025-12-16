import type { ReactNode } from "react";
import { LanguageProvider } from "../providers/LanguageProvider";

export default async function LangLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: string };
}) {
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