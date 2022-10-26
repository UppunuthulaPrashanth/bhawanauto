import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { submitContact } from "../redux/features/customer-requests/contactusSlice";
import ReCAPTCHA from "react-google-recaptcha";
import { SECRET_KEY, SITE_KEY } from "../config/Constants";
import axios from "axios";
import { useRef } from "react";

export default function Contact_us() {
  const contacts_data = [
    {
      title: "AZAIBA Service",
      phone: "80050011",
      days: "Sunday - Thursday",
      dateTime: "7:00AM - 7:00 PM. Saturday 8:00 AM - 5:30 PM",
      email: "aznfroffinch@sbigh.com",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233956.2914523457!2d58.1927478!3d23.6198552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffe0ef0733d7%3A0xe465a95dc0fb66ae!2sNissan%20And%20Infiniti%20Service%20Center!5e0!3m2!1sen!2sin!4v1662718208694!5m2!1sen!2sin",
    },
    {
      title: "WADIKABIR Service",
      phone: "80050011",
      days: "Sunday - Thursday",
      dateTime: "7:00AM - 7:00 PM. Saturday 8:00 AM - 5:30 PM",
      email: "wkfrofinchar@sbigh.com",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828.270233092649!2d58.5604328!3d23.5849423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f75c26409d25%3A0xa1ada37b0cfda08!2sNissan%20Service!5e0!3m2!1sen!2sin!4v1662718258290!5m2!1sen!2sin",
    },
    {
      title: "MABELLAH Service",
      phone: "80050011",
      days: "Sunday - Thursday",
      dateTime: "7:00AM - 7:00 PM. Saturday 8:00 AM - 5:30 PM",
      email: "mabserviceincharge@sbigh.com",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828.270233092649!2d58.5604328!3d23.5849423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f75c26409d25%3A0xa1ada37b0cfda08!2sNissan%20Service!5e0!3m2!1sen!2sin!4v1662719134621!5m2!1sen!2sin",
    },
    {
      title: "IBRA Service",
      phone: "80050011",
      days: "Sunday - Thursday",
      dateTime: "8:00AM - 5:30 PM",
      email: "Ibraservinch@sbigh.com",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58885.07661643893!2d58.5465955!3d22.7164453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e90252c66101cb3%3A0x3b2f089ef05ccc8b!2sNissan%20Showroom%20Ibra!5e0!3m2!1sen!2sin!4v1662719156479!5m2!1sen!2sin",
    },
    {
      title: "SUR Service",
      phone: "80050011",
      days: "Sunday - Thursday",
      dateTime: "7:00AM - 5:30 PM. Saturday 8:00 AM - 5:30 PM",
      email: "surservice@sbigh.com",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d735.1763144439715!2d59.4979675!3d22.5687509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e90a15a79108f49%3A0xa0ffebfdefc41980!2sNissan!5e1!3m2!1sen!2sin!4v1662719180874!5m2!1sen!2sin",
    },
    {
      title: "SINAW Service",
      phone: "80050011",
      days: "Sunday - Thursday",
      dateTime: " 8:00AM - 5:30 PM.",
      email: "sinawservice@sbigh.com",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3685.7846942465203!2d58.0422765!3d22.5122599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8feb0af2595213%3A0xb3ed638ac83bc940!2sNissan%20Suhail%20Bahwan%20Automobiles!5e0!3m2!1sen!2sin!4v1662719184161!5m2!1sen!2sin",
    },
    {
      title: "BUREIMI Service",
      phone: "80050011",
      days: "Sunday - Thursday",
      dateTime: " 7:00AM - 5:30 PM.",
      email: "bureimiservice@sbigh.com",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d362.9448954988078!2d55.7696077!3d24.2509382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab41cc65f3613%3A0x4f1da2a3df9025bd!2z2YjYsdi02Ycg2LPZh9mK2YQg2KjZh9mI2KfZhiDZhNmE2LXZitin2YbYqSAtINmF2LHZg9iyINmC2LfYuSDYutmK2KfYsSDZhtmK2LPYp9mG!5e1!3m2!1sen!2sin!4v1662719187767!5m2!1sen!2sin",
    },
    {
      title: "SALALAH Service",
      phone: "80050011",
      days: "Sunday - Thursday",
      dateTime: "7:00AM - 5:30 PM. Saturday 8:00 AM - 5:30 PM",
      email: "salalahservice3@sbigh.com",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24361.18443220767!2d54.0254935!3d17.0173711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd1607f9209cbcb%3A0xf0bc4546b6317fc1!2sNissan%20Service%20Salalah!5e1!3m2!1sen!2sin!4v1662719191406!5m2!1sen!2sin",
    },
    {
      title: "Duqm Service",
      phone: "80050011",
      days: "Sunday - Thursday",
      dateTime: " 8:00AM - 5:30 PM.",
      email: "duqmservice@sbigh.com",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60161.08425683142!2d57.6381936!3d19.538704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8287b6d84dba95%3A0x961da24b8b87a66a!2sNISSAN%20SERVICE%20DUQM%20(Suhail%20Bahwan%20Automobiles%20LLC)!5e0!3m2!1sen!2sin!4v1662719194706!5m2!1sen!2sin",
    },
  ];

  const dispatch = useDispatch();
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
        .post(
          `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captchaToken}`
        )
        .then((res) => {
          if (res.data.success) {
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
          console.log(error);
          toast.error("Invalid catch block");
        });
    } else {
      toast.error("Invalid Captcha");
    }
  };

  return (
    <>
      {/* Contact Page Section */}
      <section className="contact-section-two pt-4 pb-0">
        <div className="auto-container">
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

            <div className="row">
              <div className="col-12 col-xl-12 col-lg-12 d-block mx-auto max1200 mb-5">
                <div className="address_container text-center mb-0 mb-lg-5">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_2"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>
                          <strong>AZAIBA </strong>
                        </p>
                        <p>80050011</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_3"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>
                          <strong>WADIKABIR </strong>
                        </p>
                        <p>80050011</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_4"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>

                        <p>
                          <strong>MABELLAH </strong>
                        </p>
                        <p>80050011</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_6"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>
                          <strong>IBRA </strong>
                        </p>
                        <p>80050011</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_7"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>
                          <strong>SUR </strong>
                        </p>
                        <p>80050011</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_8"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>

                        <p>
                          <strong>SINAW </strong>
                        </p>
                        <p>80050011</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_9"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>
                          <strong>BUREIMI </strong>
                        </p>
                        <p>80050011</p>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="each_location_item move_to"
                        moveto="#location_10"
                      >
                        <span className="icon fa fa-map-marker-alt"></span>
                        <p>
                          <strong>SALALAH </strong>
                        </p>
                        <p>80050011</p>
                      </div>
                    </div>
                  </div>
                </div>

                {contacts_data.map((item) => (
                  <div className="location_wrapper_outer mt-2" id="location_2">
                    <div className="location_wrapper">
                      <h3>{item.title}</h3>
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
                                <div className="col-sm-2 col-12 text-sm-right pr-3">
                                  <a href="#">
                                    <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                      <i className="fas fa-map-marker-alt"></i>
                                    </span>
                                  </a>
                                </div>
                                <div className="col-sm-10 col-12">
                                  <a
                                    className="bold-text primary-color"
                                    href="#"
                                  >
                                    {item.title}
                                  </a>
                                  <p>{item.title}</p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="icons-wrapper-contact-page-wrapper"
                              data-aos-delay="300"
                            >
                              <div className="row no-gutters mt-3">
                                <div className="col-sm-2 col-12 text-sm-right pr-3">
                                  <a href=" tel:+97143397533">
                                    <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                      <i className="fas fa-phone"></i>
                                    </span>
                                  </a>
                                </div>
                                <div className="col-sm-10 col-12">
                                  <a
                                    className="bold-text"
                                    href="tel:800 2886349"
                                  >
                                    {item.phone}
                                  </a>
                                  <p>
                                    Call us any time from 08:00am till 06:30pm
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="icons-wrapper-contact-page-wrapper"
                              data-aos-delay="300"
                            >
                              <div className="row no-gutters mt-3">
                                <div className="col-sm-2 col-12 text-sm-right pr-3">
                                  <a href=" tel:+97143397533">
                                    <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                      <i className="fas fa-calendar-week"></i>
                                    </span>
                                  </a>
                                </div>
                                <div className="col-sm-10 col-12">
                                  <a className="bold-text" href="#">
                                    {item.days}
                                  </a>
                                  <p>{item.dateTime}</p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="icons-wrapper-contact-page-wrapper"
                              data-aos-delay="600"
                            >
                              <div className="row no-gutters mt-3">
                                <div className="col-sm-2 col-12 text-sm-right pr-3">
                                  <a href="mailto:er.info@arcs-me.com">
                                    <span className="icon-wrapper-contact-us hovicon effect-7 sub-b">
                                      <i className="far fa-envelope"></i>
                                    </span>
                                  </a>
                                </div>
                                <div className="col-sm-10 col-12">
                                  <a className="bold-text" href={item.email}>
                                    {item.email}
                                  </a>
                                  <p className="m-0">
                                    <span
                                      className="copyEmail"
                                      email={item.email}
                                    >
                                      Click here to copy
                                    </span>
                                  </p>
                                  <p>
                                    Email us anytime, we usually reply within 24
                                    hours
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Contact Page Section */}
    </>
  );
}
