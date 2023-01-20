import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooking } from "../redux/features/booking-data/bookingSlice";
import Loader from "../components/loader/Loader";
import { Link } from "react-router-dom";

export default function Booking_list() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooking());
  }, []);
  const { data, loading } = JSON.parse(
    JSON.stringify(useSelector((state) => state.getBookings))
  );

  if (loading == "PENDING") {
    return <Loader />;
  }

  return (
    <div className="container booking-list">
      <div className="text-center  mb-3 mt-5">
        <h3>Bookings List</h3>
      </div>
      <div className="table-responsive mb-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Make</th>
              <th scope="col">Model</th>
              <th scope="col">Booking Amount</th>
              <th scope="col">Booking Date</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length>0 ? (
              data.map((item, key) => {
                return (
                  <tr scope="row" key={key}>
                    <td>{item.order_id}</td>
                    <td>{item.make}</td>
                    <td>{item.model}</td>
                    <td>OMR {item.total_with_tax}</td>
                    <td>{item.date}</td>
                    <td>{item.booking_type}</td>
                    <td>
                      <Link to={"/booking-view/" + item.id}>
                        {" "}
                        <button className="btn btn-primary btn-sm">
                          <i className="fa fa-eye"></i>&nbsp;View
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="text-center mt-3"><h5 text-center>No Bookings avaliable</h5></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
