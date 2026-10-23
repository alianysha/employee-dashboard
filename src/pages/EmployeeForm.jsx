
import React, { useState } from "react";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setEmployee({
      ...employee,
      [name]: value,
    });

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Employee form submitted successfully!");
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 mx-auto"
        style={{ maxWidth: "600px" }}>
        <div className="card-body p-4">
          <h2 className="fw-bold mb-2">Employee Form</h2>
          <p className="text-secondary mb-4">
            Enter employee details below.
          </p>

          {message && (
            <div className="alert alert-success">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter employee name"
                value={employee.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <input
                id="designation"
                name="designation"
                type="text"
                className="form-control"
                placeholder="Enter designation"
                value={employee.designation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="form-control"
                placeholder="Enter location"
                value={employee.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="salary" className="form-label">
                Salary
              </label>
              <input
                id="salary"
                name="salary"
                type="number"
                min="0"
                className="form-control"
                placeholder="Enter salary"
                value={employee.salary}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;
