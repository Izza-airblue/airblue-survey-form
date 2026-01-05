"use client";

import { useEffect, useState } from "react";
import { RatingValue } from "../components/common/RatingScale";
import { useSearchParams } from "next/navigation";
import { MealSurvey } from "../components/MealSurvey";
import { SalesSurvey } from "../components/SalesSurvey";
import { GeneralSurvey } from "../components/GeneralSurvey";
import { CustomerInformation } from "../components/CustomerInformation";

export default function SurveyForms() {
  const searchParams = useSearchParams();
  const defaultOpen = searchParams.get("open");

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    if (defaultOpen) {
      setOpenAccordion(defaultOpen);
    }
  }, [defaultOpen]);

  const [ratings, setRatings] = useState<Record<string, RatingValue>>({});

  const toggle = (id: string) =>
    setOpenAccordion(openAccordion === id ? null : id);

  return (

    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">

          <CustomerInformation />

          {[
            { id: "sales", title: "Drop Us A Message" },
            { id: "general", title: "General Survey" },
            { id: "meal", title: "Meal Survey" },
          
          ].map(({ id, title }) => (
            <div key={id} className="card  mb-3 shadow-sm">
              <button
                type="button"
                onClick={() => toggle(id)}
                className="btn text-start fw-semibold card-header text-white"
                style={{background: "linear-gradient(90deg, rgba(30, 69, 96, 1), rgba(61, 142, 198, 1))"  }}
              >
                {title}
              </button>

              {openAccordion === id && (
                <div className="card-body border-top">

                  {id === "meal" && (
                    <MealSurvey ratings={ratings} setRatings={setRatings} />
                  )}

                  {id === "sales" && (
                    <SalesSurvey />
                  )}

                  {id === "general" && (
                    <GeneralSurvey ratings={ratings} setRatings={setRatings} />
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="text-center mt-4">
            <button className="btn px-5 py-3 text-white fw-semibold"
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