import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";


export default function Wheel_alignment_balancing() {
  return (
    <>
      <section className="row">
        <div className="col-12 px-0 breadCrumbWrapper">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 pt-4">
                <div className="row">
                  <div className="col-12 text-left">
                    <h1 className="page_title">AC service</h1>
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
                      <span>Car AC Repair</span>
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
                            srcset="/assets/front/uploads/services/wheel-alignment.jpg"
                            type="image/webp"
                          />
                          <source
                            srcset="/assets/front/uploads/services/wheel-alignment.jpg"
                            type="image/jpg"
                          />
                          <img
                            alt="Car AC Repair"
                            title="car ac repair dubai"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            style={{ height: "470px" }}
                            src="/assets/front/uploads/services/wheel-alignment.jpg"
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
                                <div className="text-justify">
                                  <h3 className="pt-2"> WHAT IS TIRE ALIGNMENT?</h3>
                                  <p className="pt-1">
                                    Alignment refers to an adjustment of a
                                    vehicle’s suspension – the system that
                                    connects a vehicle to its wheels. It is not
                                    an adjustment of the tires or wheels
                                    themselves. The key to proper alignment is
                                    adjusting the angles of the tires which
                                    affects how they contact the road.
                                  </p>
                                  <h3 className="pt-2">
                                    HOW DO I KNOW IF I NEED A TIRE ALIGNMENT?
                                  </h3>
                                  <p className="pt-1">
                                    There are a couple ways to tell if your car
                                    needs a tire alignment. If you've noticed
                                    one or more of these indicators, you should
                                    have your alignment checked by a licensed
                                    service technician immediately.{" "}
                                  </p>
                                  <p className="pt-1">Uneven tread wear</p>
                                  <p className="pt-1">
                                    Vehicle pulling to the left or right
                                  </p>
                                  <p className="pt-1">
                                    Your steering wheel is off center when
                                    driving straight Steering wheel vibration
                                  </p>

                                  <h3>&nbsp;</h3>
                                </div>
                              </div>
                            </div>
                           <Talk_to_customer/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Sidebar Side*/}
            <Side_panel/>
          </div>
        </div>
      </div>
      <How_its_work/>
    </>
  );
}
