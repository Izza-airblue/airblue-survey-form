export const SalesSurvey = () => {
    return (
        <>
            <select className="form-select mb-3">
                <option>Please choose...</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
            </select>
            <textarea className="form-control" rows={3} />
        </>
    )
}