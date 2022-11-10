import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  forgetPassword,
  resetPassword,
} from "../redux/features/auth/authSlice";

export default function Reset_password() {
  const navigate = useNavigate();

  // states
  const empty_values = {email: ""};
  const [formSignupValues, setformSignupValues] = useState({email: ""});
  const [otpValue, setOtpValue] = useState({otp: "", new_password:"", email:""});
  const [isLoading, setIsLoading] = useState(false);
  const [otpVerification, setOtpVerification] = useState(false);

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setformSignupValues({ ...formSignupValues, [name]: value });
    setOtpValue({ ...otpValue, [name]: value });
  };

  const onForgetPassword = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const errors = {};
    var errors_count = 0;
    if (!formSignupValues.email) {
      errors.email = "Email is required";
      errors_count = 1;
    }
    if (errors_count == 0) {
      dispatch(forgetPassword(formSignupValues)).then((res) => {
        setIsLoading(false);
        setformSignupValues(empty_values);
        if (res.payload.success) {
          setOtpVerification(true);
        }
      });
    } else {
      for (var key in errors) {
        toast.error(errors[key]);
      }
      setIsLoading(false);
    }
  };


  const onOtpChange = (e) => {
    const { name, value } = e.target;
    setOtpValue({ ...otpValue, [name]: value });
  };

  const onOtpSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const errors = {};
    var errors_count = 0;
    if (!otpValue.otp) {
      errors.email = "Please enter OTP is required";
      errors_count = 1;
    }else if(otpValue.otp.length!==6){
      errors.email = "OTP Should be 6 Digits";
      errors_count = 1;
    }

    if (errors_count == 0) {
      dispatch(resetPassword(otpValue)).then((res) => {
        setIsLoading(false);
        if (res.payload.success) {
          setOtpVerification(false);
          navigate("/auth");
        }
      });
    } else {
      for (var key in errors) {
        toast.error(errors[key]);
      }
      setIsLoading(false);
    }

  }
  return (
    <>
    {otpVerification?
      <div className="card signup_v4 mb-30 mt-4 mb-5">
        <div className="card-body col-md-5 mx-auto ">
          <h4 className="text-center mt-4 mb-4">Create New Password</h4>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <div className="login-container">
                <form>
                  <div className="form-container-login w-100" id="loginInitial">
                    <div className="row">
                      <div
                        className="col-lg-11 col-xl-10 col-sm-12 col-12 d-block mx-auto listenMe"
                        btntolisten="login"
                      >
                        <div className="row">
                          <div
                            className="col-12 col-sm-12 mt-2 text-center text-danger"
                            id="login_message_box"
                          ></div>
                          <div className="col-12 col-sm-12 mt-2">
                            <div className="form-wrapper">
                              <label>
                                <i className="far fa-address-card"></i>
                              </label>
                              <input
                                placeholder="Please Enter 6 Digits OTP"
                                required
                                className="input-field"
                                name="otp"
                                id="otp"
                                type="number"
                                onChange={onOtpChange}
                              />
                            </div>

                            <div className="form-wrapper">
                                <label>
                                  <i className="fas fa-lock"></i>
                                </label>
                                <input
                                  placeholder="Please Create new a Password"
                                  data-parsley-required-message="Please create new a password"
                                  required
                                  className="input-field"
                                  type="password"
                                  onChange={onOtpChange}
                                  name="new_password"
                                  autoComplete="on"
                                  id="new_password"
                                />
                              </div>


                          </div>
                          <div className="col-12 mt-4 text-center">
                            <div className="btns-container">
                              {isLoading ? (
                                <img
                                  src="/assets/front/loader/loader.gif"
                                  style={{ Height: "50px" }}
                                />
                              ) : (
                                <button
                                  type="button"
                                  onClick={(e) => onOtpSubmit(e)}
                                  className=" common_button d-block w-100 py-2 mb-4 mt-2"
                                >
                                  <span className="bold-text" mytext="Login">
                                    Reset Password
                                  </span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="card signup_v4 mb-30 mt-4 mb-5">
        <div className="card-body col-md-5 mx-auto ">
          <h4 className="text-center mt-4 mb-4">Forget password</h4>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <div className="login-container">
                <form>
                  <div className="form-container-login w-100" id="loginInitial">
                    <div className="row">
                      <div
                        className="col-lg-11 col-xl-10 col-sm-12 col-12 d-block mx-auto listenMe"
                        btntolisten="login"
                      >
                        <div className="row">
                          <div
                            className="col-12 col-sm-12 mt-2 text-center text-danger"
                            id="login_message_box"
                          ></div>
                          <div className="col-12 col-sm-12 mt-2">
                            <div className="form-wrapper">
                              <label>
                                <i className="far fa-address-card"></i>
                              </label>
                              <input
                                placeholder="Please Enter Your Email"
                                required
                                className="input-field"
                                name="email"
                                id="email"
                                type="text"
                                value={
                                  formSignupValues ? formSignupValues.email : ""
                                }
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="col-12 mt-4 text-center">
                            <div className="btns-container">
                              {isLoading ? (
                                <img
                                  src="assets/front/loader/loader.gif"
                                  style={{ Height: "50px" }}
                                />
                              ) : (
                                <button
                                  type="button"
                                  onClick={(e) => onForgetPassword(e)}
                                  className=" common_button d-block w-100 py-2 mb-4 mt-2"
                                >
                                  <span className="bold-text" mytext="Login">
                                    Forget password
                                  </span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}
