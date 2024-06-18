import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState(1);
  return (
    <div className="sidebar col-auto col-md-12 min-vh-100 d-flex justify-content-between flex-column bg-dark  text-white p-3">
      <div className="">
        <span className="p-3">
          <i className="bi bi-apple fs-5 me-4"></i>
          <span className="fs-5">Seng Project</span>
        </span>
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column mt-3 text-white">
          <li
            className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(1)}
          >
            <Link to="/" className="p-1">
              <i className="bi bi-speedometer2  me-3 fs-5"></i>
              <span className="fs-5">Dashboard</span>
            </Link>
          </li>
          <li
            className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(2)}
          >
            <Link to="/JobCreation" className="p-1">
              <i className="bi bi-people me-3 fs-5"></i>
              <span className="fs-5">Job Creation</span>
            </Link>
          </li>
          <li
            className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(3)}
          >
            <Link to="/JobDetails" className="p-1">
              <i className="bi bi-table me-3 fs-5"></i>
              <span className="fs-5">Job details</span>
            </Link>
          </li>
          <li
            className={active === 4 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(4)}
          >
            <Link to="/Others" className="p-1">
              <i className="bi bi-grid me-3 fs-5 "></i>
              <span className="fs-5">Others</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
