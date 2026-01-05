import { prisma } from "@/lib/prisma";
import SurveyForms from "./SurveyForms";

export default async function SurveyPage() {
  const surveysCount = await prisma.survey.count();

  return <SurveyForms surveysCount={surveysCount} />;
}
