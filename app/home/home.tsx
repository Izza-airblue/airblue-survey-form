// // "use client";

// // import Image from "next/image";
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";

// // type Language = "en" | "ur";

// // type Survey = {
// //     SurveyID: number;
// //     Name: string | null;
// // };

// // type Props = {
// //     surveys: Survey[];
// // };

// // export default function Home({ surveys }: Props) {
// //     const [lang] = useState<Language>("en");
// //     const router = useRouter();

// //     const cards = surveys.map((s) => ({
// //         title: s.Name ?? "",
// //         img: "/Surveys/default.png",
// //         route: `/surveys?open=${s.SurveyID}`,
// //     }));

// //     return (
// //         <main className="relative min-h-screen">
// //             <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-28 text-center">
// //                 <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
// //                     {cards.map((card, i) => (
// //                         <div
// //                             key={i}
// //                             onClick={() => router.push(card.route)}
// //                             className="cursor-pointer rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105"
// //                         >
// //                             <div className="relative aspect-[16/10]">
// //                                 <Image
// //                                     src={card.img}
// //                                     alt={card.title}
// //                                     fill
// //                                     className="object-cover"
// //                                 />
// //                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
// //                                 <div className="absolute bottom-4 left-4">
// //                                     <h2 className="text-white text-lg">{card.title}</h2>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </main>
// //     );
// // }


// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// type Language = "en" | "ur";

// const translations: Record<
//     Language,
//     {
//         heading: string;
//         tagline: string;
//         sales: string;
//         meal: string;
//         general: string;
//     }
// > = {
//     en: {
//         heading: "Share your feedback with us",
//         tagline: "Shaping Our Tomorrow, Together.",
//         general: "General Feedback",
//         meal: "Meal Feedback",
//         sales: "Drop Us A Message",


//     },
//     ur: {
//         heading: "ہمارے ساتھ سفر کرنے کا شکریہ",
//         tagline: "کل کو بہتر بنانے کے لیے، مل کر۔",
//         general: "عمومی رائے",
//         meal: "کھانے سے متعلق رائے",
//         sales: "فروخت سے متعلق رائے",

//     },
// };
// type Survey = {
//     SurveyID: number;
//     Name: string | null;
//     Description : string | null;
// };

// type Props = {
//     surveys: Survey[]
// }

// export default function Home({ surveys }: Props) {
//     const [lang, setLang] = useState<Language>("en");
//     const router = useRouter()

//     // const cards = [
//     //     {
//     //         title: t.general,
//     //         subtitle: "How was your overall experience with Airblue",
//     //         img: "/Surveys/general_feedbacks.png",
//     //         route: "/surveys?open=general",
//     //     },
//     //     {
//     //         title: t.meal,
//     //         subtitle: "How was your in flight meal experience",
//     //         img: "/Surveys/meal_feedback1.png",
//     //         route: "/surveys?open=meal",
//     //     },
//     //     {
//     //         title: t.sales,
//     //         subtitle: "Drop us a message and we will reach out",
//     //         img: "/Surveys/sales_feedback2.png",
//     //         route: "/surveys?open=sales",
//     //     },
//     // ];

//     const surveyImages: Record<number, string> = {
//         1: "/Surveys/general_feedbacks.png",
//         2: "/Surveys/meal_feedback1.png",
//         3: "/Surveys/sales_feedback2.png",
//     };

//     const cards = surveys.map((s) => ({
//         title: s.Name ?? "",
//         description : s.Description,
//         img: surveyImages[s.SurveyID] || "/Surveys/default.png",
//         route: `/surveys?open=${s.SurveyID}`,
//     }));

//     return (
//         <main
//             className="relative min-h-screen"
//             dir={lang === "ur" ? "rtl" : "ltr"}
//         >
//             <div className="absolute inset-0">
//                 <Image
//                     src="/Surveys/main_banner1.png"
//                     alt="Banner"
//                     fill
//                     className="object-cover brightness-85"
//                     priority
//                 />
//                 <div className="absolute inset-0 bg-black/40" />
//             </div>

//             <div
//                 className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-4 sm:px-6 py-4"
//                 dir="ltr"
//             >
//                 <Image
//                     src="/Surveys/airblue.svg"
//                     alt="Airblue"
//                     width={189}
//                     height={38}
//                 />

//                 <div className="flex gap-2">
//                     <button style={{ width: "96px", height: "38px", fontSize: "16px", fontWeight: "400" }}
//                         onClick={() => setLang("en")}
//                         className={`px-4 py-2 rounded text-sm ${lang === "en"
//                             ? "text-white bg-gradient-to-r from-[#1E4560] to-[#3D8EC6]"
//                             : "bg-gray-200"
//                             }`}
//                     >
//                         English
//                     </button>

//                     <button style={{ width: "96px", height: "38px", fontSize: "16px", fontWeight: "400" }}
//                         onClick={() => setLang("ur")}
//                         className={`px-4 py-2 rounded text-sm ${lang === "ur"
//                             ? "text-white bg-gradient-to-r from-[#1E4560] to-[#3D8EC6]"
//                             : "bg-gray-200"
//                             }`}
//                     >
//                         اردو
//                     </button>
//                 </div>
//             </div>

