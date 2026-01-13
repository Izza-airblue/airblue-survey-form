"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { QuestionRenderer } from "./QuestionRenderer";
import type { SurveyWithRelations } from "../types/survey";
import { CustomerInformation } from "../components/CustomerInformation";
import { submitSurveys } from "./submitsurvey";

type AnswerState = Record<
  number,
  {
    surveyId: number;
    questionId: number;
    optionId?: number;
    answerText?: string;
  }
>;

export type CustomerInfo = {
  Pnr: string;
  ContactNumber: string;
  Email?: string;
  Gender?: string;
  Occupation?: string;
  FlightNumber?: string;
};

export function validateBeforeSubmit(
  customer: Partial<CustomerInfo>
): string[] {
  const errors: string[] = [];

  if (!customer.Pnr?.trim()) {
    errors.push("PNR is required");
  } else if (!/^\d{6}$/.test(customer.Pnr)) {
    errors.push("PNR must be exactly 6 digits");
  }

  if (!customer.ContactNumber?.trim()) {
    errors.push("Contact number is required");
  } else if (!/^\d{7,15}$/.test(customer.ContactNumber)) {
    errors.push("Contact number must contain only digits (7–15 numbers)");
  }

  if (!customer.Email?.trim()) {
    errors.push("Email is required");
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.Email)
  ) {
    errors.push("Please enter a valid email address");
  }

  if (!customer.Gender?.trim()) {
    errors.push("Gender is required");
  }

  if (!customer.Occupation?.trim()) {
    errors.push("Occupation is required");
  }

  if (!customer.FlightNumber?.trim()) {
    errors.push("Flight number is required");
  }

  return errors;
}

export default function SurveyRenderer({
  surveys,
}: {
  surveys: SurveyWithRelations[];
}) {
  const searchParams = useSearchParams();
  const defaultOpen = searchParams.get("open");

  const [openSurvey, setOpenSurvey] = useState<string | null>(null);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [customer, setCustomer] = useState<Partial<CustomerInfo>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (defaultOpen) {
      setOpenSurvey(defaultOpen);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  }, [defaultOpen]);

  // Reorder surveys: Open one goes to index 0, others follow
  const orderedSurveys = useMemo(() => {
    if (!openSurvey) return surveys;
    
    const active = surveys.find((s) => s.SurveyID.toString() === openSurvey);
    const others = surveys.filter((s) => s.SurveyID.toString() !== openSurvey);

    return active ? [active, ...others] : surveys;
  }, [surveys, openSurvey]);

  const toggleSurvey = (key: string) => {
    if (openSurvey === key) {
      setOpenSurvey(null);
    } else {
      setOpenSurvey(key);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onAnswerChange = (payload: {
    surveyId: number;
    questionId: number;
    optionId?: number;
    answerText?: string;
  }) => {
    setAnswers((prev) => ({
      ...prev,
      [payload.questionId]: payload,
    }));
  };

  const handleSubmit = async () => {
    const errors = validateBeforeSubmit(customer);

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    setSubmitting(true);

    try {
      await submitSurveys(
        Object.values(answers).map((a) => ({
          ...a,
          ...customer,
        }))
      );
      alert("All surveys submitted successfully!");
    } catch (error) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <CustomerInformation customer={customer} onChange={setCustomer} />

      {orderedSurveys.map((survey) => {
        const key = survey.SurveyID.toString();
        const isOpen = openSurvey === key;

        return (
          <div 
            key={survey.SurveyID} 
            className={`card shadow-sm mb-2 ${isOpen ? "border-2 border-white" : ""}`}
            style={{ transition: "all 0.3s ease" }}
          >
            <button
              type="button"
              className="btn text-start fw-semibold card-header text-white d-flex justify-content-between align-items-center"
              onClick={() => toggleSurvey(key)}
              style={{
                background:
                  "linear-gradient(130deg, rgba(30, 69, 96, 1), rgba(61, 142, 198, 1))",
                  border:"1px solid white"
              }}
            >
              {survey.Name}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transition: "transform 0.3s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
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

            {isOpen && (
              <div className="card-body">
                <div className="row">
                  {survey.SurveyQuestion.map((q,index) => (
                    <QuestionRenderer
                      index={index+1}
                      key={q.SurveyQuestionID}
                      question={q}
                      surveyId={survey.SurveyID}
                      answers={answers}
                      onAnswerChange={onAnswerChange}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="text-center mt-4">
        <button
          disabled={submitting}
          onClick={handleSubmit}
          className="btn px-5 py-3 text-white fw-semibold"
          style={{
            borderRadius: "40px",
            background: "linear-gradient(90deg, #2C567E, #5B93C9)",
            boxShadow: "0 0 18px rgba(91,147,201,0.7)",
          }}
        >
          {submitting ? "Submitting..." : "Submit Feedback"}
        </button>
      </div>
    </div>
  );
}