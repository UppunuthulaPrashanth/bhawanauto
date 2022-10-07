import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";

export default function Engine_repair() {
  return (
    <>
      <section className="row">
        <div className="col-12 px-0 breadCrumbWrapper">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 pt-4">
                <div className="row">
                  <div className="col-12 text-left">
                    <h1 className="page_title">Engine Repair</h1>
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
                      <span>Car Engine Repair</span>
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
                            srcSet="/assets/front/uploads/services/engine_repair.jpg"
                            type="image/webp"
                          />
                          <source
                            srcSet="/assets/front/uploads/services/engine_repair.jpg"
                            type="image/jpg"
                          />
                          <img
                            alt="Car Engine Repair"
                            title="Car Engine Repair"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            src="/assets/front/uploads/services/engine_repair.jpg"
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
                                    Signs of common car engine problems
                                  </h3>
                                  <p className="pt-1">
                                    Because of the multiple components in your
                                    car's engine and the system's complexity,
                                    many things could be causing your problem.
                                  </p>
                                  <p className="pt-1">
                                    There are a handful of key signs that
                                    suggest there's an issue with your engine:
                                  </p>
                                  <ul>
                                    <li>
                                      <b>An engine warning light appearing </b>
                                      is the most obvious sign there's a problem
                                      with your engine. A professional will be
                                      able to diagnose the problem and recommend
                                      the proper repair.
                                    </li>
                                    <li>
                                      <b>Experiencing a loss of power</b> is a
                                      sign your turbo needs replacing. However,
                                      it can also be caused by faulty components
                                      outside of your engine.
                                    </li>
                                    <li>
                                      <b>
                                        Hearing a ticking or knocking noise in
                                        your engine
                                      </b>
                                      is most likely caused by bad spark plugs
                                      but could also be due to low oil levels or
                                      misadjusted valves.
                                    </li>
                                    <li>
                                      <b>
                                        {" "}
                                        An engine that is smoking is the result
                                        of overheating,
                                      </b>{" "}
                                      which can be caused by a damaged head
                                      gasket or another type of leak.
                                    </li>
                                    <li>
                                      <b>
                                        A car that won't start can be caused by
                                        many things,
                                      </b>{" "}
                                      including damaged glow plugs, a bad
                                      alternator, or a flat battery.
                                    </li>
                                  </ul>
                                  <p className="pt-1">
                                    Find which engine repair you need and see
                                    what it includes. Get quotes for the job and
                                    book a time that suits you.
                                  </p>

                                  <div className="row engine-repair mt-3">
                                    <div className="col-lg-4">
                                      <div className="card">
                                        <h6 className="pt-2 px-3">
                                          Timing belt Replace
                                        </h6>
                                        <p className="pt-1 px-3">
                                          A damaged or snapped cambelt will
                                          cause damage to the car engine if it’s
                                          not replaced.
                                        </p>
                                        <h6 className="pt-2 px-3">
                                          Can include
                                        </h6>
                                        <p className="pt-1 px-3">Diagnosis</p>
                                        <p className="pt-1 px-3">
                                          Cambelt repair
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="card">
                                        <h6 className="pt-2 px-3">
                                          Alternator repair
                                        </h6>{" "}
                                        <p className="pt-1 px-3">
                                          An alternator is a fundamental part of
                                          your car's electrical system and
                                          allows components such as your lights.
                                        </p>
                                        <h6 className="pt-2 px-3">
                                          Can include
                                        </h6>
                                        <p className="pt-1 px-3">
                                          Testing and diagnosis
                                        </p>
                                        <p className="pt-1 px-3">
                                          Alternator repair
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                      <div className="card">
                                        <h6 className="pt-2 px-3">
                                          Head Gasket Replacement
                                        </h6>
                                        <p className="pt-1 px-3">
                                          A head gasket helps to seal and
                                          separate the liquids in your engine.
                                          If your engine overheats, you may have
                                          a blown head gasket.{" "}
                                        </p>
                                        <h6 className="pt-2 px-3">
                                          Can include
                                        </h6>
                                        <p className="pt-1 px-3">
                                          Visual inspection and diagnosis
                                        </p>
                                        <p className="pt-1 px-3">
                                          Head gasket replacement
                                        </p>
                                      </div>
                                    </div>

                                    <div className="col-lg-4">
                                      <div className="card">
                                        <h6 className="pt-2 px-3">
                                          Turbo Replacement
                                        </h6>{" "}
                                        <p className="pt-1 px-3">
                                          If you experience white/blue smoke
                                          coming from your exhaust pipe, a loss
                                          of power, and a drilling noise coming
                                          from the engine, you may need a turbo
                                          replacement
                                        </p>
                                        <h6 className="pt-2 px-3">
                                          Can include
                                        </h6>
                                        <p className="pt-1 px-3">
                                          Visual inspection and diagnosis
                                        </p>
                                        <p className="pt-1 px-3">
                                          Turbo replacement
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="card">
                                        <h6 className="pt-2 px-3">
                                          Water pump Replace
                                        </h6>{" "}
                                        <p className="pt-1 px-3">
                                          A leak of any liquid from your car is
                                          a sign that you might have a damaged
                                          water pump.{" "}
                                        </p>
                                        <h6 className="pt-2 px-3">
                                          Can include
                                        </h6>
                                        <p className="pt-1 px-3">
                                          Visual inspection and diagnosis
                                        </p>
                                        <p className="pt-1 px-3">
                                          Water pump repair
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="card">
                                        <h6 className="pt-2 px-3">
                                          Engine replacement
                                        </h6>{" "}
                                        <p className="pt-2 px-3">
                                          In some circumstances, you may need a
                                          complete engine replacement. A
                                          professional will tell you if this is
                                          necessary or if other repairs may act
                                          as an effective solution.
                                        </p>
                                        <h6 className="pt-2 px-3">
                                          Can include
                                        </h6>
                                        <p className="pt-1 px-3">
                                          Testing and inspection
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Talk_to_customer />
              </div>
            </div>

            {/*Sidebar Side*/}
            <Side_panel />
          </div>
        </div>
      </div>

      <How_its_work />
    </>
  );
}
