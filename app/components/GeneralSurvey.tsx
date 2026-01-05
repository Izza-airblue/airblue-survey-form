import RatingScale, { RatingValue } from "./common/RatingScale";

const generalQuestions = [
    "3. How was your booking experience with us?",
    "4. How was your check-in / Boarding experience at terminal?",
    "5. How was your experience with our cabin crew?",
    "6. How satisfied are you with cabin and lavatory cleanliness?",
    "7. How do you like our feedback mechanism?",
    "8. How satisfied were you with your flight today?",
    "9. How satisfied were you with your flight today?",
  ];
interface Props {
   ratings : Record<string, RatingValue>;
   setRatings:  (value : Record<string, RatingValue>) => void
}

export const GeneralSurvey = ({ratings, setRatings} : Props) => {
    return (
        <>
            <div className="row g-4 mb-4">
                {/* Q1 & Q2 */}
                <div className="row g-4 mb-4"> <div className="col-md-6"> <label className="form-label fw-semibold"> 1. How did you purchase your ticket? </label> <select className="form-select"> <option>Please Choose...</option> <option>Website</option> <option>Mobile App</option> <option>Travel Agent</option><option>Sales Office</option>  <option>Call Center</option> </select> </div> 
                <div className="col-md-6"> <label className="form-label fw-semibold"> 2. How did you hear about us? </label>
                 <select className="form-select"> <option>Please Choose...</option> 
                 <option>Social Media</option> <option>Frequent Traveler</option> <option>Google Search</option> <option>Website</option> 
                 <option>Friend / Family</option> <option>Advertisement</option><option>Sales Office</option><option>Others</option> </select> </div> </div>
                {generalQuestions.map((question, index) => {
                    const key = `general-${index}`;
                    return (
                        <div key={`general-q-${index}`} className="col-md-6">
                            <label className="form-label fw-semibold">
                                {question}
                            </label>

                            <RatingScale
                                question={question}
                                value={ratings[`general-${index}`]}
                                onChange={(val) =>
                                    setRatings({ ...ratings, [`general-${index}`]: val })
                                }
                            />
                        </div>
                    );
                })}
            </div>
            {/* Recommendation */}
            <div className="mb-4">
                <label className="form-label fw-semibold"> 9. How likely are you to recommend us? </label>
                <div className="d-flex gap-4"> {["Not At All Likely", "Maybe", "Very Likely"].map((label) => (<div key={label} className="form-check"> <input className="form-check-input" type="radio" name="recommend" />
                    <label className="form-check-label">{label}</label> </div>))} </div> </div>

            {/* Feedback */}
            <div className="mb-4">
                <label className="form-label fw-semibold"> 10. We would love to hear about your experience, share your feedback below </label>
                <textarea className="form-control" rows={4} placeholder="Please share any additional feedback or suggestions..." />
            </div>
        </>
    )
}