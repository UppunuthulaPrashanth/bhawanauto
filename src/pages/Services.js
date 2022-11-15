import React from "react";
import {  Outlet } from "react-router-dom";

export default function Services() {
  const car_images = [
    {
      title: "Periodic maintenance",
      image: "BAT_Service_Icons-17.png",
      link: "services/periodic-maintenance",
    },
    {
      title: "Car Scanning & Diagnostics",
      image: "BAT_Service_Icons-29.png",
      link: "services/car-scanning",
    },
    {
      title: "Pre-purchase Inspection",
      image: "BAT_Service_Icons-11.png",
      link: "services/prepurchase-inspection",
    },
    {
      title: "General Maintenance",
      image: "BAT_Service_Icons-23.png",
      link: "services/general-maintenance",
    },
    {
      title: "Battery & Tire Replacement",
      image: "BAT_Service_Icons-16.png",
      link: "services/car-battery-tire-replacement",
    },
    {
      title: "Wheel Alignment & Balancing",
      image: "BAT_Service_Icons-06.png",
      link: "services/wheel-alignment-balancing",
    },
    {
      title: "A/C Repair",
      image: "BAT_Service_Icons-19.png",
      link: "services/car-ac-repair",
    },
    {
      title: "Transmission Repair",
      image: "BAT_Service_Icons-02.png",
      link: "services/transmission_repair",
    },
    {
      title: "Engine Repair",
      image: "BAT_Service_Icons-26.png",
      link: "services/engine-repair",
    },
    {
      title: "Car Care & Car Detailing",
      image: "BAT_Service_Icons-22.png",
      link: "services/car-care-car-detailing",
    },
    {
      title: "Window Film",
      image: "BAT_Service_Icons-31.png",
      link: "services/window-film",
    },
    {
      title: "Body Repair & Painting",
      image: "BAT_Service_Icons-27.png",
      link: "services/body-repair-repainting",
    },
    {
      title: "Customized Body Fabrication",
      image: "BAT_Service_Icons-13.png",
      link: "services/customized-body-fabrication",
    },
    {
      title: "POD-Modification OPAL Certification",
      image: "BAT_Service_Icons-24.png",
      link: "services/pod-modification",
    },
    {
      title: "Off Road / Accessories",
      image: "BAT_Service_Icons-28.png",
      link: "services/off-road-accessories",
    },
    {
      title: "Gear Box",
      image: "BAT_Service_Icons-07.png",
      link: "services/gear-box",
    },
  ];
  return (
    <>
      <section className="pricing-section-two ">
        <div className="auto-container pt-4">
          <div className="sec-title text-center">
            <h2>Our Services</h2>
            <div className="text">
              We offer full car service, auto repair & car maintenance for all
              brands and models
            </div>
          </div>
          <div className="row main-services">
            <div className="col-12">
              <div className="row justify-content-center">
                {car_images
                  ? car_images.map((element, key) => {
                      return (
                        <div
                          className="col-lg-3 col-md-4 col-sm-4 col-6 mt-4"
                          key={key}
                        >
                          <div className="each_service_package">
                            <div className="icon_container">
                            <a href={element.link}>
                                <img
                                  className="img-fluid d-block mx-auto"
                                  title="Car Oil Change"
                                  alt="Car Oil Change"
                                  src={"assets/front/services/" + element.image}
                                />
                              </a>
                            </div>
                            <div className="text_container">
                              <h3>
                                <a href={element.link}>{element.title}</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}
