import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import Select from "react-select";
import dayjs from "dayjs";

function JobCreation() {
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
        value <= watch("startdate") || "Password do not match",
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
    <div className="container d-flex flex-column">
      <div className="row vh-100">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="card">
              <div className="card-body shadow-lg bg-White rounded">
                <div className="m-sm-3">
                  <div className="text-center col-12">
                    <h3 className="text-primary">
                      <strong>Job Creation</strong>
                    </h3>
                  </div>
                  <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <hr className="bg-danger border-2 border-top border-primary mb-5"></hr>
                    <Form.Group className="mb-3" controlId="waivername">
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
                    <div className="mb-3">
                      <label>Fabric Type</label>
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
                    <div className="mb-3">
                      <label>Yarn details</label>
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

                    <Form.Group className="mb-3" controlId="designdetails">
                      <Form.Label>Design Details</Form.Label>
                      <textarea name="designdetails" rows={4} cols={55} />
                      {errors.designdetails && (
                        <p className="errorMsg">
                          {errors.designdetails.message}
                        </p>
                      )}
                    </Form.Group>
                    <div className="row mb-3">
                      <div className="col-md-6">
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

                      <div className="col-md-6">
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
                    </div>
                    <div className="mb-4">
                      <label>Status</label>
                      <Controller
                        className="mb-3"
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

                    <hr className="bg-danger border-2 border-top border-primary"></hr>

                    <div className="text-center mt-3">
                      <button
                        type="submit"
                        className="btn btn-primary btn-rounded w-55"
                      >
                        Register Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCreation;
