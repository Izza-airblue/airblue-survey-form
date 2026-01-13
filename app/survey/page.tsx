export const dynamic = 'force-dynamic';
import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import SurveyRenderer from "./SurveyRenderer";
import type { SurveyWithRelations } from "../types/survey";
import Image from "next/image";

// 1. Separate the Data Fetching into its own component
async function SurveyList() {
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

  return <SurveyRenderer surveys={surveys} />;
}

// 2. Create a specific Loading UI component
function LoadingSpinner() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-5 rounded bg-white shadow-lg" style={{ minHeight: '300px' }}>
      <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <h4 className="fw-bold text-dark">Loading Surveys</h4>
      <p className="text-muted">Just a moment while we load your feedback forms...</p>
    </div>
  );
}

export default function SurveyPage() {
  return (
    <div className="relative h-screen w-full">
      {/* Fixed Background Banner - Shows immediately */}
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

      {/* Content Area */}
      <div className="relative flex items-start justify-center min-h-screen pt-10">
        <div className="w-full max-w-4xl px-4">
          {/* By putting SurveyList inside Suspense, the background and 
              spinner show up immediately while Prisma fetches the data.
          */}
          <Suspense fallback={<LoadingSpinner />}>
            <SurveyList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}