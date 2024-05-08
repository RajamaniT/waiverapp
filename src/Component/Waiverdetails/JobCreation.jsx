import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import Select from "react-select";
import Sidebar from "../Dashboard/Sidebar";
import Navbar from "../Dashboard/Navbar";
import JobCreationPage from "./JobCreationPage";

function JobCreation() {
  return (
    <div className="d-flex">
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col overflow-auto">
        <Navbar />
        <JobCreationPage />
      </div>
    </div>
  );
}

export default JobCreation;
