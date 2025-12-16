

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "../providers/LanguageProvider";
import { translations } from "../lib/translations";

export default function Home() {
  const router = useRouter();
  const { language, switchLanguage } = useLanguage();
  const t = translations[language];

  const cards = [
    { title: t.sales, img: "/Surveys/sales_feedback.png", slug: "sales" },
    { title: t.meal, img: "/Surveys/meal_feedback.png", slug: "meal" },
    { title: t.general, img: "/Surveys/general_feedback.png", slug: "general" }
  ];

  return (
    <main className="relative min-h-screen">

      {/* Language Switch */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button onClick={() => switchLanguage("en")}>English</button>
        <button onClick={() => switchLanguage("ur")}>اردو</button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-40 px-6">
        {cards.map((c) => (
          <div
            key={c.slug}
            onClick={() =>
              router.push(`/${language}/surveys/${c.slug}`)
            }
            className="cursor-pointer shadow-lg hover:scale-105 transition"
          >
            <div className="relative aspect-[16/10]">
              <Image src={c.img} alt={c.title} fill className="object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                {c.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
