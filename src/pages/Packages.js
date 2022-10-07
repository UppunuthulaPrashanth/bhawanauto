import React from "react";
import { Link } from "react-router-dom";

export default function Packages() {


  const asia=[
    {
      title:"Lube Service - 5000 Kms (4CYL)",
      continent:"(Japanese /Korean/ChineseBrands)",
      price:"15.00",
      items:
        ["Replacement of Engine Oil (with 20w50 Mineral Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "20 Check points as percheck sheet"],
      
    },
    {
      title:"Lube Service - 5000 Kms (6 CYL)",
      continent:"(Japanese /Korean/ChineseBrands)",
      price:"17.00",
      items:
        ["Replacement of Engine Oil (with 20w50 Mineral Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "20 Check points as percheck sheet"],
      
    },
    {
      title:"Lube Service - 5000 Kms (8 CYL)",
      continent:"(Japanese /Korean/ChineseBrands)",
      price:"21.00",
      items:
        ["Replacement of Engine Oil (with 20w50 Mineral Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "20 Check points as percheck sheet"],
      
    },
    {
      title:"Lube Service - 5000 Kms (4 CYL)",
      continent:"(Japanese /Korean/ChineseBrands)",
      price:"20.00",
      items:
        ["Replacement of Engine Oil (with 20w50 Synthetic Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "30 Check points as percheck sheet",
        "Body wash & vacuum"
      ],
      
    },
    {
      title:"Lube Service - 5000 Kms (6 CYL)",
      continent:"(Japanese /Korean/ChineseBrands)",
      price:"25.00",
      items:
        ["Replacement of Engine Oil (with 20w50 Synthetic Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "30 Check points as percheck sheet",
        "Body wash & vacuum"
      ],
      
    },
    {
      title:"Lube Service - 5000 Kms (8 CYL)",
      continent:"(Japanese /Korean/ChineseBrands)",
      price:"30.00",
      items:
        ["Replacement of Engine Oil (with 20w50 Synthetic Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "30 Check points as percheck sheet",
        "Body wash & vacuum"
      ],
      
    },


    {
      title:"Lube Service - 5000 Kms (4 CYL)",
      continent:"(American & European Brands)",
      price:"20.00",
      items:
        ["Replacement of Engine Oil (with 20w50 Mineral Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "20 Check points as percheck sheet",
        "Body wash & vacuum"],
    },
    {
      title:"Lube Service - 5000 Kms (6 CYL)",
      continent:"(American & European Brands)",
      price:"22.00",
      items:
        ["Replacement of Engine Oil (with 20w50 Mineral Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "20 Check points as percheck sheet",
        "Body wash & vacuum"],
    },
    {
      title:"Lube Service - 5000 Kms (8 CYL)",
      continent:"(American & European Brands)",
      price:"25.00",
      items:
        ["Replacement of Engine Oil (with 20w50 Mineral Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "20 Check points as percheck sheet",
        "Body wash & vacuum"],
    },
    {
      title:"Lube Service - 10000 Kms (4 CYL)",
      continent:"(American & European Brands)",
      price:"24.00",
      items:
        ["Replacement of Engine Oil (with 5w50 Synthetic Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "30 Check points as percheck sheet",
        "Body wash & vacuum"],
    },
    {
      title:"Lube Service - 10000 Kms (6 CYL)",
      continent:"(American & European Brands)",
      price:"31.00",
      items:
        ["Replacement of Engine Oil (with 5w50 Synthetic Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "30 Check points as percheck sheet",
        "Body wash & vacuum"],
    },
    {
      title:"Lube Service - 10000 Kms (8 CYL)",
      continent:"(American & European Brands)",
      price:"37.00",
      items:
        ["Replacement of Engine Oil (with 5w50 Synthetic Oil)",
        "Replacement of Oil Filter",
        "Clean Air filter",
        "30 Check points as percheck sheet",
        "Body wash & vacuum"],
    }          
  ];
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
                    {/* <span className="devider">
                      <span></span>
                    </span> */}
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
                          className=""
                          id="searchString"
                          name="searchString"
                          
                          placeholder="Search Packages"
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
                      {asia.map((value, index)=>(
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                        <div className="pricing-block-two">
                          <div className="inner-box">
                            <span className="title bold-text">
                              {value.title}
                            </span>

                            <span className="price_wrapper d-block mt-2 mb-2 text-center">
                            <span className="medium-text">OMR &nbsp;</span>
                            <span className="biggest-text bold-text primary-color">
                            {value.price}
                            </span>
                          </span>
                            <ul className="features dropdown_inner limitBox">
                            {value.items.map((subitem, i)=>(
                              <li className="included abs_content_wrapper" key={i}>
                                <span >{subitem}</span>
                              </li>
                            ))}
                              
                            </ul>
                            <div className="btn_container">
                              <Link
                                to="/booking-service"
                                package-id="63"
                                package-type="SP"
                                className="theme-btn btn-style-two takeMeToBooking d-inline-block py-2 "
                              >
                                <span className="btn-title">Book Now</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      ))}
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
      <form action="#" id="getAQuoteForm" data-parsley-validate>
        <div className="getAQuoteForm">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 col-xl-12 col-lg-12 d-block mx-auto mb-5 pb-5">
                <div className="card card-light border-0 box_shadow_light">
                  <div className="card-header sec-title">
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
                              name="packageId"
                              id="package"
                              className="inp_field select2_initialize bg-white"
                              required
                              data-parsley-required-message="Please Choose Package"
                            >
                              <option  >
                                Select Package
                              </option>
                              <option defaultValue="63">
                                Quick Oil Change Service (*Nissan Patrol Only)
                              </option>
                              <option defaultValue="64">Free Ac Check </option>
                              <option defaultValue="65">Auto Detailing package</option>
                              <option defaultValue="22">
                                Periodic Maintenance (Sedan)
                              </option>
                              <option defaultValue="21">
                                Periodic Maintenance (SUV)
                              </option>
                              <option defaultValue="18">
                                Lube Car Service (Sedan)
                              </option>
                              <option defaultValue="17">Lube Car Service (SUV)</option>
                              <option defaultValue="42">Headlamp Polishing</option>
                              <option defaultValue="46">
                                Vehicle AC Car Service{" "}
                              </option>
                              <option defaultValue="16">Body Polishing</option>
                              <option defaultValue="15">Interior Detailing</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 mt-4 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Choose Make</label>
                            <select
                              name="carMake"
                              id="carMake"
                              className="inp_field select2_initialize bg-white"
                              required
                              data-parsley-required-message="Please Choose Make"
                            >
                              <option disabled >
                                Select Make
                              </option>
                              <option defaultValue="1130">Alfa Romeo</option>
                              <option defaultValue="1056">Ashok Leyland</option>
                              <option defaultValue="33">Audi</option>
                              <option defaultValue="63">Baic</option>
                              <option defaultValue="67">Bentley</option>
                              <option defaultValue="78">Bmw</option>
                              <option defaultValue="119">Bugatti</option>
                              <option defaultValue="1060">Cadillac</option>
                              <option defaultValue="1082">Cherry</option>
                              <option defaultValue="159">Chevrolet</option>
                              <option defaultValue="1034">Chrysler</option>
                              <option defaultValue="196">Citroen</option>
                              <option defaultValue="1136">Daihatsu</option>
                              <option defaultValue="1025">Dodge</option>
                              <option defaultValue="1090">Fiat</option>
                              <option defaultValue="267">Ford</option>
                              <option defaultValue="292">Foton</option>
                              <option defaultValue="1182">GAC</option>
                              <option defaultValue="1095">Geely</option>
                              <option defaultValue="1045">GMC</option>
                              <option defaultValue="1177">Great Wall</option>
                              <option defaultValue="324">Haval</option>
                              <option defaultValue="1023">Hino</option>
                              <option defaultValue="329">Honda</option>
                              <option defaultValue="345">Hummer</option>
                              <option defaultValue="348">Hyundai</option>
                              <option defaultValue="376">Infiniti</option>
                              <option defaultValue="399">Isuzu</option>
                              <option defaultValue="1157">Iveco</option>
                              <option defaultValue="1041">JAC</option>
                              <option defaultValue="409">Jaguar</option>
                              <option defaultValue="423">Jeep</option>
                              <option defaultValue="432">Kia</option>
                              <option defaultValue="1165">King Long</option>
                              <option defaultValue="454">Lamborghini</option>
                              <option defaultValue="461">Land rover</option>
                              <option defaultValue="476">Lexus</option>
                              <option defaultValue="1036">Lincoln</option>
                              <option defaultValue="1078">Maserati</option>
                              <option defaultValue="1051">Maxus</option>
                              <option defaultValue="528">Mazda</option>
                              <option defaultValue="554">Mercedes-benz</option>
                              <option defaultValue="1121">Mercury</option>
                              <option defaultValue="1149">MG</option>
                              <option defaultValue="1103">Mini</option>
                              <option defaultValue="639">Mitsubishi</option>
                              <option defaultValue="664">Nissan</option>
                              <option defaultValue="1125">Opel</option>
                              <option defaultValue="1204">Opel</option>
                              <option defaultValue="711">Peugeot</option>
                              <option defaultValue="733">Porsche</option>
                              <option defaultValue="753">Renault</option>
                              <option defaultValue="1146">Seat</option>
                              <option defaultValue="795">Skoda</option>
                              <option defaultValue="1108">Subaru</option>
                              <option defaultValue="821">Suzuki</option>
                              <option defaultValue="1072">Tata</option>
                              <option defaultValue="846">Toyota</option>
                              <option defaultValue="1168">United Diesel</option>
                              <option defaultValue="874">Volkswagen</option>
                              <option defaultValue="898">Volvo</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 mt-4 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Choose Model</label>
                            <select
                              name="carModel"
                              id="carModel"
                              className="inp_field select2_initialize bg-white"
                              required
                              data-parsley-required-message="Please Choose Model"
                            >
                              <option  disabled >
                                Select Model
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-4 mt-4 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Full Name</label>
                            <input
                              type="text"
                              className="inp_field"
                              name="fullName"
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
                              name="contactNumber"
                              id="contactNumber"
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
                              name="emailAddress"
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
                              rows="3"
                              className="inp_field"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-top-0">
                    <div className="col-12">
                      <button
                        className="pay_now_btn submitBtn mx-auto"
                        type="submit"
                        defaultValue="pay_now"
                        id="request_a_quote"
                      >
                        Request a Quote
                        <i className="fas fa-angle-double-right"></i>
                      </button>
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
