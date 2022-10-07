import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";


export default function Navbar() {
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
      setIsLoading(true)
      dispatch(register(formSignupValues)).then((res) => {
        setIsLoading(false)
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
    setIsSubmit(true);

    const errors = {};
    if (!formSigninValues.emailphone) {
      errors.email = "Email or Phone is required";
    }
    if (!formSigninValues.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0 && isSubmit) {
      setIsLoading(true)
      dispatch(login(formSigninValues)).then((res) => {
        setIsLoading(false)
      });
    } else {
      for (var key in errors) {
        toast.error(errors[key]);
      }
    }
  };

  


  return (
    <>
      <li className="nav-item">
        <Link
          to="/"
          reloadDocument={true}
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          <span>Home</span>
        </Link>
      </li>
      <li className="nav-item  ">
        <Link
          to="packages"
          className={
            location.pathname === "/packages" ? "nav-link active" : "nav-link"
          }
        >
          <span>packages</span>
        </Link>
      </li>
      <li className="nav-item  ">
        <Link
          to="services"
          className={
            location.pathname === "/services" ? "nav-link active" : "nav-link"
          }
        >
          <span>Services</span>
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          to="about"
          className={
            location.pathname === "/about" ? "nav-link active" : "nav-link"
          }
        >
          <span>About Us</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="contact-us"
          className={
            location.pathname === "/contact-us" ? "nav-link active" : "nav-link"
          }
        >
          <span>Contact Us</span>
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          to="gallery"
          reloadDocument={true}
          className={
            location.pathname === "/gallery" ? "nav-link active" : "nav-link"
          }
        >
          <span>Gallery</span>
        </Link>
      </li>
      <li className="nav-item no-line ">
        <Link
          to="blog"
          className={
            location.pathname === "/blog" ? "nav-link active" : "nav-link"
          }
        >
          <span>Blogs</span>
        </Link>
      </li>
      <li className="nav-item no-line">
        <Link
          to="packages"
          className="nav-link btn btn-danger rounded btn-xs color-white"
        >
          <span>Book Now</span>
        </Link>
      </li>

      {/* Sign Up Login Modal */}

      {/* Finance Modal */}

      <div
        className="modal fade"
        id="signupSignInForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div id="close_btn_modal" data-dismiss="modal">
                <div className="cross_line1">
                  <div className="cross_line2"></div>
                </div>
              </div>
              <div>
                <div className="row pb-4">
                  <div className="col-12 mt-4 mb-3">
                    <div className="login_sign_up_wrapper">
                      <ul className="d-flex no-wrap nowrap d-block mx-auto justify-content-center loginSignUpDsg">
                        <li className="to-signUp active">Sign Up</li>
                        <li className="to-login">Login</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 mt-4 d-block my-auto">
                    <div className="login-container">
                      <div className="form-wrapper" id="signUpform">
                        <form type="post" action="#">
                          {/* ***********************************Signup Form**************************************** */}
                          <div className="form-container-login w-100 form-section">
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
                                        <option value="+971">
                                          Select Country
                                        </option>
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
                                        id="singuppassword"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 mt-4 text-center form-navigation">
                                    <div className="btns-container">
                                      {isLoading ?
                                      "Loading"
                                      : <button
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
                                    </button> }
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* *********************************** SignUp Form Ends **************************************** */}

                          {/* *********************************** Verify Phone Number **************************************** */}

                          {/* <div className="form-container-login w-100 form-section">
                              <div className="row">
                                <div className="col-lg-11 col-xl-10 col-sm-12 col-12 d-block mx-auto">
                                  <div className="row">
                                    <div className="col-12 mt-4">
                                      <h3 className="bold-text medium-text">
                                        Enter Code
                                      </h3>
                                    </div>
                                    <div className="col-12 mt-4">
                                      <h3 className="bold-text small-text optResendStatus">
                                        OTP has been sent successfully, please
                                        enter the code to proceed.
                                      </h3>
                                      <div
                                        className="col-12 col-sm-12 mt-2 text-center color-red"
                                        id="message_verification"
                                      ></div>
                                    </div>
                                    <div className="col-12 col-sm-12 mt-2">
                                      <div className="form-wrapper">
                                        <label>
                                          <i className="far fa-address-card"></i>
                                        </label>
                                        <input
                                          placeholder="Please Enter the Verification Code"
                                          className="input-field"
                                          name="v_code"
                                          id="v_code"
                                          type="text"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-12 mt-4 text-center">
                                      <div className="btns-container">
                                        <button
                                          id="varifyAccount"
                                          className="common_button d-block w-100 py-2"
                                        >
                                          <span>Verify</span>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="col-12 mt-5 text-center">
                                      <div className="text-container">
                                        <p className="small-text">
                                          <span className="float-left color-gold cursor-pointer move_to_initial">
                                            <i className="fas fa-arrow-left"></i>{" "}
                                            Back
                                          </span>
                                          Haven't Receive the Code
                                          <Link
                                            className="color-gold bold-text"
                                            to="#"
                                            id="resendCodeEvt"
                                            data-refid="0"
                                          >
                                            Resend Code
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                        </form>
                      </div>

                      {/* <div
                          className="form-wrapper hiddenInitial"
                          id="recoverform"
                        >
                          <form id="recoverform444"> */}
                      {/* ***********************************Signup Form**************************************** */}
                      {/* <div className="form-container-login w-100">
                              <div className="row">
                                <div className="col-lg-11 col-xl-10 col-sm-12 col-12 d-block mx-auto">
                                  <div className="row">
                                    <div className="col-12 mt-4">
                                      <div
                                        className="alert alert-success my_alert"
                                        role="alert"
                                        style={{ display: "none" }}
                                      ></div>
                                    </div>

                                    <div className="col-12 mt-4">
                                      <h3 className="bold-text medium-text">
                                        Forgot password
                                      </h3>
                                    </div>
                                    <div className="col-12 col-sm-12 mt-2">
                                      <div className="form-wrapper">
                                        <label>
                                          <i className="far fa-address-card"></i>
                                        </label>
                                        <input
                                          name="forgetPassEmail"
                                          id="forgetPassEmail"
                                          data-parsley-required-message="Please Enter Your Email Address"
                                          placeholder="Please Enter Your Email or Phone"
                                          required
                                          className="input-field"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-12 mt-4 text-center">
                                      <div className="btns-container">
                                        <button
                                          type="submit"
                                          name="forget_pass_reset"
                                          id="forget_pass_reset"
                                          className=" common_button d-block w-100 py-2"
                                        >
                                          <span mytext="Submit">Submit</span>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="col-12 mt-5 text-left ">
                                      <div className="text-container">
                                        <p className="small-text">
                                          Have an Account?{" "}
                                          <Link
                                            className="color-gold bold-text to-login"
                                            to="#"
                                          >
                                            Login
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}

                      {/* ***********************************Signup Form Ends**************************************** */}
                      {/* </form>
                        </div> */}

                      <div
                        className="form-wrapper hiddenInitial"
                        id="loginForm"
                      >
                        <form method="post" action="#">
                          {/* ***********************************Signup Form**************************************** */}
                          <div
                            className="form-container-login w-100"
                            id="loginInitial"
                          >
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
                                        onChange={onChangeSignin}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 mt-4 text-center">
                                    <div className="btns-container">
                                    {isLoading ?
                                      "Loading" :
                                      <button
                                        type="button"
                                        onClick={(e) => onSubmitSignin(e)}
                                        className=" common_button d-block w-100 py-2"
                                      >
                                        <span
                                          className="bold-text"
                                          mytext="Login"
                                        >
                                          Login
                                        </span>
                                      </button>
                                      }
                                    </div>
                                  </div>
                                  <div className="col-12 mt-5 text-center ">
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

                          <div
                            className="form-container-login w-100 hiddenInitial"
                            id="accountVerification"
                          >
                            <div className="row">
                              <div className="col-lg-11 col-xl-10 col-sm-12 col-12 d-block mx-auto">
                                <div className="row">
                                  <div className="col-12 mt-4">
                                    <h3 className="bold-text medium-text">
                                      Enter Code
                                    </h3>
                                  </div>
                                  <div className="col-12 mt-4">
                                    <h3 className="bold-text small-text">
                                      Your account is not verified yet, We have
                                      Sent you an Email with the verification
                                      code, please Enter the code Below to
                                      continue
                                    </h3>
                                    <div
                                      className="col-12 col-sm-12 mt-2 text-center color-red"
                                      id="message_verification_login"
                                    ></div>
                                  </div>
                                  <div className="col-12 col-sm-12 mt-2">
                                    <div className="form-wrapper">
                                      <label>
                                        <i className="far fa-address-card"></i>
                                      </label>
                                      <input
                                        placeholder="Please Enter the Verification Code"
                                        className="input-field"
                                        name="v_code_login"
                                        id="v_code_login"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 mt-4 text-center">
                                    <div className="btns-container">
                                      <button
                                        id="varifyAccountLogin"
                                        className="common_button d-block w-100 py-2"
                                      >
                                        <span>Verify</span>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="col-12 mt-5 text-center">
                                    <div className="text-container">
                                      <p className="small-text">
                                        <span className="float-left color-gold cursor-pointer move_to_initial_login">
                                          <i className="fas fa-arrow-left"></i>{" "}
                                          Back
                                        </span>
                                        Haven't Receive the Code{" "}
                                        <Link
                                          className="color-gold bold-text"
                                          to="#"
                                        >
                                          Resend Email
                                        </Link>
                                      </p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end footer section */}
    </>
  );
}
