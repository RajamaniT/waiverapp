import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";

function ForgotPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
    } catch (error) {
      //   console.log("Error while sign up with the emailid : {0}", data.emailid);
    }
  };

  const registerOption = {
    email: {
      required: "EmailId is required",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: "Please enter a valid email",
      },
    },
  };

  return (
    <div className="container d-flex flex-column">
      <div className="row vh-100">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="card">
              <div className="card-body shadow-lg bg-White rounded">
                <h4 className="text-center card-title">Forgot Password!</h4>
                <div className="m-sm-3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="border-left-highlight">
                      <p>A random password will sent out to your email id.</p>
                    </div>
                    <hr className="bg-danger border-2 border-top border-primary"></hr>
                    <div className="row input-group mt-3">
                      {/* <label className="col-md-2 col-form-label">Email</label> */}
                      <Form.Label className="text-center col-md-3">
                        Email Id
                      </Form.Label>

                      <Form.Group className="col-md-9" controlId="emailId">
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          {...register("email", registerOption.email)}
                        />
                        {errors.email && (
                          <p className="errorMsg">{errors.email.message}</p>
                        )}
                      </Form.Group>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-12 text-center">
                        <button type="submit" className="btn btn-outline-primary">
                        <span class="bi bi-envelope-arrow-up m-1"></span> Submit
                        </button>
                        <button
                          to="/"
                          className="m-3 btn btn-outline-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/");
                          }}
                        >
                         <span class="bi bi-x-octagon m-1"></span> Cancel
                        </button>
                      </div>
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

export default ForgotPassword;
