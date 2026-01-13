"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { MealSurvey } from "../components/MealSurvey";
import { SalesSurvey } from "../components/SalesSurvey";
import { GeneralSurvey } from "../components/GeneralSurvey";
import { RatingValue } from "../components/common/RatingScale";

type Props = {
  surveysCount: number;
};
console.log("iamher");
// Update 1: Numeric IDs
const surveys = [
  { id: 3, title: "Drop Us A Message", type: "sales" },
  { id: 1, title: "General Survey", type: "general" },
  { id: 2, title: "Meal Survey", type: "meal" },
];

export default function SurveyForms({ surveysCount }: Props) {
  const searchParams = useSearchParams();
  // Update 2: State now tracks numeric ID
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [ratings, setRatings] = useState<Record<string, RatingValue>>({});

  useEffect(() => {
    const openParam = searchParams.get("open");
    if (openParam !== null) {
      const idFromQuery = Number(openParam);
      // Check if the ID exists in our survey list
      if (surveys.some(s => s.id === idFromQuery)) {
        setOpenAccordion(idFromQuery);
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
      }
    }
  }, [searchParams]);

  const toggle = (id: number) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Update 3: Logic to move the open survey to the top
  const orderedSurveys = useMemo(() => {
    if (openAccordion === null) return surveys;
    
    const top = surveys.find((s) => s.id === openAccordion);
    const rest = surveys.filter((s) => s.id !== openAccordion);
    
    return top ? [top, ...rest] : surveys;
  }, [openAccordion]);

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          {orderedSurveys.map(({ id, title, type }) => (
            <div
              key={id} 
              className={`card shadow-sm mb-2 ${
                openAccordion === id ? "border border-primary" : ""
              }`}
            >
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
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    transition: "transform 0.3s",
                    transform: openAccordion === id ? "rotate(180deg)" : "rotate(0deg)",
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
                <div className="card-body border-top">
                  {/* Render based on the 'type' property */}
                  {type === "meal" && (
                    <MealSurvey ratings={ratings} setRatings={setRatings} />
                  )}
                  {type === "sales" && <SalesSurvey />}
                  {type === "general" && (
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