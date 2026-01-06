import type {
    Survey,
    SurveyQuestion,
    SurveyQuestionType,
    SurveyQuestionOption,
} from "@prisma/client";
import { Prisma } from "@prisma/client";

export type QuestionWithRelations =
  Prisma.SurveyQuestionGetPayload<{
    include: {
      SurveyQuestionType: true;
      SurveyQuestionOption: true;
    };
  }>;

export type SurveyWithRelations = Prisma.SurveyGetPayload<{
  include: {
    SurveyQuestion: {
      include: {
        SurveyQuestionType: true;
        SurveyQuestionOption: true;
      };
    };
  };
}>;
