import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Navbar from "../Dashboard/Navbar";
import Home from "../Dashboard/Home";
import { Outlet } from "react-router-dom";

const RouteLayout = () => {
  return (
    <>
      <div className="d-flex">
        <div className="w-auto">
          <Sidebar />
        </div>
        <div className="col overflow-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RouteLayout;
