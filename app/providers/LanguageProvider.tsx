"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Language } from "../lib/translations";

interface LanguageContextType {
  language: Language;
  switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface Props {
  children: ReactNode;
  lang: Language;
}

export function LanguageProvider({ children, lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>(lang);

  useEffect(() => {
    localStorage.setItem("lang", language);
    document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
  }, [language]);

  const switchLanguage = (newLang: Language) => {
    if (newLang === language) return;
    const newPath = pathname.replace(`/${language}`, `/${newLang}`);
    setLanguage(newLang);
    router.push(newPath);
  };
  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}