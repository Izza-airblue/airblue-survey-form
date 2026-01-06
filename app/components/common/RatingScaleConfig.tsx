// components/RatingScaleConfig.tsx
export type RatingValue = "poor" | "average" | "excellent";

export const ratingOptions = [
  {
    value: "poor",
    label: "Poor",
    icon: (
      <img
        src="/Icons/sad.svg"
        alt="Poor"
        style={{ width: 45, height: 45 }}
        className="w-6 h-6 inline-block"
      />
    ),
  },
  {
    value: "average",
    label: "Average",
    icon: (
      <img
        src="/Icons/happy.svg"
        alt="Average"
        style={{ width: 45, height: 45 }}
        className="w-6 h-6 inline-block"
      />
    ),
  },
  {
    value: "excellent",
    label: "Excellent",
    icon: (
      <img
        src="/Icons/excellent.svg"
        alt="Excellent"
        style={{ width: 45, height: 45 }}
        className="w-6 h-6 inline-block"
      />
    ),
  },
] as const;
