
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
              className={`border rounded text-center p-3 transition-all duration-200 cursor-pointer
                ${
                  value === opt.value
                    ? "border-2 border-primary shadow-md bg-primary/5 scale-105"
                    : "border border-gray-300 hover:border-primary/50"
                }
              `}
              style={{ width: 100 }}
            >
              <div style={{ fontSize: 20 }}>{opt.emoji}</div>
              <small className="block mt-1">{opt.label}</small>
        </div>
        ))}
      </div>
    </div>
  );
}

export type { RatingValue };