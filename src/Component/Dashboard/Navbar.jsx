import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <a href="#home" className="mr-2 navbar-brand">
           Waiver application
          </a>
        </div>

        <div className="navbar-collapse collapse" id="basic-navbar-nav">
          <div className="ms-auto navbar-nav mb-2 mb-lg-0">
            <div className="nav-item border rounded" >
              <a
                href="#pablo"
                data-rb-event-key="#pablo"
                className="m-0 nav-link active"
              >
               <i class="bi bi-person m-1"></i> <span className="no-icon">Account</span>
              </a>
            </div>

            <div className="nav-item mx-2 border rounded">
              <Link to="/"
                href="#pablo"
                data-rb-event-key="#pablo"
                className="m-0 nav-link active"
              >
                <i class="bi bi-box-arrow-right m-1"></i><span className="no-icon">Log out</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
