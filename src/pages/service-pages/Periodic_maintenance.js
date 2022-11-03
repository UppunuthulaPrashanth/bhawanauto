import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";

export default function Periodic_maintenance() {
  return (
    <>
      <section className="row">
        <div className="col-12 px-0 breadCrumbWrapper">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 pt-4">
                <div className="row">
                  <div className="col-12 text-left">
                    <h1 className="page_title">Periodic Maintenance</h1>
                    <p>
                      <span>
                        <a href="/" className="text-white">
                          Home
                        </a>
                      </span>
                      <span className="mx-2">
                        <i className="fas fa-angle-right"></i>
                      </span>
                      <span>
                        <a href="/services" className="text-white">
                          Services
                        </a>
                      </span>
                      <span className="mx-2">
                        <i className="fas fa-angle-right"></i>
                      </span>
                      <span>Periodic Maintenance</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="sidebar-page-container pb-0 pt-1">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Content Side*/}
            <div className="col-lg-8 col-md-8  col-sm-12">
              <div className="content-side  background-color-white border_radius_10 pb-4 d-block mx-auto">
                <div className="service_page_design">
                  <div className="row">
                    <div className="col-12">
                      <div className="image_wrapper">
                        <picture>
                          <source
                            srcset="/assets/front/uploads/services/Periodic_Maintenance.png.jpg"
                            type="image/webp"
                          />
                          <source
                            srcset="/assets/front/uploads/services/Periodic_Maintenance.png.jpg"
                            type="image/jpg"
                          />
                          <img
                            alt="Car Oil Change"
                            title="Car Oil Change"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            src="/assets/front/uploads/services/Periodic_Maintenance.png.jpg"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-5 mt-4">
                  <div className="col-12 col-lg-12 col-md-12 d-block mx-auto">
                    <div className="row">
                      <div className="col-12 ">
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-12 content_wrapper_service_page">
                                <div className="small-text  text-justify">
                                  <h3 className="pt-3 ">
                                    What is Periodic Maintenance Schedule?
                                  </h3>
                                  <p className="pt-2 pb-2">
                                    Periodic Maintain Schedule is a
                                    Time-Based Series of activities Performed on
                                    Cars to Maintain the Smooth Operation of The
                                    Vehicle.
                                  </p>
                                  <p>
                                    Wear and tear are unavoidable and motor
                                    vehicles would usually have a long-life span
                                    before eventually being un-operational.
                                    Although they are designed to last long
                                    periods, in time, some parts deteriorate and
                                    need to be replaced due to use and constant
                                    exposure to harsh environment. Within an
                                    equipment’s life cycle, there is ample time
                                    to periodically check its condition to
                                    maximize its use. Periodic maintenance is a
                                    strategy that requires maintenance tasks to
                                    be performed at set time intervals while the
                                    vehicle is operational. Like scheduled
                                    maintenance, periodic maintenance activities
                                    are planned ahead of time and are performed
                                    with or without signs of deterioration. The
                                    time interval and frequency of service tasks
                                    are the necessity for a vehicle to last,
                                    based on the parameters it was built. Thus,
                                    the schedule is specific for each vehicle
                                    model and variant Periodic Maintenance.
                                    Service Contract
                                  </p>

                                  <p className="pt-2">
                                    Experience “Peace of Mind” when you purchase
                                    tailor made packages to suit your
                                    requirement.
                                  </p>

                                  <h5 className="pt-3 pb-2">Types of contract:</h5>
                                  <ul>
                                    <li>Lube service contract</li>
                                    <li>Periodic maintenance contract</li>
                                    <li>Comprehensive maintenance contract</li>
                                    <li>
                                      Customized contract to suit your
                                      requirement
                                    </li>
                                  </ul>
                                  <h5 className="pt-3 pb-2">
                                    Benefits of Service Contract
                                  </h5>

                                  <li>Priority Service</li>
                                  <li>Cashless transaction</li>
                                  <li>Protection from price inflation</li>
                                  <li>
                                    Contract price lower than regular PMS prices
                                  </li>
                                  <li>
                                    You can now avail Easy Payment Scheme on
                                    your service package purchases. Easy Payment
                                    Plan is available to all NBO & Bank Muscat
                                    Credit Card holders for the purchases of
                                    Service contract of above OMR 100/-.
                                  </li>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Talk to customer */}
                <Talk_to_customer/>

              </div>
            </div>

           {/* Side bar */}
           <Side_panel/>

          </div>
        </div>
      </div>
      {/* How its work */}
      <How_its_work/>
      
    </>
  );
}
