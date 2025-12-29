import { Suspense } from "react";
import SurveyForms from "./SurveyForms";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-5 text-center">Loading survey…</div>}>
      <SurveyForms />
    </Suspense>
  );
}