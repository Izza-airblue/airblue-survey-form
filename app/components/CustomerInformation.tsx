export const CustomerInformation = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header text-white" style={{ background: "linear-gradient(90deg,#2C567E,#5B93C9)" }} >
                <h5 className="mb-0">Passenger Information</h5>
            </div>
            <div className="card-body">
                <div className="row g-4">
                    <div className="col-md-4">
                        <label className="form-label fw-semibold">PNR *</label>
                        <input className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-semibold">Contact No *</label>
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