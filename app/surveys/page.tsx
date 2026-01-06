import { prisma } from "@/lib/prisma";
import SurveyForms from "./SurveyForms";
import { Suspense } from "react";

export default async function SurveyPage() {
  const surveysCount = await prisma.survey.count();

  return (
    <Suspense fallback={<div className="p-5 text-center">Loading surveys...</div>}>
      <SurveyForms surveysCount={surveysCount} />;
    </Suspense>
  )
}
