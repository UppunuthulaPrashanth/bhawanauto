import React from "react";

export default function Side_panel() {
  return (
    <>
      {/*Sidebar Side*/}
      <div className=" col-lg-4 col-md-4 col-sm-12 p-0 pl-md-3">
        {/* *************************Design Sidebar Old******************************* */}
        <div className="sidebar_main_wrapper">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <span className="card-title bold-text text-dark text-uppercase d-block text-center mb-0">
                    {" "}
                    Popular Packages
                  </span>
                </div>
                <div className="card-body">
                  <div className="packages_wrapper">
                    <div className="each_package_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          href="../book-service.html"
                          package-id="42"
                          package-type="AS"
                          className="takeMeToBooking d-block text-center w-100"
                        >
                          <img
                            className="img-fluid d-block mx-auto"
                            src="/assets/uploads/packages/L3RtcC9waHBVQlhaMHg%3d.svg"
                          />
                        </a>
                      </div>
                      <div className="text-container d-block my-auto">
                        <h3 className="medium-text text-shadow">
                          <a
                            href="../book-service.html"
                            package-id="42"
                            package-type="AS"
                            className="takeMeToBooking"
                          >
                            Headlamp Polishing
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="each_package_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          href="../book-service.html"
                          package-id="46"
                          package-type="AS"
                          className="takeMeToBooking d-block text-center w-100"
                        >
                          <img
                            className="img-fluid d-block mx-auto"
                            src="/assets/uploads/packages/L3RtcC9waHBHWUdWYW4%3d.svg"
                          />
                        </a>
                      </div>
                      <div className="text-container d-block my-auto">
                        <h3 className="medium-text text-shadow">
                          <a
                            href="../book-service.html"
                            package-id="46"
                            package-type="AS"
                            className="takeMeToBooking"
                          >
                            Vehicle AC Car Service{" "}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="each_package_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          href="../book-service.html"
                          package-id="16"
                          package-type="AS"
                          className="takeMeToBooking d-block text-center w-100"
                        >
                          <img
                            className="img-fluid d-block mx-auto"
                            src="/assets/uploads/packages/L3RtcC9waHB6RlFJQnU%3d.svg"
                          />
                        </a>
                      </div>
                      <div className="text-container d-block my-auto">
                        <h3 className="medium-text text-shadow">
                          <a
                            href="../book-service.html"
                            package-id="16"
                            package-type="AS"
                            className="takeMeToBooking"
                          >
                            Body Polishing
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="each_package_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          href="../book-service.html"
                          package-id="15"
                          package-type="AS"
                          className="takeMeToBooking d-block text-center w-100"
                        >
                          <img
                            className="img-fluid d-block mx-auto"
                            src="/assets/uploads/packages/L3RtcC9waHBuNW9XUUE%3d.svg"
                          />
                        </a>
                      </div>
                      <div className="text-container d-block my-auto">
                        <h3 className="medium-text text-shadow">
                          <a
                            href="../book-service.html"
                            package-id="15"
                            package-type="AS"
                            className="takeMeToBooking"
                          >
                            Interior Detailing
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12  mt-3">
              <div className="card">
                <div className="card-header">
                  <span className="card-title bold-text text-dark text-uppercase d-block text-center mb-0">
                    {" "}
                    Popular Services
                  </span>
                </div>
                <div className="card-body">
                  <div className="packages_wrapper">
                    <div className="each_service_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          className="d-block w-100"
                          href="car-ac-repair-dubai.html"
                        >
                          <picture>
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBlS0tsQmg=.jpg"
                              type="image/webp"
                            />
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBlZjNBVm8=.jpg"
                              type="image/jpg"
                            />
                            <img
                              alt="Car AC Repair"
                              title="car ac repair dubai"
                              className="img-fluid d-block mx-auto w-100 serviceImage"
                              src="/assets/front/uploads/services/L3RtcC9waHBlZjNBVm8%3d.jpg"
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="text-container d-block my-auto">
                        <h3 className="medium-text text-shadow">
                          <a href="car-ac-repair-dubai.html">Car AC Repair</a>
                        </h3>
                        <a
                          href="car-ac-repair-dubai.html"
                          className="btn btn-light py-1 px-3 small-text btn-white"
                        >
                          <span className="btn-title">Read More</span>
                        </a>
                      </div>
                    </div>
                    <div className="each_service_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          className="d-block w-100"
                          href="car-maintenance.html"
                        >
                          <picture>
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBvN2tCaUI=.jpg"
                              type="image/webp"
                            />
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBoR2hMUng=.jpg"
                              type="image/jpg"
                            />
                            <img
                              alt="Car Maintenance"
                              title="Car Maintenance"
                              className="img-fluid d-block mx-auto w-100 serviceImage"
                              src="/assets/front/uploads/services/L3RtcC9waHBoR2hMUng%3d.jpg"
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="text-container d-block my-auto">
                        <h3 className="medium-text text-shadow">
                          <a href="car-maintenance.html">Car Maintenance</a>
                        </h3>
                        <a
                          href="car-maintenance.html"
                          className="btn btn-light py-1 px-3 small-text btn-white"
                        >
                          <span className="btn-title">Read More</span>
                        </a>
                      </div>
                    </div>
                    <div className="each_service_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          className="d-block w-100"
                          href="car-transmission-gearbox-repair.html"
                        >
                          <picture>
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHA2VkYxbzM=.jpg"
                              type="image/webp"
                            />
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBWNWtYbTE=.jpg"
                              type="image/jpg"
                            />
                            <img
                              alt="Car Transmission Repair"
                              title="Car Transmission Repair"
                              className="img-fluid d-block mx-auto w-100 serviceImage"
                              src="/assets/front/uploads/services/L3RtcC9waHBWNWtYbTE%3d.jpg"
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="text-container d-block my-auto">
                        <h3 className="medium-text text-shadow">
                          <a href="car-transmission-gearbox-repair.html">
                            Car Transmission Repair
                          </a>
                        </h3>
                        <a
                          href="car-transmission-gearbox-repair.html"
                          className="btn btn-light py-1 px-3 small-text btn-white"
                        >
                          <span className="btn-title">Read More</span>
                        </a>
                      </div>
                    </div>
                    <div className="each_service_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          className="d-block w-100"
                          href="car-engine-repair.html"
                        >
                          <picture>
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBvY0pKTTI=.jpg"
                              type="image/webp"
                            />
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBweHFRYzU=.jpg"
                              type="image/jpg"
                            />
                            <img
                              alt="Car Engine Repair"
                              title="Car Engine Repair"
                              className="img-fluid d-block mx-auto w-100 serviceImage"
                              src="/assets/front/uploads/services/L3RtcC9waHBweHFRYzU%3d.jpg"
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="text-container d-block my-auto">
                        <h3 className="medium-text text-shadow">
                          <a href="car-engine-repair.html">Car Engine Repair</a>
                        </h3>
                        <a
                          href="car-engine-repair.html"
                          className="btn btn-light py-1 px-3 small-text btn-white"
                        >
                          <span className="btn-title">Read More</span>
                        </a>
                      </div>
                    </div>
                    <div className="each_service_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          className="d-block w-100"
                          href="car-battery-replacement.html"
                        >
                          <picture>
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBNVEk0cUE=.jpeg"
                              type="image/webp"
                            />
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBqeDFJRUE=.jpeg"
                              type="image/jpg"
                            />
                            <img
                              alt="Car Battery Replacement"
                              title="Car Battery Replacement"
                              className="img-fluid d-block mx-auto w-100 serviceImage"
                              src="/assets/front/uploads/services/L3RtcC9waHBqeDFJRUE%3d.jpg"
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="text-container d-block my-auto">
                        <h3 className="medium-text text-shadow">
                          <a href="car-battery-replacement.html">
                            Car Battery Replacement
                          </a>
                        </h3>
                        <a
                          href="car-battery-replacement.html"
                          className="btn btn-light py-1 px-3 small-text btn-white"
                        >
                          <span className="btn-title">Read More</span>
                        </a>
                      </div>
                    </div>
                    <div className="each_service_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          className="d-block w-100"
                          href="car-scanning-diagnostics.html"
                        >
                          <picture>
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBFU2dkQkc=.jpg"
                              type="image/webp"
                            />
                            <source
                              srcset="https://autofix.ae/public/front/uploads/services/L3RtcC9waHBIUWRacUo=.jpg"
                              type="image/jpg"
                            />
                            <img
                              alt="Car Scanning Diagnostics"
                              title="Car Scanning Diagnostics"
                              className="img-fluid d-block mx-auto w-100 serviceImage"
                              src="/assets/front/uploads/services/L3RtcC9waHBIUWRacUo%3d.jpg"
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="text-container d-block my-auto">
                        <h3 className="medium-text text-shadow">
                          <a href="car-scanning-diagnostics.html">
                            Car Scanning Diagnostics
                          </a>
                        </h3>
                        <a
                          href="car-scanning-diagnostics.html"
                          className="btn btn-light py-1 px-3 small-text btn-white"
                        >
                          <span className="btn-title">Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *************************Design Sidebar Old ends******************************* */}
      </div>
    </>
  );
}
