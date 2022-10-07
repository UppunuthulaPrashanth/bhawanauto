import React from "react";

export default function Book_service() {
  return (
    <div className="container">
      <form action="#" id="booking_form" data-parsley-validate="">
        <div className="booking_form">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 d-none">
                <div className="services_selected mt-5">
                  <p>
                    <span className="small-text">Service Choosen:</span>
                    <span className="all_services_selected"></span>
                  </p>
                </div>
              </div>
              <div className="col-12 mt-5">
                <h3 className="common_heading">Booking Details</h3>
              </div>
              <div className="col-12 col-xl-6 col-lg-6 d-block mx-auto mb-5">
                <div className="form_wrapper_booking">
                  <div className="row">
                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <label>Choose Make</label>
                        <select
                          name="carMake"
                          id="carMake"
                          className="inp_field select2_initialize"
                          required=""
                          data-parsley-required-message="Please Choose Make"
                        >
                          <option disabled="" defaultValue="">
                            Select Make
                          </option>
                          <option defaultValue="1056">Ashok Leyland</option>
                          <option defaultValue="33">Audi</option>
                          <option defaultValue="63">Baic</option>
                          <option defaultValue="67">Bentley</option>
                          <option defaultValue="78">Bmw</option>
                          <option defaultValue="119">Bugatti</option>
                          <option defaultValue="1082">Cherry</option>
                          <option defaultValue="159">Chevrolet</option>
                          <option defaultValue="196">Citroen</option>
                          <option defaultValue="1136">Daihatsu</option>
                          <option defaultValue="1090">Fiat</option>
                          <option defaultValue="267">Ford</option>
                          <option defaultValue="292">Foton</option>
                          <option defaultValue="1182">GAC</option>
                          <option defaultValue="1095">Geely</option>
                          <option defaultValue="1177">Great Wall</option>
                          <option defaultValue="324">Haval</option>
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
                          <option defaultValue="1051">Maxus</option>
                          <option defaultValue="528">Mazda</option>
                          <option defaultValue="554">Mercedes-benz</option>
                          <option defaultValue="1149">MG</option>
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
                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <label>Choose Model</label>
                        <select
                          name="carModel"
                          id="carModel"
                          className="inp_field select2_initialize"
                          required=""
                          data-parsley-required-message="Please Choose Model"
                        >
                          undefined
                          <option disabled="" defaultValue="">
                            Choose Model
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <label>Choose year</label>
                        <select
                          name="year"
                          className="inp_field select2_initialize"
                          required=""
                          data-parsley-required-message="Please Choose Year"
                        >
                          <option disabled="" defaultValue="">
                            Select Year
                          </option>
                          <option defaultValue="2022">2022</option>
                          <option defaultValue="2021">2021</option>
                          <option defaultValue="2020">2020</option>
                          <option defaultValue="2019">2019</option>
                          <option defaultValue="2018">2018</option>
                          <option defaultValue="2017">2017</option>
                          <option defaultValue="2016">2016</option>
                          <option defaultValue="2015">2015</option>
                          <option defaultValue="2014">2014</option>
                          <option defaultValue="2013">2013</option>
                          <option defaultValue="2012">2012</option>
                          <option defaultValue="2011">2011</option>
                          <option defaultValue="2010">2010</option>
                          <option defaultValue="2009">2009</option>
                          <option defaultValue="2008">2008</option>
                          <option defaultValue="2007">2007</option>
                          <option defaultValue="2006">2006</option>
                          <option defaultValue="2005">2005</option>
                          <option defaultValue="2004">2004</option>
                          <option defaultValue="2003">2003</option>
                          <option defaultValue="2002">2002</option>
                          <option defaultValue="2001">2001</option>
                          <option defaultValue="2000">2000</option>
                          <option defaultValue="1999">1999</option>{" "}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <label>Choose Vehicle Registration State</label>
                        <select
                          name="state"
                          id="state"
                          className="inp_field select2_initialize"
                          required=""
                          data-parsley-required-message="Vehicle Registration State"
                        >
                          <option disabled="" defaultValue="">
                            Select Vehicle Registration State
                          </option>
                          <option defaultValue="1">Abu Dhabi</option>
                          <option defaultValue="12">Ajman</option>
                          <option defaultValue="23">Bahrain</option>
                          <option defaultValue="2">Dubai</option>
                          <option defaultValue="13">Fujairah</option>
                          <option defaultValue="24">KSA</option>
                          <option defaultValue="25">Kuwait</option>
                          <option defaultValue="22">OMAN</option>
                          <option defaultValue="26">Qatar</option>
                          <option defaultValue="6">Ras Al Khaimah</option>
                          <option defaultValue="3">Sharjah</option>
                          <option defaultValue="4">Umm Al Quwain</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <label>Plate Code</label>
                        <input
                          type="text"
                          className="inp_field"
                          name="plate_code"
                          placeholder="Plate Code"
                          required=""
                          data-parsley-required-message="Vehicle Plate Code"
                          maxLength="3"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <label>Plate Number</label>
                        <input
                          type="number"
                          className="inp_field"
                          name="plate_number"
                          placeholder="Plate Number"
                          required=""
                          data-parsley-required-message="Vehicle Plate Number"
                        />
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="form_wrapper_booking">
                  <div className="row">
                    <div className="col-lg-4 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <label>Select Emirate</label>
                        <select
                          name="locationId"
                          className="inp_field select2_initialize"
                          id="locationId"
                          required=""
                        >
                          undefined
                          <option disabled="" defaultValue="">
                            Choose Location
                          </option>
                          <option defaultValue="31">Abu Dhabi Musaffah M-13</option>
                          <option defaultValue="32">Al Ain Office</option>
                          <option defaultValue="33">Dubai Al Quoz</option>
                          <option defaultValue="34">Dubai DIC</option>
                          <option defaultValue="36">Dubai Umm Ramool</option>
                          <option defaultValue="37">Sharjah</option>
                          <option defaultValue="38">Ras Al Khaimah</option>
                          <option defaultValue="39">Fujairah</option>
                        </select>
                      </div>
                    </div>

                   
                    <div className="col-lg-4 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <label>Select Date</label>
                        <input
                          type="date"
                          className="inp_field"
                          id="dateTimePicker"
                          name="date"
                          placeholder="Choose Date"
                          required=""
                        />
                      </div>

                      
                    </div>


                    <div className="col-lg-4 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <label>Select Time</label>
                        <select
                          name="timeslot"
                          className="inp_field select2_initialize"
                          id="collectionSlot"
                          required=""
                        >
                          <option defaultValue="" disabled="">
                            Select Time Slot
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-4">
                      <div className="form_field_wrapper_dsg_2">
                        <label>Description / Faults </label>
                        <textarea
                          placeholder="Please write description"
                          name="faults"
                          rows="4"
                          className="inp_field"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-12 d-block mx-auto ">
                <div className="form_wrapper_booking checkBox_wrapper packagesWrapper">
                  <div className="row">
                    <div className="col-12 mt-5">
                      <h3 className="common_heading">Packages</h3>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-4 d-none">
                      <div className="packages_wrapper_service  text-center">
                        <label className="label_name">
                          Quick Oil Change Service (*Nissan Patrol Only)
                        </label>
                        <div className="d-inline-block ml-2 dropdown_wrapper">
                          <i className="fas fa-info-circle"></i>
                          <div className="hidden-inital dropdown_container dropdown_sm">
                            <div className="dropdown_inner ">
                              <h3 className="text-center normal-text bold-text mb-3 text-primary">
                                Service Includes
                              </h3>
                              <ul>
                                <li className="text-left color-black">
                                  <span>Engine Oil Filter Replacement</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>
                                    General Inspection and Health Check
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>5w30 Fully Synthetic Oil</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Body Wash And Vacuum</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">199</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="packages"
                            data-parsley-required-message="Please Choose At least One Service"
                            className="trigger_checkbox"
                            defaultValue="63"
                            type="radio"
                            price_value="199"
                            data-parsley-multiple="packages"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-4 active">
                      <div className="packages_wrapper_service active text-center">
                        <label className="label_name">Free Ac Check </label>
                        <div className="d-inline-block ml-2 dropdown_wrapper">
                          <i className="fas fa-info-circle"></i>
                          <div className="hidden-inital dropdown_container dropdown_sm">
                            <div className="dropdown_inner ">
                              <h3 className="text-center normal-text bold-text mb-3 text-primary">
                                Service Includes
                              </h3>
                              <ul>
                                <li className="text-left color-black">
                                  <span>Inspection of car’s A/C system</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>
                                    Run diagnostics of car’s A/C system
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">1</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="packages"
                            data-parsley-required-message="Please Choose At least One Service"
                            className="trigger_checkbox"
                            defaultValue="64"
                            type="radio"
                            price_value="1"
                            data-parsley-multiple="packages"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-4 d-none">
                      <div className="packages_wrapper_service  text-center">
                        <label className="label_name">Auto Detailing package</label>
                        <div className="d-inline-block ml-2 dropdown_wrapper">
                          <i className="fas fa-info-circle"></i>
                          <div className="hidden-inital dropdown_container dropdown_sm">
                            <div className="dropdown_inner ">
                              <h3 className="text-center normal-text bold-text mb-3 text-primary">
                                Service Includes
                              </h3>
                              <ul>
                                <li className="text-left color-black">
                                  <span>Full interior Cleaning </span>
                                </li>
                                <li className="text-left color-black">
                                  <span> Car Sanitization</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Full Body polishing</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>*Terms &amp; Conditions apply</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>*Valid for a limited period</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">399</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="packages"
                            data-parsley-required-message="Please Choose At least One Service"
                            className="trigger_checkbox"
                            defaultValue="65"
                            type="radio"
                            price_value="399"
                            data-parsley-multiple="packages"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-4 d-none">
                      <div className="packages_wrapper_service  text-center">
                        <label className="label_name">
                          Periodic Maintenance (Sedan)
                        </label>
                        <div className="d-inline-block ml-2 dropdown_wrapper">
                          <i className="fas fa-info-circle"></i>
                          <div className="hidden-inital dropdown_container dropdown_sm">
                            <div className="dropdown_inner ">
                              <h3 className="text-center normal-text bold-text mb-3 text-primary">
                                Service Includes
                              </h3>
                              <ul>
                                <li className="text-left color-black">
                                  <span>
                                    Replacement of Engine Oil(10K 5W30 Synthetic
                                    Oil){" "}
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Replacement of Engine Oil Filter</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Inspection of Brakes</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>
                                    Comprehensive Inspection and health check
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Body Wash and Vacuum</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">349</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="packages"
                            data-parsley-required-message="Please Choose At least One Service"
                            className="trigger_checkbox"
                            defaultValue="22"
                            type="radio"
                            price_value="349"
                            data-parsley-multiple="packages"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-4 d-none">
                      <div className="packages_wrapper_service  text-center">
                        <label className="label_name">
                          Periodic Maintenance (SUV)
                        </label>
                        <div className="d-inline-block ml-2 dropdown_wrapper">
                          <i className="fas fa-info-circle"></i>
                          <div className="hidden-inital dropdown_container dropdown_sm">
                            <div className="dropdown_inner ">
                              <h3 className="text-center normal-text bold-text mb-3 text-primary">
                                Service Includes
                              </h3>
                              <ul>
                                <li className="text-left color-black">
                                  <span>
                                    Replacement of Engine Oil(10K 5W30 Synthetic
                                    Oil){" "}
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Replacement of Engine Oil Filter</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Inspection of Brakes</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>
                                    Comprehensive Inspection and health check
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Body Wash and Vacuum</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">499</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="packages"
                            data-parsley-required-message="Please Choose At least One Service"
                            className="trigger_checkbox"
                            defaultValue="21"
                            type="radio"
                            price_value="499"
                            data-parsley-multiple="packages"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-4 d-none">
                      <div className="packages_wrapper_service  text-center">
                        <label className="label_name">
                          Lube Car Service (Sedan)
                        </label>
                        <div className="d-inline-block ml-2 dropdown_wrapper">
                          <i className="fas fa-info-circle"></i>
                          <div className="hidden-inital dropdown_container dropdown_sm">
                            <div className="dropdown_inner ">
                              <h3 className="text-center normal-text bold-text mb-3 text-primary">
                                Service Includes
                              </h3>
                              <ul>
                                <li className="text-left color-black">
                                  <span>
                                    Valid on Japanese/Korean/Chinese Brands
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>
                                    Replacement of Engine Oil(with 10w40Semi
                                    Synthetic
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Replacement of Engine Oil Filter</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Air Filter Cleaning </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>
                                    General Inspection and health check
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Body Wash and Vacuum</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">150</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="packages"
                            data-parsley-required-message="Please Choose At least One Service"
                            className="trigger_checkbox"
                            defaultValue="18"
                            type="radio"
                            price_value="150"
                            data-parsley-multiple="packages"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-4 d-none">
                      <div className="packages_wrapper_service  text-center">
                        <label className="label_name">Lube Car Service (SUV)</label>
                        <div className="d-inline-block ml-2 dropdown_wrapper">
                          <i className="fas fa-info-circle"></i>
                          <div className="hidden-inital dropdown_container dropdown_sm">
                            <div className="dropdown_inner ">
                              <h3 className="text-center normal-text bold-text mb-3 text-primary">
                                Service Includes
                              </h3>
                              <ul>
                                <li className="text-left color-black">
                                  <span>
                                    Valid on Japanese/Korean/Chinese Brands
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>
                                    Replacement of Engine Oil(with 10w40Semi
                                    Synthetic
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Replacement of Engine Oil Filter</span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Air Filter Cleaning </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>
                                    General Inspection and health check
                                  </span>
                                </li>
                                <li className="text-left color-black">
                                  <span>Body Wash and Vacuum</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">220</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="packages"
                            data-parsley-required-message="Please Choose At least One Service"
                            className="trigger_checkbox"
                            defaultValue="17"
                            type="radio"
                            price_value="220"
                            data-parsley-multiple="packages"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-12 d-block mx-auto mb-4 ">
                <div className="form_wrapper_booking checkBox_wrapper">
                  <div className="row">
                    <div className="col-12 mt-5">
                      <h3 className="common_heading">
                        Add Extra Services To Your Package
                      </h3>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                      <div className="services_wrapper   text-center">
                        <label className="label_name">Headlamp Polishing</label>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">99</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="services_choosen[]"
                            data-parsley-required-message="Please Choose At least One Service"
                            defaultValue="42"
                            className="trigger_checkbox"
                            type="checkbox"
                            price_value="99"
                            data-parsley-multiple="services_choosen"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                      <div className="services_wrapper   text-center">
                        <label className="label_name">
                          Vehicle AC Car Service{" "}
                        </label>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">149</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="services_choosen[]"
                            data-parsley-required-message="Please Choose At least One Service"
                            defaultValue="46"
                            className="trigger_checkbox"
                            type="checkbox"
                            price_value="149"
                            data-parsley-multiple="services_choosen"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                      <div className="services_wrapper   text-center">
                        <label className="label_name">Body Polishing</label>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">249</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="services_choosen[]"
                            data-parsley-required-message="Please Choose At least One Service"
                            defaultValue="16"
                            className="trigger_checkbox"
                            type="checkbox"
                            price_value="249"
                            data-parsley-multiple="services_choosen"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4">
                      <div className="services_wrapper   text-center">
                        <label className="label_name">Interior Detailing</label>
                        <span className="d-block mt-3 mb-4">
                          <span className="small-text">AED</span>{" "}
                          <span className="bold-text big-text price_text">249</span>
                        </span>

                        <label className="label_booking">
                          <input
                            name="services_choosen[]"
                            data-parsley-required-message="Please Choose At least One Service"
                            defaultValue="15"
                            className="trigger_checkbox"
                            type="checkbox"
                            price_value="249"
                            data-parsley-multiple="services_choosen"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
