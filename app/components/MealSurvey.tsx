import { useState } from "react";
import RatingScale, { RatingValue } from "./common/RatingScale";

const mealQuestions = [
    "1. How satisfied were you with the meal experience?",
    "2. How would you rate the taste of your meal?",
    "3. How would you rate the freshness of the food items served?",
    "4. How was the meal variety and options offered?",
];

interface Props {
    ratings: Record<string, RatingValue>;
    setRatings: (value: Record<string, RatingValue>) => void
}

export const MealSurvey = ({ ratings, setRatings }: Props) => {
    const [mealType, setMealType] = useState("");

    return (
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
            <div className="mb-4">
                <label className="form-label fw-semibold">
                    6. We would love to hear about your meal experience
                </label>
                <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Please share any additional feedback or suggestions..."
                />
            </div>

        </>
    )
}