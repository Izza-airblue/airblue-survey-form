export const SalesSurvey = () => {
    return (
        <>
            <select className="form-select mb-3">
                <option>Please Choose...</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
            </select>

            <div className="mb-4">
                <label className="form-label fw-semibold"> Remarks </label>
                <textarea className="form-control" rows={4} placeholder="Please share any additional feedback or suggestions..." />
            </div>
        </>
    )
}