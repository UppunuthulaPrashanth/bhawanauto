import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";
import { getPackage } from "../redux/features/booking-data/packagesSlice";
import { submitEnquiry } from "../redux/features/customer-requests/enquirySlice";
import ReCAPTCHA from "react-google-recaptcha";
import { getMake } from "../redux/features/booking-data/makeSlice";
import { getModal } from "../redux/features/booking-data/makeModelSlice";
import { SECRET_KEY, SITE_KEY } from "../config/Constants";
import axios from "axios";
import { useRef } from "react";

export default function Packages() {
  const [search_query, setSearch_query] = useState("");
  const [modal_data, setModal_data] = useState(null);
  const disptach=useDispatch();
  const empty_values = {
    fullname: "",
    email: "",
    phone: "",
    description: "",
  };
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPackage());
    dispatch(getMake());
  }, []);

  

  const make_data = JSON.parse(
    JSON.stringify(useSelector((state) => state.make))
  );
  const package_data = JSON.parse(
    JSON.stringify(useSelector((state) => state.package))
  );

  


  const { loading, data } = JSON.parse(
    JSON.stringify(useSelector((state) => state.package))
  );

  const onSearch = (e) => {
    const { value } = e.target;
    setSearch_query(value);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if(name=='make'){
      dispatch(getModal(value)).then((res) => {
        setModal_data(res.payload);
      });
    }
  };

  const recaptchaRef = useRef(null);

  const onsubmitEnquiry = async(e) => {
    const captchaToken = recaptchaRef.current.getValue();
    recaptchaRef.current.reset();
    if (captchaToken) {
      await axios
        .post(
          `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captchaToken}`
        )
        .then((res) => {
          if (res.data.success) {
            setIsLoading(true);
            dispatch(submitEnquiry(formData)).then((res) => {
              if (res.payload.success) {
                toast.success(res.payload.message);
                setFormData(empty_values)
              }
              setIsLoading(false);
            });
          }
        })
        .catch((error) => {
          toast.error("Invalid Captcha");
          setIsLoading(false);
        });
    } else {
      toast.error("Invalid Captcha");
      setIsLoading(false);
    }


  };

  if (loading == "PENDING") {
    return <Loader />;
  }

  return (
    <>
      {/* Pricing Section two */}
      <section className="pricing-section-two pt-4 pt-lg-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 max1200 min1200 d-block mx-auto">
              <div className="row">
                <div className="col-12">
                  <div className="sec-title text-center">
                    <h2>Our Car Service Packages</h2>
                    <div className="text">
                      As our valued Auto Fix customer, you expect us to provide
                      reliable maintenance and service <br />
                      for your vehicle at reasonable prices. This is precisely
                      why we have created our Car Service Packages.
                    </div>
                  </div>
                  <div className="col-12 mb-5 mt-3">
                    <div className="search_box_wrapper">
                      <div className="input_wrapper">
                        <input
                          type="text"
                          id="searchString"
                          name="searchString"
                          placeholder="Search Packages"
                          onChange={onSearch}
                        />
                      </div>
                      <div className="search_btn_wrapper d-block my-auto">
                        <i className="fas fa-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* Pricing Block */}
                <div className="col-12">
                  <div
                    className="deiveryMsg text-center small-text my-2 hidden-inital mb-3"
                    id="errMsg"
                  >
                    Please Enter Some Text To Search Packages
                  </div>
                </div>
                <div className="col-12">
                  <div className="packages_carousel_custom owl_design_custom">
                    <div
                      className="row no-gutters justify-content-center"
                      id="allPackages"
                    >
                      {data
                        ? data
                            .filter((value) => {
                              if (search_query === "") {
                                return value;
                              } else if (
                                value.name
                                  .toLowerCase()
                                  .indexOf(search_query.toLowerCase()) !== -1
                              ) {
                                return value;
                              }
                            })
                            .map((value, index) => (
                              <div
                                className="col-lg-4 col-md-4 col-sm-6 col-12"
                                key={index}
                              >
                                <div className="pricing-block-two">
                                  <div className="inner-box">
                                    <span className="title bold-text">
                                      {value.name}
                                      <br />
                                      <span
                                        className="mt-4"
                                        style={{ fontSize: "10px" }}
                                      >
                                        {value.country ==
                                        "Japanese_Korean_Chinese"
                                          ? "(Japanese/Korean/Chinese Brands)"
                                          : "(American & European Brands)"}
                                      </span>
                                    </span>

                                    <span className="price_wrapper d-block mt-2 mb-2 text-center">
                                      <span className="medium-text">
                                        OMR &nbsp;
                                      </span>
                                      <span className="biggest-text bold-text primary-color">
                                        {value.price}
                                      </span>
                                    </span>
                                    <ul className="features dropdown_inner limitBox">
                                      {value.features
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
                                    <div className="btn_container">
                                      <Link
                                        to={"/booking-service/" + value.id}
                                        package-id="63"
                                        package-type="SP"
                                        className="theme-btn btn-style-two takeMeToBooking d-inline-block py-2 "
                                      >
                                        <span className="btn-title">
                                          Book Now
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Pricing Section */}

      {/* For more quries */}
      <form id="getAQuoteForm" data-parsley-validate>
        <div className="getAQuoteForm">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 col-xl-12 col-lg-12 d-block mx-auto mb-5 pb-5">
                <div className="card card-light border-0 box_shadow_light">
                  <div className="card-header sec-title" style={{backgroundColor:"white", borderBottom:"none"}}>
                    <div className="card-title mb-0">
                      {" "}
                      <h3 className="common_heading big-text mb-0 text-center">
                        For More Queries
                      </h3>
                      <p className="text-center text">
                        Fill the form below to get in touch with us for any
                        service package enquiries, exclusive offers, and much
                        more.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="form_wrapper_booking">
                      <div className="row">
                        <div className="col-lg-4 mt-4 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Choose Package</label>
                            <select
                              name="package"
                              id="package"
                              className="inp_field select2_initialize bg-white"
                              required
                              onChange={onChange}
                              data-parsley-required-message="Please Choose Package"
                            >
                              <option>Select Package</option>
                              {package_data
                                ? package_data.data.map((element, key) => {
                                    return (
                                      <option value={element.id} key={key}>
                                        {element.name} &nbsp;--&nbsp; {element.country=='Japanese_Korean_Chinese'? "Japanese/Korean/Chinese" : "American/European"}
                                      </option>
                                    );
                                  })
                                : null}
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 mt-4 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Choose Make</label>
                            <select
                              name="make"
                              id="make"
                              onChange={onChange}
                              className="inp_field select2_initialize bg-white"
                              required
                              data-parsley-required-message="Please Choose Make"
                            >
                              <option>Select Make</option>
                              {make_data
                              ? make_data.data.map((element, key) => {
                                  return (
                                    <option value={element.id} key={key}>
                                      {element.name}
                                    </option>
                                  );
                                })
                              : null}
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 mt-4 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Choose Model</label>
                            <select
                              name="model"
                              id="model"
                              onChange={onChange}
                              className="inp_field select2_initialize bg-white"
                              required
                              data-parsley-required-message="Please Choose Model"
                            >
                              <option>Select Model</option>
                            {modal_data
                              ? modal_data.map((element, key) => {
                                  return (
                                    <option value={element.id} key={key}>
                                      {element.name}
                                    </option>
                                  );
                                })
                              : null}
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-4 mt-4 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Full Name</label>
                            <input
                              type="text"
                              className="inp_field"
                              name="fullname"
                              id="fullname"
                              value={formData.fullname}
                              onChange={onChange}
                              placeholder="Enter Full Name"
                              required
                              data-parsley-required-message="Enter Full Name"
                            />
                          </div>
                        </div>

                        <div className="col-lg-4 mt-4 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Contact Number</label>
                            <input
                              type="number"
                              className="inp_field"
                              name="phone"
                              id="contactNumber"
                              onChange={onChange}
                              value={formData.phone}
                              placeholder="Enter Contact Number"
                              required
                              data-parsley-required-message="Please Enter Contact Number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 mt-4 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Email Address</label>
                            <input
                              type="email"
                              className="inp_field"
                              name="email"
                              value={formData.email}
                              onChange={onChange}
                              placeholder="Enter Email Address"
                              required
                              data-parsley-required-message="Please Enter Email Address"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 mt-4">
                          <div className="form_field_wrapper_dsg_2">
                            <label>Description </label>
                            <textarea
                              placeholder="Enter Description"
                              name="description"
                              onChange={onChange}
                              value={formData.description}
                              rows="3"
                              className="inp_field"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-top-0">
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        {isLoading ? (
                          <div className="text-center">
                            <img
                              className="mx-auto"
                              src="assets/front/loader/ezgif-2-bc14af353261.gif"
                              style={{ Height: "50px" }}
                            />
                          </div>
                        ) : (
                          <div className="row">
                            <div className="text-center mx-auto">
                              <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={SITE_KEY}
                              />

                              <button
                                className="theme-btn btn-style-two text-center mt-4 submitFormButton"
                                type="button"
                                onClick={() => onsubmitEnquiry()}
                                name="submit-form"
                              >
                                <span className="btn-title">Request a Quote</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
