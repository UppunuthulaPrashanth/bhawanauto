import React from "react";
import Side_panel from "./Side_panel";
import Talk_to_customer from "./Talk_to_customer";
import How_its_work from "./How_its_work";

export default function Car_care_car_detailing() {
  return (
    <>
      <section className="row">
        <div className="col-12 px-0 breadCrumbWrapper">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 pt-4">
                <div className="row">
                  <div className="col-12 text-left">
                    <h1 className="page_title">Car care & Car Detailing</h1>
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
                      <span>Car care & Car Detailing</span>
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
                    <div className="col-md-6">
                      <div className="image_wrapper">
                        <picture>
                          <source
                            srcset="/assets/front/uploads/services/car_care01.png"
                            type="image/webp"
                          />
                          <source
                            srcset="/assets/front/uploads/services/car_care01.png"
                            type="image/jpg"
                          />
                          <img
                            alt="Car AC Repair"
                            title="car ac repair dubai"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            style={{ height: "270px" }}
                            src="/assets/front/uploads/services/car_care01.png"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image_wrapper">
                        <picture>
                          <source
                            srcset="/assets/front/uploads/services/car_care02.jpg"
                            type="image/webp"
                          />
                          <source
                            srcset="/assets/front/uploads/services/car_care02.jpg"
                            type="image/jpg"
                          />
                          <img
                            alt="Car AC Repair"
                            title="car ac repair dubai"
                            className="img-fluid d-block mx-auto w-100 serviceImage"
                            style={{ height: "270px" }}
                            src="/assets/front/uploads/services/car_care02.jpg"
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
                                    What is car care and why it is necessary?
                                  </h3>
                                  <p className="pt-1">
                                    The car’s external bodywork faces an
                                    everyday attack from numerous contaminants
                                    such as insect remains, dust and chemicals
                                    from the road surface.
                                  </p>
                                  <p className="pt-1">
                                    These contaminants can be corrosive to the
                                    paint work on your car and by leaving your
                                    car unwashed for a long period of time, they
                                    will start to breakdown the protective clear
                                    coat on your paint work.
                                  </p>
                                  <p className="pt-1">
                                    If left unchecked, these areas can then
                                    become susceptible to both discoloration and
                                    corrosion.
                                  </p>
                                  <p className="pt-1">
                                    We at BAT take care of your car by means of
                                    Body polishing, ceramic coating – interior &
                                    exterior, window tinting Underbody anti-rust
                                    coating, PPF for lights and certain body
                                    planners to keep vehicle’s appearance all
                                    the time high by using international brands
                                    of materials.
                                  </p>
                                  <h3 className="pt-2">Why Car Detailing?</h3>
                                  <p className="pt-1">
                                    Our auto detailing at BAT is an activity
                                    that keeps the vehicle in its best possible
                                    condition, especially cosmetic, as opposed
                                    to mechanical. This is achieved by removing
                                    both visible and invisible contaminants from
                                    the vehicle's interior, exterior, underbody,
                                    engine bay, wheels and lights cleaning.
                                  </p>
                                  <p className="pt-1">
                                    Car detailing includes the valeting i.e deep
                                    cleaning of upholstery, polishing / waxing
                                    of paint panel’s surface, complete cleaning
                                    of various parts of a Car{" "}
                                  </p>
                                  <h3 className="pt-2">
                                    What's Included in Car Detailing?
                                  </h3>
                                  <ul>
                                    <li>
                                      Vacuum the seats, carpets, and entire
                                      interior.
                                    </li>
                                    <li>
                                      Clean and polish the dashboard, vents,
                                      instruments, and trim.
                                    </li>
                                    <li>
                                      Clean all cloth, leather, and floor mats.
                                    </li>
                                    <li>
                                      Clean the inside and outside of all
                                      windows.
                                    </li>
                                    <li>Wash, dry, and wax the exterior.</li>
                                    <li>
                                      Clean and polish all tires and rims.
                                    </li>
                                  </ul>
                                  <h3 className="pt-2">
                                    What are the benefits of car detailing?
                                  </h3>
                                  <ul>
                                    <li>
                                      Preserves and correct your exterior paint
                                      job.
                                    </li>
                                    <li>Preserves your upholstery.</li>
                                    <li>Enhances car performance. </li>
                                    <li>Extends the cars lifespan.</li>
                                    <li>
                                      Preserves your vehicle's resale value.{" "}
                                    </li>
                                    <li>
                                      Improves the air quality inside your
                                      vehicle.
                                    </li>
                                    <li>Overall appearance.</li>
                                  </ul>
                                  <h3>&nbsp;</h3>
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