//             <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-28 text-center">
//                 <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl" style={{ fontSize: "55px", fontWeight: "700" }}>
//                     {t.heading}
//                 </h1>

//                 <p className="text-white mt-2 text-lg sm:text-xl" style={{ fontSize: "30px", fontWeight: "400" }}>
//                     {t.tagline}
//                 </p>
//                 <br /><br />
//                 <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
//                     {cards.map((card, i) => (
//                         <div style={{ border: "2px solid white" }}
//                             key={i}
//                             onClick={() => router.push(card.route)}
//                             className="cursor-pointer rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105"
//                         >
//                             <div className="relative aspect-[16/10]">
//                                 <Image
//                                     src={card.img}
//                                     alt={card.title}
//                                     fill
//                                     className="object-cover"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                                 <div className="absolute bottom-1 left-4 right-4 z-10">
//                                     <h2 className="text-white text-lg" style={{ fontSize: "22px", fontWeight: "400", textAlign: "justify" }}>
//                                         {card.title}
//                                     </h2>
//                                     <p className="text-sm" style={{ fontSize: "16px", fontWeight: "400", color: "white", textAlign: "justify" }}>{card.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </main>
//     );
// }
"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

/* -------------------- Types -------------------- */

type Language = "en" | "ur";

type Survey = {
  SurveyID: number;
  Name: string | null;
  Description: string | null;
};

type Props = {
  surveys: Survey[];
};

/* -------------------- Translations -------------------- */

const translations: Record<
  Language,
  {
    heading: string;
    tagline: string;
  }
> = {
  en: {
    heading: "Share your feedback with us",
    tagline: "Shaping Our Tomorrow, Together.",
  },
  ur: {
    heading: "ہمارے ساتھ سفر کرنے کا شکریہ",
    tagline: "کل کو بہتر بنانے کے لیے، مل کر۔",
  },
};

/* -------------------- Hard-coded images -------------------- */

const surveyImages: Record<number, string> = {
  1: "/Surveys/general_feedbacks.png",
  2: "/Surveys/meal.png",
  3: "/Surveys/dropMessage.jpg",
};

/* -------------------- Component -------------------- */

export default function Home({ surveys }: Props) {
  const [lang, setLang] = useState<Language>("en");
  const router = useRouter();
  const t = translations[lang];

  const cards = surveys.map((s) => ({
    id: s.SurveyID,
    title: s.Name ?? "",
    description: s.Description ?? "",
    img: surveyImages[s.SurveyID] || "/Surveys/default.png",
    route: `/survey?open=${s.SurveyID}`,
  }));
  return (
    <main
      className="relative min-h-screen"
      dir={lang === "ur" ? "rtl" : "ltr"}
    >
      {/* ---------------- Background ---------------- */}
      {/* The fixed background container */}
      <div className="fixed inset-0 -z-10 w-full h-[100dvh] min-h-[100dvh] overflow-hidden bg-black">
        {/* Desktop Version */}
        <div className="hidden md:block h-full w-full relative">
          <Image
            src="/Surveys/mainBanner.png"
            alt="Desktop Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile Version */}
        <div className="block md:hidden h-full w-full relative">
          <Image
            src="/Surveys/mobileBanner.png" 
            alt="Mobile Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>

      {/* ---------------- Header ---------------- */}
      <header
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4"
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
            onClick={() => setLang("en")}
            className={`px-4 py-2 rounded ${
              lang === "en"
                ? "text-white bg-gradient-to-r from-[#1E4560] to-[#3D8EC6]"
                : "bg-gray-200"
            }`}
            style={{width:"90px", height:"38px"}}
          >
            English
          </button>

          <button
            onClick={() => setLang("ur")}
            className={`px-4 py-2 rounded ${
              lang === "ur"
                ? "text-white bg-gradient-to-r from-[#1E4560] to-[#3D8EC6]"
                : "bg-gray-200"
            }`}
            style={{width:"90px", height:"38px"}}
          >
            اردو
          </button>
        </div>
      </header>

      {/* ---------------- Content ---------------- */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-28 ">
        <h1 className="text-white font-bold text-4xl md:text-5xl" style={{fontSize:"55px",fontWeight:"600"}}>
          {t.heading}
        </h1>

        <p className="text-white mt-3 text-xl" style={{fontSize:"30px",fontWeight:"500"}}>{t.tagline}</p>

        {/* ---------------- Survey Cards ---------------- */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => router.push(card.route)}
              className="cursor-pointer rounded-xl overflow-hidden border-2 border-white shadow-lg transform transition hover:scale-105"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4">
                  <h2 className="text-white text-lg font-medium" style={{ fontSize: "22px", fontWeight: "400", textAlign: "justify" }}>
                    {card.title}
                  </h2>
                  <p className="text-sm" style={{ fontSize: "16px", fontWeight: "400", color: "white", textAlign: "justify" }}>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
