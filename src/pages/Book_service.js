import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { getAddon } from "../redux/features/booking-data/addonSlice";
import { getLocation } from "../redux/features/booking-data/locationSlice";
import { getModal } from "../redux/features/booking-data/makeModelSlice";
import { getMake } from "../redux/features/booking-data/makeSlice";
import { getPackage } from "../redux/features/booking-data/packagesSlice";
import { getState } from "../redux/features/booking-data/stateSlice";
import { getTimeslot } from "../redux/features/booking-data/timeslotSlice";
import { getYear } from "../redux/features/booking-data/yearSlice";

export default function Book_service() {
  const [modal_data, setModal_data] = useState(null);
  const [time_slot, setTime_slot] = useState(null);
  const [active_addons, setActive_addons] = useState([]);
  const params = useParams();
  const [active_package, setActive_package] = useState(parseInt(params.id));

  const disptach = useDispatch();
  useEffect(() => {
    disptach(getMake());
    disptach(getLocation());
    disptach(getYear());
    disptach(getState());
    disptach(getPackage());
    disptach(getAddon());
  }, []);

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
    const { value } = e.target;
    disptach(getModal(value)).then((res) => {
      setModal_data(res.payload);
    });
  };

  // user changing location
  const onChangeLocation = (e) => {
    const { value } = e.target;
    disptach(getTimeslot(value)).then((res) => {
      setTime_slot(res.payload);
    });
  };

  // select addon
  const onChangeAddon = (value) => {
    var index = active_addons.findIndex(x => x.id==value.id); 
    if(index==-1){
      setActive_addons([...active_addons, {'id':value.id, "name":value.name, "price":value.price, 'active':1}])
    }else{
      active_addons.splice(active_addons.findIndex(a => a.id === value.id) , 1)
    }
  };
  active_addons.map((activeAddon)=>{
  addon_data.data.map((addonItem)=>{
      if(addonItem.id==activeAddon.id){
        addonItem.active=1
      }else{
        addonItem.active=0
      }
    })
  })

  console.log(addon_data.data)
  // select plan
  const onChangePlan = (value) => {
    setActive_package(value.id);
  };
  var package_price=0
  var package_name="loading"
if(package_data){
  for(var item of package_data.data){
    if(item.id===active_package){
      package_price=item.price
      package_name=item.name
    }
  }
}

  const without_tax_total =  package_price;
  const tax = (without_tax_total * 5) / 100;
  const total_with_tax = without_tax_total + tax;

  // Api loading
  if (
    make_data.loading == "PENDING" ||
    location_data == "PENDING" ||
    year_data == "PENDING" ||
    state_data == "PENDING" ||
    addon_data == "PENDING" ||
    package_data == "PENDING"
  ) {
    return <Loader />;
  }

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
                          onChange={onChangeMake}
                          id="carMake"
                          className="inp_field select2_initialize"
                          required=""
                          data-parsley-required-message="Please Choose Make"
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
                        <label>Choose Model</label>
                        <select
                          name="carModel"
                          id="carModel"
                          className="inp_field select2_initialize"
                          required=""
                          data-parsley-required-message="Please Choose Model"
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
                          {year_data.data.map((element, key) => {
                            return (
                              <option value={element.id} key={key}>
                                {element.name}
                              </option>
                            );
                          })}
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
                          {state_data.data.map((element, key) => {
                            return (
                              <option value={element.id} key={key}>
                                {element.name}
                              </option>
                            );
                          })}
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
                              className="col-lg-4 col-md-4 col-sm-4 col-6 mt-4 "
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
                                  <span className="small-text">OMR</span>
                                  <span className="bold-text big-text price_text">
                                    {element.price}
                                  </span>
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
                                className={element.active?"services_wrapper text-center active":"services_wrapper text-center"}
                                onClick={() => onChangeAddon(element)}
                              >
                                <label className="label_name">
                                  {element.name}
                                </label>
                                <span className="d-block mt-3 mb-4">
                                  <span className="small-text">OMR</span>{" "}
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

              <div class="col-12 mb-5 mt-5">
                <div class="row">
                  <div class="offset-lg-6 col-lg-6 sum_wrapper">
                    <div class="row">
                      <div class="col-8 text-right">
                        <span class="title" id="packageChoosenName">
                          {package_name}
                        </span>
                      </div>
                      <div class="col-4 text-right">
                        <span>
                        <span class="unit_name">OMR  &nbsp;</span> 
                          <span class="price_value mr-2" id="packageChoosenVal">
                            {package_price}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* {addon_name ?
                    <div class="row">
                    <div class="col-8 text-right">
                      <span class="title" id="packageChoosenName">
                        {addon_name}
                      </span>
                    </div>
                    <div class="col-4 text-right">
                      <span>
                      <span class="unit_name">OMR  &nbsp;</span> 
                        <span class="price_value mr-2" id="packageChoosenVal">
                        </span>
                      </span>
                    </div>
                  </div>
                  :null
                  
                  } */}

                    <div class="row">
                      <div class="col-12">
                        <div class="all_services_choosen"></div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-8 text-right">
                        <span class="title">TOTAL</span>
                      </div>
                      <div class="col-4 text-right">
                        <span>
                        <span class="unit_name">OMR  &nbsp;</span> 
                          <span class="price_value mr-2" id="packageChoosenVal">
                            {package_price}
                          </span>
                        </span>
                      </div>

                    </div>
                    <div class="row">
                      <div class="col-8 text-right">
                        <span class="title">TAX 5%</span>
                      </div>
                      <div class="col-4 text-right">
                        <span>
                        <span class="unit_name">OMR  &nbsp;</span> 
                          <span class="price_value mr-2" id="packageChoosenVal">
                            {package_price}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-8 text-right">
                        <span class="title total">Grand Total</span>
                      </div>
                      <div class="col-4 text-right">
                        <span>
                        <span class="unit_name">OMR  &nbsp;</span> 
                          <span class="price_value mr-2" id="packageChoosenVal">
                            {package_price}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-6">
                      </div>
                      <div class="col-6">
                        <button
                          class="pay_now_btn submitBtn"
                          type="submit"
                          value="pay_now"
                        >
                          Pay Now <i class="fas fa-money"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* end Paymenet */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
