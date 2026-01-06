"use server";

import { prisma } from "@/lib/prisma";

type AnswerInput = {
  surveyId: number;
  questionId: number;
  optionId?: number;
  answerText?: string;
  Pnr?: string;
  Email?: string;
  ContactNumber?: string;
  Gender?: string;
  Occupation?: string;
  FlightNo?: string;
};

export async function submitSurveys(answers: AnswerInput[]) {
  const grouped = Object.values(
    answers.reduce((acc: any, curr) => {
      if (!acc[curr.surveyId]) acc[curr.surveyId] = [];
      acc[curr.surveyId].push(curr);
      return acc;
    }, {})
  );

  for (const surveyAnswers of grouped as any[]) {
    const surveyId : number = surveyAnswers[0].surveyId;

    await prisma.surveyResponse.create({
      data: {
        SurveyID: surveyId,
        SubmittedOn: new Date(),
        Pnr: surveyAnswers[0].Pnr ?? null,
        Email: surveyAnswers[0].Email ?? null,
        ContactNumber: surveyAnswers[0].ContactNumber ?? null,
        Gender: surveyAnswers[0].Gender ?? null,
        Occupation: surveyAnswers[0].Occupation ?? null,
        FlightNumber: surveyAnswers[0].FlightNo ?? null,
        SurveyAnswer: {
          create: surveyAnswers.map((a: AnswerInput) => ({
            QuestionID: a.questionId,
            SurveyQuestionOptionID: a.optionId ?? null,
            AnswerText: a.answerText ?? null,
          })),
        },
      },
    });
  }
}
