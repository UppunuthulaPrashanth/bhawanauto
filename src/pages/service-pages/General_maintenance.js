import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";

export default function General_maintenance() {
  return (
    <>
      <section className="row">
        <div className="col-12 px-0 breadCrumbWrapper">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 pt-4">
                <div className="row">
                  <div className="col-12 text-left">
                    <h1 className="page_title">General maintenance</h1>
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
                      <span>General maintenance</span>
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
                            srcset="/assets/front/uploads/services/general_maintenance.jpg"
                            type="image/webp"
                          />
                          <source
                            srcset="/assets/front/uploads/services/general_maintenance.jpg"
                            type="image/jpg"
                          />
                          <img
                            alt="Car Scanning Diagnostics"
                            title="Car Scanning Diagnostics"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            src="/assets/front/uploads/services/general_maintenance.jpg"
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
                                  <h3 className="pt-2">
                                    There When You Need it the Most
                                  </h3>
                                  <p className="pt-1">
                                    Maintaining your vehicle is an important
                                    part of ensuring you and your family stays
                                    safe on our roads and enjoy trouble free
                                    motoring.
                                  </p>
                                  <p className="pt-1">
                                    Bahwan Automobiles Trading Service Centers
                                    we can maintain your vehicle via
                                    state-of-the-art equipment to complete your
                                    handbook servicing, regular maintenance
                                    services and all types of mechanical
                                    repairs. From brakes to suspension, we do it
                                    all.
                                  </p>
                                  <p className="pt-1">
                                    We also offer 12 months FREE Roadside
                                    Assistance for your family’s peace of mind.
                                  </p>
                                  <h5 className="pt-3">
                                    Our Car Maintenance Service includes:
                                  </h5>
                                  <ul>
                                    <li>Change engine oil and filter</li>
                                    <li>Road test</li>
                                    <li>Brake and fluid condition report</li>
                                    <li>Tyre pressure and condition report</li>
                                    <li>Steering and suspension check</li>
                                    <li>Cooling system and condition test</li>
                                    <li>
                                      Lights, wipers, battery and electrical
                                      check
                                    </li>
                                    <li>Full vehicle written safety report</li>
                                    <li>Tune up available on request</li>
                                  </ul>
                                  <p>&nbsp;</p>
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
