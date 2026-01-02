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
    const [preferredMeal, setPreferredMeal] = useState("");
    const [servedMeal, setServedMeal] = useState("");

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
                {[
                { label: "Vegetarian", emoji: "🥬" },
                { label: "Non Vegetarian", emoji: "🍗" },
                ].map((item) => (
                <div
                    key={item.label}
                    onClick={() => setPreferredMeal(item.label)}
                    className={`flex items-center gap-2 py-1.5 p-2 border rounded-md cursor-pointer transition-all
                    ${
                        preferredMeal === item.label
                        ? "border-2 border-primary bg-primary/10 shadow-sm"
                        : "border-gray-300 hover:border-primary"
                    }
                    `}
                    style={{ height: "40px", width: "150px" }}
                >
                    <span className="text-base">{item.emoji}</span>
                    <span className="font-medium">{item.label}</span>
                </div>
                ))}
            </div>
            </div>
            <div className="mb-4">
            <label className="form-label fw-semibold">
                6. Which meal was served to you on flight?
            </label>

            <div className="d-flex gap-4">
                {[
                { label: "Vegetarian", emoji: "🥬" },
                { label: "Non Vegetarian", emoji: "🍗" },
                ].map((item) => (
                <div
                    key={item.label}
                    onClick={() => setServedMeal(item.label)}
                    className={`flex items-center gap-2 py-1.5 p-2 border rounded-md cursor-pointer transition-all
                    ${
                        servedMeal === item.label
                        ? "border-2 border-primary bg-primary/10 shadow-sm"
                        : "border-gray-300 hover:border-primary"
                    }
                    `}
                    style={{ height: "40px", width: "150px" }}
                >
                    <span className="text-base">{item.emoji}</span>
                    <span className="font-small">{item.label}</span>
                </div>
                ))}
            </div>
            </div>
            <div className="mb-4">
                <label className="form-label fw-semibold">
                    7. We would love to hear about your meal experience
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