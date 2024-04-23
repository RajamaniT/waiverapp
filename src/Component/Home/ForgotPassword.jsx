import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function ForgotPassword() {
  const {
    handleSubmit,
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
                      <p>A random password will sent out too you emailid.</p>
                    </div>
                    <hr className="bg-danger border-2 border-top border-primary"></hr>
                    <div className="row input-group mt-3">
                      <label className="col-md-2 col-form-label">Email</label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          id="forgotpassword"
                          placeholder="Enter your emailid"
                        ></input>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-6 offset-sm-2">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                        <button
                          to="/"
                          className="m-3 btn btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/");
                          }}
                        >Cancel</button>
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
