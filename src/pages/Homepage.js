import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
export default function Homepage() {
  var faqs = [
    {
      title: "How much does a Car Service Cost?",
      content:
        "Cost to service a car may depend upon many factors including but not limited to customer service or repair requirements, Vehicle make, model and variant, type of services, scope of service, type of engine oil used, style and usage atmosphere. An average cost of a car service may vary from OMR 15 to OMR 60 depending upon the scope of service offered by us.",
    },
    {
      title: "What if my car needs extra work other than the service?",
      content:
        "On vehicle reception or workshop observation, should there be an additional work requirement identified, BAT Service representative or advisor will provide an estimate of time and cost. An approval would be sought detailing the need and safety requirements if any. Performance of additional work will commence post customers approval.",
    },
    {
      title: "Can I re-arrange the date of a car service?",
      content:
        "We have flexible appointment options and scheduling, and rescheduling shall be done to your convenience. We recommend rescheduling of an appointment at least 24 hours before the scheduled service date.",
    },
    {
      title: "What if I want to cancel the car service?",
      content:
        "Cancelation of service is possible util commencement of work. For unavoidable reason, should there be a situation to cancel the service in midst of ongoing repair, vehicle shall be delivered on a written customer request and charges would be made for the extent of repair performed.",
    },
    {
      title: "How do I pay for the work performed?",
      content:
        "On receipt of information on vehicle ready status and final invoice value, you may make payment through cash or by credit/debit card swipe or through online payment link. Vehicle shall be delivered on realization of payment or authorized payment confirmation.",
    },
  ];
  return (
    <>
      {/* Home Banner */}
      {/* Banner Section */}
      <section className="banner-section-three">
        <div className="banner-carousel-index owl-carousel owl-theme">
          <div className="item">
            <div className="af_slider">
              <a
                href="book-service.html"
                package-id="0"
                package-type="SP"
                className="takeMeToBooking"
              >
                <picture>
                  <source
                    media="(min-width:991px)"
                    srcSet="assets/front/uploads/homeBanner/banner1.jpg"
                  />
                  <source
                    media="(min-width:575px)"
                    srcSet="assets/front/uploads/homeBanner/banner1.jpg"
                  />
                  <img
                    src="assets/front/uploads/homeBanner/banner1.jpg"
                    alt="Car Ac Package "
                    className="img-fluid"
                  />
                </picture>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="af_slider">
              <a
                href="book-service.html"
                package-id="0"
                package-type="SP"
                className="takeMeToBooking"
              >
                <picture>
                  <source
                    media="(min-width:991px)"
                    srcSet="assets/front/uploads/homeBanner/banner2.png"
                  />
                  <source
                    media="(min-width:575px)"
                    srcSet="assets/front/uploads/homeBanner/banner2.png"
                  />
                  <img
                    src="assets/front/uploads/homeBanner/banner2.png"
                    alt="Flexi Service Contract"
                    className="img-fluid"
                  />
                </picture>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="af_slider">
              <a
                href="our-packages.html"
                package-id="0"
                package-type="SP"
                className=""
              >
                <picture>
                  <source
                    media="(min-width:991px)"
                    srcSet="assets/front/uploads/homeBanner/banner3.png"
                  />
                  <source
                    media="(min-width:575px)"
                    srcSet="assets/front/uploads/homeBanner/banner3.png"
                  />
                  <img
                    src="assets/front/uploads/homeBanner/banner3.png"
                    alt="GRAND WINTER OFFER"
                    className="img-fluid"
                  />
                </picture>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="af_slider">
              <a
                href="book-service.html"
                package-id="23"
                package-type="SP"
                className="takeMeToBooking"
              >
                <picture>
                  <source
                    media="(min-width:991px)"
                    srcSet="assets/front/uploads/homeBanner/banner4.png"
                  />
                  <source
                    media="(min-width:575px)"
                    srcSet="assets/front/uploads/homeBanner/banner4.png"
                  />
                  <img
                    src="assets/front/uploads/homeBanner/banner4.png"
                    alt="Values"
                    className="img-fluid"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner Section */}
      {/* <section>
   <div className="packages_wrapper">
      <div className="auto-container">
         <div className="row">
            <div className="col-12 mt-3 mb-3">
               <div className="row no-gutters justify-content-center">
                  <div className="col-lg col-md-4 mt-2 col-sm-6 col-6">
                     <div className="each_af_features bg_light border_radius_10 mx-1">
                        <div className="icon_container ">
                           <i className="fas normal-text fa-check"></i>
                        </div>
                        <div className="text_container">
                           <h3>Trust</h3>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg col-md-4 mt-2 col-sm-6 col-6">
                     <div className="each_af_features bg_light border_radius_10 mx-1">
                        <div className="icon_container ">
                           <i className="fas normal-text fa-check"></i>
                        </div>
                        <div className="text_container">
                           <h3>Quality</h3>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg col-md-4 mt-2 col-sm-6 col-6">
                     <div className="each_af_features bg_light border_radius_10 mx-1">
                        <div className="icon_container ">
                           <i className="fas normal-text fa-check"></i>
                        </div>
                        <div className="text_container">
                           <h3>Customer Satisfaction</h3>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg col-md-4 mt-2 col-sm-6 col-6">
                     <div className="each_af_features bg_light border_radius_10 mx-1">
                        <div className="icon_container ">
                           <i className="fas normal-text fa-check"></i>
                        </div>
                        <div className="text_container">
                           <h3>Affordable Price</h3>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg col-md-4 mt-2 col-sm-6 col-6">
                     <div className="each_af_features bg_light border_radius_10 mx-1">
                        <div className="icon_container ">
                           <i className="fas normal-text fa-check"></i>
                        </div>
                        <div className="text_container">
                           <h3>Transparent Cost</h3>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg col-md-4 mt-2 col-sm-6 col-6">
                     <div className="each_af_features bg_light border_radius_10 mx-1">
                        <div className="icon_container ">
                           <i className="fas normal-text fa-check"></i>
                        </div>
                        <div className="text_container">
                           <h3>All Brands</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section> */}
      {/* Home Banner ends*/}
      <div className="mt-sm-5">
        {/* Home Packages */}
        <section>
          <div className="packages_wrapper">
            <div className="auto-container">
              <div className="sec-title text-center mt-3 mb-0">
                <h2>Service Packages</h2>
                {/* <span className="devider">
              <span></span>
            </span> */}
              </div>

              {/* Asian Brands */}
              <div className="text-center m-1">
                <h5 className="mx-auto">Japanese/Korean/Chinese Brands</h5>
              </div>
              <div className="row">
                <div className="col-12 packages_caroseul_dsg_dots">
                  <div className="packages_caroseul_dsg owl-theme owl-carousel">
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_1">
                          <h3 className="bold-text">
                            Lube Service - 5000 Kms (4 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              15.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 20w50
                                  Mineral Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>20 Check points as per check sheet</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Body wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="63"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_2">
                          <h3 className="bold-text">
                            Lube Service - 5000 Kms (6 CYL){" "}
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              17.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 20w50
                                  Mineral Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>20 Check points as per check sheet</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Body wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="64"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_3">
                          <h3 className="bold-text">
                            Lube Service - 5000 Kms (8 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              21.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 20w50
                                  Mineral Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>20 Check points as per check sheet</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Body wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="65"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_4">
                          <h3 className="bold-text">
                            Periodic Service - 10000 Kms (4 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              20.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 5w30
                                  Synthetic Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>30 Check points as per check sheet</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Body wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="22"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_5">
                          <h3 className="bold-text">
                            Periodic Service - 1000 Kms(8 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              25.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 5w30
                                  Synthetic Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>30 Check points as per check sheet</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Body Wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="21"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_6">
                          <h3 className="bold-text">
                            Periodic Service - 1000 Kms (8 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              30.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 5w30
                                  Synthetic Oil){" "}
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>30 Check points as per check sheet</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span> Body wash & Vacuum </span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="18"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Asian Brands */}

              {/* American & European Brands */}
              <div className="text-center m-1">
                <h5 className="mx-auto">American & European Brands</h5>
              </div>
              <div className="row">
                <div className="col-12 packages_caroseul_dsg_dots">
                  <div className="packages_caroseul_dsg owl-theme owl-carousel">
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_1">
                          <h3 className="bold-text">
                            Lube Service - 5000 Kms (4 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              20.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 20w50
                                  Mineral Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>20 Check points as per check sheet</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Body wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="63"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_2">
                          <h3 className="bold-text">
                            Lube Service - 5000 Kms (6 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              22.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 20w50
                                  Mineral Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>20 Check points as per check sheet</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Body wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="64"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_3">
                          <h3 className="bold-text">
                            Lube Service - 5000 Kms (8 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              25.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 20w50
                                  Mineral Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>20 Check points as per check sheet</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Body wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="65"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_4">
                          <h3 className="bold-text">
                            Periodic Service - 10000 Kms (4 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              24.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 5w30
                                  Synthetic Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>30 Check points as per check sheet </span>
                              </li>

                              <li className="included abs_content_wrapper">
                                <span>Body Wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="22"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_5">
                          <h3 className="bold-text">
                            Periodic Service - 1000 Kms(8 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              31.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 5w30
                                  Synthetic Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>30 Check points as per check sheet</span>
                              </li>

                              <li className="included abs_content_wrapper">
                                <span>Body Wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="21"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="each_package_container  ">
                        <div className="content_package" id="package_6">
                          <h3 className="bold-text">
                            Periodic Service - 1000 Kms (8 CYL)
                          </h3>
                          <span className="price_wrapper d-block mt-4 mb-4 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                              37.00
                            </span>
                          </span>
                          <div className="points_container mt-3">
                            <ul>
                              <li className="included abs_content_wrapper">
                                <span>
                                  Replacement of Engine Oil&nbsp;(with 5w30
                                  Synthetic Oil)
                                </span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Replacement of Oil Filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>Clean Air filter</span>
                              </li>
                              <li className="included abs_content_wrapper">
                                <span>30 Check points as per check sheet</span>
                              </li>

                              <li className="included abs_content_wrapper">
                                <span>Body Wash & Vacuum</span>
                              </li>
                            </ul>
                          </div>
                          <p className="btn_container pt-4">
                            <a
                              href="booking-service"
                              package-id="18"
                              package-type="SP"
                              className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                            >
                               Book Now <i className="fas fa-arrow-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End American & European Brands */}
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-none">
            <div className="call-btn-wrapper">
              {/* <a href="tel:8002886349" className="call-btn-design-side text-center d-none mx-auto " style="width: 400px; max-width:100%;" target="_blank"><span className="icon-container text-center"><i className="fas fa-phone rotated"></i></span><span>Call Us: 8002886349</span></a> */}
              <p className="btn_container mb-5 mt-4 mb-4 text-center">
                <a
                  href="tel:8002886349"
                  data-number="8002886349"
                  className="theme-btn btn-style-one blue takeMeToBooking d-inline-block text-center text-uppercase callNowBtn"
                >
                  <span className="btn-title">
                    <i className="fas fa-phone rotated mr-2"></i> Call Us Today
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Services */}
      {/* Popular Services ends*/}
      <div className="mt-4">
        <section className="how_it_works_main_container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 max1200 min1200 d-block mx-auto">
                <div className="sec-title text-center mb-5">
                  <h2>How it Works</h2>
                  <div className="text">
                    “Broad network, well equipped workshop infrastructure,
                    trained service professionals, helps us to provide an
                    outstanding quality service to our customers. While
                    receiving the vehicle, our service advisor will provide cost
                    and time estimate of repairs requested. If there are any
                    additional findings during workshop observation, Advisor
                    will provide an additional time and cost estimate for
                    further approval. On completion of all approved jobs
                    proactive information is given on the vehicle readiness with
                    invoice details for convenience and transparency.”
                  </div>
                  {/* <span className="devider">
                    <span></span>
                  </span> */}
                </div>
                <div className="row">
                  <div className="col-12">
                    <h3 className="medium-text bold-text text-center">
                      Here's How Auto Fix Inspection Helps You.
                    </h3>
                    <div className="how_it_works_wrapper mt-4">
                      <div className="each_how_it_works_design">
                        <div className="movile_view_wrap">
                          <div className="image_wrapper">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/front/uploads/generalSection/L3RtcC9waHBacUNvMjM%3d.svg"
                            />
                          </div>
                          <div className="text_container_mobile text-center">
                            <h3 className="small-text">
                              Car drop of and vehicle acceptance at BAT
                              locations.
                            </h3>
                          </div>
                        </div>
                        <div className="arrow_container text-center">
                          <span className="point">1</span>
                        </div>
                        <div className="text_container text-center">
                          <h3 className="small-text">
                            Car drop of and vehicle acceptance at BAT locations.
                          </h3>
                        </div>
                      </div>
                      <div className="each_how_it_works_design">
                        <div className="movile_view_wrap">
                          <div className="image_wrapper">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/front/uploads/generalSection/L3RtcC9waHBQbTZLaUs%3d.svg"
                            />
                          </div>
                          <div className="text_container_mobile text-center">
                            <h3 className="small-text"></h3>
                          </div>
                        </div>
                        <div className="arrow_container text-center">
                          <span className="point">2</span>
                        </div>
                        <div className="text_container text-center">
                          <h3 className="small-text">
                            Observation during vehicle reception - Approval of
                            requested and observation jobs.
                          </h3>
                        </div>
                      </div>
                      <div className="each_how_it_works_design">
                        <div className="movile_view_wrap">
                          <div className="image_wrapper">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/front/uploads/generalSection/L3RtcC9waHBmNkhtdm0%3d.svg"
                            />
                          </div>
                        </div>
                        <div className="arrow_container text-center">
                          <span className="point">3</span>
                        </div>
                        <div className="text_container text-center">
                          <h3 className="small-text">
                            Cost and time estimate of jobs requested and
                            approved jobs.
                          </h3>
                        </div>
                      </div>
                      <div className="each_how_it_works_design">
                        <div className="movile_view_wrap">
                          <div className="image_wrapper">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/front/uploads/generalSection/L3RtcC9waHBQYUE5UTE%3d.svg"
                            />
                          </div>
                        </div>
                        <div className="arrow_container text-center">
                          <span className="point">4</span>
                        </div>
                        <div className="text_container text-center">
                          <h3 className="small-text">
                            Workshop observation and information on additional
                            services or repair, detailing requirement reasons
                            (Safety, preventive maintenance, periodic
                            maintenance etc.).
                          </h3>
                        </div>
                      </div>
                      <div className="each_how_it_works_design">
                        <div className="movile_view_wrap">
                          <div className="image_wrapper">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/front/uploads/generalSection/L3RtcC9waHBDU2d4bWE%3d.svg"
                            />
                          </div>
                        </div>
                        <div className="arrow_container text-center">
                          <span className="point">5</span>
                        </div>
                        <div className="text_container text-center">
                          <h3 className="small-text">
                            Approval of additional jobs.
                          </h3>
                        </div>
                      </div>

                      <div className="each_how_it_works_design">
                        <div className="movile_view_wrap">
                          <div className="image_wrapper">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/front/uploads/generalSection/L3RtcC9waHBDU2d4bWE%3d.svg"
                            />
                          </div>
                        </div>
                        <div className="arrow_container text-center">
                          <span className="point">6</span>
                        </div>
                        <div className="text_container text-center">
                          <h3 className="small-text">
                            Job completion and information on vehicle readiness
                            with details of final invoice.
                          </h3>
                        </div>
                      </div>

                      <div className="each_how_it_works_design">
                        <div className="movile_view_wrap">
                          <div className="image_wrapper">
                            <img
                              className="img-fluid d-block mx-auto"
                              src="assets/front/uploads/generalSection/L3RtcC9waHBDU2d4bWE%3d.svg"
                            />
                          </div>
                        </div>
                        <div className="arrow_container text-center">
                          <span className="point">7</span>
                        </div>
                        <div className="text_container text-center">
                          <h3 className="small-text">
                            Vehicle delivery with suggestions on unapproved
                            repairs.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* About Us */}
      <section className="certificate-section pt-4 pb-0 pt-sm-5">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Car Brands We Work With</h2>
            <div className="text">
              “Bahwan Automobiles Trading car service, repair all car makes and
              models at the most affordable prices in Oman. “
            </div>
            {/* <span className="devider">
              <span></span>
            </span> */}
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="et-icon-box-container column-8 et-make-container"
                data-gap="8"
              >
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packagesc6cf.html?make=664">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Nissan"
                          src="assets/front/uploads/car_brand/nissan.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Nissan</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages7dc8.html?make=846">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="BMW"
                          src="assets/front/uploads/car_brand/bmw.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>BMW</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages08cc.html?make=329">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Lincoln"
                          src="assets/front/uploads/car_brand/audi1.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Audi</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages08cc.html?make=329">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Lincoln"
                          src="assets/front/uploads/car_brand/lincoln1.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Lincoln</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages0653.html?make=639">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Lexus"
                          src="assets/front/uploads/car_brand/lexus.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Lexus</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packagesc39b.html?make=753">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Volkswagen"
                          src="assets/front/uploads/car_brand/ww.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Volkswagen</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages162d.html?make=711">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Ford"
                          src="assets/front/uploads/car_brand/ford1.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Ford</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages385f.html?make=874">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="GMC"
                          src="assets/front/uploads/car_brand/gmc1.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>GMC</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages63f5.html?make=476">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="DODGE"
                          src="assets/front/uploads/car_brand/dodge1.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>DODGE</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages6380.html?make=376">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Toyota"
                          src="assets/front/uploads/car_brand/toyota1.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Toyota</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packagesb860.html?make=348">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Chevrolet"
                          src="assets/front/uploads/car_brand/chevrolet.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Chevrolet</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages2280.html?make=432">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Mitsubishi"
                          src="assets/front/uploads/car_brand/mitsubishi1.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Mitsubishi</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages997b.html?make=267">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Mazda"
                          src="assets/front/uploads/car_brand/mazda.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Mazda</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packagesc937.html?make=78">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="honda"
                          src="assets/front/uploads/car_brand/honda.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>honda</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages5e5b.html?make=33">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Suzuki"
                          src="assets/front/uploads/car_brand/suzuki.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Suzuki</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packages7c0a.html?make=554">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="KIA"
                          src="assets/front/uploads/car_brand/kia.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>KIA</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packagesd296.html?make=159">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="FIAT"
                          src="assets/front/uploads/car_brand/fiat.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>FIAT</h3>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packagesd296.html?make=159">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="Hyundai"
                          src="assets/front/uploads/car_brand/hyundai.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>Hyundai</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="et-make et-icon-box">
                  <a className="d-block" href="our-packagesd296.html?make=159">
                    <div className="each_brand_category">
                      <div className="icon_container">
                        <img
                          className="img-fluid d-block mx-auto"
                          alt="PEUGEOT"
                          src="assets/front/uploads/car_brand/peugeot1.png"
                        />
                      </div>
                      <div className="text_container">
                        <h3>PEUGEOT</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="call-btn-wrapper">
              <p className="btn_container mb-5 mt-5 text-center">
                <a
                  href="packages"
                  className="theme-btn btn-style-two d-inline-block text-center text-uppercase"
                >
                  <span className="btn-title">
                    <i className="far fa-calendar-check mr-2"></i> Book Now
                  </span>
                </a>
                <a
                  href="tel:8002886349"
                  data-number="8002886349"
                  className="d-none theme-btn btn-style-one blue takeMeToBooking d-inline-blocktext-center text-uppercase callNowBtn"
                >
                  <span className="btn-title">
                    <i className="fas fa-phone rotated mr-2"></i> Call Us Today
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Section two */}
      {/*End Pricing Section */}

      {/* new why choose us */}
      {/* enc */}

      {/* About Us */}
      <div className="mt-sm-5 mt-3">
        <section className="about-section-two pt-4 pb-0 pt-sm-5">
          <div className="auto-container">
            <div className="container clearfix mb-4">
              {/* Content Column */}
              <div className="inner-column">
                <div className="no_after sec-title text-center text-lg-left">
                  <h2>WHY CHOOSE US?</h2>
                  {/* <span className="devider">
                      <span></span>
                    </span> */}
                  <div className="text" style={{ fontSize: "15px" }}></div>
                </div>
                <div className="row">
                  {/* Feature Block */}
                  <div className="row col-md-6">
                    <div className="feature-block-three m-4 ">
                      <div className="inner-box">
                        <div className="icon-box">
                          <img
                            src="assets/front/uploads/generalSection/magnifier.png"
                            style={{ height: "35px" }}
                          />
                        </div>
                        <h4>
                          <a href="#">Transparency</a>
                        </h4>
                        <div className="text">
                          <p>
                            Honesty and Integrity are our Company’s values that
                            we reflect in all actions we perform. To foster
                            trust and customer loyalty, we provide Visibility
                            and Accessibility to customer with information on
                            actions performed or to be performed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Feature Block */}
                  <div className="row col-md-6">
                    <div className="feature-block-three m-4">
                      <div className="inner-box">
                        <div className="icon-box">
                          <span className="fa-2x fas fas fa-handshake"></span>
                        </div>
                        <h4>
                          <a href="#">Trustworthy</a>
                        </h4>
                        <div className="text">
                          <p>
                            We strongly believe in long term customer
                            relationship, credibility, reliability, and
                            professionalism. To achieve this, we strive our best
                            to Keep up our commitments and deliver quality
                            service, with workmanship warranty for a period.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Feature Block */}
                  <div className="row col-md-6">
                    <div className="feature-block-three m-4 mr-3">
                      <div className="inner-box">
                        <div className="icon-box">
                          <img
                            src="assets/front/uploads/generalSection/Tailor_Made.png"
                            style={{ height: "35px" }}
                          />
                        </div>
                        <h4>
                          <a href="#">Tailor made</a>
                        </h4>
                        <div className="text">
                          <p>
                            Each customer has specific needs and wants. We
                            design flexibility options in systems and operation
                            process, to customize to customer requirements
                            matching deliverables of customer expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Feature Block */}
                  <div className="row col-md-6">
                    <div className="feature-block-three m-4">
                      <div className="inner-box">
                        <div className="icon-box">
                          <img
                            src="assets/front/uploads/generalSection/Competitive.png"
                            style={{ height: "35px" }}
                          />
                        </div>
                        <h4>
                          <a href="#">Competitive</a>
                        </h4>
                        <div className="text">
                          <p>
                            Our services are desirable to customers for the
                            reasons of value proposition on quality to the cost.
                            Customization to customer needs, repairing only what
                            is necessary, seeking customer consent on workshop
                            observation to proceed and smart repair, largely
                            helps us to be competitive in the market.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Feature Block */}

                  {/* Feature Block */}
                  <div className="row col-md-6">
                    <div className="feature-block-three m-4 mr-3">
                      <div className="inner-box">
                        <div className="icon-box">
                        <img
                            src="assets/front/uploads/whychoose/Convenience.png"
                            style={{ height: "35px" }}
                          />         
                       </div>
                        <h4>
                          <a href="#">Convenience</a>
                        </h4>
                        <div className="text">
                          <p>
                            We highly value Customer’s time and effort expend on
                            service. Our services are easy to access and
                            facilities are in appropriate atmosphere. We are
                            present even in remote and desert location.
                            Appointments, package purchase and vehicle reception
                            are digital. We also offer value added services such
                            as pick and drop, alternate mobility, express
                            service at a very reasonable cost.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Feature Block */}

                  {/* Feature Block */}
                  <div className="row col-md-6">
                    <div className="feature-block-three m-4">
                      <div className="inner-box">
                        <div className="icon-box">
                        <img
                            src="assets/front/uploads/whychoose/value_Customer.png"
                            style={{ height: "35px" }}
                          />                        </div>
                        <h4>
                          <a href="#">Customer Oriented</a>
                        </h4>
                        <div className="text">
                          <p>
                            Creating Customers for life is our company’s vision
                            and “Customer first” is our business philosophy. We
                            align customer needs with our business purpose and
                            aim to be provide consistent improvisation in
                            customer experience throughout the Customer’s
                            journey and product life cycle.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Feature Block */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End About Us */}
      {/* Associates */}
      <section className="py-5 bg_light">
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <h2>Our Car Service Partners</h2>
            <div className="text">
              “Bahwan Automobiles Trading is proud to be associated with some
              well-known brands of Oman”
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-12">
              <div className="our_partners_wrapper">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/associates/updated/lukoil.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/associates/updated/cilajet.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/associates/updated/amaron.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/associates/updated/nexfil.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/associates/updated/autorent.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/associates/updated/general_tire.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/associates/global.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="smy"
                        src="assets/front/uploads/associates/updated/servicemycar.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/associates/updated/deta.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/associates/updated/jpc.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/our_clients/blackhawk.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/our_clients/gardox.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Associates */}

      {/* our client */}

      <section className="py-5 bg_light_ourclients">
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <h2>Our Clients</h2>
            <div className="text">Meet our happy clients</div>
          </div>
          <div className="row clearfix">
            <div className="col-12">
              <div className="our_partners_wrapper">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/our_clients/Al_Maha.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/our_clients/Budget.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/our_clients/Dollar.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/associates/updated/autorent.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/our_clients/thrifty.png"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_item_wrapper">
                      <img
                        className="img-fluid"
                        alt="Autofix Partners"
                        src="assets/front/uploads/our_clients/popular_cars.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end our client */}

      {/* Call To Action Three */}
      {/* <section className="call-to-action-two normal-text-small-screen py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 min1200 max1200 d-block mx-auto">
              <div className="row">
                <div className="col-md-6 d-block mx-auto text-left d-block my-auto">
                  <div className="content">
                    <h2 className="color-white mb-0">Join Our newsletter</h2>
                    <p className="color-white small-text">
                      Enter your email address to receive news and updates
                    </p>
                    <form
                      id="newsletterSubscriptionForm"
                      method="POST"
                      action="#"
                    >
                      <div className="input-group mt-4">
                        <input
                          className="form-control form-control-sm updateMe inputFieldSmall"
                          type="email"
                          id="newsletter"
                          name="newsletter"
                        />
                        <div className="input-group-append">
                          <button
                            className="theme-btn btn-style-one submitNewsletterSubscription"
                            type="submit"
                          >
                            <span className="btn-title">SUBMIT</span>
                          </button>
                        </div>
                      </div>
                      <p className=" mt-3" id="newsletterResponse"></p>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="call_to_action_image_wrapper">
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/front/uploads/img-car-move.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ's Section */}
      <section className="faq-section pt-4 pt-sm-5 pb-0">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title text-center">
            <h2>FAQs</h2>
            <div className="text">
              Car Service Questions Answered at Auto Fix
            </div>
            {/* <span className="devider">
              <span></span>
            </span> */}
          </div>
          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-xl-7 col-lg-6 col-md-12 col-sm-12 order-2">
              <div
                id="accordionExample"
                className="accordion shadow accordion-box"
              >
                {faqs.map((element, index) => (
                  <div className="card" key={index}>
                    <div
                      id={"headingOne" + index}
                      className="card-header shadow-sm border-0 acc-btn"
                    >
                      <h6 className="mb-0 font-weight-bold">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target={"#collapseOne" + index}
                          aria-expanded={index == 0 ? "true" : "false"}
                          aria-controls={"collapseOne" + index}
                          className={
                            index == 0
                              ? "d-block position-relative text-white collapsible-link py-2"
                              : "d-block position-relative text-white collapsed collapsible-link py-2"
                          }
                        >
                          {element.title}
                        </a>
                      </h6>
                    </div>
                    <div
                      id={"collapseOne" + index}
                      aria-labelledby={"headingOne" + index}
                      data-parent="#accordionExample"
                      className={index == 0 ? "collapse show" : "collapse"}
                    >
                      <div className="card-body p-5">
                        <p className="font-weight-light m-0 content">
                          {element.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Column */}
            <div className="image-column col-xl-5 col-lg-6 col-md-12 col-sm-12 d-block my-auto">
              <div className="inner-column">
                <span className="float-text">AUTO FIX</span>
                <figure className="image">
                  <img src="assets/front/uploads/faq/faq.jpg" alt="AUTO FIX" />
                </figure>
                <div className="caption-box mt-3">
                  <h4>
                    <span className="small-text">
                      Toll Free Number : &nbsp;
                    </span>
                    <a href="tel:XXXXXXXXXX" className="bold-text ">
                      XXX XXX XXXX
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End FAQ's Section */}
      {/* Testimonials */}
      <section className="py-5 bg_light mt-0 mt-md-5">
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <h2>Customer Reviews</h2>
            <div className="text"></div>
            {/* <span className="devider">
              <span></span>
            </span> */}
          </div>
          <div className="row clearfix">
            <div className="col-12">
              <div className="testimonials_container">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="each_testimonial text-center">
                      <div className="testimonial_head">
                        <div className="testimonial_header">
                          <span className="elementskit-watermark-icon ekit_watermark_icon_custom_position">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="55.331"
                              height="39.522"
                              viewBox="0 0 55.331 39.522"
                            >
                              <path
                                id="quote_icon"
                                d="M11.452,50.022H23.309l7.9-15.809V10.5H7.5V34.213H19.357Zm31.618,0H54.926l7.9-15.809V10.5H39.118V34.213H50.974Z"
                                transform="translate(62.831 50.022) rotate(180)"
                                fill="#04367d"
                                opacity="0.2"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div className="testimonial_data">
                          <p>
                            We are very happy with Bahwan Automobiles & Trading
                            performance, they help and support us with
                            outstanding service. We wish to continue with them
                            for the future. Thanks and Best Regards.
                          </p>
                        </div>
                      </div>
                      <div className="testimonial_footer">
                        <div className="image_wrapper">
                          <img
                            className="img-fluid"
                            src="assets/front/uploads/testimonials/one.png"
                          />
                        </div>
                        <div className="client_data">
                          <h3>Karum AL-Balushi</h3>
                          <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_testimonial text-center">
                      <div className="testimonial_head">
                        <div className="testimonial_header">
                          <span className="elementskit-watermark-icon ekit_watermark_icon_custom_position">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="55.331"
                              height="39.522"
                              viewBox="0 0 55.331 39.522"
                            >
                              <path
                                id="quote_icon"
                                d="M11.452,50.022H23.309l7.9-15.809V10.5H7.5V34.213H19.357Zm31.618,0H54.926l7.9-15.809V10.5H39.118V34.213H50.974Z"
                                transform="translate(62.831 50.022) rotate(180)"
                                fill="#04367d"
                                opacity="0.2"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div className="testimonial_data">
                          <p>
                            I have experienced excellent service. You guys are
                            the best ! keep up the great work.&#128077;
                          </p>
                          {/* Regards Ameen Khan
                            Asst.Managr-Service Ph- 94299319 Tel: 00968
                            -24032005 Fax: 00968-24032020 Email :
                            servicehead@orbit-oman.com */}
                        </div>
                      </div>
                      <div className="testimonial_footer">
                        <div className="image_wrapper">
                          <img
                            className="img-fluid"
                            src="assets/front/uploads/testimonials/L3RtcC9waHBCOFNoR2k%3d.png"
                          />
                        </div>
                        <div className="client_data">
                          <h3>Ameen Khan</h3>
                          <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_testimonial text-center">
                      <div className="testimonial_head">
                        <div className="testimonial_header">
                          <span className="elementskit-watermark-icon ekit_watermark_icon_custom_position">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="55.331"
                              height="39.522"
                              viewBox="0 0 55.331 39.522"
                            >
                              <path
                                id="quote_icon"
                                d="M11.452,50.022H23.309l7.9-15.809V10.5H7.5V34.213H19.357Zm31.618,0H54.926l7.9-15.809V10.5H39.118V34.213H50.974Z"
                                transform="translate(62.831 50.022) rotate(180)"
                                fill="#04367d"
                                opacity="0.2"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div className="testimonial_data">
                          <p>
                            Greetings from Al Maha Rent A Car! It is indeed a
                            great pleasure to comment on the efficiency and
                            commitment, your team has been successful in
                            maintaining the quality of the service and committed
                            our timelines. We sincerely look forward to a very
                            healthy partnership in the years to come. Thank you
                            for all your support. With regards
                          </p>
                        </div>
                      </div>
                      <div className="testimonial_footer">
                        <div className="image_wrapper">
                          <img
                            className="img-fluid"
                            src="assets/front/uploads/testimonials/L3RtcC9waHBQZzNZeFM%3d.png"
                          />
                        </div>
                        <div className="client_data">
                          <h3>
                            Gijo George Mampilly
                            <br />
                            Asst. General Manager
                            <br />
                            Al Maha Rent a Car
                          </h3>

                          <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="each_testimonial text-center">
                      <div className="testimonial_head">
                        <div className="testimonial_header">
                          <span className="elementskit-watermark-icon ekit_watermark_icon_custom_position">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="55.331"
                              height="39.522"
                              viewBox="0 0 55.331 39.522"
                            >
                              <path
                                id="quote_icon"
                                d="M11.452,50.022H23.309l7.9-15.809V10.5H7.5V34.213H19.357Zm31.618,0H54.926l7.9-15.809V10.5H39.118V34.213H50.974Z"
                                transform="translate(62.831 50.022) rotate(180)"
                                fill="#04367d"
                                opacity="0.2"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div className="testimonial_data">
                          <p>Professionalism, Punctuality, Quality, Value</p>
                        </div>
                      </div>
                      <div className="testimonial_footer">
                        <div className="image_wrapper">
                          <img
                            className="img-fluid"
                            src="assets/front/uploads/testimonials/L3RtcC9waHBkcEw0NzI%3d.png"
                          />
                        </div>
                        <div className="client_data">
                          <h3>Mohammed Sabeelur Rehman</h3>
                          <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section */}

      <Services />
      {/* End News Section */}
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="call-btn-wrapper">
              <p className="btn_container mb-5 mt-4 mb-4 text-center">
                <a
                  href="packages"
                  className="theme-btn btn-style-two d-inline-block text-center text-uppercase"
                >
                  <span className="btn-title">
                    <i className="far fa-calendar-check mr-2"></i> Book Now
                  </span>
                </a>
                <a
                  href="tel:9573346036"
                  data-number="9573346036"
                  className="d-none theme-btn btn-style-one blue takeMeToBooking d-inline-blocktext-center text-uppercase callNowBtn"
                >
                  <span className="btn-title">
                    <i className="fas fa-phone rotated mr-2"></i> Call Us Today
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
