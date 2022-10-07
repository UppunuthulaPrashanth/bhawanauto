import React from "react";

export default function Repair_car_quote() {
  return (
    <div className="container">
      <form action="#" id="getAQuoteForm" data-parsley-validate>
        <div class="getAQuoteForm">
          <div class="auto-container">
            <div class="row">
              <div class="col-12 col-xl-12 col-lg-12 d-block mx-auto mb-5 pb-5">
                <div class="card card-light border-0 box_shadow_light">
                  <div class="card-header sec-title mb-0">
                    <div class="card-title mb-0">
                      {" "}
                      <h3 class="common_heading big-text mb-0 text-center">
                        Enquiry Form
                      </h3>
                      <p class="text-center text">
                        Fill the form below to get the details for any service
                        package, exclusive offers, and much more.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="card-body ">
                    <div class="form_wrapper_booking">
                      <div class="row">
                        <div class="col-lg-6 mt-6 col-sm-6 col-12">
                          <div class="form_field_wrapper">
                            <label>Choose Make</label>
                            <select
                              name="carMake"
                              id="carMake"
                              class="inp_field select2_initialize bg-white"
                              required
                              data-parsley-required-message="Please Choose Make"
                            >
                              <option selected disabled value="">
                                Select Make
                              </option>
                              <option value="664">Nissan</option>
                              <option value="846">Toyota</option>
                              <option value="329">Honda</option>
                              <option value="639">Mitsubishi</option>
                              <option value="63">Baic</option>
                              <option value="753">Renault</option>
                              <option value="711">Peugeot</option>
                              <option value="874">Volkswagen</option>
                              <option value="476">Lexus</option>
                              <option value="376">Infiniti</option>
                              <option value="348">Hyundai</option>
                              <option value="432">Kia</option>
                              <option value="267">Ford</option>
                              <option value="78">Bmw</option>
                              <option value="33">Audi</option>
                              <option value="554">Mercedes-benz</option>
                              <option value="159">Chevrolet</option>
                              <option value="423">Jeep</option>
                              <option value="1025">Dodge</option>
                              <option value="528">Mazda</option>
                              <option value="795">Skoda</option>
                              <option value="292">Foton</option>
                              <option value="821">Suzuki</option>
                              <option value="67">Bentley</option>
                              <option value="324">Haval</option>
                              <option value="345">Hummer</option>
                              <option value="119">Bugatti</option>
                              <option value="898">Volvo</option>
                              <option value="399">Isuzu</option>
                              <option value="409">Jaguar</option>
                              <option value="196">Citroen</option>
                              <option value="454">Lamborghini</option>
                              <option value="461">Land rover</option>
                              <option value="733">Porsche</option>
                              <option value="1034">Chrysler</option>
                              <option value="1036">Lincoln</option>
                              <option value="1041">JAC</option>
                              <option value="1045">GMC</option>
                              <option value="1051">Maxus</option>
                              <option value="1056">Ashok Leyland</option>
                              <option value="1060">Cadillac</option>
                              <option value="1072">Tata</option>
                              <option value="1078">Maserati</option>
                              <option value="1082">Cherry</option>
                              <option value="1090">Fiat</option>
                              <option value="1095">Geely</option>
                              <option value="1103">Mini</option>
                              <option value="1108">Subaru</option>
                              <option value="1121">Mercury</option>
                              <option value="1125">Opel</option>
                              <option value="1130">Alfa Romeo</option>
                              <option value="1136">Daihatsu</option>
                              <option value="1146">Seat</option>
                              <option value="1149">MG</option>
                              <option value="1157">Iveco</option>
                              <option value="1165">King Long</option>
                              <option value="1168">United Diesel</option>
                              <option value="1177">Great Wall</option>
                              <option value="1182">GAC</option>
                              <option value="1204">Opel</option>
                              <option value="1023">Hino</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6 mt-6 col-sm-6 col-12">
                          <div class="form_field_wrapper">
                            <label>Choose Model</label>
                            <select
                              name="carModel"
                              id="carModel"
                              class="inp_field select2_initialize bg-white"
                              required
                              data-parsley-required-message="Please Choose Model"
                            >
                              <option selected disabled value="">
                                Select Model
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="col-lg-4 mt-4 col-sm-6 col-12">
                          {/* <div class="row no-gutters">
                                    <div class="col-lg-5 col-5">
                                       <div class="mr-3"> */}
                          <div class="form_field_wrapper">
                            <label>Full Name</label>
                            <input
                              type="text"
                              class="inp_field"
                              name="fullName"
                              value=""
                              placeholder="Enter Full Name"
                              required
                              data-parsley-required-message="Enter Full Name"
                            />
                            {/* </div>
                                       </div>
                                    </div> */}
                          </div>
                        </div>

                        <div class="col-lg-4 mt-4 col-sm-6 col-12">
                          <div class="form_field_wrapper">
                            <label>Contact Number</label>
                            <input
                              type="number"
                              class="inp_field"
                              name="contactNumber"
                              value=""
                              id="contactNumber"
                              placeholder="Enter Contact Number"
                              required
                              data-parsley-required-message="Please Enter Contact Number"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 mt-4 col-sm-6 col-12">
                          <div class="form_field_wrapper">
                            <label>Email Address</label>
                            <input
                              type="email"
                              class="inp_field"
                              name="emailAddress"
                              value=""
                              placeholder="Enter Email Address"
                              required
                              data-parsley-required-message="Please Enter Email Address"
                            />
                          </div>
                        </div>
                        {/* </div>
                            </div> */}

                        <div class="col-lg-12 mt-4">
                          <div class="form_field_wrapper_dsg_2">
                            <label>Description </label>
                            <textarea
                              placeholder="Enter Description"
                              name="description"
                              rows="3"
                              class="inp_field"
                            ></textarea>
                          </div>
                        </div>

                        <div class="col-md-12 mt-4">
                          <div class="uploadFilesWrapper text-center">
                            <div
                              class="dropzone getProjectId dz-clickable"
                              id="dropzone"
                            >
                              <i class="fas fa-upload"></i>
                              <br />
                              <div class="dz-default dz-message">
                                <span>
                                  Upload your files here (Max 10 Files Can be
                                  uploaded at once)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-12 mt-4">
                          <button
                            class="pay_now_btn submitBtn"
                            type="submit"
                            value="pay_now"
                          >
                            Request a Quote
                            <i class="fas fa-angle-double-right"></i>
                          </button>
                        </div>
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