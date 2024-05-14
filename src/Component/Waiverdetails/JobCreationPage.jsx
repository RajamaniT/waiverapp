import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import Select from "react-select";
import Sidebar from "../Dashboard/Sidebar";
import Navbar from "../Dashboard/Navbar";
import JobCreation from "./JobCreation";

function JobCreationPage() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
    } catch (error) {
      //   console.log("Error while sign up with the emailid : {0}", data.emailid);
    }
  };

  const registerOption = {
    waivername: {
      required: "Waiver name is required",
    },
    fabric: {
      required: "Fabric is required",
    },
    yarn: {
      required: "yarn is required",
    },
    enddate: {
      required: "End date is required",
      validate: (value) =>
        value <= watch("startdate") || "Start date should higher than end date",
    },
  };

  let fabric = [
    { label: "Cotton", value: "Cotton" },
    { label: "Nylon", value: "Nylon" },
    { label: "Linen", value: "Linen" },
    { label: "Denim", value: "Denim" },
  ];

  let yarn = [
    { label: "Fancy Yarn", value: "FancyYarn" },
    { label: "Wool Yarn", value: "WoolYarn" },
    { label: "Novelty Yarn", value: "NoveltyYarn" },
  ];
  let status = [
    { label: "Open", value: "Open" },
    { label: "InProgress", value: "InProgress" },
    { label: "Completed", value: "Completed" },
    { label: "Canceled", value: "Canceled" },
  ];
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());

  return (
    <div className="row d-flex justify-content-center align-content-center">
      <div className="col-md-10 shadow-lg bg-White rounded m-2">
        <div className="container d-flex justify-content-center align-items-center">
          <form method="POST" className="w-100 m-2 mt-5">
            <div className="align-items-center flex-column row p-2">
              <div className="row">
                <div className="col-6 mb-3">
                  <Form.Group controlId="waivername">
                    <Form.Label>Waiver Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter waiver name"
                      {...register("waivername", registerOption.email)}
                    />
                    {errors.waivername && (
                      <p className="errorMsg">{errors.waivername.message}</p>
                    )}
                  </Form.Group>
                </div>
                <div className="col-6 mb-3">
                  <Form.Label>Fabric Type</Form.Label>
                  <Controller
                    className="mb-3"
                    name="fabric"
                    control={control}
                    render={({ onChange, value, ref }) => (
                      <Select
                        options={fabric}
                        value={fabric.find((c) => c.value === value)}
                        // onChange={(val) => onChange(val.value)}
                      />
                    )}
                    rules={{ required: true }}
                  />
                  {errors.fabric && (
                    <p className="errorMsg">{errors.fabric.message}</p>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <Form.Label>Yarn details</Form.Label>
                  <Controller
                    className="mb-3"
                    name="yarn"
                    control={control}
                    render={({ onChange, value, ref }) => (
                      <Select
                        options={yarn}
                        value={yarn.find((c) => c.value === value)}
                        // onChange={(val) => onChange(val.value)}
                      />
                    )}
                    rules={{ required: true }}
                  />
                  {errors.yarn && (
                    <p className="errorMsg">{errors.yarn.message}</p>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <Form.Label>Start date</Form.Label>
                  <Form.Control
                    type="date"
                    name="startdate"
                    placeholder="DateRange"
                    value={startdate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  {errors.startdate && (
                    <p className="errorMsg">{errors.startdate.message}</p>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <Form.Label>End date</Form.Label>
                  <Form.Control
                    type="date"
                    name="enddate"
                    placeholder="DateRange"
                    value={enddate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  {errors.enddate && (
                    <p className="errorMsg">{errors.enddate.message}</p>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <label>Status</label>
                  <Controller
                    name="status"
                    control={control}
                    render={({ onChange, value, ref }) => (
                      <Select
                        options={status}
                        value={status.find((c) => c.value === value)}
                        // onChange={(val) => onChange(val.value)}
                      />
                    )}
                    rules={{ required: true }}
                  />
                </div>
                <div className="col-6 mb-3">
                  <Form.Group controlId="designdetails">
                    <Form.Label>Design Details</Form.Label>
                    <textarea
                      name="designdetails"
                      rows={3}
                      className="form-control"
                    />
                    {errors.designdetails && (
                      <p className="errorMsg">{errors.designdetails.message}</p>
                    )}
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end mb-3">
                  <input
                    className="btn btn-outline-success"
                    id="submit"
                    name="submit"
                    type="submit"
                    value="Create Job"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobCreationPage;
