import React from "react";
import {Link, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <>
       <section className="pricing-section-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Our Car Services</h2>
            <div className="text">
              We offer full car service, auto repair & car maintenance for all
              makes and models
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <Link to="services/periodic-maintenance">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="Car Oil Change"
                          alt="Car Oil Change"
                          src="assets/front/uploads/services/Periodic_Maintenance.png"
                        />
                      </Link>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/periodic-maintenance">
                          Periodic maintenance
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/car-scanning">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="car ac repair dubai"
                          alt="Car AC Repair"
                          src="assets/front/uploads/services/Scanning_Diag-01.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/car-scanning">Car scanning & Diagnostics</a>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/prepurchase-inspection">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="prepurchase-inspection"
                          alt="prepurchase-inspection"
                          src="assets/front/uploads/services/007-clipboard.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/prepurchase-inspection">
                          Pre-purchase inspection
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/general-maintenance">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="general-maintenance"
                          alt="general-maintenance"
                          src="assets/front/uploads/services/003-maintenance.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/general-maintenance">
                          General maintenance
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/car-battery-tire-replacement">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="battery-tire-replacement"
                          alt="battery-tire-replacement"
                          src="assets/front/uploads/services/028-battery.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/car-battery-tire-replacement">
                          Battery & Tire Replacement
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/wheel-alignment-balancing">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="car ac repair dubai"
                          alt="Car AC Repair"
                          src="assets/front/uploads/services/wheel_alignment.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/wheel-alignment-balancing">
                          Wheel Alignment & balancing
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/car-ac-repair">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="car ac repair dubai"
                          alt="Car AC Repair"
                          src="assets/front/uploads/services/carac.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/car-ac-repair">A/C repair</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/transmission_repair">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="Car Transmission Repair"
                          alt="Car Transmission Repair"
                          src="assets/front/uploads/services/L3RtcC9waHBZbjdKWXI%3d.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/transmission_repair">
                          Transmission Repair
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/engine-repair">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="Car Engine Repair"
                          alt="Car Engine Repair"
                          src="assets/front/uploads/services/032-engine-1.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/engine-repair">Engine Repair</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/car-care-car-detailing">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="car ac repair dubai"
                          alt="Car AC Repair"
                          src="assets/front/uploads/services/037-elevator.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/car-care-car-detailing">
                          Car care & Car Detailing
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/window-film">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="car ac repair dubai"
                          alt="Car AC Repair"
                          src="assets/front/uploads/services/windowfilm.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/window-film">Window Film</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/body-repair-repainting">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="car ac repair dubai"
                          alt="Car AC Repair"
                          src="assets/front/uploads/services/033-body repair.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/body-repair-repainting">
                          Body repair & Painting
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/customized-body-fabrication">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="car ac repair dubai"
                          alt="Car AC Repair"
                          src="assets/front/uploads/services/five.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/customized-body-fabrication">
                          Customized Body Fabrication
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/pod-modification">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="car ac repair dubai"
                          alt="Car AC Repair"
                          src="assets/front/uploads/services/seven.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/pod-modification">POD-Modification OPAL Certification</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/off-road-accessories">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="car ac repair dubai"
                          alt="Car AC Repair"
                          src="assets/front/uploads/services/nine.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/off-road-accessories">
                          Off road / Accessories
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>


                <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                  <div className="each_service_package">
                    <div className="icon_container">
                      <a href="services/gear-box">
                        <img
                          className="img-fluid d-block mx-auto"
                          title="car ac repair dubai"
                          alt="Car AC Repair"
                          src="assets/front/uploads/services/L3RtcC9waHBlcllIRWI%3d.png"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <h3>
                        <a href="services/gear-box">
                          Gear box
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>

                

                

                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet/>
    </>
  );
}
