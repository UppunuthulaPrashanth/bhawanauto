import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { CURRENCY } from "../config/Constants";
import { getSingleBooking } from "../redux/features/booking-data/bookingSlice";
import SimpleDateTime from "react-simple-timestamp-to-date";

export default function Booking_view() {
  const params = useParams();
  const navigate = useNavigate();

  const [packageName, setPackageName] = useState("");
  const [addons, setAddons] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleBooking(params.id)).then((res) => {
      if(!res.payload){
        navigate('/booking-list')
      }
      setPackageName(JSON.parse(res.payload.package));
      setAddons(JSON.parse(res.payload.extra_packages));
    });
  }, []);
  const { data, loading } = JSON.parse(
    JSON.stringify(useSelector((state) => state.getSinglebookingDetails))
  );

  if (loading == "PENDING") {
    return <Loader />;
  }

  return (
    <div className="container booking-view">
      <div className="text-center mt-4">
        <h3>
          Your Booking Details <br />
          Booking ID : {data.order_id}
        </h3>
        <span class="stamp is-nope">{data.payment_status}</span>

      </div>
      <div className="col-md-12 booking-details">
        <div className="row">
          <div className="receipt-main col-xs-12 col-sm-12 col-md-12 col-xs-offset-1 col-sm-offset-1 col-md-offset-1">
            {/* card */}
            <div className="card col-md-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="table-responsive booking-table">
                    <table className="table" >
                      <tr><td><a className="cl" href="#">Date</a></td><td>{data.date}</td></tr>
                      <tr><td><a className="cl" href="#">Make</a></td><td>{data.make}</td></tr>
                      <tr><td><a className="cl" href="#">Plate No</a></td><td>{data.plate_number}</td></tr>
                    </table>
                  </div>
                </div>
                
                <div className="col-lg-4 extra-table">
                  <div className="table-responsive booking-table">
                    <table className="table">
                      <tr><td><a className="cl" href="#">Time Slot</a></td><td>{data.timeslot}</td></tr>
                      <tr><td><a className="cl" href="#">Model</a></td><td>{data.model}</td></tr>
                      <tr><td><a className="cl" href="#">Plate Code</a></td><td>{data.plate_code}</td></tr>
                    </table>
                  </div>
                </div>
                <div className="col-lg-4 extra-table">
                  <div className="table-responsive booking-table">
                    <table className="table">
                      <tr><td><a className="cl" href="#">Location</a></td><td>{data.location}</td></tr>
                      <tr><td><a className="cl" href="#">Model Year</a></td><td>{data.model_year}</td></tr>
                      <tr><td><a className="cl" href="#">State</a></td><td>{data.state}</td></tr>
                      <tr><td><a className="cl" href="#">Payment Status</a></td><td className="watermark">{data.payment_status}</td></tr>
                    </table>
                  </div>
                </div>
                <div className="container"><a className="cl" href="#" style={{marginLeft:'8px'}}>Description</a> : {data.description}</div>

              </div>
            </div>
            {/* end card */}

            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-md-9">{packageName.name}</td>
                    <td className="col-md-3">
                      <i className="fa fa-inr"></i>
                      {CURRENCY} {packageName.price}
                    </td>
                  </tr>

                  {addons
                    ? addons.map((add) => {
                        return (
                          <tr>
                            <td className="col-md-9">{add.name}</td>
                            <td className="col-md-3">
                              <i className="fa fa-inr"></i>
                              {CURRENCY} {add.price}
                            </td>
                          </tr>
                        );
                      })
                    : null}

                  <tr>
                    <td className="text-right">
                      <h6>
                        <strong>Sub Total: </strong>
                      </h6>
                    </td>
                    <td className="text-left text-danger">
                      <h6>
                        <strong>
                          <i className="fa fa-inr"></i>
                          <span style={{fontSize:"13px"}}>{CURRENCY}</span> {data.subtotal}
                        </strong>
                      </h6>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-right">
                      <h5>
                        <strong>Tax: </strong>
                      </h5>
                    </td>
                    <td className="text-left text-danger">
                      <h5>
                        <strong>
                          <i className="fa fa-inr"></i>
                          <span style={{fontSize:"13px"}}>{CURRENCY}</span> {data.tax}
                        </strong>
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-right">
                      <h2>
                        <strong>Total: </strong>
                      </h2>
                    </td>
                    <td className="text-left text-danger">
                      <h2>
                        <strong>
                          <i className="fa fa-inr"></i>
                          <span style={{fontSize:"13px"}}>{CURRENCY}</span> {data.total_with_tax}
                        </strong>
                      </h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row">
              <div className="receipt-header receipt-header-mid receipt-footer">
                <div className="col-xs-12 col-sm-12 col-md-12 text-left">
                  <div className="receipt-right">
                    <p>
                      <b>Booking Created Date & Time :</b>
                      <span>
                        <SimpleDateTime
                          dateSeparator="-"
                          format="MYD"
                          timeSeparator=":"
                          meridians="1"
                        >
                          {data.created_at}
                        </SimpleDateTime>
                      </span>
                    </p>
                    <h5>Thanks for Booking.!</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
