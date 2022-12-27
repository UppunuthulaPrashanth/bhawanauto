import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { getAddon } from "../redux/features/booking-data/addonSlice";
import { getLocation } from "../redux/features/booking-data/locationSlice";
import { getModal } from "../redux/features/booking-data/makeModelSlice";
import { getMake } from "../redux/features/booking-data/makeSlice";
import { getPackage } from "../redux/features/booking-data/packagesSlice";
import { getState } from "../redux/features/booking-data/stateSlice";
import { getTimeslot } from "../redux/features/booking-data/timeslotSlice";
import { getYear } from "../redux/features/booking-data/yearSlice";
import { CURRENCY, TAX_PERCENTAGE } from "../config/Constants";
import { postBooking } from "../redux/features/booking-data/bookingSlice";
import { toast } from "react-toastify";

export default function Book_service() {
  // states
  const [modal_data, setModal_data] = useState(null);
  const [time_slot, setTime_slot] = useState(null);
  const [active_addons, setActive_addons] = useState([]);
  const params = useParams();
  const [active_package, setActive_package] = useState(parseInt(params.id));
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // hitting booking related data from apis
  const disptach = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    disptach(getPackage());
    disptach(getAddon());
    disptach(getMake());
    disptach(getLocation());
    disptach(getYear());
    disptach(getState());
  }, []);

  // getting state values
  const make_data = JSON.parse(
    JSON.stringify(useSelector((state) => state.make))
  );
  const location_data = JSON.parse(
    JSON.stringify(useSelector((state) => state.location))
  );
  const year_data = JSON.parse(
    JSON.stringify(useSelector((state) => state.year))
  );
  const state_data = JSON.parse(
    JSON.stringify(useSelector((state) => state.state))
  );
  const addon_data = JSON.parse(
    JSON.stringify(useSelector((state) => state.addon))
  );
  const package_data = JSON.parse(
    JSON.stringify(useSelector((state) => state.package))
  );

  // user changing make
  const onChangeMake = (e) => {
    formData.package = active_package;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    disptach(getModal(value)).then((res) => {
      setModal_data(res.payload);
    });
  };

  // user changing location
  const onChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    disptach(getTimeslot(value)).then((res) => {
      setTime_slot(res.payload);
    });
  };

  // dynamic adding addons
  const onChangeAddon = (value) => {
    var index = active_addons.findIndex((x) => x.id == value.id);
    if (index == -1) {
      setActive_addons([
        ...active_addons,
        { id: value.id, name: value.name, price: value.price },
      ]);
    } else {
      const updated_addons = active_addons.filter(
        (item) => item.id !== value.id
      );
      setActive_addons(updated_addons);
    }
  };

  // dynamic active selected addons
  var addons_total = 0;
  active_addons.map((activeAddon) => {
    addons_total += parseFloat(activeAddon.price);
    addon_data.data.map((addonItem) => {
      if (addonItem.id == activeAddon.id) {
        addonItem.active = 1;
      }
    });
  });

  // dynamic active selected plan
  const onChangePlan = (value) => {
    setActive_package(value.id);
    setFormData({ ...formData, ["package"]: value.id });
  };

  var package_price = 0;
  var package_name = "loading";
  var package_country="loading";
  if (package_data) {
    for (var item of package_data.data) {
      if (item.id === active_package) {
        package_price = item.price;
        package_name = item.name;
        package_country=item.country;
      }
    }
  }

  // calculating payments
  const total_without_tax =
    parseFloat(package_price) + parseFloat(addons_total);
  const tax = (parseFloat(total_without_tax) * TAX_PERCENTAGE) / 100;
  const total_with_tax = parseFloat(total_without_tax) + parseFloat(tax);

  // Api loading
  if (addon_data.loading == "PENDING" || package_data.loading == "PENDING") {
    return <Loader />;
  }

  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Do Booking
  const DoBooking = (e) => {
    setIsLoading(true);
    var selected_addons = [];
    active_addons.map((item) => {
      selected_addons.push(item.id);
    });
    formData.addons = selected_addons;
    disptach(postBooking(formData)).then((res) => {
      if (res.payload.success) {
        navigate(`/booking-view/${res.payload.booking_id}`)
        toast.success(res.payload.message);
      }
      setIsLoading(false);
    });
  };

  // render view
  return (
    <div className="container">
      <div className="booking_form">
        <div className="auto-container">
          <form>
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
                          onChange={onChangeMake}
                          id="carMake"
                          className="inp_field select2_initialize"
                          required=""
                        >
                          <option disabled="" defaultValue="">
                            Select Make
                          </option>
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
                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <select
                          name="carModel"
                          id="carModel"
                          className="inp_field select2_initialize"
                          required=""
                          onChange={formChange}
                        >
                          <option disabled="" defaultValue="">
                            Choose Model
                          </option>
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
                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <select
                          name="year"
                          id="year"
                          className="inp_field select2_initialize"
                          onChange={formChange}
                        >
                          <option disabled="" defaultValue="">
                            Select Model Year
                          </option>
                          {year_data.data.map((element, key) => {
                            return (
                              <option value={element.name} key={key}>
                                {element.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <select
                          name="state"
                          id="state"
                          className="inp_field select2_initialize"
                          required="required"
                          onChange={formChange}
                        >
                          <option disabled="" defaultValue="">
                            Select Vehicle Registration State
                          </option>
                          {state_data.data.map((element, key) => {
                            return (
                              <option value={element.name} key={key}>
                                {element.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <input
                          type="text"
                          className="inp_field"
                          name="plate_code"
                          id="plate_code"
                          placeholder="Plate Code"
                          required=""
                          onChange={formChange}
                          maxLength="3"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <input
                          type="number"
                          className="inp_field"
                          name="plate_number"
                          id="plate_number"
                          placeholder="Plate Number"
                          required=""
                          onChange={formChange}
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
                        <select
                          name="locationId"
                          className="inp_field select2_initialize"
                          id="locationId"
                          onChange={onChangeLocation}
                          required=""
                        >
                          <option disabled="" defaultValue="">
                            Choose Location
                          </option>
                          {location_data
                            ? location_data.data.map((element, key) => {
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
                        <input
                          type="date"
                          className="inp_field"
                          id="dateTimePicker date"
                          name="date"
                          onChange={formChange}
                          placeholder="Choose Date"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 mt-4 col-sm-6 col-12">
                      <div className="form_field_wrapper">
                        <select
                          name="timeslot"
                          onChange={formChange}
                          className="inp_field select2_initialize"
                          id="timeslot"
                          required=""
                        >
                          <option defaultValue="" disabled="">
                            Select Time Slot
                          </option>

                          {time_slot
                            ? time_slot.map((element) => {
                                return element.timings.map((time, timekey) => {
                                  return (
                                    <option value={time} key={timekey}>
                                      {time}
                                    </option>
                                  );
                                });
                              })
                            : null}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-4">
                      <div className="form_field_wrapper_dsg_2">
                        <textarea
                          placeholder="Please write description"
                          name="description"
                          id="description"
                          rows="4"
                          onChange={formChange}
                          className="inp_field"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Packages section */}
              <div className="col-12 col-xl-12 d-block mx-auto ">
                <div className="form_wrapper_booking checkBox_wrapper packagesWrapper">
                  <div className="row">
                    <div className="col-12 mt-5">
                      <h3 className="common_heading">Selected Package</h3>
                    </div>
                    {package_data
                      ? package_data.data.map((element, key) => {
                          return (
                            <div
                              className="col-lg-4 col-md-6 col-sm-12  mt-4 "
                              key={key}
                              onClick={() => onChangePlan(element)}
                            >
                              <div
                                className={
                                  element.id === active_package
                                    ? "packages_wrapper_service text-center active"
                                    : "packages_wrapper_service text-center"
                                }
                              >
                                <label className="label_name">
                                  {element.name}

                                </label>
                                <div className="d-inline-block ml-2 dropdown_wrapper">
                                  <i className="fas fa-info-circle"></i>
                                  <div className="hidden-inital dropdown_container dropdown_sm">
                                    <div className="dropdown_inner ">
                                      <h3 className="text-center normal-text bold-text mb-3 text-primary">
                                        Service Includes
                                      </h3>

                                      <ul>
                                        {element.features
                                          .split(",")
                                          .map((subitem, i) => {
                                            return (
                                              <li
                                                className="included abs_content_wrapper text-dark"
                                                key={i}
                                              >
                                                <span>{subitem}</span>
                                              </li>
                                            );
                                          })}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <span className="d-block mt-3 mb-4">
                                  
                                  <span className="small-text">
                                    {CURRENCY}&nbsp;
                                  </span>
                                  <span className="bold-text big-text price_text">
                                    {element.price}
                                  </span>

                                </span>
                                <p>{element.country}</p>

                                <label className="label_booking">
                                  <input
                                    name="packages"
                                    id="packages"
                                    data-parsley-required-message="Please Choose At least One Service"
                                    className="trigger_checkbox"
                                    defaultValue="64"
                                    type="radio"
                                    onChange={() => formChange}
                                    price_value="1"
                                    data-parsley-multiple="packages"
                                  />
                                </label>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
              {/* end Packages section */}

              {/* Addon section */}
              <div className="col-12 col-xl-12 d-block mx-auto mb-4 ">
                <div className="form_wrapper_booking checkBox_wrapper">
                  <div className="row">
                    <div className="col-12 mt-5">
                      <h3 className="common_heading">
                        Add Extra Services To Your Package
                      </h3>
                    </div>
                    {addon_data
                      ? addon_data.data.map((element, key) => {
                          return (
                            <div
                              className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4"
                              key={key}
                            >
                              <div
                                className={
                                  element.active
                                    ? "services_wrapper text-center active"
                                    : "services_wrapper text-center"
                                }
                                onClick={() => onChangeAddon(element)}
                              >
                                <label className="label_name">
                                  {element.name}
                                </label>
                                <span className="d-block mt-3 mb-4">
                                  <span className="small-text">{CURRENCY}</span>{" "}
                                  <span className="bold-text big-text price_text">
                                    {element.price}
                                  </span>
                                </span>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
              {/* end Addon section*/}

              {/* Payment section */}
              <div className="container">
                <div className="row gutters">
                  <div className="col-md-6"></div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body p-0">
                        <div className="invoice-container">
                          <div className="invoice-body">
                            <div className="row gutters">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="table-responsive">
                                  <table className="table custom-table m-0 payment-table">
                                    <thead>
                                      <tr>
                                        <th>Items</th>
                                        <th>Sub Total</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {/* package */}
                                      <tr>
                                        <td>
                                          <p className="m-0">{package_name}</p>
                                          <span id="package_country"> {package_country} </span>
                                        </td>
                                        <td>
                                          <span>{CURRENCY}</span>{" "}
                                          {package_price}
                                        </td>
                                      </tr>
                                      {/* end package */}

                                      {/* addons */}
                                      {active_addons
                                        ? active_addons.map(
                                            (singleItem, key) => {
                                              return (
                                                <tr key={key}>
                                                  <td>
                                                    <p className="m-0">
                                                      {singleItem.name}
                                                    </p>
                                                  </td>
                                                  <td>
                                                    <span>{CURRENCY}</span>{" "}
                                                    {singleItem.price}
                                                  </td>
                                                </tr>
                                              );
                                            }
                                          )
                                        : null}
                                      {/* end addons */}

                                      <tr>
                                        <td>
                                          <p className="mb-2">Subtotal</p>
                                          <p className="mb-2">Tax</p>
                                          <h5 className="text-success">
                                            <strong>Grand Total</strong>
                                          </h5>
                                        </td>
                                        <td>
                                          <p className="mb-1">
                                            <span>{CURRENCY}</span>&nbsp;
                                            {parseFloat(
                                              total_without_tax
                                            ).toFixed(3)}
                                          </p>
                                          <p className="mb-1">
                                            <span>{CURRENCY}</span>{" "}
                                            {parseFloat(tax).toFixed(3)}
                                          </p>
                                          <h5 className="text-success">
                                            <strong>
                                              <span>{CURRENCY}</span>&nbsp;
                                              {parseFloat(
                                                total_with_tax
                                              ).toFixed(3)}
                                            </strong>
                                          </h5>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="payment-button text-center mb-5">
                      {isLoading ? (
                        <div className="text-center">
                          <img
                            className="mx-auto"
                            src="/assets/front/loader/loader.gif"
                            style={{ Height: "50px" }}
                          />
                        </div>
                      ) : (
                        <button
                          className="btn btn-primary btn-lg submitBtn"
                          type="button"
                          onClick={DoBooking}
                        >
                          Pay Now <i className="fas fa-money"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* end Paymenet */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
