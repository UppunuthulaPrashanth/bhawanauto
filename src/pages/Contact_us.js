import React from "react";

export default function Contact_us() {
  return (
    <>
      {/* Contact Page Section */}
      <section className="contact-section-two pt-4 pb-0">
        <div className="auto-container">
          <div className="inner-container">
            <div className="sec-title text-center mb-3">
              <h2>Contact Us</h2>
              {/* <span className="devider">
              <span></span>
            </span> */}
              <div className="text">
                Your Dedicated Personal Car Service Advisor is Available to
                Assist You. <br /> Book your car service online and get up to
                30% Off on all car models*.
                <br />{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-xl-12 col-lg-12 d-block mx-auto max1200 mb-5">
                {/* Contact Form */}
                {/* <div className="contact-info-outer ">
            <ul className="contact-info clearfix">
                           <li className="move_to" moveto="#dubai_location1">
                  <span className="icon fa fa-map-marker-alt"></span> 
                  <p></p>
                  <p><strong> </strong></p>
                  <p></p>
               </li>
                        </ul>
         </div> */}
                <div className="address_container text-center mb-0 mb-lg-5">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_2"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>Al Quoz Industrial Area 4</p>
                        <p>
                          <strong>Dubai </strong>
                        </p>
                        <p>800 2886349</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_3"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>Dubai Industrial City</p>
                        <p>
                          <strong>Dubai </strong>
                        </p>
                        <p>800 2886349</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_4"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>
                          Ras Al-Khaimah - Ras al Khaimah - United Arab Emirates
                        </p>
                        <p>
                          <strong>Ras Al Khaimah </strong>
                        </p>
                        <p>800 2886349</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_6"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>Industrial Area 12</p>
                        <p>
                          <strong>Sharjah </strong>
                        </p>
                        <p>800 2886349</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_7"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>Musaffah Industrial Area - 13</p>
                        <p>
                          <strong>Abu Dhabi </strong>
                        </p>
                        <p>800 2886349</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_8"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>
                          Hessa Bint Mohammed Street, Sanaiya Industrial, Al Ain
                        </p>
                        <p>
                          <strong>Abu Dhabi </strong>
                        </p>
                        <p>800 2886349</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_9"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>8A Street, Umm Ramool</p>
                        <p>
                          <strong>Dubai </strong>
                        </p>
                        <p>800 2886349</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_10"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>Al Hayl Police Station, Al Hayl Industrial Road</p>
                        <p>
                          <strong>Fujairah </strong>
                        </p>
                        <p>8002886349</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="location_wrapper_outer mt-2" id="location_2">
                  <div className="location_wrapper">
                    <h3>Al Quoz, Dubai</h3>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                  <div className="contact_wrapper">
                    <div className="row">
                      <div className="col-lg-6 order-lg-1 ">
                        <div className="mapouter">
                          <div className="gmap_canvas" id="locMapDetail2">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5824101124444!2d55.22675541500794!3d25.115993383933965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6958dc66a413%3A0x289c554b1a5aa763!2sAuto%20Fix%20Multibrand%20Car%20Service!5e0!3m2!1sen!2sae!4v1609668433590!5m2!1sen!2sae"
                              width="100%"
                              height="250"
                              frameBorder="0"
                              style={{border:"0"}}
                              allowFullScreen=""
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-block m-auto contactUsInformation">
                        <div className="p-3 p-md-3">
                          <div className="icons-wrapper-contact-page-wrapper">
                            <div className="row no-gutters">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="#">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-map-marker-alt"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text primary-color" href="#">
                                  Al Quoz, Dubai
                                </a>
                                <p>Al Quoz Industrial Area 4</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-phone"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="tel:800 2886349">
                                  800 2886349
                                </a>
                                <p>
                                  Call us any time from 08:00am till 06:30pm
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-calendar-week"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="#">
                                  Monday to Saturday
                                </a>
                                <p>8:00am to 7:30pm</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="600"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="mailto:er.info@arcs-me.com">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="far fa-envelope"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a
                                  className="bold-text"
                                  href="mailto:enquiries@autofix.ae"
                                >
                                  enquiries@autofix.ae
                                </a>
                                <p className="m-0">
                                  <span
                                    className="copyEmail"
                                    email="enquiries@autofix.ae"
                                  >
                                    Click here to copy
                                  </span>
                                </p>
                                <p>
                                  Email us anytime, we usually reply within 24
                                  hours
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                </div>
                <div className="location_wrapper_outer mt-2" id="location_3">
                  <div className="location_wrapper">
                    <h3>Dubai Industrial City, Dubai</h3>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                  <div className="contact_wrapper">
                    <div className="row">
                      <div className="col-lg-6 order-lg-1 ">
                        <div className="mapouter">
                          <div className="gmap_canvas" id="locMapDetail2">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.370194808772!2d55.08158201447745!3d24.851202951749997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0a520363f29d%3A0xab2ef06f6ccb7c07!2sAuto%20Fix-Multibrand%20Car%20Service%20Centre%20-%20DIC!5e0!3m2!1sen!2sae!4v1611330388323!5m2!1sen!2sae"
                              width="100%"
                              height="250"
                              frameBorder="0"
                              style={{border:"0"}}
                              allowFullScreen=""
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-block m-auto contactUsInformation">
                        <div className="p-3 p-md-3">
                          <div className="icons-wrapper-contact-page-wrapper">
                            <div className="row no-gutters">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="#">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-map-marker-alt"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text primary-color" href="#">
                                  Dubai Industrial City, Dubai
                                </a>
                                <p>Dubai Industrial City</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-phone"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="tel:800 2886349">
                                  800 2886349
                                </a>
                                <p>
                                  Call us any time from 08:00am till 06:30pm
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-calendar-week"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="#">
                                  Monday to Saturday
                                </a>
                                <p>08:00am to 03:30pm</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="600"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="mailto:er.info@arcs-me.com">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="far fa-envelope"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a
                                  className="bold-text"
                                  href="mailto:enquiries@autofix.ae"
                                >
                                  enquiries@autofix.ae
                                </a>
                                <p className="m-0">
                                  <span
                                    className="copyEmail"
                                    email="enquiries@autofix.ae"
                                  >
                                    Click here to copy
                                  </span>
                                </p>
                                <p>
                                  Email us anytime, we usually reply within 24
                                  hours
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                </div>
                <div className="location_wrapper_outer mt-2" id="location_4">
                  <div className="location_wrapper">
                    <h3>Ras Al-Khaimah</h3>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                  <div className="contact_wrapper">
                    <div className="row">
                      <div className="col-lg-6 order-lg-1 ">
                        <div className="mapouter">
                          <div className="gmap_canvas" id="locMapDetail2">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.387303678038!2d55.873233715020156!3d25.72470258365355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa57d011bdf75e995!2sAuto%20Fix%20Car%20Service%20Centre%20RAK!5e0!3m2!1sen!2sae!4v1643780585583!5m2!1sen!2sae%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowFullScreen=%22%22%20loading=%22lazy%22"
                              width="100%"
                              height="250"
                              frameBorder="0"
                              style={{border:"0"}}
                              allowFullScreen=""
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-block m-auto contactUsInformation">
                        <div className="p-3 p-md-3">
                          <div className="icons-wrapper-contact-page-wrapper">
                            <div className="row no-gutters">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="#">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-map-marker-alt"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text primary-color" href="#">
                                  Ras Al-Khaimah
                                </a>
                                <p>
                                  Ras Al-Khaimah - Ras al Khaimah - United Arab
                                  Emirates
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-phone"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="tel:800 2886349">
                                  800 2886349
                                </a>
                                <p>
                                  Call us any time from 08:00am till 06:30pm
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-calendar-week"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="#">
                                  Monday to Saturday
                                </a>
                                <p>08:00am to 06:30pm</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="600"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="mailto:er.info@arcs-me.com">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="far fa-envelope"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a
                                  className="bold-text"
                                  href="mailto:enquiries@autofix.ae"
                                >
                                  enquiries@autofix.ae
                                </a>
                                <p className="m-0">
                                  <span
                                    className="copyEmail"
                                    email="enquiries@autofix.ae"
                                  >
                                    Click here to copy
                                  </span>
                                </p>
                                <p>
                                  Email us anytime, we usually reply within 24
                                  hours
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                </div>
                <div className="location_wrapper_outer mt-2" id="location_6">
                  <div className="location_wrapper">
                    <h3>Sharjah</h3>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                  <div className="contact_wrapper">
                    <div className="row">
                      <div className="col-lg-6 order-lg-1 ">
                        <div className="mapouter">
                          <div className="gmap_canvas" id="locMapDetail2">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d901.6701162933174!2d55.4254986!3d25.3149376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f3c1f28e797%3A0x9e0b475e19f90650!2sAuto%20Fix-%20Sharjah!5e0!3m2!1sen!2sae!4v1623649733192!5m2!1sen!2sae"
                              width="100%"
                              height="250"
                              frameBorder="0"
                              style={{border:"0"}}
                              allowFullScreen=""
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-block m-auto contactUsInformation">
                        <div className="p-3 p-md-3">
                          <div className="icons-wrapper-contact-page-wrapper">
                            <div className="row no-gutters">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="#">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-map-marker-alt"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text primary-color" href="#">
                                  Sharjah
                                </a>
                                <p>Industrial Area 12</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-phone"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="tel:800 2886349">
                                  800 2886349
                                </a>
                                <p>
                                  Call us any time from 08:00am till 06:30pm
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-calendar-week"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="#">
                                  Monday to Saturday
                                </a>
                                <p>7:30am to 2:30pm</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="600"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="mailto:er.info@arcs-me.com">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="far fa-envelope"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a
                                  className="bold-text"
                                  href="mailto:enquiries@autofix.ae"
                                >
                                  enquiries@autofix.ae
                                </a>
                                <p className="m-0">
                                  <span
                                    className="copyEmail"
                                    email="enquiries@autofix.ae"
                                  >
                                    Click here to copy
                                  </span>
                                </p>
                                <p>
                                  Email us anytime, we usually reply within 24
                                  hours
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                </div>
                <div className="location_wrapper_outer mt-2" id="location_7">
                  <div className="location_wrapper">
                    <h3>Abu Dhabi</h3>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                  <div className="contact_wrapper">
                    <div className="row">
                      <div className="col-lg-6 order-lg-1 ">
                        <div className="mapouter">
                          <div className="gmap_canvas" id="locMapDetail2">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14537.081046931882!2d54.48963146977537!3d24.371900000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41bf7f440f15%3A0x64f7de2cdc27f393!2sAuto%20Fix-Multibrand%20Car%20Service%20Centre-Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1611407090436!5m2!1sen!2sae"
                              width="100%"
                              height="250"
                              frameBorder="0"
                              allowFullScreen=""
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-block m-auto contactUsInformation">
                        <div className="p-3 p-md-3">
                          <div className="icons-wrapper-contact-page-wrapper">
                            <div className="row no-gutters">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="#">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-map-marker-alt"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text primary-color" href="#">
                                  Abu Dhabi
                                </a>
                                <p>Musaffah Industrial Area - 13</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-phone"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="tel:800 2886349">
                                  800 2886349
                                </a>
                                <p>
                                  Call us any time from 08:00am till 06:30pm
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-calendar-week"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="#">
                                  Monday to Saturday
                                </a>
                                <p>8:00am to 7:30pm</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="600"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="mailto:er.info@arcs-me.com">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="far fa-envelope"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a
                                  className="bold-text"
                                  href="mailto:enquiries@autofix.ae"
                                >
                                  enquiries@autofix.ae
                                </a>
                                <p className="m-0">
                                  <span
                                    className="copyEmail"
                                    email="enquiries@autofix.ae"
                                  >
                                    Click here to copy
                                  </span>
                                </p>
                                <p>
                                  Email us anytime, we usually reply within 24
                                  hours
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                </div>
                <div className="location_wrapper_outer mt-2" id="location_8">
                  <div className="location_wrapper">
                    <h3>Al Ain</h3>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                  <div className="contact_wrapper">
                    <div className="row">
                      <div className="col-lg-6 order-lg-1 ">
                        <div className="mapouter">
                          <div className="gmap_canvas" id="locMapDetail2">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.6551066581346!2d55.760109814464265!3d24.183825577998324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab76da3eb0c5b%3A0x607eb20d8abf6af1!2sAuto%20Fix-Multibrand%20Car%20Service%20Centre-%20Alain!5e0!3m2!1sen!2sae!4v1611407304193!5m2!1sen!2sae"
                              width="100%"
                              height="250"
                              frameBorder="0"
                              style={{border:"0"}}
                              allowFullScreen=""
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-block m-auto contactUsInformation">
                        <div className="p-3 p-md-3">
                          <div className="icons-wrapper-contact-page-wrapper">
                            <div className="row no-gutters">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="#">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-map-marker-alt"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text primary-color" href="#">
                                  Al Ain
                                </a>
                                <p>
                                  Hessa Bint Mohammed Street, Sanaiya
                                  Industrial, Al Ain
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-phone"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="tel:800 2886349">
                                  800 2886349
                                </a>
                                <p>
                                  Call us any time from 08:00am till 06:30pm
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-calendar-week"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="#">
                                  Monday to Saturday
                                </a>
                                <p>08:00am to 07:30pm</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="600"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="mailto:er.info@arcs-me.com">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="far fa-envelope"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a
                                  className="bold-text"
                                  href="mailto:enquiries@autofix.ae"
                                >
                                  enquiries@autofix.ae
                                </a>
                                <p className="m-0">
                                  <span
                                    className="copyEmail"
                                    email="enquiries@autofix.ae"
                                  >
                                    Click here to copy
                                  </span>
                                </p>
                                <p>
                                  Email us anytime, we usually reply within 24
                                  hours
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                </div>
                <div className="location_wrapper_outer mt-2" id="location_9">
                  <div className="location_wrapper">
                    <h3>Umm Ramool, Dubai</h3>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                  <div className="contact_wrapper">
                    <div className="row">
                      <div className="col-lg-6 order-lg-1 ">
                        <div className="mapouter">
                          <div className="gmap_canvas" id="locMapDetail2">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.191193362158!2d55.35957751448495!3d25.23048453654193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d177b67eecb%3A0x3acb03a0169c5d0b!2sAuto%20Fix-%20Umm%20Ramool!5e0!3m2!1sen!2sae!4v1620542255511!5m2!1sen!2sae"
                              width="100%"
                              height="250"
                              frameBorder="0"
                              style={{border:"0"}}
                              allowFullScreen=""
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-block m-auto contactUsInformation">
                        <div className="p-3 p-md-3">
                          <div className="icons-wrapper-contact-page-wrapper">
                            <div className="row no-gutters">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="#">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-map-marker-alt"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text primary-color" href="#">
                                  Umm Ramool, Dubai
                                </a>
                                <p>8A Street, Umm Ramool</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-phone"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="tel:800 2886349">
                                  800 2886349
                                </a>
                                <p>
                                  Call us any time from 08:00am till 06:30pm
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-calendar-week"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="#">
                                  Monday to Saturday
                                </a>
                                <p>8:00am to 7:30pm</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="600"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="mailto:er.info@arcs-me.com">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="far fa-envelope"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a
                                  className="bold-text"
                                  href="mailto:enquiries@autofix.ae"
                                >
                                  enquiries@autofix.ae
                                </a>
                                <p className="m-0">
                                  <span
                                    className="copyEmail"
                                    email="enquiries@autofix.ae"
                                  >
                                    Click here to copy
                                  </span>
                                </p>
                                <p>
                                  Email us anytime, we usually reply within 24
                                  hours
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                </div>
                <div className="location_wrapper_outer mt-2" id="location_10">
                  <div className="location_wrapper">
                    <h3>Fujairah</h3>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                  <div className="contact_wrapper">
                    <div className="row">
                      <div className="col-lg-6 order-lg-1 ">
                        <div className="mapouter">
                          <div className="gmap_canvas" id="locMapDetail2">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0233845472076!2d56.27123181543106!3d25.101069741752482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4ff9eaa461b61%3A0xd89f7de14cc604cd!2sAuto%20Fix%20Multibrand%20Car%20Service%20Center-%20Fujairah!5e0!3m2!1sen!2sae!4v1646381743680!5m2!1sen!2sae"
                              width="100%"
                              height="250"
                              frameBorder="0"
                              style={{border:"0"}}
                              allowFullScreen=""
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-block m-auto contactUsInformation">
                        <div className="p-3 p-md-3">
                          <div className="icons-wrapper-contact-page-wrapper">
                            <div className="row no-gutters">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="#">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-map-marker-alt"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text primary-color" href="#">
                                  Fujairah
                                </a>
                                <p>
                                  Al Hayl Police Station, Al Hayl Industrial
                                  Road
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-phone"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="tel:8002886349">
                                  8002886349
                                </a>
                                <p>
                                  Call us any time from 08:00am till 06:30pm
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="300"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href=" tel:+97143397533">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="fas fa-calendar-week"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a className="bold-text" href="#">
                                  Monday to Saturday
                                </a>
                                <p>9:00am to 7:30pm</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="icons-wrapper-contact-page-wrapper"
                            data-aos-delay="600"
                          >
                            <div className="row no-gutters mt-3">
                              <div className="col-sm-2 col-12 text-sm-right pr-3">
                                <a href="mailto:er.info@arcs-me.com">
                                  <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                    <i className="far fa-envelope"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="col-sm-10 col-12">
                                <a
                                  className="bold-text"
                                  href="mailto:enquiries@autofix.ae"
                                >
                                  enquiries@autofix.ae
                                </a>
                                <p className="m-0">
                                  <span
                                    className="copyEmail"
                                    email="enquiries@autofix.ae"
                                  >
                                    Click here to copy
                                  </span>
                                </p>
                                <p>
                                  Email us anytime, we usually reply within 24
                                  hours
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* **********************Each Contact Wrapper***************************** */}
                </div>

                <div className="contact-form-two mt-4 px-3 pt-3">
                  <h3 className="common_heading mb-3">LEAVE A MESSAGE</h3>
                  <form method="post" id="contact-form">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Name"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone"
                          required=""
                          data-parsley-minlength="9"
                          data-parsley-minlength-message="Mobile number should be at least 9 to 12 long"
                          data-parsley-type="digits"
                          data-parsley-type-message="Mobile number should be only numbers"
                          maxLength="12"
                          data-parsley-pattern="^[\d\+\-\.\(\)\/\s]*$"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required=""
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <button
                          className="theme-btn btn-style-two submitFormButton"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="btn-title">Send Message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Contact Page Section */}
    </>
  );
}
