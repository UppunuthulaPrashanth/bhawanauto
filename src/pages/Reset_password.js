import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { resetPassword } from "../redux/features/auth/authSlice";

export default function Reset_password() {
  // states
  const empty_values = {
    email: "",
  };

  const [formSignupValues, setformSignupValues] = useState({
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    setformSignupValues({ ...formSignupValues, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    var errors_count = 0;
    if (!formSignupValues.email) {
      errors.email = "Email is required";
      errors_count = 1;
    }
    if (errors_count == 0) {
      dispatch(resetPassword()).then((res)=>{
        toast.success("Your password has been sent to your mail. please checck")
      })
    } else {
      for (var key in errors) {
        toast.error(errors[key]);
      }
    }
  };

  return (
    <>
      <div className="card signup_v4 mb-30 mt-4 mb-5">
        <div className="card-body col-md-5 mx-auto ">
          <h4 className="text-center mt-4 mb-4">Forget password</h4>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <div className="login-container">
                <form>
                  <div className="form-container-login w-100" id="loginInitial">
                    <div className="row">
                      <div
                        className="col-lg-11 col-xl-10 col-sm-12 col-12 d-block mx-auto listenMe"
                        btntolisten="login"
                      >
                        <div className="row">
                          <div
                            className="col-12 col-sm-12 mt-2 text-center text-danger"
                            id="login_message_box"
                          ></div>
                          <div className="col-12 col-sm-12 mt-2">
                            <div className="form-wrapper">
                              <label>
                                <i className="far fa-address-card"></i>
                              </label>
                              <input
                                placeholder="Please Enter Your Email"
                                required
                                className="input-field"
                                name="email"
                                id="email"
                                type="text"
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="col-12 mt-4 text-center">
                            <div className="btns-container">
                              {isLoading ? (
                                <img
                                  src="assets/front/loader/ezgif-2-bc14af353261.gif"
                                  style={{ Height: "50px" }}
                                />
                              ) : (
                                <button
                                  type="button"
                                  onClick={(e) => onSubmit(e)}
                                  className=" common_button d-block w-100 py-2 mb-4 mt-2"
                                >
                                  <span className="bold-text" mytext="Login">
                                    Forget password
                                  </span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
