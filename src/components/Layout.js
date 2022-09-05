import React from "react";
import Navbar from "./Navbar";
class Layout extends React.Component {
  
  render() {
    return (
      <div className="page-wrapper">
        {/* Preloader */}
        {/* Main Header*/}
        <header className="sticky-header-top">
          <div className="header_top">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-12 max1200 min1200 d-block mx-auto">
                        <div className="d-flex justify-content-end py-1 pr-3 pr-xl-0">
                          <div className="mr-sm-4 bold-text small-text my-auto d-none d-sm-block">
                            <span>CALL : </span>
                            <a href="tel:8002886349">8002886349</a>
                          </div>
                          <div className="mr-sm-4 bold-text small-text my-auto ">
                            <span></span>
                            <a
                              href="#"
                              className="border-sm-left border-sm-right px-3"
                              data-toggle="modal"
                              data-target="#signupSignInForm"
                            >
                              Login or Signup{" "}
                            </a>
                          </div>
                          <div className="social_icons_wrapper d-none d-sm-block">
                            <ul className="social-icon-four">
                              {/* Site Setting Along with the social Icons are fetched at Header.php */}
                              <li>
                                <a
                                  href="https://www.facebook.com/autofix.uae"
                                  target="_blank"
                                >
                                  <span className="fab fa-facebook-f"></span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://twitter.com/AutofixUAE"
                                  target="_blank"
                                >
                                  <span className="fab fa-twitter"></span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/autofix.uae"
                                  target="_blank"
                                >
                                  <span className="fab fa-instagram"></span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 border-bottom"></div>
                      <div className="col-12  max1200 min1200 d-block mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-custom nav_design_custom px-0 pr-3 pr-xl-0">
                          <a
                            className="navbar-brand logo_img"
                            href="/"
                          >
                            <img
                              src="assets/front/logo/bhawan4.png"
                              className="img-fluid abs_logo"
                              alt=""
                              title=""
                            />{" "}
                          </a>
                          <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                          >
                            <span className="navbar-toggler-icon"></span>
                          </button>
                          <div
                            className="collapse navbar-collapse px-3 px-lg-0"
                            id="navbarNav"
                          >
                            <ul className="navbar-nav ml-auto mr-0">
                              <Navbar/>
                              
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*End Main Header */}

        {/* Dynamic content */}
        <main>{this.props.children}</main>
        {/* end Dynamic content */}

        {/* footer section */}

        {/*Main Footer*/}

        <span className="whatsappIconFixedIcon">
          <a
            className="whatsappIconLink p-2"
            target="_blank"
            rel="noopener"
            href="https://api.whatsapp.com/send?phone=9718002886349&amp;text=Hi"
          >
            <img
              alt="chat on whatsapp"
              className="whatsappIcon whatsApp45 img-fluid "
              src="https://servicemycar.ae/public/assets/icons/whatsapp-logo-variant.svg"
            />
          </a>
        </span>

        <div
          className="modal fade"
          id="addressModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        ></div>

        <footer className="main-footer footer_new ">
          <div className="auto-container">
            <div className="widgets-outer">
              {/*Widgets Section*/}
              <div className="widgets-section">
                <div className="row clearfix">
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-3 col-md-12 col-sm-12">
                    <div className="footer-widget logo-widget">
                      <div className="logo logo_footer mt-0">
                        <a href="#">
                          Auto Fix
                          <br />
                          <span className="small-text text-uppercase">
                            Multi brand car service
                          </span>
                        </a>
                      </div>
                      <div className="text color-white">
                        <p className="text color-white text-sm">
                          Auto Fix is the most trusted car service center in
                          Dubai. We offer full range of garage services to
                          vehicle owners in UAE.
                        </p>
                        <p className="text color-white text-sm mt-2">
                          All our workshops are fitted with state-of-the-art
                          tools where our team is always ready for providing a
                          quality service for your car.
                        </p>
                      </div>
                      {/*  <div className="copyright color-white mt-3">© Copyright 2022 
                                <br>All Rights Reserved by <a href="https://autofix.ae" className="bold-text color-white">Auto Fix</a>
                            </div> */}
                    </div>
                  </div>
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget links-widget">
                      <h2 className="widget-title color-white">Quick Links</h2>

                      <div className="widget-content white_dsg">
                        <ul className="list clearfix">
                          <li className="d-block">
                            <a href="/">Home</a>
                          </li>
                          <li className="d-block">
                            <a href="about">About Us</a>
                          </li>
                          <li className="d-block">
                            <a href="contact-us">Contact Us</a>
                          </li>
                          <li className="d-block">
                            <a href="services">Services</a>
                          </li>
                          <li className="d-block">
                            <a href="packages">Packages</a>
                          </li>
                          <li className="d-block">
                            <a href="terms-and-conditions">
                              Terms & Conditions
                            </a>
                          </li>
                          <li>
                            <a href="privacy-policy">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-column col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget links-widget">
                      <h2 className="widget-title color-white">Our Services</h2>

                      <div className="widget-content white_dsg">
                        <ul className="list clearfix">
                          <li>
                            <a href="services/car-ac-repair-dubai.html">
                              Car AC Repair
                            </a>
                          </li>
                          <li>
                            <a href="services/car-oil-change.html">
                              Car oil change service
                            </a>
                          </li>
                          <li>
                            <a href="services/car-maintenance.html">
                              Car Maintenance
                            </a>
                          </li>
                          <li>
                            <a href="services/car-transmission-gearbox-repair.html">
                              Car Transmission Repair
                            </a>
                          </li>
                          <li>
                            <a href="services/car-engine-repair.html">
                              Car Engine Repair
                            </a>
                          </li>
                          <li>
                            <a href="services/car-battery-replacement.html">
                              Car Battery Replacement
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/*Footer Column*/}
                  <div className="footer-column col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget contact-widget white_dsg">
                      <h2 className="widget-title color-white">Get In Touch</h2>
                      <div className="widget-content">
                        <ul className="contact-info-list">
                          <li className="color-white">
                            <span className="fa fa-location-arrow"></span>Head
                            Office : Autorent Car Service Center, Plot No
                            369-332, Industrial Area 4, Al Quoz, Dubai, UAE
                          </li>
                          <li>
                            <span className="fa fa-envelope-open"></span>
                            <a href="#">enquiries@autofix.ae</a>
                          </li>
                          <li>
                            <span className="fa fa-phone"></span>
                            <a href="tel:8002886349">8002886349</a>
                          </li>
                        </ul>
                      </div>

