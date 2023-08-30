import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { submitContact } from "../redux/features/customer-requests/contactusSlice";
import ReCAPTCHA from "react-google-recaptcha";
import { API_URL, SECRET_KEY, SITE_KEY } from "../config/Constants";
import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { getAddressesData } from "../redux/features/cms/contactSlice";

export default function Contact_us() {
  const [contacts_data, setContacts_data]=useState([]);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getAddressesData()).then((data)=>{
        setContacts_data(data.payload)
    })
  }, [])
  const empty_values = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const recaptchaRef = useRef(null);

  const onsubmitContact = async (e) => {
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
            dispatch(submitContact(formData)).then((res) => {
              if (res.payload.success) {
                toast.success(res.payload.message);
                setFormData(empty_values);
              }
              setIsLoading(false);
            });
          }
        })
        .catch((error) => {
          toast.error("Invalid catch block");
          setIsLoading(false);

        });
    } else {
      toast.error("Invalid Captcha");
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Contact Page Section */}
      <section className="contact-section-two pt-4 pb-0">
        <div className="auto-container pt-4">
          <div className="inner-container">
            <div className="sec-title text-center mb-3">
              <h2>Contact Us</h2>

              <div className="text">
                Your Dedicated Personal Car Service Advisor is Available to
                Assist You. Book your car service online and get up to 20% Off
                on all car models.
                <br />
              </div>
            </div>


            <div className="contact-form-two mt-4 px-3 pt-3">
                  <h3 className="common_heading mb-3">LEAVE A MESSAGE</h3>
                  <form>
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="name"
                          id="id"
                          value={formData.name}
                          placeholder="Name"
                          onChange={onChange}
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={onChange}
                          placeholder="Phone"
                          required=""
                          data-parsley-minlength="9"
                          data-parsley-minlength-message="Mobile number should be at least 9 to 12 long"
                          data-parsley-type="digits"
                          data-parsley-type-message="Mobile number should be only numbers"
                          maxLength="12"
                          data-parsley-pattern="^[\d\+\-\.\(\)\/\s]*$"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          onChange={onChange}
                          value={formData.email}
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={onChange}
                          placeholder="Subject"
                          required=""
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="message"
                          id="message"
                          value={formData.message}
                          placeholder="Message"
                          onChange={onChange}
                        ></textarea>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
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
                            <div className="text-center mx-auto">
                              <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={SITE_KEY}
                              />

                              <button
                                className="theme-btn btn-style-two text-center mt-4 submitFormButton"
                                type="button"
                                onClick={() => onsubmitContact()}
                                name="submit-form"
                              >
                                <span className="btn-title">Send Message</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
                
            <div className="row">
              <div className="col-12 col-xl-12 col-lg-12 d-block mx-auto max1200 mb-5">
                {contacts_data.map((item, key) => (
                  <div className="location_wrapper_outer mt-4" id="location_2" key={key}>
                    <div className="location_wrapper">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="contact_wrapper">
                      <div className="row">
                        <div className="col-lg-6 order-lg-1 ">
                          <div className="mapouter">
                            <div className="gmap_canvas" id="locMapDetail2">
                              <iframe
                                src={item.map}
                                width="100%"
                                height="250"
                                frameBorder="0"
                                style={{ border: "0" }}
                                allowFullScreen=""
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 d-block m-auto contactUsInformation">
                          <div className="p-3 p-md-3">
                            <div className="icons-wrapper-contact-page-wrapper">
                              <div className="row no-gutters">
                                <div className="col-sm-2 col-12 text-sm-right pr-3 mb-3">
                                  <a href="#">
                                    <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                      <i className="fas fa-map-marker-alt"></i>
                                    </span>
                                  </a>
                                </div>
                                <div className="col-sm-10 col-12 mt-2">
                                  <a
                                    className="bold-text primary-color"
                                    href="#"
                                  >
                                    {item.name}
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              className="icons-wrapper-contact-page-wrapper"
                              data-aos-delay="300"
                            >
                              <div className="row no-gutters mt-3">
                                <div className="col-sm-2 col-12 text-sm-right pr-3 mb-3">
                                  <a href=" tel:+97143397533">
                                    <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                      <i className="fas fa-phone"></i>
                                    </span>
                                  </a>
                                </div>
                                <div className="col-sm-10 col-12 mt-2">
                                  <a
                                    className="bold-text"
                                    href="tel:800 2886349"
                                  >
                                    {item.mobile}
                                  </a>
                                  {/* <p>
                                    {item.call_timing}
                                  </p> */}
                                </div>
                              </div>
                            </div>
                            <div
                              className="icons-wrapper-contact-page-wrapper"
                              data-aos-delay="300"
                            >
                              <div className="row no-gutters mt-3">
                                <div className="col-sm-2 col-12 text-sm-right pr-3 mb-3">
                                  <a href=" tel:+97143397533">
                                    <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                      <i className="fas fa-calendar-week"></i>
                                    </span>
                                  </a>
                                </div>
                                <div className="col-sm-10 col-12 mt-2">
                                  <a className="bold-text opening-days">
                                    <span>{item.days_timing}</span> &nbsp;  {item.days} 
                                  </a>
                                  <br/>
                                  <a className="bold-text opening-days-second opening-days"><span>{item.days_timing2}</span> &nbsp;  {item.days2} </a>
                                </div>
                              </div>
                            </div>
                            <div
                              className="icons-wrapper-contact-page-wrapper"
                              data-aos-delay="600"
                            >
                              <div className="row no-gutters mt-3">
                                <div className="col-sm-2 col-12 text-sm-right pr-3 mb-3">
                                  <a>
                                    <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                      <i className="far fa-envelope"></i>
                                    </span>
                                  </a>
                                </div>
                                <div className="col-sm-10 col-12 mt-2">
                                  <a className="bold-text" href={item.email}>
                                    {item.email}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Contact Page Section */}
    </>
  );
}
