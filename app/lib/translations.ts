export type Language = "en" | "ur";

export interface TranslationSet {
  heading: string;
  tagline: string;
  sales: string;
  meal: string;
  general: string;
}
export const translations: Record<Language, TranslationSet> = {
  en: {
    heading: "Thank you for flying with us",
    tagline: "Shaping Our Tomorrow, Together.",
    sales: "Sales Feedback",
    meal: "Meal Feedback",
    general: "General Feedback"
  },
  ur: {
    heading: "ہمارے ساتھ سفر کرنے کا شکریہ",
    tagline: "کل کو بہتر بنانے کے لیے، مل کر۔",
    sales: "فروخت سے متعلق رائے",
    meal: "کھانے سے متعلق رائے",
    general: "عمومی رائے"
  }
};