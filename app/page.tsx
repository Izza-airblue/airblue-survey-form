"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Language = "en" | "ur";

const translations: Record<
  Language,
  {
    heading: string;
    tagline: string;
    sales: string;
    meal: string;
    general: string;
  }
> = {
  en: {
    heading: "Thank you for flying with us",
    tagline: "Shaping Our Tomorrow, Together.",
    sales: "Sales Feedback",
    meal: "Meal Feedback",
    general: "General Feedback",
  },
  ur: {
    heading: "ہمارے ساتھ سفر کرنے کا شکریہ",
    tagline: "کل کو بہتر بنانے کے لیے، مل کر۔",
    sales: "فروخت سے متعلق رائے",
    meal: "کھانے سے متعلق رائے",
    general: "عمومی رائے",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const router = useRouter();

  const t = translations[lang];

  const cards = [
    {
      title: t.sales,
      img: "/Surveys/sales_feedback.png",
      route: "/surveys/sales",
    },
    {
      title: t.meal,
      img: "/Surveys/meal_feedback.png",
      route: "/surveys/meal",
    },
    {
      title: t.general,
      img: "/Surveys/general_feedback.png",
      route: "/surveys/general",
    },
  ];

  return (
    <main
      className={`relative min-h-screen ${
        lang === "ur" ? "rtl" : "ltr"
      }`}
      dir={lang === "ur" ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/Surveys/main_banner1.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-4 sm:px-6 py-4">
        <Image
          src="/Surveys/airblue.svg"
          alt="Airblue"
          width={120}
          height={40}
        />

        <div className="flex gap-2">
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-2 rounded text-sm ${
              lang === "en"
                ? "text-white bg-gradient-to-r from-[#1E4560] to-[#3D8EC6]"
                : "bg-gray-200"
            }`}
          >
            English
          </button>

          <button
            onClick={() => setLang("ur")}
            className={`px-4 py-2 rounded text-sm ${
              lang === "ur"
                ? "text-white bg-gradient-to-r from-[#1E4560] to-[#3D8EC6]"
                : "bg-gray-200"
            }`}
          >
            اردو
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-28 text-center">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
          {t.heading}
        </h1>

        <p className="text-white mt-2 text-lg sm:text-xl">
          {t.tagline}
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {cards.map((card, i) => (
            <div
              key={i}
              onClick={() => router.push(card.route)}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-white font-semibold text-lg">
                    {card.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}