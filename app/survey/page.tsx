export const dynamic = 'force-dynamic';
import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import SurveyRenderer from "./SurveyRenderer";
import type { SurveyWithRelations } from "../types/survey";
import Image from "next/image";

export default async function SurveyPage() {
  const surveys: SurveyWithRelations[] = await prisma.survey.findMany({
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

  return (
<>
  <div className="relative h-screen w-full">
  {/* Fixed Background Banner */}
  <div className="fixed inset-0 -z-10">
    <Image
      src="/Surveys/mainBanner.png"
      alt="Banner"
      fill
      className="object-cover brightness-90"
      priority
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* Survey Form over Banner */}
  <div className="relative flex items-start justify-center min-h-screen">
    <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-auto">
      <Suspense fallback={<div className="p-5 text-center">Loading surveys...</div>}>
        <SurveyRenderer surveys={surveys} />
      </Suspense>
    </div>
  </div>
</div>
</>
  );
}
