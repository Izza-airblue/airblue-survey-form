import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  
  const [lang, setLang] = useState<"en" | "ur">("en");

  useEffect(() => {
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  }, [lang]);


  return (
      <main className="relative w-full h-screen">

      {/* Fullscreen Banner */}
      <div className="absolute inset-0">
        <Image
          src="/Surveys/main_banner.png"
          alt="Survey Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Language Buttons */}
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded transition-all duration-300
            ${lang === "en"
              ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700"
              : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
        >
          English
        </button>
        <button
          onClick={() => setLang("ur")}
          className={`px-4 py-2 rounded transition-all duration-300
            ${lang === "ur"
              ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700"
              : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
        >
          اردو
        </button>
      </div>

      {/* Overlay Text & Cards */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {lang === "en" ? "Thank you for flying with us" : "ہمارے ساتھ پرواز کرنے کے لیے شکریہ"}
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl mt-2">
          {lang === "en" ? "Shaping Our Tomorrow, Together." : "ہم سب کا کل بہتر بنانے کی کوشش"}
        </p>

        {/* Feedback Cards */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center w-full max-w-5xl">
          {[
            { en: "Sales Feedback", ur: "سیلز فیڈبیک", img: "sales_feedback.png" },
            { en: "Meal Feedback", ur: "کھانے کی فیڈبیک", img: "meal_feedback.png" },
            { en: "General Feedback", ur: "عام فیڈبیک", img: "general_feedback.png" },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-64 hover:scale-105 transform transition"
            >
              <Image
                src={`/Surveys/${card.img}`}
                alt={card.en}
                width={400}
                height={250}
                className="object-cover"
              />
              <div className="p-4">
                <h2 className="text-gray-800 font-semibold text-lg">
                  {lang === "en" ? card.en : card.ur}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