                      <ul className="social-icon-two">
                        {/* Site Setting Along with the social Icons are fetched at Header.php */}
                        <li>
                          <a
                            href="https://www.facebook.com/autofix.uae"
                            target="_blank"
                          >
                            <span className="fab fa-facebook-f"></span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/AutofixUAE"
                            target="_blank"
                          >
                            <span className="fab fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/autofix.uae"
                            target="_blank"
                          >
                            <span className="fab fa-instagram"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="man-image"><img src="images/resource/man-2.png" alt=""></div> */}
            </div>
          </div>
        </footer>
        {/*End Main Footer*/}
        {/* Page Wrapper */}

        {/* Scroll To Top */}
        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fa fa-angle-up"></span>
        </div>

        {/* Sign Up Login Modal */}

        {/* Finance Modal */}

        <div
          className="modal fade"
          id="signupSignInForm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
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
                          <form id="signUpForm444" type="post" action="#">
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
                                          data-parsley-required-message="Choose Country"
                                        >
                                          <option>
                                            Select Country
                                          </option>
                                          <option
                                            value="36"
                                            data-cc_prefix="+971"
                                          >
                                            United Arab Emirates
                                          </option>
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
                                          name="password"
                                          id="singuppassword"
                                          
                                        />
                                      </div>
                                    </div>
                                    <div className="col-12 mt-4 text-center form-navigation">
                                      <div className="btns-container">
                                        <button
                                          type="button"
                                          className="next common_button d-block w-100 py-2"
                                          id="sign_up_level1"
                                        >
                                          <span
                                            className="bold-text"
                                            mytext="Sign Up & Verify"
                                          >
                                            Sign Up & Verify
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                    {/* <div className="col-12 mt-5 text-center ">
                                                <div className="text-container">
                                                    <p className="small-text">Already Registered? <a className="color-gold bold-text to-login medium-text" href="#">Login</a></p>
                                                </div>
                                            </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* *********************************** SignUp Form Ends **************************************** */}

                            {/* *********************************** Verify Phone Number **************************************** */}

                            <div className="form-container-login w-100 form-section">
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
                                          <a
                                            className="color-gold bold-text"
                                            href="#"
                                            id="resendCodeEvt"
                                            data-refid="0"
                                          >
                                            Resend Code
                                          </a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>

                        <div
                          className="form-wrapper hiddenInitial"
                          id="recoverform"
                        >
                          <form id="recoverform444">
                            {/* ***********************************Signup Form**************************************** */}
                            <div className="form-container-login w-100">
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
                                          <a
                                            className="color-gold bold-text to-login"
                                            href="#"
                                          >
                                            Login
                                          </a>
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

                        <div
                          className="form-wrapper hiddenInitial"
                          id="loginForm"
                        >
                          <form id="loginForm444" action="#" type="post">
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
                                          name="username"
                                          id="username"
                                          type="text"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="col-12 mt-4 text-center">
                                      <div className="btns-container">
                                        <button
                                          type="button"
                                          id="login"
                                          className=" common_button d-block w-100 py-2"
                                        >
                                          <span
                                            className="bold-text"
                                            mytext="Login"
                                          >
                                            Login
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="col-12 mt-5 text-center ">
                                      <div className="text-container">
                                        <p className="small-text">
                                          Forgot Your Password?{" "}
                                          <a
                                            className="color-gold bold-text to-recover"
                                            href="#"
                                          >
                                            Reset Now
                                          </a>
                                        </p>
                                        {/* <p className="small-text mt-4">Dont Have an Account? <a className="color-gold bold-text to-signUp medium-text" href="#">Sign Up</a></p> */}
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
                                        Your account is not verified yet, We
                                        have Sent you an Email with the
                                        verification code, please Enter the code
                                        Below to continue
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
                                          <a
                                            className="color-gold bold-text"
                                            href="#"
                                          >
                                            Resend Email
                                          </a>
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
      </div>
    );
  }
}

export default Layout;
