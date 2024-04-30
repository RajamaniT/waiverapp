import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="d-flex">
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col overflow-auto">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default Dashboard;
