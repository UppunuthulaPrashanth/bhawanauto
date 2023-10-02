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
                          href="/book_addon"
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
                            href="/book_addon"
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
                          href="/book_addon"
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
                            href="/packages"
                            package-id="46"
                            package-type="AS"
                            className="takeMeToBooking"
                          >
                            Lube Service - 5000 Kms
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="each_package_item_sidebar">
                      <div className="image_wrapper">
                        <a
                          href="/packages"
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
                            href="/packages"
                            className="takeMeToBooking"
                          >
                            Periodic Service - 10000 kms
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
                          href="/services/car-ac-repair"
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
                          <a href="/services/car-ac-repair">Car AC Repair</a>
                        </h3>
                        <a
                          href="/services/car-ac-repair"
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
                          href="/services/periodic-maintenance"
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
                          <a href="/services/periodic-maintenance">Car Maintenance</a>
                        </h3>
                        <a
                          href="/services/periodic-maintenance"
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
                          href="/services/transmission_repair"
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
                          <a href="/services/transmission_repair">
                            Car Transmission Repair
                          </a>
                        </h3>
                        <a
                          href="/services/transmission_repair "
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
                          href="/services/engine-repair"
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
                          <a href="/services/engine-repair">Car Engine Repair</a>
                        </h3>
                        <a
                          href="/services/engine-repair"
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
                          href="/services/car-battery-tire-replacement"
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
                          <a href="/services/car-battery-tire-replacement">
                            Car Battery Replacement
                          </a>
                        </h3>
                        <a
                          href="/services/car-battery-tire-replacement"
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
                          href="/services/car-scanning"
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
                          <a href="/services/car-scanning">
                            Car Scanning Diagnostics
                          </a>
                        </h3>
                        <a
                          href="/services/car-scanning"
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
