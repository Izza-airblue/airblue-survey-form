// app/page.tsx
import { prisma } from "@/lib/prisma";
import Home from "./home";

export default async function HomePage() {
  const surveys = await prisma.survey.findMany({
    select: {
      SurveyID: true,
      Name: true,
      Description: true,
    },
    orderBy: {
      SurveyID: "asc",
    },
  });

  return <Home surveys={surveys} />;
}
