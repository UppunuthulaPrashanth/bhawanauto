import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.css"; // import first
import { toast, ToastContainer } from "react-toastify"; // then this
import Parser from 'html-react-parser';
import GoogleTranslate from "../pages/GoogleTranslate";


class Layout extends React.Component {
  
  state = {isOpen: true};
  updateState = () => {this.setState({isOpen: (!this.state.isOpen)})
  // console.log(this.state.isOpen)
};

  render() {
    var userToken = localStorage.getItem("userToken");
    var userData = localStorage.getItem("userData");

    const logout = () => {
      localStorage.clear();
      toast.error("Logout success")
      window.location.reload();
    };

    if(this.props[0]){
     var HEADER_PHONE=this.props[0].value;
     var FOOTER_ADDRESS=this.props[1].value;
     var FOOTER_EMAIL=this.props[2].value;
     var FOOTER_TEXT=this.props[3].value;
     var S_FACEBOOK=this.props[4].value;
     var S_WHATSAPP=this.props[5].value;
     var FOOTER_PHONE=this.props[6].value;
     var S_INSTAGRAM=this.props[7].value;
    }


   



    return (
      <div className="page-wrapper">
        <ToastContainer />
        {/* <- add line */}
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
                          
                            <select  name="" id="">
                              <option>English</option>
                              <option>Arabic</option>
                            </select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {/* <GoogleTranslate/> */}
                          <div className="mr-sm-4 bold-text small-text my-auto d-none d-sm-block">
                            <span>CALL : </span>
                            <Link to={"tel:"+HEADER_PHONE}>{HEADER_PHONE? HEADER_PHONE:"800 500 111"}</Link>&nbsp;
                          </div>
                          <div className="mr-sm-4 bold-text small-text my-auto ">
                            <span></span>
                            {userToken ? (
                              <div className="mr-sm-4 bold-text small-text my-auto dropdown_wrapper">
                                <a
                                  className="border-sm-left border-sm-right px-3"
                                >
                                  {" "}
                                  Hi, {userData=='undefined'?'loading':userData} &nbsp;
                                  
                                  <i className="fas fa-sort-down"></i>
                                </a>
                                <div className="hidden-inital dropdown_container dropdown_sm">
                                  <div className="dropdown_inner ">
                                    <ul>
                                      <li>
                                        {userData=='Guest'?'Guest':
                                      <Link
                                        to="profile"
                                      >Profile
                                      </Link>
                                      }
                                      </li>
                                      <li>
                                      <Link
                                        to="booking-list"
                                      >Bookings
                                      </Link>
                                      </li>

                                      <li
                                        className="d-block text-center bg_light"
                                        onClick={logout}
                                      >
                                        Logout
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <Link
                                to="auth"
                                
                                className="border-sm-left border-sm-right px-3 login-signup"
                              >
                                Login or Signup
                              </Link>
                            )}
                          </div>
                          <div className="social_icons_wrapper d-none d-sm-block">
                            <ul className="social-icon-four">
                              {/* Site Setting Along with the social Icons are fetched at Header.php */}
                              <li>
                                <a
                                  href={S_FACEBOOK?S_FACEBOOK:"#"}
                                  target="_blank"
                                >
                                  <span className="fab fa-facebook-f"></span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href={S_WHATSAPP?S_WHATSAPP:"#"}
                                  target="_blank"
                                >
                                  <span className="fab fa-whatsapp"></span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href={S_INSTAGRAM?S_INSTAGRAM:"#"}
                                  target="_blank"
                                >
                                  <span className="fab fa-instagram"></span>
                                </a>
                              </li>
                            </ul>
                          </div>

                        </div>
                        <div className="col-8 border-bottom float-right"></div>
                      </div>
                      <div className="col-12  max1200 min1200 d-block mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-custom nav_design_custom px-0 pr-3 pr-xl-0">
                          <Link
                            className="navbar-brand logo_img"
                            to="/"
                            reloadDocument={true}
                          >
                            <img
                              src="/assets/front/logo/bhawan5.png"
                              className="img-fluid abs_logo"
                              alt=""
                              title=""
                            />{" "}
                          </Link>
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
                              <Navbar />
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
        {/* <span className="whatsappIconFixedIcon">
          <Link
            className="whatsappIconLink p-2"
            target="_blank"
            rel="noopener"
            to="https://api.whatsapp.com/send?phone=xxxxxxxx&amp;text=Hi"
          >
            <img
              alt="chat on whatsapp"
              className="whatsappIcon whatsApp45 img-fluid "
              src="https://servicemycar.ae/public/assets/icons/whatsapp-logo-variant.svg"
            />
          </Link>
        </span> */}
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
                          <img
                              src="/assets/front/logo/footer-logo.png"
                              className="img-fluid abs_logo"
                              alt=""
                              title="Bahwanautomobiles"
                              style={{height:"70px"}}
                            />
                      </div>
                      <div className="text color-white">
                      {Parser(FOOTER_TEXT?FOOTER_TEXT:"")}

                      </div>
                    </div>
                    
                  </div>
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget links-widget">
                      <h2 className="widget-title color-white">Quick Links</h2>

                      <div className="widget-content white_dsg">
                        <ul className="list clearfix">
                          <li className="d-block">
                            <Link to="offers">
                              Offers
                            </Link>
                          </li>
                          <li className="d-block">
                            <Link to="about">About Us</Link>
                          </li>
                          <li className="d-block">
                            <Link to="contact-us">Contact Us</Link>
                          </li>
                          <li className="d-block">
                            <Link to="services">Services</Link>
                          </li>
                          <li className="d-block">
                            <Link to="packages">Packages</Link>
                          </li>
                          <li className="d-block">
                            <Link to="terms-and-conditions">
                              Terms & Conditions
                            </Link>
                          </li>
                          <li>
                            <Link to="privacy-policy">Privacy Policy</Link>
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
                            <Link to="services/periodic-maintenance">
                              Car Periodic Maintenance
                            </Link>
                          </li>
                          <li>
                            <Link to="services/car-battery-tire-replacement">
                              Car Battery & Tire Replacement
                            </Link>
                          </li>
                          <li>
                            <Link to="services/car-ac-repair">
                              Car A/C repair
                            </Link>
                          </li>
                          <li>
                            <Link to="services/transmission_repair">
                              Car Transmission Repair
                            </Link>
                          </li>
                          <li>
                            <Link to="services/engine-repair">
                              Car Engine Repair
                            </Link>
                          </li>
                          <li>
                            <Link to="services/body-repair-repainting">
                              Car Body Repair & Painting
                            </Link>
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
                            <span className="fa fa-map-marker"></span>
                            {Parser(FOOTER_ADDRESS?FOOTER_ADDRESS:"")}
                          </li>
                          <li>
                            <span className="fa fa-envelope-open"></span>
                            <a href={FOOTER_EMAIL?"to:"+FOOTER_EMAIL:'#'}>{FOOTER_EMAIL?FOOTER_EMAIL:"#"}</a>
                          </li>
                          <li>
                            <span className="fa fa-phone"></span>
                            <a to={FOOTER_PHONE?"tel:"+FOOTER_PHONE:'#'}>{FOOTER_PHONE?FOOTER_PHONE:"#"}</a>
                          </li>
                        </ul>
                      </div>

                      <ul className="social-icon-two">
                        <li>
                          <a
                            href={S_FACEBOOK?S_FACEBOOK:"#"}
                            target="_blank"
                          >
                            <span className="fab fa-facebook-f"></span>
                          </a>
                        </li>
                        <li>
                          <a
                          href={S_WHATSAPP?S_WHATSAPP:"#"}
                          target="_blank"
                          >
                            <span className="fab fa-whatsapp"></span>
                          </a>
                        </li>
                        <li>
                          <a
                            href={S_INSTAGRAM?S_INSTAGRAM:"#"}
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
            </div>
          </div>
        </footer>
        {/*End Main Footer*/}
        {/* Scroll To Top */}
        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fa fa-angle-up"></span>
        </div>


        {/* promotion model */}
        {/* {this.state.isOpen ?
        <>
        <Link to={"packages"}>
       
        <div className="card floating">
          <p className="my-4 font-weight-bold">Full body polish, <i className="fa fa-times fa-lg" onClick={this.updateState}style={{backgroundColor:"#27A3E2", color:"black", borderRadius:"2px", width:"20px", height:"20px"}}></i>Upholstery Cleaning, Headlight Polish, and Engine Room Cleaning
            Only for 40 OMR !! book now.</p>
        </div></Link>
        </>
        : null } */}
        {/* promoition model */}


        {/* <Modal show={true} >
        <p className="my-4 font-weight-bold">Full body polish, Upholstery Cleaning, Headlight Polish, and Engine Room Cleaning
            Only for 40 OMR !! book now.</p>        <Modal.Footer>
        </Modal.Footer>
      </Modal> */}



      </div>
    );
  }
}

export default Layout;
