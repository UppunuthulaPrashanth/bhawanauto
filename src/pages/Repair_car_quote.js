import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";
import { getPackage } from "../redux/features/booking-data/packagesSlice";
import ReCAPTCHA from "react-google-recaptcha";
import { getMake } from "../redux/features/booking-data/makeSlice";
import { getModal } from "../redux/features/booking-data/makeModelSlice";
import { API_URL, SECRET_KEY, SITE_KEY } from "../config/Constants";
import axios from "axios";
import { useRef } from "react";
import { submitRepairEnquiry } from "../redux/features/customer-requests/repairEnquirySlice";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
registerPlugin(FilePondPluginFileEncode);

export default function Repair_car_quote() {
  const [files, setFiles] = useState([]);
  const [modal_data, setModal_data] = useState(null);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(getPackage());
    dispatch(getMake());
  }, []);

  const make_data = JSON.parse(
    JSON.stringify(useSelector((state) => state.make))
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "make") {
      dispatch(getModal(value)).then((res) => {
        setModal_data(res.payload);
      });
    }
    setFormData({ ...formData, [name]: value });
  };

  const recaptchaRef = useRef(null);

  const onsubmitEnquiry = async (e) => {
    const captchaToken = recaptchaRef.current.getValue();
    recaptchaRef.current.reset();
    if (captchaToken) {
      await axios
      .get(
        `${API_URL}/customer/verifyCaptcha/${captchaToken}`,
        {headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }}
      )
      .then((res) => {
        if (res.data.success && res.data.message.success) {
            setIsLoading(true);
            const convertedForm = new FormData();
            for (var key in formData) {
              if (key == "make") {
                convertedForm.append(key, make_data.data[formData[key]].name);
              } else {
                convertedForm.append(key, formData[key]);
              }
            }
            files.map((image_file, index) => {
              const base64String = image_file.getFileEncodeBase64String();
              convertedForm.append("images[" + index + "]", base64String);
            });

            dispatch(submitRepairEnquiry(convertedForm)).then((res) => {
              if (res.payload.success) {
                toast.success(res.payload.message);
                setFormData({});
              }
              setIsLoading(false);
            });
          }
        })
        .catch((error) => {
          toast.error("Invalid Captchaaa");
          setIsLoading(false);
        });
    } else {
      toast.error("Invalid Captcha");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

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
                        <div className="col-md-7">
                          <div className="row">
                            <div className="col-lg-6 mt-6 col-sm-6 col-12">
                              <div className="form_field_wrapper">
                                <label>Choose Make</label>
                                <select
                                  name="make"
                                  id="make"
                                  onChange={(e) => onChange(e)}
                                  className="inp_field select2_initialize bg-white"
                                  required
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
                            <div className="col-lg-6 mt-6 col-sm-6 col-12">
                              <div className="form_field_wrapper">
                                <label>Choose Model</label>
                                <select
                                  name="model"
                                  id="model"
                                  onChange={(e) => onChange(e)}
                                  className="inp_field select2_initialize bg-white"
                                  required
                                  data-parsley-required-message="Please Choose Model"
                                >
                                  <option>Select Model</option>
                                  {modal_data
                                    ? modal_data.map((element, key) => {
                                        return (
                                          <option
                                            value={element.name}
                                            key={key}
                                          >
                                            {element.name}
                                          </option>
                                        );
                                      })
                                    : null}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 mt-4 col-sm-6 col-12">
                              <div className="form_field_wrapper">
                                <label>Full Name</label>
                                <input
                                  type="text"
                                  onChange={(e) => {
                                    onChange(e);
                                  }}
                                  value={
                                    formData.fullname ? formData.fullname : ""
                                  }
                                  className="inp_field"
                                  name="fullname"
                                  id="fullname"
                                  placeholder="Enter Full Name"
                                  required
                                  data-parsley-required-message="Enter Full Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4 col-sm-6 col-12">
                              <div className="form_field_wrapper">
                                <label>Contact Number</label>
                                <input
                                  type="phone"
                                  onChange={(e) => {
                                    onChange(e);
                                  }}
                                  value={formData.phone ? formData.phone : ""}
                                  className="inp_field"
                                  name="phone"
                                  id="phone"
                                  placeholder="Enter Contact Number"
                                  required
                                  data-parsley-required-message="Please Enter Contact Number"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 mt-4 col-sm-12 col-12">
                              <div className="form_field_wrapper">
                                <label>Email Address</label>
                                <input
                                  type="email"
                                  onChange={(e) => {
                                    onChange(e);
                                  }}
                                  value={formData.email ? formData.email : ""}
                                  className="inp_field"
                                  name="email"
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
                                  onChange={(e) => {
                                    onChange(e);
                                  }}
                                  value={
                                    formData.description
                                      ? formData.description
                                      : ""
                                  }
                                  className="inp_field"
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12 col-sm-12 mt-3 form-group">
                            {isLoading ? (
                              <div className="text-center">
                                <img
                                  className="mx-auto"
                                  src="/assets/front/loader/loader.gif"
                                  style={{ Height: "50px" }}
                                />
                              </div>
                            ) : (
                              <div className="row">
                                <div className=" col-md-6 ">
                                  <div className="" style={{marginLeft:"-14px"}}>
                                    <ReCAPTCHA
                                      ref={recaptchaRef}
                                      sitekey={SITE_KEY}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="">
                                    <button
                                      className="mt-4 theme-btn enquiry-button theme-btn text-center submitFormButton"
                                      type="button" 
                                      onClick={() => onsubmitEnquiry()}
                                      name="submit-form"
                                    >
                                      <span className="btn-title">
                                        Request a Quote
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="uploadFilesWrapper text-center">
                            <i className="fas fa-upload"></i>
                            <div className="dz-default dz-message">
                              <FilePond
                                files={files}
                                allowFileEncode={true}
                                allowReorder={true}
                                allowMultiple={true}
                                onupdatefiles={setFiles}
                                labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                              />
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
        </div>
      </form>
    </div>
  );
}
