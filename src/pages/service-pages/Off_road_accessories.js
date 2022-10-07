import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";

export default function Off_road_accessories() {
  return (
    <>
      <section className="row">
        <div className="col-12 px-0 breadCrumbWrapper">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 pt-4">
                <div className="row">
                  <div className="col-12 text-left">
                    <h1 className="page_title">Off road / Accessories</h1>
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
                      <span>Off road / Accessories</span>
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
                <div className="row mb-5 mt-4">
                  <div className="col-12 col-lg-12 col-md-12 d-block mx-auto">
                    <div className="row">
                      <div className="col-12 ">
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-12 content_wrapper_service_page">
                                <div className="small-text  text-justify">
                                  <h3 className="pt-2">OFF ROAD ACCESSORIES</h3>
                                  <p className="pt-1">
                                    In a deliberate attempt to meet the
                                    expectations of auto enthusiasts across the
                                    country, BAT one stop shop has a wide range
                                    of Off-road accessories that are designed to
                                    improve the look and performance. BAT can
                                    provide different range of off-road
                                    accessories form popular brands.
                                  </p>
                                  <h5 className="pt-2 mb-2">
                                    Popular off-road accessories
                                  </h5>
                                  <ol>
                                    <li>1.Towing winch.</li>
                                    <li>2.Ball mounting Toing Hooks.</li>
                                    <li>3.High intensity off road lights </li>
                                    <li>4.Coil springs & Shock absorbers.</li>
                                  </ol>

                                  <h3>&nbsp;</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="service_page_design">
                      <div className="row">
                        <div className="col-12">
                          <div className="image_wrapper">
                            <picture>
                              <source
                                srcset="/assets/front/uploads/services/offroad.png"
                                type="image/webp"
                              />
                              <source
                                srcset="/assets/front/uploads/services/offroad.png"
                                type="image/jpg"
                              />
                              <img
                                alt="Car AC Repair"
                                title="car ac repair dubai"
                                className="img-fluid d-block mx-auto w-100 serviceImage"
                                src="/assets/front/uploads/services/offroad.png"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Talk_to_customer/>
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
