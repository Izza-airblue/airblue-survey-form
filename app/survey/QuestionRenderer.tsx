"use client";

import { useState } from "react";
import type { QuestionWithRelations } from "../types/survey";
import { SurveyQuestionOption } from "@prisma/client";
import "bootstrap/dist/css/bootstrap.min.css";

// Helper for Icons
export function getRatingIcon(optionText: string) {
    const text = optionText.toLowerCase();
    const iconStyle = { width: 50, height: 50 };

    switch (text) {
        case "poor":
            return <img src="/Icons/sad.svg" alt="Poor" style={iconStyle} />;
        case "average":
            return <img src="/Icons/happy.svg" alt="Average" style={iconStyle} />;
        case "excellent":
        case "good":
            return <img src="/Icons/excellent.svg" alt="Good" style={iconStyle} />;
        case "vegetarian":
            return <span style={{ fontSize: 24 }} title="Vegetarian">🥬</span>;
        case "non vegetarian":
            return <span style={{ fontSize: 24 }} title="Non Vegetarian">🍗</span>;
        default:
            return null;
    }
}

type AnswerState = Record<
    number,
    {
        surveyId: number;
        questionId: number;
        optionId?: number;
        answerText?: string;
    }
>;

export function QuestionRenderer({
    index,
    question,
    surveyId,
    onAnswerChange,
    answers,
}: {
    index:Number
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
    // Determine if this question is currently selected (for MCQ styling)
    const currentAnswer = answers[question.SurveyQuestionID];
    const type = question.SurveyQuestionType?.QuestionType;

    // Determine column width: OpenEnded gets 12 (full row), others get 6 (half row)
    const columnClass = type === "OpenEnded" ? "col-12" : "col-12 col-md-6";
    // Wrap the return in the col-md-6 to ensure two columns per row
    return (
        <div className={`${columnClass} mb-4 d-flex flex-column`}>
            <div className="h-100">
                <label className="fw-bold mb-3 d-block">
                   {index+'. '}{question.QuestionText}
                </label>

                {renderQuestionInput()}
            </div>
        </div>
    );

    function renderQuestionInput() {
        switch (question.SurveyQuestionType?.QuestionType) {
            case "MCQ":
                return (
                    <div className="d-flex gap-3 flex-wrap" style={{minWidth:"100px"}}>
                        {question.SurveyQuestionOption.map((opt) => {
                            const isSelected = currentAnswer?.optionId === opt.SurveyQuestionOptionID;
                            const icon = getRatingIcon(opt.OptionText);

                            return (
                                <div
                                    key={opt.SurveyQuestionOptionID}
                                    onClick={() => onAnswerChange({
                                        surveyId,
                                        questionId: question.SurveyQuestionID,
                                        optionId: opt.SurveyQuestionOptionID,
                                    })}
                                    className={`text-center p-2 rounded cursor-pointer border ${
                                        isSelected 
                                            ? "border-primary bg-primary bg-opacity-10" 
                                            : "border-light-subtle bg-light"
                                    }`}
                                    style={{ minWidth: "60px", cursor: "pointer" }}
                                >
                                    {icon && <div className="mb-1">{icon}</div>}
                                    <div style={{ fontSize: "0.85rem" }}>{opt.OptionText}</div>
                                </div>
                            );
                        })}
                    </div>
                );
            case "Dropdown":
                return (
                    <select
                        className="form-select"
                        value={currentAnswer?.optionId ?? ""}
                        onChange={(e) => onAnswerChange({
                            surveyId,
                            questionId: question.SurveyQuestionID,
                            optionId: Number(e.target.value),
                        })}
                    >
                        <option value="">Please Choose...</option>
                        {question.SurveyQuestionOption.map((opt) => (
                            <option key={opt.SurveyQuestionOptionID} value={opt.SurveyQuestionOptionID}>
                                {opt.OptionText}
                            </option>
                        ))}
                    </select>
                );

            case "OpenEnded":
                return (
                    <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Please share your feedback"
                        value={currentAnswer?.answerText ?? ""}
                        onChange={(e) => onAnswerChange({
                            surveyId,
                            questionId: question.SurveyQuestionID,
                            answerText: e.target.value,
                        })}
                    />
                );

            default:
                return <p className="text-muted">Unsupported question type</p>;
        }
    }
}