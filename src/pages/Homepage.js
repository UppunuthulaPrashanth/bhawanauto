import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader/Loader";
import { getHomePackage } from "../redux/features/booking-data/homePackagesSlice";
import Services from "./Services";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ASSETS, CURRENCY } from "../config/Constants";
import { Link, useLocation } from "react-router-dom";
import How_its_work from "./service-pages/How_its_work";
import {
  getBanners,
  getCarBrands,
  getClients,
  getParnters,
} from "../redux/features/cms/bannerSlice";


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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePackage());
    dispatch(getBanners());
    dispatch(getCarBrands());
    dispatch(getClients());
    dispatch(getParnters());
  }, []);

  const { loading, data } = JSON.parse(
    JSON.stringify(useSelector((state) => state.homePackage))
  );

  const banners = JSON.parse(
    JSON.stringify(useSelector((state) => state.banners))
  );
  const clients = JSON.parse(
    JSON.stringify(useSelector((state) => state.clients))
  );
  const brands = JSON.parse(
    JSON.stringify(useSelector((state) => state.brands))
  );
  const partners = JSON.parse(
    JSON.stringify(useSelector((state) => state.partners))
  );

  localStorage.setItem("lastLocation", '/packages');


  if (
    loading === "PENDING" ||
    banners.loading === "PENDING" ||
    clients.loading === "PENDING" ||
    partners.loading === "PENDING" ||
    brands.loading === "PENDING"
  ) {
    return <Loader />;
  }

  const options = {
    margin: 30,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      {/* Banner Section */}
      <OwlCarousel
        className="owl-theme"
        items={1}
        slideBy={1}
        loop={true}
        autoplay={true}
      >
        {banners
          ? banners.data.map((banner, key) => {
              return (
                <div className="item one" key={key}>
                  <div className="af_slider">
                    <a
                      href="#"
                      package-id="23"
                      package-type="SP"
                      className="takeMeToBooking"
                    >
                      <picture>
                        <source
                          media="(min-width:991px)"
                          srcSet={ASSETS + "banners/" + banner.image}
                        />
                        <source
                          media="(min-width:575px)"
                          srcSet={ASSETS + "banners/" + banner.image}
                        />
                        <img
                          src={ASSETS + "banners/" + banner.image}
                          alt="Values"
                          className="img-fluid"
                        />
                      </picture>
                    </a>
                  </div>
                </div>
              );
            })
          : null}
      </OwlCarousel>
      {/*End Banner Section */}

      {/* Packages*/}
      <div className="mt-sm-5">
        <section>
          <div className="packages_wrapper">
            <div className="auto-container">
              <div className="sec-title text-center mt-3 mb-0">
                <h2>Service Packages</h2>
              </div>
              {/* Asian Brands */}
              {data? data.map((singleCountrypackages, singlekey)=>{
                return(
                <div key={singlekey}>
                  <div className="text-center m-1">
                    <h5 className="mx-auto">{singleCountrypackages[singlekey].country}</h5>
                  </div>
                  <div className="row rect-owel package-one">
                    {data ? (
                      <OwlCarousel
                        className="owl-theme"
                        {...options}
                        loop
                        smartSpeed={700}
                        margin={20}
                      >
                        {singleCountrypackages
                          ? singleCountrypackages.map(
                              (packageDetails, key) => {
                                return (
                                  <div className="item japan" key={key}>
                                    <div className="each_package_container  ">
                                      <div
                                        className="content_package"
                                        id={"package_" + key}
                                      >
                                        <h3 className="bold-text">
                                          {packageDetails.name}
                                        </h3>
                                        <span className="price_wrapper d-block mt-4 mb-4 text-center">
                                          <span className="medium-text">
                                            {CURRENCY} &nbsp;
                                          </span>
                                          <span className="biggest-text bold-text primary-color">
                                            {packageDetails.price}
                                          </span>
                                        </span>
                                        <div className="points_container mt-1">
                                          <ul>
                                            {packageDetails.features
                                              .split(",")
                                              .map((subitem, i) => (
                                                <li
                                                  className="included abs_content_wrapper"
                                                  key={i}
                                                >
                                                  <span>{subitem}</span>
                                                </li>
                                              ))}
                                          </ul>
                                        </div>
                                        <p className="btn_container pt-4">
                                          <Link
                                            to={
                                              "/booking-service/" +
                                              packageDetails.id
                                            }
                                            className="theme-btn btn-style-two takeMeToBooking  d-block w-100 text-center"
                                          >
                                            Book Now &nbsp;{" "}
                                            <i className="fas fa-arrow-right"></i>
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )
                          : null}
                      </OwlCarousel>
                    ) : null}
                  </div>
                </div>
                )
              }):null}
              {/* End Asian Brands */}

            
            </div>
          </div>
        </section>
      </div>
      {/* End Packages */}

      {/* How it's work  */}
      <How_its_work />
      {/* End How it's work */}

      {/* Car Brands We Work With */}
      <section className="certificate-section pt-4 pb-0 pt-sm-5">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2> Brands We Work on</h2>
            <div className="text">
              “Bahwan Automobiles Trading car service, repair all car brands and
              models at the most affordable prices in Oman.“
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="et-icon-box-container column-8 et-make-container"
                data-gap="8"
              >
                {brands
                  ? brands.data.map((brand, key) => {
                      return (
                        <div className="et-make et-icon-box" key={key}>
                          <a className="d-block">
                            <div className="each_brand_category">
                              <div className="icon_container">
                                <img
                                  className="img-fluid d-block mx-auto"
                                  alt="Nissan"
                                  srcSet={ASSETS + "carbrands/" + brand.image}
                                />
                              </div>
                              <div className="text_container">
                                <h3>Title</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Car Brands We Work With */}

      {/* WHY CHOOSE US */}
      <div className="mt-sm-5 mt-3">
        <section className="about-section-two pt-4 pb-0 pt-sm-5">
          <div className="auto-container">
            <div className="container clearfix mb-4">
              <div className="inner-column">
                <div className="no_after sec-title text-center">
                  <h2>Why Choose us?</h2>
                  <div className="text" style={{ fontSize: "15px" }}></div>
                </div>
                <div className="row">
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
                          <p style={{ textAlign: "justify" }}>
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
                          <img
                            src="assets/front/uploads/whychoose/value_Customer.png"
                            style={{ height: "35px" }}
                          />{" "}
                        </div>
                        <h4>
                          <a href="#">Customer Oriented</a>
                        </h4>
                        <div className="text">
                          <p style={{ textAlign: "justify" }}>
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
                          <p style={{ textAlign: "justify" }}>
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
                          <p style={{ textAlign: "justify" }}>
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
                            src="assets/front/uploads/generalSection/Tailor_Made.png"
                            style={{ height: "35px" }}
                          />
                        </div>
                        <h4>
                          <a href="#">Tailor made</a>
                        </h4>
                        <div className="text">
                          <p style={{ textAlign: "justify" }}>
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
                          <p style={{ textAlign: "justify" }}>
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

                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End WHY CHOOSE US */}

      {/* Sevices*/}
      <Services />
      {/*End services  */}

      {/*Our Car Service Partners */}
      <section className="py-5">
        <div className="auto-container">
          <div className="sec-title text-center mb-5">
            <h2>Our Service Partners</h2>
            <div className="text">
              “Bahwan Automobiles Trading is proud to be associated with some
              well-known international brands”
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-12">
              <div className="our_partners_wrapper">
                <OwlCarousel
                  className="owl-theme"
                  autoplaySpeed={10}
                  items={5}
                  slideBy={1}
                  loop={true}
                  autoplay={true}
                  dots={false}
                >
                  {partners
                    ? partners.data.map((partner, key) => {
                        return (
                          <div className="item one" key={key}>
                            <div className="each_item_wrapper">
                              <img
                                className="img-fluid"
                                alt="Partners"
                                src={ASSETS + "ourcarservices/" + partner.image}
                              />
                            </div>
                          </div>
                        );
                      })
                    : null}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Car Service Partners */}

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
                <OwlCarousel
                  className="owl-theme"
                  items={5}
                  slideBy={1}
                  loop={true}
                  autoplay={true}
                  dots={false}
                >
                  {clients
                    ? clients.data.map((client, key) => {
                        return (
                          <div className="item one" key={key}>
                            <div className="each_item_wrapper">
                              <img
                                className="img-fluid"
                                alt="Clients"
                                src={ASSETS + "ourclients/" + client.image}
                              />
                            </div>
                          </div>
                        );
                      })
                    : null}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end our client */}

      {/* FAQ's Section */}
      <section className="faq-section pt-4 pt-sm-5 pb-0">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title text-center mb-5">
            <h2>FAQs</h2>
            <div className="text">
              Car Services Questions and Answered at Bhawan Automobiles Trading
            </div>
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
                          // aria-expanded={index == 0 ? "true" : "false"}
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
                      className={index == 0 ? "collapse" : "collapse"}
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
            <div className="image-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image">
                  <img
                    src="assets/front/uploads/faq/faq11.jpg"
                    alt="AUTO FIX"
                  />
                </figure>
                <div className="caption-box mt-5">
                  <h4>
                    <span className="small-text">
                      Toll Free Number : &nbsp;
                    </span>
                    <a href="tel:+968 800 500 111" className="bold-text ">
                      800 500 111
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
          </div>
          <div className="row clearfix">
            <div className="col-12">
              <div className="testimonials_container">
                <OwlCarousel
                  className="owl-theme"
                  items={3}
                  slideBy={1}
                  loop={true}
                  autoplay={true}
                  dots={false}
                  {...options}

                >
                  <div className="item one">
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
                  <div className="item two">
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
                  <div className="item three">
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
                  <div className="item four">
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
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial */}
    </>
  );
}
