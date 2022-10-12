import React from "react";
import "./loader.css";
import { Oval } from "react-loader-spinner";

const Loader = () => (
  <div className="fallback-spinner">
    <div className="loading">
      <Oval
        height={200}
        width={80}
        color="#1B92CB"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1B92CB"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  </div>
);

export default Loader;
