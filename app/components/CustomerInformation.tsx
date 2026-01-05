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
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-primary flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 7h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4V7z" />
                            <line x1="12" y1="7" x2="12" y2="17" />
                            <circle cx="9" cy="12" r="1" />
                            <circle cx="15" cy="12" r="1" />
                        </svg>

                        {/* PNR Text */}
                        <span>PNR</span>

                        {/* Required Indicator */}
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