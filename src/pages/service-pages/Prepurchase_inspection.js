import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";

export default function Prepurchase_inspection() {
  return (
    <>
      <section className="row">
        <div className="col-12 px-0 breadCrumbWrapper">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 pt-4">
                <div className="row">
                  <div className="col-12 text-left">
                    <h1 className="page_title">
                      Find the best car maintenance offers here
                    </h1>
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
                      <span>Car Maintenance</span>
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
                            srcset="/assets/front/uploads/services/pre_purchase_vehicle.jpg"
                            type="image/webp"
                          />
                          <source
                            srcset="/assets/front/uploads/services/pre_purchase_vehicle.jpg"
                            type="image/jpg"
                          />
                          <img
                            alt="Car Maintenance"
                            title="Car Maintenance"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            src="/assets/front/uploads/services/pre_purchase_vehicle.jpg"
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
                                    Pre-purchase Vehicle inspection ( Car
                                    Inspection 009 ){" "}
                                  </h3>
                                  <p className="pt-1">
                                    Purchasing a used vehicle can be risky.
                                    Excited buyers often miss mechanical,
                                    cosmetic, and safety issues during visual
                                    inspections and test drives. To eliminate
                                    much of the anxiety and get an accurate
                                    picture of the condition of the vehicle,
                                    buyers may choose to have a pre-purchase
                                    inspection (PPI) done before the sale is
                                    final.
                                  </p>
                                  <h3 className="pt-2">
                                    {" "}
                                    What is a pre-purchase inspection?
                                  </h3>
                                  <p className="pt-1">
                                    A pre-purchase inspection is a detailed
                                    assessment by a qualified individual to
                                    determine the cosmetic, mechanical, and
                                    safety condition of a vehicle before
                                    completing the purchase. The inspections are
                                    performed by a certified technician who is
                                    knowledgeable in the make and model of the
                                    vehicle being inspected. The intent of the
                                    PPI is to uncover existing conditions or to
                                    reveal maintenance shortcomings that may
                                    become potential safety or financial issues
                                    for the buyer in the future.
                                  </p>

                                  <h3 className="pt-2">Where can I get a PPI?</h3>
                                  <p className="pt-1">
                                    A pre-purchase inspection can be done at
                                    BAT. Our expert technicians are familiar
                                    with the process. PP inspection will help
                                    the customer to validate the purchase price.
                                  </p>

                                  <h3 className="pt-2">
                                    What should be inspected?
                                  </h3>
                                  <p className="pt-1">
                                    A basic inspection will be mostly visual,
                                    which includes putting the car on a
                                    hydraulic lift and checking for leaks or
                                    broken components. A more involved
                                    inspection will include a detailed road test
                                    where components such as steering and brakes
                                    can be assessed. A thorough inspection will
                                    include checking engine compression and a
                                    computer engine analysis.
                                  </p>

                                  <p className="pt-1">
                                    The pre-purchase inspection is usually
                                    completed before the sale; however, to be
                                    fair to both parties, both the buyer and the
                                    seller should agree on the terms of the PPI
                                    before the inspection takes place.
                                  </p>

                                  <p className="pt-1">
                                    How it Works BAT, your first choice for auto
                                    car service in OMAN. Our technology sends
                                    you real-time service updates, inspection
                                    pictures, informative repair videos a
                                    additional services straight from your
                                    phone. If we find any problems, we let you
                                    know immediately so you can make informed
                                    choices. And when we're do your vehicle is
                                    ready to go. More convenience. More
                                    transparency. More knowledge. Here's How BAT
                                    Inspection Helps You. Drop off your car for
                                    service at BAT locations. Real-time service
                                    updates are sent right to your phone. If
                                    additional services are needed, we send you
                                    a message explaining the additional service
                                    and why it’s needed (for safety,
                                    preventative maintenance, etc). You can
                                    approve or decline the extra service without
                                    having to come back in.
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
