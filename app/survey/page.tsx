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
    /* Change 1: Use min-h-screen and remove h-screen so the page can grow with the form */
    <div className="relative min-h-[100dvh] w-full bg-black">
      
      {/* Fixed Background Banner - Locked to the viewport */}
      <div className="fixed inset-0 -z-10 h-[100dvh] w-full overflow-hidden">
        {/* Desktop Banner */}
        <div className="hidden md:block h-full w-full relative">
          <Image
            src="/Surveys/mainBanner.png"
            alt="Banner"
            fill
            className="object-cover brightness-90"
            priority
          />
        </div>

        {/* Mobile Banner - Static and dark */}
        <div className="block md:hidden h-full w-full relative">
          <Image
            src="/Surveys/mobileBanner.png" 
            alt="Mobile Banner"
            fill
            className="object-cover"
            priority
          />
          {/* Mobile-only dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>

      {/* Content Area */}
      {/* Change 2: Ensure this flex container doesn't restrict height */}
      <div className="relative z-10 flex items-start justify-center min-h-screen pt-10 pb-10">
        <div className="w-full max-w-4xl px-4">
          <Suspense fallback={<LoadingSpinner />}>
            <SurveyList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}