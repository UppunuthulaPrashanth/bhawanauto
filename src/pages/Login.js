import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

export default function Login() {
  let location = useLocation();
  // states
  const [formSignupValues, setFormSignupValues] = useState({});
  const [formSigninValues, setFormSigninValues] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // dispatch the form data  for register
  const dispatch = useDispatch();
  const onChangeSignup = (e) => {
    const { name, value } = e.target;
    setFormSignupValues({ ...formSignupValues, [name]: value });
  };

  const onSubmitSignup = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const errors = {};
    if (!formSignupValues.firstname) {
      errors.firstname = "Firstname is required";
    }
    if (!formSignupValues.lastname) {
      errors.lastname = "Lastname is required";
    }
    if (!formSignupValues.email) {
      errors.email = "Email is required";
    }
    if (!formSignupValues.country) {
      errors.country = "Country is required";
    }
    if (!formSignupValues.phone) {
      errors.phone = "Phone is required";
    }
    if (!formSignupValues.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0 && isSubmit) {
      setIsLoading(true);
      dispatch(register(formSignupValues)).then((res) => {
        setIsLoading(false);
      });
    } else {
      for (var key in errors) {
        toast.error(errors[key]);
      }
    }
  };

  // for login
  const onChangeSignin = (e) => {
    const { name, value } = e.target;
    setFormSigninValues({ ...formSigninValues, [name]: value });
  };

  const onSubmitSignin = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formSigninValues.emailphone) {
      errors.email = "Email or Phone is required";
    }
    if (!formSigninValues.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      dispatch(login(formSigninValues)).then((res) => {
        setIsLoading(false);
        if (res.payload.success) {
          window.location.reload();
        }
      });
    } else {
      for (var key in errors) {
        toast.error(errors[key]);
      }
    }
  };

  return (
    <>
      <div className="card signup_v4 mb-30 mt-4 mb-5">
        <div className="card-body col-md-5 mx-auto ">
          <div className="row">
            <div className="col-12 mt-4 mb-3">
              <div className="login_sign_up_wrapper">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="login-tab"
                      data-toggle="tab"
                      href="#login"
                      role="tab"
                      aria-controls="login"
                      aria-selected="true"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="register-tab"
                      data-toggle="tab"
                      href="#register"
                      role="tab"
                      aria-controls="register"
                      aria-selected="false"
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <h4 className="text-center mt-4 mb-4">Login</h4>
              <div className="login-container">
                <form>
                  {/* ***********************************Signup Form**************************************** */}
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
                                placeholder="Please Enter Your Email or Phone"
                                required
                                className="input-field"
                                name="emailphone"
                                id="emailphone"
                                type="text"
                                onChange={onChangeSignin}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 mt-4">
                            <div className="form-wrapper">
                              <label>
                                <i className="fas fa-key"></i>
                              </label>
                              <input
                                placeholder="Please Enter Your Password"
                                required
                                className="input-field"
                                name="password"
                                id="signpassword"
                                type="password"
                                autoComplete="on"
                                onChange={onChangeSignin}
                              />
                            </div>
                          </div>
                          <div className="col-12 mt-4 text-center">
                            <div className="btns-container">
                              {isLoading ? (
                                <img
                                  src="assets/front/loader/ezgif-2-bc14af353261.gif"
                                  style={{ Height: "50px" }}
                                />
                              ) : (
                                <button
                                  type="button"
                                  onClick={(e) => onSubmitSignin(e)}
                                  className=" common_button d-block w-100 py-2"
                                >
                                  <span className="bold-text" mytext="Login">
                                    Login
                                  </span>
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="col-12 mt-2 text-center ">
                            <div className="text-container">
                              <p className="small-text">
                                Forgot Your Password?
                                <Link
                                  className="color-gold bold-text to-recover"
                                  to="#"
                                >
                                  Reset Now
                                </Link>
                              </p>
                              {/* <p className="small-text mt-4">Dont Have an Account? <Link className="color-gold bold-text to-signUp medium-text" to="#">Sign Up</Link></p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ***********************************Signup Form Ends**************************************** */}
                </form>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="register"
              role="tabpanel"
              aria-labelledby="register-tab"
            >
              <h4 className="text-center mt-4 mb-4">Register</h4>
              <div className="login-container">
                <div className="form-wrapper" id="signUpform">
                  <form type="post" action="#">
                    {/* ***********************************Signup Form**************************************** */}
                    <div className="form-container-login w-100">
                      <div className="row">
                        <div
                          className="col-lg-11 col-xl-10 col-sm-12 col-12 d-block mx-auto listenMe"
                          btntolisten="sign_up_level1"
                        >
                          <div className="row">
                            <div
                              className="col-12 col-sm-12 mt-2 text-center text-danger"
                              id="message_box"
                            ></div>
                            <div className="col-12 col-sm-12 mt-2">
                              <div className="form-wrapper">
                                <label>
                                  <i className="far fa-address-card"></i>
                                </label>
                                <input
                                  placeholder="Please Enter Your First Name"
                                  data-parsley-required-message="Your First Name"
                                  required
                                  className="input-field"
                                  type="text"
                                  name="firstname"
                                  id="firstname"
                                  onChange={onChangeSignup}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 mt-4">
                              <div className="form-wrapper">
                                <label>
                                  <i className="far fa-address-card"></i>
                                </label>
                                <input
                                  placeholder="Please Enter Your Last Name"
                                  data-parsley-required-message="Your Last Name"
                                  required
                                  className="input-field"
                                  type="text"
                                  name="lastname"
                                  id="lastname"
                                  onChange={onChangeSignup}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 mt-4">
                              <div className="form-wrapper">
                                <label>
                                  <i className="fas fa-envelope"></i>
                                </label>
                                <input
                                  placeholder="Please Enter Your Email"
                                  data-parsley-required-message="Your Email"
                                  required
                                  className="input-field"
                                  type="email"
                                  name="email"
                                  id="email"
                                  onChange={onChangeSignup}
                                />
                              </div>
                            </div>
                            <div className="col-12 mt-4">
                              <div className="form-wrapper">
                                <label>
                                  <i className="fas fa-globe"></i>
                                </label>
                                <select
                                  name="country"
                                  id="country"
                                  className="bg-white"
                                  required
                                  onChange={onChangeSignup}
                                >
                                  <option value="+971">Select Country</option>
                                  <option>United Arab Emirates</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 mt-4">
                              <div className="form-wrapper">
                                <label style={{ minWidth: "40px" }}>
                                  <i className="fas fa-phone"></i>
                                </label>
                                <label
                                  id="cc_prefix"
                                  className=" text-center text-dark small-text"
                                >
                                  +971
                                </label>
                                <input
                                  placeholder="Please Enter Phone Number"
                                  data-parsley-required-message="Your Phone"
                                  required
                                  className="input-field"
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  onChange={onChangeSignup}
                                  data-parsley-minlength="9"
                                  data-parsley-minlength-message="Mobile number should be at least 9 to 12 long"
                                  data-parsley-type="digits"
                                  data-parsley-type-message="Mobile number should be only numbers"
                                  maxLength="12"
                                  data-parsley-pattern="^[\d\+\-\.\(\)\/\s]*$"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 mt-4">
                              <div className="form-wrapper">
                                <label>
                                  <i className="fas fa-lock"></i>
                                </label>
                                <input
                                  placeholder="Please Create a Password"
                                  data-parsley-required-message="Please create a password"
                                  required
                                  className="input-field"
                                  type="password"
                                  onChange={onChangeSignup}
                                  name="password"
                                  autoComplete="on"
                                  id="singuppassword"
                                />
                              </div>
                            </div>
                            <div className="col-12 mt-4 text-center form-navigation">
                              <div className="btns-container">
                                {isLoading ? (
                                  <img src="assets/front/loader/ezgif-2-bc14af353261.gif" />
                                ) : (
                                  <button
                                    type="button"
                                    className="next common_button d-block w-100 py-2"
                                    onClick={(e) => onSubmitSignup(e)}
                                  >
                                    <span
                                      className="bold-text"
                                      mytext="Sign Up & Verify"
                                    >
                                      Sign Up & Verify
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
      </div>
    </>
  );
}
