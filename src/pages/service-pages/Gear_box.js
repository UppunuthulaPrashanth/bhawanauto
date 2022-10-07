import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";

export default function Gear_box() {
  return (
    <>
      <section className="row">
        <div className="col-12 px-0 breadCrumbWrapper">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 pt-4">
                <div className="row">
                  <div className="col-12 text-left">
                    <h1 className="page_title">Gear box</h1>
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
                      <span>Gear box</span>
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
                            srcset="/assets/front/uploads/services/gearbox.jpg"
                            type="image/webp"
                          />
                          <source
                            srcset="/assets/front/uploads/services/gearbox.jpg"
                            type="image/jpg"
                          />
                          <img
                            alt="Car AC Repair"
                            title="car ac repair dubai"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            src="/assets/front/uploads/services/gearbox.jpg"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>

                  <div className="content-wrapper mt-4">
                    <div className="desc">
                      <p className="small-text">
                        Our Car AC service and diagnostic repair include:
                        Flushing and car servicing using A/C machine, Leak test
                        using an electronic leak detector, Visual inspection on
                        car AC components, Top-up car AC gas, Other car AC
                        diagnosis using the diagnostic machine
                      </p>
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
                                    How do I know if I need a gearbox repair?
                                  </h3>
                                  <p className="pt-1">
                                    Common signs of a problem with your gearbox
                                    include trouble getting your car into gear;
                                    a burning smell while driving; noisy
                                    transmission when in neutral; slipping
                                    gears; dragging clutch; leaking transmission
                                    fluid; a “check gear box” light on your
                                    dashboard; a grinding or shaking; whining,
                                    clunking, or humming. All of these are signs
                                    of trouble that need to be investigated. A
                                    professional gearbox specialist will be able
                                    to tell you whether your gearbox can be
                                    repaired or should be replaced instead.
                                  </p>
                                  <h3 className="pt-2">
                                    Why is my gearbox not working?
                                  </h3>
                                  <p className="pt-1">
                                    There are many possible causes for a gearbox
                                    problem. There may be low transmission
                                    fluid, or it may have become dirty or even
                                    started to leak. The shift cables or clutch
                                    linkage may need to be adjusted slightly, or
                                    things may just have become worn over time.{" "}
                                  </p>
                                  <h3 className="pt-2">
                                    How can I prevent problems with my gearbox?
                                  </h3>
                                  <p className="pt-1">
                                    We don’t often think about the gearbox when
                                    it comes to taking care of our vehicles but
                                    there are a few things you can do to ensure
                                    your gearbox stays healthy for longer.
                                    Things like a regular check of the
                                    transmission fluid and careful driving can
                                    make a big difference. Your transmission
                                    fluid should be checked as per the
                                    manufacturer recommendation.
                                  </p>
                                  <p className="pt-1">
                                    Book in for a gearbox repair today
                                  </p>
                                  <p className="pt-1">
                                    Our team of technicians will thoroughly
                                    inspect your gearbox to ensure it is working
                                    well for you. If you need repairs or even a
                                    replacement gearbox, we can discuss this
                                    with you and talk through your options. We
                                    can also supply and fit reconditioned
                                    gearboxes where appropriate (CVT gear
                                    boxes).
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
