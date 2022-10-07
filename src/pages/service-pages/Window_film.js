import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";

export default function Window_film() {
  return (
    <>
      <section className="row">
        <div className="col-12 px-0 breadCrumbWrapper">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 pt-4">
                <div className="row">
                  <div className="col-12 text-left">
                    <h1 className="page_title">Window Film</h1>
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
                      <span>Window Film</span>
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
                            srcset="/assets/front/uploads/services/window-film.png"
                            type="image/webp"
                          />
                          <source
                            srcset="/assets/front/uploads/services/window-film.png"
                            type="image/jpg"
                          />
                          <img
                            alt="Car AC Repair"
                            title="car ac repair dubai"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            src="/assets/front/uploads/services/L3RtcC9waHBlZjNBVm8%3d.jpg"
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
                                    Good looks are just the beginning with 3M™
                                    Automotive Window Films.
                                  </h3>
                                  <p className="pt-1">
                                    {" "}
                                    Whether you're concerned about excessive
                                    heat, increased privacy, UV protection, a
                                    faded interior, glare or security, we have a
                                    window tint to enhance the comfort and
                                    appearance{" "}
                                  </p>
                                  <p className="pt-1">Stay cool by reducing heat</p>
                                  <p className="pt-1">Increased privacy</p>
                                  <p className="pt-1">
                                    We have three different globally renowned
                                    brands at a wide range of tint and price
                                    options to choose with
                                  </p>
                                  <p className="pt-1">
                                    <b>3M-</b>US Brand
                                  </p>
                                  <p className="pt-1">
                                    <b>Nexfil-</b>Korean Brand
                                  </p>
                                  <p className="pt-1">
                                    <b>Garware-</b>Indian brand
                                  </p>
                                  <p>
                                    Speak to your advisor for further
                                    information and current promotional offer.
                                  </p>
                                  <p className="pt-1">Note: </p>
                                  <p className="pt-1">
                                    Please refer current local regulation on
                                    permissible limits glass tint to avoid the
                                    risk of being fined
                                  </p>
                                  <h3>&nbsp;</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Talk_to_customer/>
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
