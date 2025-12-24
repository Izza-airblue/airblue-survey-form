"use client";

import { useEffect, useState } from "react";
import RatingScale, { RatingValue } from "../components/RatingScale";
import { useSearchParams } from "next/navigation";

export default function feedbackForms() {
      const searchParams = useSearchParams();
    const defaultOpen = searchParams.get("open");

    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    useEffect(() => {
      if (defaultOpen) {
        setOpenAccordion(defaultOpen);
      }
    }, [defaultOpen]);
  const [ratings, setRatings] = useState<Record<string, RatingValue>>({});
  const [mealType, setMealType] = useState("");

  const generalQuestions = [
    "3. How was your booking experience with us?",
    "4. How was your check-in / Boarding experience at terminal?",
    "5. How was your experience with our cabin crew?",
    "6. How satisfied are you with cabin and lavatory cleanliness?",
    "7. How do you like our feedback mechanism?",
    "8. How satisfied were you with your flight today?",
  ];

  const mealQuestions = [
    "1. How satisfied were you with the meal experience?",
    "2. How would you rate the taste of your meal?",
    "3. How would you rate the freshness of the food items served?",
    "4. How was the meal variety and options offered?",
  ];

  const toggle = (id: string) =>
    setOpenAccordion(openAccordion === id ? null : id);

  return (
    
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">

           {/* Passenger Info */} 
           <div className="card mb-4 shadow-sm">
             <div className="card-header text-white" style={{ background: "linear-gradient(90deg,#2C567E,#5B93C9)" }} >
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
                         <div className="col-md-4">
                           <label className="form-label fw-semibold">Flight No</label> 
                           <input className="form-control form-control-lg" />
                           </div> 
                    <div className="col-md-4">
                             <label className="form-label fw-semibold">Gender</label>
                              <select className="form-select form-select-lg"> <option value="">Please choose...</option> 
                              <option>Male</option>
                               <option>Female</option> 
                               <option>Prefer not to say</option> 
                               </select> 
                        </div> 
                               <div className="col-md-4"> 
                                <label className="form-label fw-semibold">Occupation</label>
                                 <input className="form-control form-control-lg" />
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

                  {/* MEAL SURVEY */}
                  {id === "meal" && (
                    <>
                      <div className="row g-4 mb-4">
                        {mealQuestions.map((q, index) => {
                          const key = `meal-${index}`;
                          return (
                            <div key={`meal-q-${index}`} className="col-md-6">
                              <label className="form-label fw-semibold">
                                {q}
                              </label>
                                <RatingScale
                                  question={q}
                                  value={ratings[`meal-${index}`]}
                                  onChange={(val) =>
                                    setRatings({ ...ratings, [`meal-${index}`]: val })
                                  }
                                />
                            </div>
                          );
                        })}
                      </div>

                      {/* Meal Preference */}
                      <div className="mb-4">
                        <label className="form-label fw-semibold">
                          5. Do you prefer a vegetarian or a non-vegetarian meal?
                        </label>
                        <div className="d-flex gap-4">
                          {["Vegetarian Meal", "Non Vegetarian Meal"].map(
                            (type) => (
                              <div key={type} className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="mealType"
                                  onChange={() => setMealType(type)}
                                />
                                <label className="form-check-label">
                                  {type}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Please share any additional feedback or suggestions..."
                      />
                    </>
                  )}

                  {/* SALES SURVEY (UNCHANGED) */}
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

                  {/* GENERAL SURVEY */}
                  {id === "general" && (
                    <>
                      <div className="row g-4 mb-4">
                        {/* Q1 & Q2 */} 
                        <div className="row g-4 mb-4"> <div className="col-md-6"> <label className="form-label fw-semibold"> 1. How did you purchase your ticket? </label> <select className="form-select"> <option>Please Choose...</option> <option>Website</option> <option>Mobile App</option> <option>Travel Agent</option> <option>Call Center</option> </select> </div> <div className="col-md-6"> <label className="form-label fw-semibold"> 2. How did you hear about us? </label> <select className="form-select"> <option>Please Choose...</option> <option>Social Media</option> <option>Website</option> <option>Friend / Family</option> <option>Advertisement</option> </select> </div> </div>
                        {generalQuestions.map((question, index) => {
                          const key = `general-${index}`;
                          return (
                            <div key={`general-q-${index}`} className="col-md-6">
                              <label className="form-label fw-semibold">
                                {question}
                              </label>

                              <RatingScale
                                  question={question}
                                  value={ratings[`general-${index}`]}
                                  onChange={(val) =>
                                    setRatings({ ...ratings, [`general-${index}`]: val })
                                  }
/>
                            </div>
                          );
                        })}
                      </div>
                        {/* Recommendation */} 
                        <div className="mb-4"> 
                            <label className="form-label fw-semibold"> 9. How likely are you to recommend us? </label>
                             <div className="d-flex gap-4"> {["Not At All Likely", "Maybe", "Very Likely"].map((label) => ( <div key={label} className="form-check"> <input className="form-check-input" type="radio" name="recommend" /> 
                             <label className="form-check-label">{label}</label> </div> ))} </div> </div>
                      
                      {/* Feedback */} 
                      <div className="mb-4"> 
                        <label className="form-label fw-semibold"> 10. We would love to hear about your experience, share your feedback below </label>
                         <textarea className="form-control" rows={4} placeholder="Please share any additional feedback or suggestions..." />
                     </div>
                    </>
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