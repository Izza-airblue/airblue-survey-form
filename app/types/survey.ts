import type {
    Survey,
    SurveyQuestion,
    SurveyQuestionType,
    SurveyQuestionOption,
} from "@prisma/client";
import { Prisma } from "@prisma/client";

export type QuestionWithRelations = SurveyQuestion & {
    SurveyQuestionType: SurveyQuestionType;
    SurveyQuestionOption: SurveyQuestionOption[];
};

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
