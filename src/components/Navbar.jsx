import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Employee Dashboard
        </NavLink>

        <div className="navbar-nav ms-auto">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/employee-form" className="nav-link">
            Employee Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
