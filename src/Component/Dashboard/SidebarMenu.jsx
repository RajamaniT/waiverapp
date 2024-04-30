import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/SidebarMenu.css";

function SidebarMenu() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a
              href="#"
              className="text-decoration-none text-white d-none d-sm-inline d-flex align-items-center ms-3 mt-2"
            >
              <i className="fs-4 bi bi-truck"></i>
              <span className="ms-1 fs-4 d-none d-sm-inline">Brand</span>
            </a>
            <hr className="text-text-secondary d-none d-sm-block" />
            <ul
              className="nav nav-pills flex-column mt-3 mt-sm-0"
              aria-current="page"
            >
              <li className="nav-nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a className="nav-link text-white fs-5" href="#">
                  <i className="fs-4 bi bi-speedometer2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li className="nav-nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white fs-5">
                  <i className="fs-4 bi bi-house"></i>
                  <span className="ms-2 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li className="nav-nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white fs-5">
                  <i className="fs-4 bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Job Creation</span>
                </a>
              </li>
              <li className="nav-nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white fs-5">
                  <i className="fs-4 bi bi-grid"></i>
                  <span className="ms-2 d-none d-sm-inline">Job Details</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-10 dashboard-bg-color">
          <h5>Dashboard</h5>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
