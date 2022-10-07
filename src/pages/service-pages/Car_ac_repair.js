import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";

export default function Car_ac_repair() {
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
                            srcset="/assets/front/uploads/services/acrepair01.png"
                            type="image/webp"
                          />
                          <source
                            srcset="/assets/front/uploads/services/acrepair01.png"
                            type="image/jpg"
                          />
                          <img
                            alt="Car AC Repair"
                            title="car ac repair dubai"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            style={{ height: "470px" }}
                            src="/assets/front/uploads/services/acrepair01.png"
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
                                  <h3 className="pt-2">
                                    CAR AIR CONDITIONING SERVICING & REPAIR
                                  </h3>
                                  <p className="pt-1">
                                    Car air conditioning is a system within your
                                    car that allows you to cool the interior air
                                    of the vehicle in hot weather, providing a
                                    cooler environment for the occupants. ...
                                    Your car's air conditioning system is made
                                    up of three main parts – the compressor, the
                                    condenser and the evaporator.
                                  </p>
                                  <p className="pt-1">
                                    Your vehicle’s A/C (or climate control
                                    system) not only keeps you cool during
                                    summer, it can also remove humidity from the
                                    cabin, demisting a foggy windscreen in
                                    winter.{" "}
                                  </p>
                                  <p className="pt-1">
                                    Regularly servicing of your vehicle’s A/C by
                                    specialist mechanics ensures your vehicle’s
                                    climate control system remains in top
                                    condition year round.
                                  </p>
                                  <h5 className="pt-2">
                                    Our Air Conditioning Service includes:
                                  </h5>
                                  <ul>
                                    <li>Check cooling and overall operation</li>
                                    <li>
                                      Carry out checks for leaks and
                                      receiver-dryer contamination
                                    </li>
                                    <li>Check system pressures</li>
                                    <li>Clean condenser</li>
                                    <li>
                                      Evacuate system via recovery station and
                                      recharge
                                    </li>
                                    <li>
                                      Re-check performance and replace required
                                      components
                                    </li>
                                  </ul>
                                  <h3 className="pt-2">
                                    Antibacterial Deep Clean for your Air Con
                                  </h3>

                                  <div className="col-12 mt-2 mb-2">
                                    <div className="image_wrapper">
                                      <picture>
                                        <source
                                          srcset="/assets/front/uploads/services/acrepair02.jpg"
                                          type="image/webp"
                                        />
                                        <source
                                          srcset="/assets/front/uploads/services/acrepair02.jpg"
                                          type="image/jpg"
                                        />
                                        <img
                                          alt="Car AC Repair"
                                          title="car ac repair dubai"
                                          className="img-fluid d-block mx-auto w-100 serviceImage"
                                          style={{ height: "470px" }}
                                          src="/assets/front/uploads/services/acrepair02.jpg"
                                        />
                                      </picture>
                                    </div>
                                  </div>

                                  <p className="pt-1">
                                    Cleaning and maintaining your air
                                    conditioning system all-year round can be
                                    beneficial to your health when the time
                                    comes to switching it on.
                                  </p>
                                  <p className="pt-1">
                                    Bacteria, germs and mould require some key
                                    conditions to develop and grow, such as a
                                    warm environment that is prone to moisture.
                                    So it’s no wonder that a vehicle’s air
                                    conditioning system is the number one
                                    target.
                                  </p>
                                  <p className="pt-1">
                                    What many drivers aren’t aware of is that
                                    bacteria is prone to taking shape throughout
                                    the winter months, and then building up as
                                    we enter into the warmer spring months. This
                                    means that by the time summer comes around,
                                    when we switch on our air conditioning
                                    system all the bacteria that’s been building
                                    up for months is released into your vehicle.
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* customer talk */}
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
