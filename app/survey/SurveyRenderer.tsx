"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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


// function validateBeforeSubmit(
//   customer: Partial<CustomerInfo>,
// ): string[] {
//   const errors: string[] = [];

//   if (!customer.Pnr?.trim()) {
//     errors.push("PNR is required");
//   }

//   if (!customer.ContactNumber?.trim()) {
//     errors.push("Contact number is required");
//   }

//   return errors;
// }

export function validateBeforeSubmit(
  customer: Partial<CustomerInfo>
): string[] {
  const errors: string[] = [];

  // PNR: required + exactly 6 digits
  if (!customer.Pnr?.trim()) {
    errors.push("PNR is required");
  } else if (!/^\d{6}$/.test(customer.Pnr)) {
    errors.push("PNR must be exactly 6 digits");
  }

  // Contact Number: required + numeric + length
  if (!customer.ContactNumber?.trim()) {
    errors.push("Contact number is required");
  } else if (!/^\d{7,15}$/.test(customer.ContactNumber)) {
    errors.push("Contact number must contain only digits (7–15 numbers)");
  }

  // Email: required + valid format
  if (!customer.Email?.trim()) {
    errors.push("Email is required");
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.Email)
  ) {
    errors.push("Please enter a valid email address");
  }

  // Gender: required
  if (!customer.Gender?.trim()) {
    errors.push("Gender is required");
  }

  // Occupation: required
  if (!customer.Occupation?.trim()) {
    errors.push("Occupation is required");
  }

  // Flight Number: required
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
    }
  }, [defaultOpen]);

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

    await submitSurveys(
      Object.values(answers).map((a) => ({
        ...a,
        ...customer,
      }))
    );

    setSubmitting(false);
    alert("All surveys submitted successfully!");
  };

  return (
    <div className="container py-5">
      <CustomerInformation customer={customer} onChange={setCustomer} />

      {surveys.map((survey) => {
        const key = survey.SurveyID.toString();
        const isOpen = openSurvey === key;

        return (
          <div key={survey.SurveyID} className="card shadow-sm mb-2">
            <button
              className="btn text-start fw-semibold card-header text-white d-flex justify-content-between align-items-center"
              onClick={() => setOpenSurvey(isOpen ? null : key)}
              style={{
                background:
                  "linear-gradient(130deg, rgba(30, 69, 96, 1), rgba(61, 142, 198, 1))",
              }}
            >
              {survey.Name}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
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
                  {/* The 'row' class is essential for the col-md-6 inside the child to work */}
                  <div className="row">
                      {survey.SurveyQuestion.map((q) => (
                          <QuestionRenderer
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
