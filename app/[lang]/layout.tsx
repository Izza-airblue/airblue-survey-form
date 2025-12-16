import type { ReactNode } from "react";
import { LanguageProvider } from "../providers/LanguageProvider";

export default function LangLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: "en" | "ur" };
}) {
  return (
    <html lang={params.lang} dir={params.lang === "ur" ? "rtl" : "ltr"}>
      <body>
        <LanguageProvider lang={params.lang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}