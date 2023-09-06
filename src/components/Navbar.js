import React from "react";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  let location = useLocation();
  
  return (
    <>
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          <span>Home</span>
        </Link>
      </li>
      <li className="nav-item  ">
        <Link
          to="packages"
          className={
            location.pathname === "/packages" ? "nav-link active" : "nav-link"
          }
        >
          <span>packages</span>
        </Link>
      </li>
      <li className="nav-item  ">
        <Link
          to="book_addon"
          className={
            location.pathname === "/book_addon" ? "nav-link active" : "nav-link"
          }
        >
          <span>Addons</span>
        </Link>
      </li>
      <li className="nav-item  ">
        <Link
          to="services"
          className={
            location.pathname === "/services" ? "nav-link active" : "nav-link"
          }
        >
          <span>Services</span>
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          to="about"
          className={
            location.pathname === "/about" ? "nav-link active" : "nav-link"
          }
        >
          <span>About Us</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="contact-us"
          className={
            location.pathname === "/contact-us" ? "nav-link active" : "nav-link"
          }
        >
          <span>Contact Us</span>
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          to="gallery"
          reloadDocument={true}
          className={
            location.pathname === "/gallery" ? "nav-link active" : "nav-link"
          }
        >
          <span>Gallery</span>
        </Link>
      </li>
      <li className="nav-item no-line ">
        <Link
          to="blog"
          className={
            location.pathname === "/blog" ? "nav-link active" : "nav-link"
          }
        >
          <span>Blogs</span>
        </Link>
      </li>
      <li className="nav-item no-line">
        <Link
          to="packages"
          className="nav-link btn btn-danger rounded btn-xs color-white"
        >
          <span>Book Now</span>
        </Link>
      </li>
    </>
  );
}
