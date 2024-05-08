

import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      if(data?.email === "admin@gmail.com" && data?.password === "admin"){
        navigate("Dashboard");
      }else{

      }
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
  };

  return (
    <div className="container d-flex flex-column">
      <div className="row vh-100">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-4">
              <h1 className="h2">Welcome back! </h1>
              <p className="lead">Sign in to your account to continue</p>
            </div>
            <div className="card">
              <div className="card-body shadow-lg bg-White rounded">
                <div className="m-sm-3">
                  <form className="" onSubmit={handleSubmit(onSubmit)}>
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
                    <Form.Group className="mb-3" controlId="rememberme">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <hr className="bg-danger border-2 border-top border-primary"></hr>

                    <div className="d-flex justify-content-end">
                      <Link
                        to="ForgotPassword"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("ForgotPassword");
                        }}
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center mt-3">
                      <button
                        type="submit"
                        className="btn btn-outline-primary btn-rounded"
                      >
                       <span class="bi bi-box-arrow-in-right m-1"></span> Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center mb-2">
              Don't have an account?
              <Link
                to="SignUp"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("SignUp");
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
