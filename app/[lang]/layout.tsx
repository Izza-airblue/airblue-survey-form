import type { ReactNode } from "react";
import { LanguageProvider } from "../providers/LanguageProvider";

export default async function LangLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const resolvedLang = lang === "ur" ? "ur" : "en";

  return (
    <html lang={resolvedLang} dir={resolvedLang === "ur" ? "rtl" : "ltr"}>
      <body>
        <LanguageProvider lang={resolvedLang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}