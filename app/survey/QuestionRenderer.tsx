"use client";

import { useState } from "react";
import type { QuestionWithRelations } from "../types/survey";
import { RatingValue } from "../components/common/RatingScaleConfig";
export function getRatingIcon(optionText: string) {
    switch (optionText.toLowerCase()) {
        case "poor":
            return (
                <img
                    src="/Icons/sad.svg"
                    alt="Poor"
                    style={{ width: 45, height: 45 }}
                    className="w-6 h-6 inline-block"
                />
            );

        case "average":
            return (
                <img
                    src="/Icons/happy.svg"
                    alt="Average"
                    style={{ width: 45, height: 45 }}
                    className="w-6 h-6 inline-block"
                />
            );

        case "excellent":
            return (
                <img
                    src="/Icons/excellent.svg"
                    alt="Excellent"
                    style={{ width: 45, height: 45 }}
                    className="w-6 h-6 inline-block"
                />
            );
        case "good":
            return (
                <img
                    src="/Icons/excellent.svg"
                    alt="Good"
                    style={{ width: 45, height: 45 }}
                    className="w-6 h-6 inline-block"
                />
            );
        case "vegetarian":
            return (
                <img
                    src="/Icons/excellent.svg"
                    alt="Good"
                    style={{ width: 45, height: 45 }}
                    className="w-6 h-6 inline-block"
                />
            );
        case "non vegetarian":
            return (
                <img
                    src="/Icons/excellent.svg"
                    alt="Good"
                    style={{ width: 45, height: 45 }}
                    className="w-6 h-6 inline-block"
                />
            );

        default:
            return null;
    }
}

export function QuestionRenderer({
    question,
    surveyId,
    onAnswerChange,
    answers,
}: {
    question: QuestionWithRelations;
    surveyId: number;
    answers: AnswerState;
    onAnswerChange: (payload: {
        surveyId: number;
        questionId: number;
        optionId?: number;
        answerText?: string;
    }) => void;
}) {
    const [rating, setRating] = useState<RatingValue | undefined>();
    const [selectedOptionId, setSelectedOptionId] = useState<number>();
    switch (question.SurveyQuestionType.QuestionType) {
        case "MCQ":
            return (
                <div className="mb-4">
                    <label className="fw-semibold d-block mb-2">
                        {question.QuestionText}
                    </label>

                    <div className="d-flex gap-3 flex-wrap">
                        {question.SurveyQuestionOption.map((opt) => {
                            const icon = getRatingIcon(opt.OptionText);

                            const isSelected =
                                answers[question.SurveyQuestionID]?.optionId ===
                                opt.SurveyQuestionOptionID;

                            return (
                                <div
                                    key={opt.SurveyQuestionOptionID}
                                    onClick={() => {
                                        onAnswerChange({
                                            surveyId,
                                            questionId: question.SurveyQuestionID,
                                            optionId: opt.SurveyQuestionOptionID,
                                        });
                                    }}
                                    className={`text-center p-3 rounded cursor-pointer transition-all
        ${isSelected
                                            ? "border-2 border-primary shadow bg-primary bg-opacity-10 scale-105"
                                            : "border border-gray-300 hover:border-primary"
                                        }
      `}
                                    style={{ width: 110 }}
                                >
                                    {icon && <div className="mb-1">{icon}</div>}
                                    <small className="d-block">{opt.OptionText}</small>
                                </div>
                            );
                        })}

                    </div>
                </div>
            );

        case "Dropdown":
            return (
                <div className="mb-4">
                    <label className="fw-semibold">{question.QuestionText}</label>

                    <select className="form-select mt-2" value={answers[question.SurveyQuestionID]?.optionId ?? ""}
                        onChange={(e) =>
                            onAnswerChange({
                                surveyId,
                                questionId: question.SurveyQuestionID,
                                optionId: Number(e.target.value),
                            })
                        }
                    >
                        <option value="">Please Choose...</option>
                        {question.SurveyQuestionOption.map((opt) => (
                            <option
                                key={opt.SurveyQuestionOptionID}
                                value={opt.SurveyQuestionOptionID}
                            >
                                {opt.OptionText}
                            </option>
                        ))}
                    </select>
                </div>
            );

        case "OpenEnded":
            return (
                <div className="mb-4">
                    <label className="fw-semibold">{question.QuestionText}</label>
                    <textarea
                        className="form-control mt-2"
                        rows={3}
                        placeholder="Please share your feedback"
                        value={answers[question.SurveyQuestionID]?.answerText ?? ""}
                        onChange={(e) =>
                            onAnswerChange({
                                surveyId,
                                questionId: question.SurveyQuestionID,
                                answerText: e.target.value,
                            })
                        }

                    />
                </div>
            );

        default:
            return null;
    }
}
