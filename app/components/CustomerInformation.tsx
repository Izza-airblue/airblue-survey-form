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
                       

                        
                         <span><svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            // className="w-5 h-5 flex-shrink-0"
                        >
                            <path d="M27.81 9H22.7C22.45 9 22.24 9.174 22.17 9.42C21.98 10.085 21.37 10.577 20.66 10.577C19.95 10.577 19.34 10.096 19.15 9.42C19.1195 9.30179 19.0512 9.19679 18.9556 9.12097C18.8599 9.04515 18.742 9.00267 18.62 9H4.19C2.98 9 2 10.003 2 11.242V21.758C2 22.997 2.98 24 4.19 24H18.62C18.87 24 19.08 23.826 19.15 23.58C19.34 22.915 19.95 22.423 20.66 22.423C21.37 22.423 21.98 22.904 22.17 23.58C22.24 23.826 22.45 24 22.7 24H27.81C29.02 24 30 22.997 30 21.758V11.242C30 10.003 29.02 9 27.81 9Z" fill="#F9C23C"/>
                            <path d="M10.116 14H5.884C5.395 14 5 13.569 5 13.035C5 12.501 5.395 12.07 5.884 12.07H10.116C10.605 12.07 11 12.501 11 13.035C11 13.58 10.605 14 10.116 14Z" fill="#D3883E"/>
                        </svg>PNR</span>
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