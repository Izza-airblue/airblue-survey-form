"use client";

import { useState } from "react";

type RatingValue = "poor" | "average" | "excellent";

const ratingOptions = [
  { value: "poor", label: "Poor", emoji: "😞" },
  { value: "average", label: "Average", emoji: "😐" },
  { value: "excellent", label: "Excellent", emoji: "😊" },
] as const;

export default function SalesSurveyPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [ratings, setRatings] = useState<Record<number, RatingValue>>({});

  const questions = [
    "3. How was your booking experience with us?",
    "4. How was your check-in / Boarding experience at terminal?",
    "5. How was your experience with our cabin crew?",
    "6. How satisfied are you with cabin and lavatory cleanliness?",
    "7. How do you like our feedback mechanism?",
    "8. How satisfied were you with your flight today?",
  ];

  const toggle = (id: string) =>
    setOpenAccordion(openAccordion === id ? null : id);

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">

          {/* Passenger Info */}
          <div className="card mb-4 shadow-sm">
            <div
              className="card-header text-white"
              style={{ background: "linear-gradient(90deg,#2C567E,#5B93C9)" }}
            >
              <h5 className="mb-0">Passenger Information</h5>
            </div>
            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-4">
                  <label className="form-label fw-semibold">PNR *</label>
                  <input className="form-control form-control-lg" />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Contact No *</label>
                  <input className="form-control form-control-lg" />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Email</label>
                  <input type="email" className="form-control form-control-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Accordion */}
          {[
            { id: "meal", title: "Meal Survey" },
            { id: "sales", title: "Sales Survey" },
            { id: "general", title: "General Survey" },
          ].map(({ id, title }) => (
            <div key={id} className="card mb-3 shadow-sm">
              <button
                type="button"
                onClick={() => toggle(id)}
                className="btn text-start fw-semibold"
                style={{ padding: "16px" }}
              >
                {title}
              </button>

              {openAccordion === id && (
                <div className="card-body border-top">

                  {id === "meal" && (
                    <>
                      <select className="form-select mb-3">
                        <option>Please choose...</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Average</option>
                        <option>Poor</option>
                      </select>
                      <textarea className="form-control" rows={3} />
                    </>
                  )}

                  {id === "sales" && (
                    <>
                      <select className="form-select mb-3">
                        <option>Please choose...</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Average</option>
                        <option>Poor</option>
                      </select>
                      <textarea className="form-control" rows={3} />
                    </>
                  )}

                  {id === "general" && (
                    <>
                      <div className="row g-4 mb-4">
                        {questions.map((question, index) => (
                          <div key={index} className="col-md-6">
                            <label className="form-label fw-semibold">
                              {question}
                            </label>

                            <div className="d-flex gap-3 mt-2">
                              {ratingOptions.map((option) => (
                                <div
                                  key={option.value}
                                  onClick={() =>
                                    setRatings({
                                      ...ratings,
                                      [index]: option.value,
                                    })
                                  }
                                  className={`p-3 rounded border text-center ${
                                    ratings[index] === option.value
                                      ? "border-primary shadow"
                                      : ""
                                  }`}
                                  style={{ cursor: "pointer", minWidth: 80 }}
                                >
                                  <div style={{ fontSize: 28 }}>
                                    {option.emoji}
                                  </div>
                                  <small>{option.label}</small>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Additional feedback..."
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="text-center mt-4">
            <button className="btn btn-primary px-5 py-3">
              Submit Feedback
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}