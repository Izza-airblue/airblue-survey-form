
type RatingValue = "poor" | "average" | "excellent";

const ratingOptions = [
  { value: "poor", label: "Poor", emoji: <img src="/icons/sad.svg" alt="Sad" className="w-6 h-6 inline-block"/> },
  { value: "average", label: "Average", emoji: <img src="/icons/happy.svg" alt="Sad" className="w-6 h-6 inline-block"/> },
  { value: "excellent", label: "Excellent", emoji: <img src="/icons/excellent.svg" alt="Sad" className="w-6 h-6 inline-block"/> },
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