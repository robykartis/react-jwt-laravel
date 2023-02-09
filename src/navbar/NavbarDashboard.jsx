import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AuthUser from "../components/AuthUser";
import Dashboard from "../pages/Dashboard";

function NavbarDashboard() {
  const { token, logout } = AuthUser();
  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ADMIN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link" aria-current="page">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <button
                onClick={logoutUser}
                className="btn btn-danger"
                type="submit"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default NavbarDashboard;
