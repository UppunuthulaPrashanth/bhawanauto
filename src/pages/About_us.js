import React from "react";

export default function About_us() {
  return (
    <>
      <section className="pricing-section-two">
        <div className="auto-container pt-4">
          <div className="banner-image-about">
            <img src="assets/front/uploads/about/banner.png" />
          </div>
          <div className="sec-title mb-0 mt-5">
            <h2>About Bahwan Automobiles & Trading</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="auto-container">
          <h3>History / purpose / Brand story</h3>
          <div className="sec-title text-left">
            <p className="text">
              Bahwan Automobiles & Trading LLC (BAT) is a flagship company of
              Bahwan International Group (BIG). BAT commenced its operations in
              April 2019 with an objective to provide Transparent, Trustworthy
              &Tailor-made service to all brand make and model at a Competitive
              price, Convenient facility with Committed quality. In a short span
              of time, BAT has spread its customer reach to 10 locations across
              Oman and is in the process of further expansion. BAT facilities
              are equipped with high technology tools and equipment’s,
              assimilating human resource training and certification and part
              wares, to obtain manufacturer operation standards and highest
              standards of deliverables to our customers. Testimonials of
              thousands of customers whom we have served drives us to innovate
              and improvise our services. We reflect our Groups Vision, Mission
              and Values in all the endeavours we make
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="slider_section_description mb-5">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-12">
                    <div className="content_container_about_us">
                      <div className="row">
                        <div className="col-md-6  order-2 d-block my-auto">
                          <div className="row">
                            <div className="col">
                              <div className="image_wrapper">
                                <img
                                  className="img-fluid d-block mx-auto"
                                  src="assets/front/uploads/about/one.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 d-block my-auto">
                          <div className="main_content">
                            <h3 className="big-text">Vision</h3>
                            <ul>
                              <li>
                                “A globally recognized business group creating
                                customers for life.”
                              </li>
                            </ul>

                            <br />

                            <h3 className="big-text">Mission</h3>
                            <ul>
                              <li>
                                “Diversify and innovatively deliver world-class
                                products and services, through empowered
                                employees by creating value for our
                                stakeholders”.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="content_container_about_us">
                      <div className="row">
                        {/* <div className="col-md-6   d-block my-auto">
                          <div className="row">
                            <div className="col">
                              <div className="image_wrapper">
                                <img
                                  className="img-fluid d-block mx-auto"
                                  src="assets/front/uploads/about/two.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div className="col-md-6 d-block my-auto">
                          <div className="main_content">
                            <h3 className="big-text">Values </h3>
                            <ul>
                              <li> Integrity </li>
                              <li> Ownership </li>
                              <li> Passion </li>
                              <li> Excellence </li>
                            </ul>
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
      </section>
    </>
  );
}
