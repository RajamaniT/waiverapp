import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
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
    password: {
      required: "Password is required",
      minLength: {
        value: 5,
        message: "Password should be 5 characters",
      },
    },
    confirmpassword: {
      required: "Confirm Password is required",
      validate: (value) =>
        value === watch("password") || "Password do not match",
    },
  };

  return (
    <div className="container d-flex flex-column">
      <div className="row vh-100">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-4">
              <h1 className="h2">Welcome back! </h1>
              <p className="lead">Sign up to your account to continue</p>
            </div>
            <div className="card">
              <div className="card-body shadow-lg bg-White rounded">
                <div className="m-sm-3">
                  <div className="text-center col-12">
                    <h3 className="text-primary">
                      <strong>Register Now</strong>
                    </h3>
                  </div>
                  <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <hr className="bg-danger border-2 border-top border-primary mb-5"></hr>
                    <Form.Group className="mb-3" controlId="emailId">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", registerOption.email)}
                      />
                      {errors.email && (
                        <p className="errorMsg">{errors.email.message}</p>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", registerOption.password)}
                      />
                      {errors.password && (
                        <p className="errorMsg">{errors.password.message}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirmpassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your confirm password"
                        {...register("confirmpassword", registerOption.confirmpassword)}
                      />
                      {errors.confirmpassword && (
                        <p className="errorMsg">
                          {errors.confirmpassword.message}
                        </p>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="rememberme">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <hr className="bg-danger border-2 border-top border-primary"></hr>

                    <div className="d-flex justify-content-end">
                      Already registered?
                      <Link
                        to="/"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/");
                        }}
                      >
                        Sign In
                      </Link>
                    </div>
                    <div className="text-center mt-3">
                      <button
                        type="submit"
                        className="btn btn-outline-primary btn-rounded"
                      >
                         <span class="bi bi-floppy m-1"></span>Register Now
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

export default SignUp;
