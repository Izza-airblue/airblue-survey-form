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
    heading: "Share your feedback with us",
    tagline: "Shaping Our Tomorrow, Together.",
    general: "General Feedback",
    meal: "Meal Feedback",
    sales: "Drop Us A Message",
  },
  ur: {
    heading: "ہمارے ساتھ سفر کرنے کا شکریہ",
    tagline: "کل کو بہتر بنانے کے لیے، مل کر۔",
    general: "عمومی رائے",
    meal: "کھانے سے متعلق رائے",
    sales: "فروخت سے متعلق رائے",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const router = useRouter();

  const t = translations[lang];

  const cards = [
    {
      title: t.general,
      subtitle: "How was your overall experience with Airblue",
      img: "/Surveys/general_feedbacks.png",
      route: "/surveys?open=general",
    },
    {
      title: t.meal,
      subtitle: "How was your in flight meal experience",
      img: "/Surveys/meal.png",
      route: "/surveys?open=meal",
    },
    {
      title: t.sales,
      subtitle: "Drop us a message and we will reach out",
      img: "/Surveys/dropMessage.jpg",
      route: "/surveys?open=sales",
    },
  ];

  return (
    <main
      className="relative min-h-screen"
      dir={lang === "ur" ? "rtl" : "ltr"}
    >
      {/* ===== Banner Section ===== */}
      <div className="relative w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Surveys/mainBanner.png"
          alt="Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center z-0"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f33]/80 via-[#0b1f33]/50 to-transparent z-10" />
      </div>

      {/* ===== Header ===== */}
      <div
        className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-4 sm:px-6 py-4"
        dir="ltr"
      >
        <Image
          src="/Surveys/airblue.svg"
          alt="Airblue"
          width={189}
          height={38}
        />

        <div className="flex gap-2">
          <button
            style={{ width: "96px", height: "38px", fontSize: "16px", fontWeight: "400" }}
            onClick={() => setLang("en")}
            className={
              lang === "en"
                ? "text-white rounded bg-gradient-to-r from-[#1E4560] to-[#3D8EC6]"
                : "bg-gray-200 rounded"
            }
          >
            English
          </button>

          <button
            style={{ width: "96px", height: "38px", fontSize: "16px", fontWeight: "400" }}
            onClick={() => setLang("ur")}
            className={
              lang === "ur"
                ? "text-white rounded bg-gradient-to-r from-[#1E4560] to-[#3D8EC6]"
                : "bg-gray-200 rounded"
            }
          >
            اردو
          </button>
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-32 text-center">
        <h1
          className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl"
          style={{ fontSize: "55px" }}
        >
          {t.heading}
        </h1>

        <p
          className="text-white/90 mt-2 text-lg sm:text-xl"
          style={{ fontSize: "35px", fontWeight: "400" }}
        >
          {t.tagline}
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {cards.map((card, i) => (
            <div
              key={i}
              onClick={() => router.push(card.route)}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 border-2 border-white"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <h2
                    className="text-white"
                    style={{ fontSize: "22px", fontWeight: "400", textAlign: "justify" }}
                  >
                    {card.title}
                  </h2>

                  <p
                    className="text-white text-sm"
                    style={{ fontSize: "16px", fontWeight: "400", textAlign: "justify" }}
                  >
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}