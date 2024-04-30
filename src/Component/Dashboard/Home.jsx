import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Piechart from "./PieChart";
import Linechart from "./Linechart";

function Home() {
  return (
    <div className="p-5 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div
              className="d-flex justify-content-between align-items-center 
              bg-white border border-secondary shadow-sm p-3"
            >
              <i className="bi bi-collection fs-1 text-primary"></i>
              <div>
                <span>Orders</span>
                <h2 className="text-end">25</h2>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div
              className="d-flex justify-content-between align-items-center 
              bg-white border border-secondary shadow-sm p-3"
            >
              <i className="bi bi-hourglass-split fs-1 text-warning"></i>
              <div>
                <span>In Progress</span>
                <h2 className="text-start">5</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div
              className="d-flex justify-content-between align-items-center 
              bg-white border border-secondary shadow-sm p-3"
            >
              <i className="bi bi-check2-circle fs-1 text-success"></i>
              <div>
                <span>Completed</span>
                <h2 className="text-center">15</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div
              className="d-flex justify-content-between align-items-center 
              bg-white border border-secondary shadow-sm p-3"
            >
              <i className="bi bi-hand-thumbs-down fs-1 text-danger"></i>
              <div>
                <span>Failures</span>
                <h2 className="text-end">5</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8 p-3">
            <Linechart />
          </div>
          <div className="col-12 col-md-4 p-3">
            <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
