import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";
export default function Body_repair_repainting() {
  return (
    <>
      <section className="row">
        <div className="col-12 px-0 breadCrumbWrapper">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 pt-4">
                <div className="row">
                  <div className="col-12 text-left">
                    <h1 className="page_title">Body repair & Painting</h1>
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
                      <span>Body repair & Painting</span>
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
                            srcset="/assets/front/uploads/services/bodypainting.jpg"
                            type="image/webp"
                          />
                          <source
                            srcset="/assets/front/uploads/services/bodypainting.jpg"
                            type="image/jpg"
                          />
                          <img
                            alt="Car AC Repair"
                            title="car ac repair dubai"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            style={{ height: "470px" }}
                            src="/assets/front/uploads/services/bodypainting.jpg"
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
                              <h3 className="pt-2">Body Repair & Painting</h3>
                                  <p>There are many reasons to repair & repaint your car. Having your car dripping in different shade with a full color change, repair and repainting your car post-accident, to fix rust, peeling or to give your old car that new car shines. The most important reasons of all is that When a vehicle's paint is damaged, it leaves the vehicle vulnerable.</p>
                                  <h3 className="pt-2">When you need to paint your car</h3>
                                  <ul>
                                    <li>Your vehicle has suffered scratches.</li>
                                    <li>The paint has become faded and dull.</li>
                                    <li>Following an auto accident.</li>
                                    <li>To change the color of your car.</li>
                                  </ul>
                                  <h3 className="pt-2">Why you need to paint your car</h3>
                                  <ul>
                                    <li>To protect your car from rust and other atmospheric reactions.</li>
                                    <li>To enhance the durability of the car.</li>
                                    <li>To give a brand new look to your car.</li>
                                    <li>To increase the resale value.</li>
                                  </ul>
                                  <p>BAT advanced body paint facilities are fully equipped to handle all kind of body repair, of your car needs including, restoration of vehicles after minor or major collisions, painting restoration such as, straighten metal panels, straighten chasis, remove dents, and replace parts that cannot be fixed. Our paint protection products will further enhance car’s appearance and glossiness.</p> 
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
