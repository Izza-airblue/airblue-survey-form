"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MealSurvey } from "../components/MealSurvey";
import { SalesSurvey } from "../components/SalesSurvey";
import { GeneralSurvey } from "../components/GeneralSurvey";
import { RatingValue } from "../components/common/RatingScale";

type Props = {
  surveysCount: number;
};

export default function SurveyForms({ surveysCount }: Props) {
  const searchParams = useSearchParams();
  const defaultOpen = searchParams.get("open");

  const surveys = [
    { id: "sales", title: "Drop Us A Message" },
    { id: "general", title: "General Survey" },
    { id: "meal", title: "Meal Survey" },
  ];

  // Track open accordion
  const [openAccordion, setOpenAccordion] = useState<string | null>(defaultOpen);

  // Track which survey should move to top
  const [topSurvey, setTopSurvey] = useState<string | null>(defaultOpen);

  const [ratings, setRatings] = useState<Record<string, RatingValue>>({});

  const toggle = (id: string) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
      setTopSurvey(null);
    } else {
      setOpenAccordion(id);
      setTopSurvey(id);

      // Scroll selected survey to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Reorder surveys so selected one appears first
  const orderedSurveys = useMemo(() => {
    if (!topSurvey) return surveys;

    const top = surveys.find((s) => s.id === topSurvey);
    const others = surveys.filter((s) => s.id !== topSurvey);

    return top ? [top, ...others] : surveys;
  }, [topSurvey, surveys]);

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          {orderedSurveys.map(({ id, title }) => (
            <div
              key={id}
              className={`card shadow-sm mb-2 ${
                topSurvey === id ? "border border-primary" : ""
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
                <div className="card-body border-top">
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
