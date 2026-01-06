"use client";

import { useEffect, useMemo, useState } from "react";
import { RatingValue } from "../components/common/RatingScale";
import { useSearchParams } from "next/navigation";
import { MealSurvey } from "../components/MealSurvey";
import { SalesSurvey } from "../components/SalesSurvey";
import { GeneralSurvey } from "../components/GeneralSurvey";
import { CustomerInformation } from "../components/CustomerInformation";
import Image from "next/image";

type SurveyItem = {
  id: "sales" | "general" | "meal";
  title: string;
};

export default function SurveyForms() {
  const searchParams = useSearchParams();
  const defaultOpen = searchParams.get("open") as SurveyItem["id"] | null;

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [ratings, setRatings] = useState<Record<string, RatingValue>>({});

  const surveys: SurveyItem[] = [
    { id: "sales", title: "Drop Us A Message" },
    { id: "general", title: "General Survey" },
    { id: "meal", title: "Meal Survey" },
  ];

  // 🔥 Reorder surveys so clicked one comes FIRST
  const orderedSurveys = useMemo(() => {
    if (!defaultOpen) return surveys;

    return [
      surveys.find(s => s.id === defaultOpen)!,
      ...surveys.filter(s => s.id !== defaultOpen),
    ];
  }, [defaultOpen]);

  useEffect(() => {
    if (defaultOpen) {
      setOpenAccordion(defaultOpen);
    }
  }, [defaultOpen]);

  const toggle = (id: string) =>
    setOpenAccordion(openAccordion === id ? null : id);

  return (
    <main className="relative container py-5">

      {/* ===== Background Banner (FIXED & SAFE) ===== */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Surveys/mainBanner.png"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">

          <CustomerInformation />

          {orderedSurveys.map(({ id, title }) => (
            <div key={id} className="card shadow-sm mb-3">
              <button
                type="button"
                onClick={() => toggle(id)}
                className="btn text-start fw-semibold card-header text-white d-flex justify-content-between align-items-center"
                style={{
                  background:
                    "linear-gradient(130deg, rgba(30, 69, 96, 1), rgba(61, 142, 198, 1))",
                }}
              >
                {title}

                {/* Chevron */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transition: "transform 0.3s",
                    transform:
                      openAccordion === id
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {openAccordion === id && (
                <div className="card-body border-top bg-white">
                  {id === "meal" && (
                    <MealSurvey ratings={ratings} setRatings={setRatings} />
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

          <div className="text-center mt-4">
            <button
              className="btn px-5 py-3 text-white fw-semibold"
              style={{
                borderRadius: "40px",
                background: "linear-gradient(90deg, #2C567E, #5B93C9)",
                boxShadow: "0 0 18px rgba(91,147,201,0.7)",
              }}
            >
              Submit Feedback
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
