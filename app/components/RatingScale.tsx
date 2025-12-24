"use client";

type RatingValue = "poor" | "average" | "excellent";

const ratingOptions = [
  { value: "poor", label: "Poor", emoji: "😞" },
  { value: "average", label: "Average", emoji: "😐" },
  { value: "excellent", label: "Excellent", emoji: "😊" },
] as const;

interface Props {
  question: string;
  value?: RatingValue;
  onChange: (value: RatingValue) => void;
}

export default function RatingScale({ question, value, onChange }: Props) {
  return (
    <div>
      {/* <label className="form-label fw-semibold">{question}</label> */}

      <div className="d-flex gap-3 mt-2">
        {ratingOptions.map((opt) => (
          <div
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`border rounded text-center p-3 ${
              value === opt.value ? "border-primary shadow-sm" : ""
            }`}
            style={{ cursor: "pointer", width: 100 }}
          >
            <div style={{ fontSize: 24 }}>{opt.emoji}</div>
            <small>{opt.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export type { RatingValue };