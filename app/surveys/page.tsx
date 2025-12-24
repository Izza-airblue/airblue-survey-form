import { Suspense } from "react";
import FeedbackForms from "./FeedbackForms";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-5 text-center">Loading survey…</div>}>
      <FeedbackForms />
    </Suspense>
  );
}