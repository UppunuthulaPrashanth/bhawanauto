import React, { useState } from "react";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Repair_car_quote() {
  const [files, setFiles] = useState([]);
  console.log(files);
  return (
    <div className="container">
      <form action="#" id="getAQuoteForm" data-parsley-validate>
        <div className="getAQuoteForm">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 col-xl-12 col-lg-12 d-block mx-auto mb-5 pb-5">
                <div className="card card-light border-0 box_shadow_light">
                  <div className="card-header sec-title mb-0">
                    <div className="card-title mb-0">
                      {" "}
                      <h3 className="common_heading big-text mb-0 text-center">
                        Enquiry Form
                      </h3>
                      <p className="text-center text">
                        Fill the form below to get the details for any service
                        package, exclusive offers, and much more.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="card-body ">
                    <div className="form_wrapper_booking">
                      <div className="row">
                        <div className="col-lg-6 mt-6 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Choose Make</label>
                            <select
                              name="carMake"
                              id="carMake"
                              className="inp_field select2_initialize bg-white"
                              required
                              data-parsley-required-message="Please Choose Make"
                            >
                              <option>Select Make</option>
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
                        <div className="col-lg-6 mt-6 col-sm-6 col-12">
                          <div className="form_field_wrapper">
                            <label>Choose Model</label>
                            <select
                              name="carModel"
                              id="carModel"
                              className="inp_field select2_initialize bg-white"
                              required
                              data-parsley-required-message="Please Choose Model"
                            >
                              <option>Select Model</option>
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
                        {/* </div>
                            </div> */}

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

                        <div className="col-md-5 mx-auto mt-4">
                          <div className="uploadFilesWrapper text-center">
                            <div
                              className="dropzone getProjectId dz-clickable"
                              id="dropzone"
                            >
                              <i className="fas fa-upload"></i>
                              <br />
                              <div className="dz-default dz-message">
                                <span>
                                  Upload your files here (Max 10 Files Can be
                                  uploaded at once)
                                </span>
                                <FilePond
                                  files={files}
                                  allowReorder={true}
                                  allowMultiple={true}
                                  onupdatefiles={setFiles}
                                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 mt-4">
                          <button
                            className="pay_now_btn submitBtn"
                            type="submit"
                            value="pay_now"
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
          </div>
        </div>
      </form>
    </div>
  );
}
