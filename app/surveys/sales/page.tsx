"use client";

import { useState } from "react";

type RatingValue = "poor" | "average" | "excellent";

const ratingOptions: {
  value: RatingValue;
  label: string;
  emoji: string;
}[] = [
  { value: "poor", label: "Poor", emoji: "😞" },
  { value: "average", label: "Average", emoji: "😐" },
  { value: "excellent", label: "Excellent", emoji: "😊" },
];

export default function SalesSurveyPage() {
    const [ratings, setRatings] = useState<Record<number, RatingValue>>({});

  const questions = [
    "3. How was your booking experience with us?",
    "4. How was your check-in / Boarding experience at terminal?",
    "5. How was your experience with our cabin crew?",
    "6. How satisfied are you with cabin and lavatory cleanliness?",
    "7. How do you like our feedback mechanism?",
    "8. How satisfied were you with your flight today?",
  ];

  return (
         <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">

          {/* ===== Main Card (Passenger Info) ===== */}
          <div className="card mb-4 shadow-sm">
            <div
              className="card-header text-white"
              style={{
                background: "linear-gradient(90deg, #2C567E, #5B93C9)",
              }}
            >
              <h5 className="mb-0">Passenger Information</h5>
            </div>

            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    PNR <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control form-control-lg"
                    placeholder="Enter PNR"
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Contact No <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control form-control-lg"
                    placeholder="Enter contact no"
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Email ID
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter email id"
                  />
                </div>
                  {/* Row 2 */}
                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Flight No
                  </label>
                  <input
                    className="form-control form-control-lg"
                    placeholder="e.g. PA-203"
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Gender
                  </label>
                  <select className="form-select form-select-lg">
                    <option value="">Please choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Occupation
                  </label>
                  <input
                    className="form-control form-control-lg"
                    placeholder="Enter occupation"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* ===== Collapsible Survey Cards ===== */}
          <div className="accordion" id="surveyAccordion">

            {/* Meal Survey */}
            <div className="accordion-item mb-3 border rounded shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-semibold"
                  data-bs-toggle="collapse"
                  data-bs-target="#mealSurvey"
                >
                  Meal Survey
                </button>
              </h2>
              <div
                id="mealSurvey"
                className="accordion-collapse collapse"
                data-bs-parent="#surveyAccordion"
              >
                <div className="accordion-body">
                  <label className="form-label">Meal Quality</label>
                  <select className="form-select mb-3">
                    <option>Please choose...</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>Poor</option>
                  </select>

                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Meal feedback..."
                  />
                </div>
              </div>
            </div>

            {/* Sales Survey */}
            <div className="accordion-item mb-3 border rounded shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-semibold"
                  data-bs-toggle="collapse"
                  data-bs-target="#salesSurvey"
                >
                  Sales Survey
                </button>
              </h2>
              <div
                id="salesSurvey"
                className="accordion-collapse collapse"
                data-bs-parent="#surveyAccordion"
              >
                <div className="accordion-body">
                  <label className="form-label">Booking Experience</label>
                  <select className="form-select mb-3">
                    <option>Please choose...</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>Poor</option>
                  </select>

                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Sales feedback..."
                  />
                </div>
              </div>
            </div>

            {/* General Survey */}
            <div className="accordion-item mb-3 border rounded shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-semibold"
                  data-bs-toggle="collapse"
                  data-bs-target="#generalSurvey"
                >
                  General Survey
                </button>
              </h2>
              <div
                id="generalSurvey"
                className="accordion-collapse collapse"
                data-bs-parent="#surveyAccordion"
              >
                   <div className="accordion-body">

                {/* Q1 & Q2 */}
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      1. How did you purchase your ticket?
                    </label>
                    <select className="form-select">
                      <option>Please Choose...</option>
                      <option>Website</option>
                      <option>Mobile App</option>
                      <option>Travel Agent</option>
                      <option>Call Center</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      2. How did you hear about us?
                    </label>
                    <select className="form-select">
                      <option>Please Choose...</option>
                      <option>Social Media</option>
                      <option>Website</option>
                      <option>Friend / Family</option>
                      <option>Advertisement</option>
                    </select>
                  </div>
                </div>

                {/* Emoji Rating Questions */}
                {questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <label className="form-label fw-semibold">{question}</label>

                    <div className="d-flex gap-4 mt-2">
                      {ratingOptions.map((option) => {
                        const selected = ratings[index] === option.value;

                        return (
                          <div
                            key={option.value}
                            onClick={() =>
                              setRatings({ ...ratings, [index]: option.value })
                            }
                            className={`text-center p-3 rounded cursor-pointer ${
                              selected
                                ? "border border-primary shadow-sm"
                                : "border"
                            }`}
                            style={{
                              cursor: "pointer",
                              transform: selected ? "scale(1.1)" : "scale(1)",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <div style={{ fontSize: "28px" }}>
                              {option.emoji}
                            </div>
                            <small className="d-block mt-1">
                              {option.label}
                            </small>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Recommendation */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    9. How likely are you to recommend us?
                  </label>

                  <div className="d-flex gap-4">
                    {["Not At All Likely", "Maybe", "Very Likely"].map((label) => (
                      <div key={label} className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="recommend"
                        />
                        <label className="form-check-label">{label}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feedback */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    10. We would love to hear about your experience
                  </label>

                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Please share any additional feedback or suggestions..."
                  />
                </div>

              </div>
              </div>
            </div>

          </div>

          {/* Submit */}
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