"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { MealSurvey } from "../components/MealSurvey";
import { SalesSurvey } from "../components/SalesSurvey";
import { GeneralSurvey } from "../components/GeneralSurvey";
import { CustomerInformation } from "../components/CustomerInformation";
import { RatingValue } from "../components/common/RatingScale";

export default function SurveyForms() {
  const searchParams = useSearchParams();
  const defaultOpen = searchParams.get("open");

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [ratings, setRatings] = useState<Record<string, RatingValue>>({});

  const surveys = [
    { id: "sales", title: "Drop Us A Message" },
    { id: "general", title: "General Survey" },
    { id: "meal", title: "Meal Survey" },
  ];

  const orderedSurveys = useMemo(() => {
    if (!defaultOpen) return surveys;
    return [
      surveys.find(s => s.id === defaultOpen)!,
      ...surveys.filter(s => s.id !== defaultOpen),
    ];
  }, [defaultOpen]);

  useEffect(() => {
    if (defaultOpen) setOpenAccordion(defaultOpen);
  }, [defaultOpen]);

  const toggle = (id: string) =>
    setOpenAccordion(openAccordion === id ? null : id);

  return (
    <main className="relative min-vh-100">

      {/* ✅ FULL SCREEN BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/Surveys/mainBanner.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ✅ CONTENT CONTAINER */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">

            <CustomerInformation />

            {orderedSurveys.map(({ id, title }) => (
              <div key={id} className="card shadow-sm mb-2">
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  className="btn text-start fw-semibold card-header text-white d-flex justify-content-between align-items-center"
                  style={{
                    background:
                      "linear-gradient(130deg, rgba(30, 69, 96, 1), rgba(61, 142, 198, 1))", border:"1px solid white"
                  }}
                >
                  {title}
                  <span
                    style={{
                      transition: "0.3s",
                      transform:
                        openAccordion === id
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    ⌄
                  </span>
                </button>

                {openAccordion === id && (
                  <div className="card-body bg-white">
                    {id === "meal" && (
                      <MealSurvey
                        ratings={ratings}
                        setRatings={setRatings}
                      />
                    )}
                    {id === "sales" && <SalesSurvey />}
                    {id === "general" && (
                      <GeneralSurvey
                        ratings={ratings}
                        setRatings={setRatings}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>

    </main>
  );
}
