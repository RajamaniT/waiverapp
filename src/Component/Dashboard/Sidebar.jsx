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
          <i className="bi bi-apple fs-4 me-4"></i>
          <span className="fs-4">Seng Project</span>
        </span>
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column mt-3 text-white">
          <li
            className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(1)}
          >
            <Link to="/Dashboard" className="p-1">
              <i className="bi bi-speedometer2  me-3 fs-4"></i>
              <span className="fs-4">Dashboard</span>
            </Link>
          </li>
          <li
            className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(2)}
          >
            <Link to="/JobCreation" className="p-1">
              <i className="bi bi-people me-3 fs-4"></i>
              <span className="fs-4">Job Creation</span>
            </Link>
          </li>
          <li
            className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(3)}
          >
            <Link to="/Dashboard" className="p-1">
              <i className="bi bi-table me-3 fs-4"></i>
              <span className="fs-4">Job details</span>
            </Link>
          </li>
          <li
            className={active === 4 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(4)}
          >
            <Link to="/JobCreation" className="p-1">
              <i className="bi bi-grid me-3 fs-4 "></i>
              <span className="fs-4">Others</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* <div className="dropdown open">
        <a
          className="text-text-decoration-none text-white dropdown-toggle p-3"
          type="button"
          id="triggerid" data-bs-toggle="dropdown" aria-haspopup="true"
          area-expanded="false"
        >
          <i className="bi bi-person-circle fs-4 me-4"></i>
          <span className="ms-2 d-done d-sm-inline">You</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="triggerid">
          <a className="dropdown item" href="#">
            <span className="d-sm-inline">1</span>
            <span className="d-done d-sm-block">Profile</span>
          </a>
          <a className="dropdown item" href="#">
            <span className="d-sm-inline">1</span>
            <span className="d-done d-sm-block">Setting</span>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
