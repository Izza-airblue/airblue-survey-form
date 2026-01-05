export const CustomerInformation = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header text-white" style={{ background: "linear-gradient(90deg,#2C567E,#5B93C9)" }} >
                <h5 className="mb-0">Guest Information</h5>
            </div>
            <div className="card-body">
                <div className="row g-4">
                    <div className="col-md-4">
                     <label className="form-label fw-semibold flex items-center gap-2">
  {/* PNR Icon */}
  <svg
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 inline-block flex-shrink-0"
    fill="currentColor"
  >
    <path d="M30 9.375V26.25H0V9.375H6.44531C6.45508 9.375 6.61621 9.32617 6.92871 9.22852C7.24121 9.13086 7.66602 8.98926 8.20312 8.80371C8.74023 8.61816 9.35547 8.41309 10.0488 8.18848C10.7422 7.96387 11.4941 7.71484 12.3047 7.44141C13.1152 7.16797 13.9404 6.88965 14.7803 6.60645C15.6201 6.32324 16.46 6.04004 17.2998 5.75684C18.1396 5.47363 18.9258 5.20996 19.6582 4.96582C20.3906 4.72168 21.0693 4.49707 21.6943 4.29199C22.3193 4.08691 22.8223 3.91602 23.2031 3.7793C23.584 3.64258 23.8574 3.5498 24.0234 3.50098L25.9863 9.375H30Z" />
  </svg>

  {/* Text */}
  <span>PNR</span>

  {/* Required */}
  <span className="text-red-500">*</span>
</label>
                        <input className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-semibold">Contact No <span style={{color:"red"}}>*</span></label>
                        <input className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-semibold">Email</label>
                        <input type="email" className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-semibold">Flight No</label>
                        <input className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-semibold">Gender</label>
                        <select className="form-select form-select-lg"> <option value="">Please choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer not to say</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-semibold">Occupation</label>
                        <input className="form-control form-control-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}