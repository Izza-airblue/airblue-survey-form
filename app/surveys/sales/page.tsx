export default function SalesSurveyPage() {
  return (
     <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">

          {/* Header */}
          <div
            className="p-4 rounded-top text-white"
            style={{
              background: "linear-gradient(90deg, #2C567E 0%, #5B93C9 100%)",
            }}
          >
            <h4 className="mb-1 fw-semibold">Sales Feedback Survey</h4>
            <p className="mb-0 opacity-75">
              Help us improve your flying experience
            </p>
          </div>

          {/* Form Card */}
          <div className="border rounded-bottom p-4 bg-white">

            <div className="row g-4">
              {/* PNR */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  PNR <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your ticket number"
                />
              </div>

              {/* Contact No */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Contact No <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your contact no"
                />
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email id"
                />
              </div>

              {/* Dropdown */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Please Choose
                </label>
                <select className="form-select form-select-lg">
                  <option>Please Choose...</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Average</option>
                  <option>Poor</option>
                </select>
              </div>

              {/* Remarks */}
              <div className="col-12">
                <label className="form-label fw-semibold">
                  Remarks
                </label>
                <textarea
                  rows={4}
                  className="form-control form-control-lg"
                  placeholder="Please share any additional feedback or suggestions..."
                />
              </div>
            </div>

            {/* Captcha Placeholder */}
            <div className="d-flex justify-content-center my-4">
              <div
                className="border rounded px-4 py-3 text-muted small"
                style={{ maxWidth: 300 }}
              >
                I'm not a robot (reCAPTCHA)
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                className="btn px-5 py-3 text-white fw-semibold"
                style={{
                  borderRadius: "40px",
                  background:
                    "linear-gradient(90deg, #2C567E 0%, #5B93C9 100%)",
                  boxShadow: "0 0 20px rgba(91,147,201,0.8)",
                }}
              >
                Submit Feedback
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}