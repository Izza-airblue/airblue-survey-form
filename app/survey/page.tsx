import { prisma } from "@/lib/prisma";
import SurveyRenderer from "./SurveyRenderer";
import type { SurveyWithRelations } from "../types/survey";

export default async function SurveyPage() {
  const surveys : SurveyWithRelations[] = await prisma.survey.findMany({
    orderBy: { SurveyID: "asc" },
    include: {
      SurveyQuestion: {
        include: {
          SurveyQuestionType: true,
          SurveyQuestionOption: true,
        },
      },
    },
  });

  return <SurveyRenderer surveys={surveys} />;
}
