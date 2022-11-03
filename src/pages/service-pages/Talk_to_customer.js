import React from "react";
import { Link } from "react-router-dom";

export default function Talk_to_customer() {
  return (
    <div className="row">
      <div className="col-sm-6 mt-4 text-center mx-auto">
        <Link
          to="/repair-car-quote"
          className="common-btn d-block w-100 btn-style-two theme-btn medium-text"
        >
          <span className="btn-title">Request for a Quote</span>
        </Link>
      </div>
    </div>
  );
}
