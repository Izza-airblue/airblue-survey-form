"use client";

import type { CustomerInfo } from "../survey/SurveyRenderer";

export const CustomerInformation = ({
  customer,
  onChange,
}: {
  customer: Partial<CustomerInfo>;
  onChange: (data: Partial<CustomerInfo>) => void;
}) => {
  return (
    <div className="card mb-1 shadow-sm">
      <div
        className="card-header text-white"
        style={{
          background:
            "linear-gradient(130deg, rgba(30, 69, 96, 1), rgba(61, 142, 198, 1))",
        }}
      >
        <h5 className="mb-0">Guest Information</h5>
      </div>

      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label fw-semibold">
              PNR <span className="text-danger">*</span>
            </label>
            <input
              className="form-control form-control-lg"
              value={customer.Pnr ?? ""}
              onChange={(e) =>
                onChange({ ...customer, Pnr: e.target.value })
              }
            />
          </div>

          <div className="col-md-4">
            <label className="form-label fw-semibold">
              Contact No <span className="text-danger">*</span>
            </label>
            <input
              className="form-control form-control-lg"
              value={customer.ContactNumber ?? ""}
              onChange={(e) =>
                onChange({ ...customer, ContactNumber: e.target.value })
              }
            />
          </div>

          <div className="col-md-4">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              value={customer.Email ?? ""}
              onChange={(e) =>
                onChange({ ...customer, Email: e.target.value })
              }
            />
          </div>

          <div className="col-md-4">
            <label className="form-label fw-semibold">Flight No</label>
            <input
              className="form-control form-control-lg"
              value={customer.FlightNumber ?? ""}
              onChange={(e) =>
                onChange({ ...customer, FlightNumber: e.target.value })
              }
            />
          </div>

          <div className="col-md-4">
            <label className="form-label fw-semibold">Gender</label>
            <select
              className="form-select form-select-lg"
              value={customer.Gender ?? ""}
              onChange={(e) =>
                onChange({ ...customer, Gender: e.target.value })
              }
            >
              <option value="">Please choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label fw-semibold">Occupation</label>
            <select
              className="form-select form-select-lg"
              value={customer.Occupation ?? ""}
              onChange={(e) =>
                onChange({ ...customer, Occupation: e.target.value })
              }
            >
              <option value="">Please choose...</option>
              <option>Student</option>
              <option>Armed Forces</option>
              <option>Unemployed</option>
              <option>Healthcare Professional</option>
              <option>Government Sector</option>
              <option>Aviation Industry</option>
              <option>Legal Profession</option>
              <option>Hospitality</option>
              <option>Education</option>
              <option>Finance</option>
              <option>Self Employed</option>
              <option>Others</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
