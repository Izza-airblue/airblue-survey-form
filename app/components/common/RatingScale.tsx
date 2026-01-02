
type RatingValue = "poor" | "average" | "excellent";

const ratingOptions = [
  { value: "poor", label: "Poor", emoji: <img src="/Icons/sad.svg" alt="Sad" style={{width:"45px", height:"45px"}} className="w-6 h-6 inline-block"/> },
  { value: "average", label: "Average", emoji: <img src="/Icons/happy.svg" style={{width:"45px", height:"45px"}} alt="Happy" className="w-6 h-6 inline-block"/> },
  { value: "excellent", label: "Excellent", emoji: <img src="/Icons/excellent.svg"  style={{width:"45px", height:"45px"}} alt="Excellent" className="w-6 h-6 inline-block"/> },
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
            <div style={{ fontSize: 20 }}>{opt.emoji}</div>
            <small>{opt.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export type { RatingValue };