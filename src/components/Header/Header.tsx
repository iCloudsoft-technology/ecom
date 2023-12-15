import React from "react";
import { NavLink, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";
import { right } from "@popperjs/core";
const Header = () => {
  return (
    <>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Page</Link>
            </li>
          </ul>
        </nav>
      </div> */}

      <section>
        <div className="container-fluid p-0 ">
          <nav
            className="navbar navbar-expand-lg navbar-dark w-100"
            style={{
              backgroundColor: "#558ed5",
              padding: ".655rem",
              height: "44px",
            }}
          >
            <div className="container-fluid w-100">
              <button
                className="navbar-toggler p-0"
                style={{ fontSize: "14px" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  className="navbar-toggler-icon"
                  style={{ fontSize: "14px" }}
                ></span>
              </button>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav FONT d-flex justify-content-start ">
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link "
                      style={{
                        color: "#fff",
                        backgroundColor: "#2866bc",
                        height: "44px",
                        lineHeight: "40px",
                        padding: "0px 15px",
                        fontSize: "15px",
                        cursor: "pointer",
                      }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i
                        className="fa-solid fa-bars me-lg-2"
                        style={{ fontSize: "14px" }}
                      ></i>{" "}
                      Categories{" "}
                      &nbsp;&nbsp;
                      <i
                        className="fa-solid fa-angle-down "
                      ></i>
                    </a>
                    <ul
                      className="dropdown-menu shadow-lg category_main_dropdownn"
                    >
                      <li className="nav-item dropend ">
                        <NavLink className="nav-link category_main_dropdownn_hover text-decoration-none">
                          <img
                            className="category_main_dropdownn_image"
                            src={require("../../Img/drop.png")}
                            alt=""
                          />
                          <span
                            className="ms-3 "
                          >
                            Enginaring
                            <i className="fa-solid fa-angle-right  enginaring_product_main_dropdownn_icon"></i>
                          </span>
                        </NavLink>

                        <ul
                          className="dropdown-menu enginaring_dropdown"
                        >
                          <div className="row d-flex p-3">
                            <div className="col-lg-6">
                              <div className="ms-lg-2 mb-5">
                                <div
                                  className="mb-2"
                                  style={{
                                    borderBottom: "1px solid #e5e5e5",
                                  }}
                                >
                                  <h2
                                    className="fs-6"
                                  >
                                    TV & Visual
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      LCD TV{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item"
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      LED TV{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item"
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Curved TV{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Plasma TV{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Satellite Decoders{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Tv Components{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item"
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Projector{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      VR Headset{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Media Streamers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Spares{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>

                              <div className="ms-lg-2">
                                <div
                                  className=""

                                >
                                  <h2
                                    className="fs-6 pb-2"
                                    style={{
                                      borderBottom: "1px solid #e5e5e5",
                                    }}
                                  >
                                    {" "}
                                    Air Conditioner
                                  </h2>

                                  <li>
                                    <NavLink
                                      className="dropdown-item"
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Air Humidifier{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Air Purifier{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Air Conditioner Components{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Air Conditioner Filter{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Electric Fan{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item"
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Air Cooler{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                </div>
                              </div>

                              <div className="ms-lg-2 mt-5 pt-5">
                                <div
                                  className="ms-lg-2"
                                  style={{
                                    borderBottom: "1px solid #e5e5e5",
                                  }}
                                >
                                  <h2
                                    className="fs-6"
                                    style={{
                                      fontSize: "14px",
                                      color: "#444",
                                    }}
                                  >
                                    Computer
                                  </h2>
                                </div>
                                <li className="">
                                  <NavLink
                                    className=" dropdown-item "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Laptop{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Notebook{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Accessories & Peripherals{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Desktop{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Printers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      WiFi & Networking{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Computer Components{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Monitor{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Storage Devices{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Scanners{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Wiring & Cables{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="ms-lg-2">
                                <div
                                  className="ms-lg-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h2
                                    className="fs-6"
                                  >
                                    Refrigerator
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Single Door Fridge{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Double Door Fridge{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Quad Door Fridge{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Mini Fridge{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Wine Fridge{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Bar Fridge{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Freezers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>

                              <div className="ms-lg-2 mt-4">
                                <div
                                  className="ms-lg-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h2
                                    className="fs-6"
                                    style={{ fontSize: "14px", color: "#444" }}
                                  >
                                    Washing Machine
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Front Loading{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Top Loading{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Washer Dryer Combo{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Dish Washing Machine{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Tumble Dryers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>

                              <div className="ms-lg-2 mt-4">
                                <div
                                  className="ms-lg-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h2 className="fs-6"
                                  >
                                    Audio Systems
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Home Theatre{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Amplifier{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Subwoofer & Woofer{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Midrange Speakers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Tweeters{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Full Range Driver Speakers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Outdoors Speakers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Sound Bar{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Piano & Keyboard{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Music Production Equipment{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>

                              <div className="ms-lg-2 mt-4">
                                <div
                                  className="ms-lg-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h2 className="fs-6"
                                  >
                                    Cameras & Photo
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Digital Cameras{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Lenses & Photo{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Flash & Accessories{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Vintage Filmography{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Camera Drones{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Tripods & Supports{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Lighting & Studio{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Internet Cameras{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Binoculars & Telescopes{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Video Editing Software{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link category_main_dropdownn_hover text-decoration-none">
                          <img
                            className="category_main_dropdownn_image"
                            src={require("../../Img/drop.png")}
                            alt=""
                          />
                          <span
                            className="ms-3"
                          >
                            Fashion & Style
                            <i
                              className="fa-solid fa-angle-right fashion_style_product_main_dropdownn_icon"
                            ></i>
                          </span>
                        </NavLink>

                        <ul
                          className="dropdown-menu shadow-lg fashion_style_dropdown" style={{ top: "-40px" }}
                        >
                          <div className="row mt-2">
                            <div className="col-lg-6">
                              <div className="ms-lg-2 mb-5">
                                <div
                                  className="ms-lg-2 mb-2"
                                  style={{
                                    borderBottom: "1px solid #e5e5e5",
                                  }}
                                >
                                  <h2
                                    className="fs-6"
                                  >
                                    Accessories
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Shavers & Trimmers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Gloves{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Eyewear{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Scarves{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Belts{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Wallets{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Purses{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Headwear{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "

                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Hairclips & Combs{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Ties{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Umbrellas{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Other Staff{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>

                              <div className="ms-lg-2 mt-5 ">
                                <div
                                  className="ms-lg-2"
                                  style={{
                                    borderBottom: "1px solid #e5e5e5",
                                  }}
                                >
                                  <h2
                                    className="fs-6"
                                  >
                                    {" "}
                                    Bags
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Hand Bags{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      School Bags{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      College Bags{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Garment Bags{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Waist Bag{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Suitcases{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Business Bags{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Travel Bags{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Kids Luggage{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "

                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Crossbody Bags{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Shoulder Bags{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>

                              <div className="ms-lg-2 mt-5">
                                <div
                                  className="ms-lg-2"
                                  style={{
                                    borderBottom: "1px solid #e5e5e5",
                                  }}
                                >
                                  <h2
                                    className="fs-6"
                                  >
                                    Cosmetics
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Skin Care{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Hands & Nail Care{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Make Ups{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Hair Care{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Body Cream{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      After Shave{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Hair Removal Cream{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Oral Care{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Sanitizer{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Wigs & Weaves{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Eye Lashes{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Hair Styling Products{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Fragrance Candles{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="ms-lg-2">
                                <div
                                  className="ms-lg-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h2
                                    className="fs-6"
                                  >
                                    Fragrances
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Perfume{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Cologne{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Eau De Parfum{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Eau De Toilette{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Eau De Cologne{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Aerosol Spray{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Essential Oils{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Fragrance Oils{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Scented Candles{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Fragrance Diffuser{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>

                              <div className="ms-lg-2 mt-4">
                                <div
                                  className="ms-lg-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h2
                                    className="fs-6"
                                  >
                                    {" "}
                                    Womens Fashion
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Dresses & Skirts{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Shorts{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Jeans & Pants{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Formal Wear{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Jumpsuits & Playsuits{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      T-Shirts & Vests{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Leggings & Tights{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Sweaters & Jackets{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Blouses & Shirts{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Underwear & Sleepwear{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Leisure & Sportswear{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Sneakers & Boots{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Heels & Sandals{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Flats & Sleepers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>

                              <div className="ms-lg-2 mt-4">
                                <div
                                  className="ms-lg-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h2
                                    className="fs-6"
                                  >
                                    Mens Fashion
                                  </h2>
                                </div>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Jeans & Trousers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Jackets & Coats{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Vests & T-Shirts{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Bermudas & Shorts{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Formal Attire{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Sportswear & Leisure{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Shirts{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Sweaters And Hoodies{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Pajamas & Underwear{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Formal Shoes{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Boots & Sneakers{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    className="dropdown-item text-decoration-none "
                                  >
                                    <h3 className="product_dropdownn_size">
                                      {" "}
                                      Sleepers & Flats{" "}
                                    </h3>
                                  </NavLink>
                                </li>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link category_main_dropdownn_hover text-decoration-none">
                          <img
                            className="category_main_dropdownn_image"
                            src={require("../../Img/drop.png")}
                            alt=""
                          />
                          <span
                            className="ms-3 text-start"
                          >
                            Art & Crafts
                            <i className="fa-solid fa-angle-right art_carft_product_main_dropdownn_icon"></i>
                          </span>
                        </NavLink>
                        <ul
                          className="dropdown-menu shadow-lg art_carf_dropdown"
                        >
                          <div className="row ms-lg-2 d-flex p-2 ">
                            <div>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size"  >
                                    {" "}
                                    Paintings & Drawings{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Sculptures & Molds{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Antiques{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Beading & Decorating
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Crafting
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Knitting & Crochet
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Collectibles
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Art Instruments
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Art Accessories
                                  </h4>
                                </NavLink>
                              </li>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link category_main_dropdownn_hover text-decoration-none">
                          <img
                            className="category_main_dropdownn_image"
                            src={require("../../Img/drop.png")}
                            alt=""
                          />
                          <span
                            className="ms-3 text-start"
                          >
                            Cell Phones & Tablets
                            <i className="fa-solid fa-angle-right cell_phones_product_main_dropdownn_icon"></i>
                          </span>
                        </NavLink>

                        <ul
                          className="dropdown-menu shadow-lg call_phones_dropdown"
                        >
                          <div className="row ms-lg-2 d-flex p-2 ">
                            <div>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Smartphones{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Tablets{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Smart Watches{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Mobile Accessories
                                  </h4>
                                </NavLink>
                              </li>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link category_main_dropdownn_hover text-decoration-none">
                          <img
                            className="category_main_dropdownn_image"
                            src={require("../../Img/drop.png")}
                            alt=""
                          />
                          <span
                            className="ms-3 text-start"
                          >
                            Gadgets
                            <i className="fa-solid fa-angle-right gadgets_product_main_dropdownn_icon"></i>
                          </span>
                        </NavLink>

                        <ul
                          className="dropdown-menu shadow-lg gadgets_dropdown"
                        >
                          <div className="row ms-lg-2 d-flex p-2 ">
                            <div>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Drones{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Personal Safety{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Secrete Surveillance{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Smart Accessories
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Wearables
                                  </h4>
                                </NavLink>
                              </li>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link">
                          <img
                            className="category_main_dropdownn_image"
                            src={require("../../Img/drop.png")}
                            alt=""
                          />
                          <span
                            className="ms-3 text-start"
                          >
                            <Link className="text-decoration-none text-dark" to={"/category"}>Jewelry & Watches</Link>
                            <i
                              className="fa-solid fa-angle-right jewelry_product_main_dropdownn_icon"
                            ></i>
                          </span>
                        </NavLink>

                        <ul
                          className="dropdown-menu shadow-lg Jewelry_dropdown"
                          style={{ top: "-223px" }}
                        >
                          <div className="row ms-lg-2 d-flex p-2 mt-lg-4">
                            <div className="col-lg-6">
                              <div>
                                <div className="ms-lg-2 mb-5">
                                  <div
                                    className="ms-lg-2 mb-2"
                                    style={{
                                      borderBottom: "1px solid #e5e5e5",
                                    }}
                                  >
                                    <h2
                                      className="fs-6"
                                    >
                                      Body Jewelry
                                    </h2>
                                  </div>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Wrist Watches{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Necklaces & Pendants{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Bracelets & Bangles{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Rings{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Ear Rings{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Cufflinks{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Anklets{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Bespoke Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div>
                                <div className="ms-lg-2 mb-5">
                                  <div
                                    className="ms-lg-2 mb-2"
                                    style={{
                                      borderBottom: "1px solid #e5e5e5",
                                    }}
                                  >
                                    <h2
                                      className="fs-6"
                                    >
                                      Ethnic & Tribal Jewelry
                                    </h2>
                                  </div>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Neck & Wrist Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Head Gear & Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Head Gear & Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Waist Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Artistic Handwork{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                </div>

                                <div className="ms-lg-2 mt-3">
                                  <div
                                    className="ms-lg-2 mb-2"
                                    style={{
                                      borderBottom: "1px solid #e5e5e5",
                                    }}
                                  >
                                    <h2
                                      className="fs-6"
                                    >
                                      Ethnic & Tribal Jewelry
                                    </h2>
                                  </div>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Neck & Wrist Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Head Gear & Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Head Gear & Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Waist Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Artistic Handwork{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link category_main_dropdownn_hover text-decoration-none">
                          <img
                            className="category_main_dropdownn_image"
                            src={require("../../Img/drop.png")}
                            alt=""
                          />
                          <span
                            className="ms-3 text-start"
                          >
                            Health
                            <i className="fa-solid fa-angle-right health_product_main_dropdownn_icon"></i>
                          </span>
                        </NavLink>

                        <ul
                          className="dropdown-menu shadow-lg health_dropdown"
                          style={{ top: "-101px" }}
                        >
                          <div className="row ms-lg-2 d-flex p-2 ">
                            <div>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Dietary Supplements{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Natural Herbs{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Vitamin Supplements{" "}
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Energy Tonics
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Patent Medicine
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Antibacterial & Antiseptic
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Sexual Health
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Sports Nutrition
                                  </h4>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="dropdown-item text-decoration-none mb-2"
                                  style={{ borderBottom: "1px solid #e5e5e5" }}
                                >
                                  <h4 className="dropdownn_common_product_size">
                                    {" "}
                                    Pain Killers
                                  </h4>
                                </NavLink>
                              </li>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link category_main_dropdownn_hover text-decoration-none">
                          <img
                            className="category_main_dropdownn_image"
                            src={require("../../Img/drop.png")}
                            alt=""
                          />
                          <span
                            className="ms-3 text-start"
                          >
                            Sports & Training
                            <i
                              className="fa-solid fa-angle-right sports_product_main_dropdownn_icon"
                            ></i>
                          </span>
                        </NavLink>

                        <ul
                          className="dropdown-menu shadow-lg sports_training_dropdown"
                          style={{ top: "-304px" }}
                        >
                          <div className="row ms-lg-2 d-flex p-2 mt-lg-4">
                            <div className="col-lg-6">
                              <div>
                                <div className="ms-lg-2 mb-5">
                                  <div
                                    className="ms-lg-2 mb-2"
                                    style={{
                                      borderBottom: "1px solid #e5e5e5",
                                    }}
                                  >
                                    <h2
                                      className="fs-6"
                                    >
                                      Sports & Leisure Items
                                    </h2>
                                  </div>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Golf{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Cycling{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Soccer And Rugby{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Netball And Tennis{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        MMA & Contact Sport{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Skating And Skateboards{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Yoga Equipment{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Fishing Equipment{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Cricket And Hockey{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Indoor Sports{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Other Sports{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div>
                                <div className="ms-lg-2 mb-5">
                                  <div
                                    className="ms-lg-2 mb-2"
                                    style={{
                                      borderBottom: "1px solid #e5e5e5",
                                    }}
                                  >
                                    <h2
                                      className="fs-6"
                                    >
                                      Ethnic & Tribal Jewelry
                                    </h2>
                                  </div>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Exercising Equipment{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Treadmill And Bikes{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Dumbells{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Home Gyms{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Benches{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Barbells And Attachments{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Sports Nutrition{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Hand Grippers{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Gym Belts{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Multi Purpose Training Machine{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Electronic Training Tools{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Gym Accessories{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Weights{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Other Training Equipment{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                </div>

                                <div className="ms-lg-2 mt-3">
                                  <div
                                    className="ms-lg-2 mb-2"
                                    style={{
                                      borderBottom: "1px solid #e5e5e5",
                                    }}
                                  >
                                    <h2
                                      className="fs-6"
                                    >
                                      Ethnic & Tribal Jewelry
                                    </h2>
                                  </div>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Neck & Wrist Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Head Gear & Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Head Gear & Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Waist Jewelry{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                    >
                                      <h3 className="product_dropdownn_size">
                                        {" "}
                                        Artistic Handwork{" "}
                                      </h3>
                                    </NavLink>
                                  </li>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </li>

                    </ul>
                  </li>



                  <li className="nav-item dropdown ps-lg-3">
                    <a
                      className="nav-link dropdown-toggle "
                      style={{ color: "#fefe02" }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Electronics
                    </a>
                    <ul
                      className="dropdown-menu category_main_dropdownn_hover shadow-lg"
                      style={{
                        border: "1px solid #fff",
                        backgroundColor: "#fff",
                      }}
                    >
                      <li>
                        <NavLink className="dropdown-item">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; LCD TV
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; LED TV
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; Curved TV
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; Plasma TV
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; Satellite Decoders
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: "#fefe02" }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Fashion & Style
                    </a>
                    <ul
                      className="dropdown-menu category_main_dropdownn_hover shadow-lg"
                      style={{
                        border: "1px solid #fff",
                        backgroundColor: "#fff",
                      }}
                    >
                      <li>
                        <NavLink className="dropdown-item">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; Shavers & Trimmers
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; Hairclips & Combs
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; Hair Styling Products
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; Wallets
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; Headwear
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; Hair Removal Cream
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: "#fefe02" }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Art & Crafts
                    </a>

                    <ul
                      className="dropdown-menu category_main_dropdownn_hover shadow-lg"
                      style={{
                        border: "1px solid #fff",
                        backgroundColor: "#fff",
                      }}
                    >
                      <li>
                        <NavLink className="dropdown-item">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Paintings & Drawings
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{" "}
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sculptures & Molds
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Antiques
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Beading & Decorating
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Crafting
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Knitting & Crochet
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Art Instruments
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Art Accessories
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cell Phones & Tablets
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sports & Training
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                          <Link to={"/category"}>Jewelry & Watches</Link>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: "#fefe02" }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cell Phones & Tablets
                    </a>
                    <ul
                      className="dropdown-menu category_main_dropdownn_hover shadow-lg"
                      style={{
                        border: "1px solid #fff",
                        backgroundColor: "#fff",
                      }}
                    >
                      <li>
                        <NavLink className="dropdown-item">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Smartphones
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tablets
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Smart Watches
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mobile Accessories
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: "#fefe02" }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Gadgets
                    </a>
                    <ul
                      className="dropdown-menu category_main_dropdownn_hover shadow-lg"
                      style={{
                        border: "1px solid #fff",
                        backgroundColor: "#fff",
                      }}
                    >
                      <li>
                        <NavLink className="dropdown-item">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Drones
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Personal Safety
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Secrete Surveillance
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Smart Accessories
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: "#fefe02" }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Link to={"/category"} className="navmenu">
                        Jewelry & Watches
                      </Link>
                    </a>
                    <ul
                      className="dropdown-menu category_main_dropdownn_hover shadow-lg"
                      style={{
                        border: "1px solid #fff",
                        backgroundColor: "#fff",
                      }}
                    >
                      <li>
                        <NavLink className="dropdown-item">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Neck & Wrist Jewelry
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Head Gear & Jewelry
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Necklaces & Pendants
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Other Accessories
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: "#fefe02" }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Health
                    </a>
                    <ul
                      className="dropdown-menu category_main_dropdownn_hover shadow-lg"
                      style={{
                        border: "1px solid #fff",
                        backgroundColor: "#fff",
                      }}
                    >
                      <li>
                        <NavLink className="dropdown-item">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dietary Supplements
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Natural Herbs
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vitamin Supplements
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Energy Tonics
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Patent Medicine
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Antibacterial &
                          Antiseptic &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sexual Health
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sports Nutrition
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pain Killers
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Eyes & Vision
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: "#fefe02" }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sports & Training
                    </a>
                    <ul
                      className="dropdown-menu category_main_dropdownn_hover shadow-lg"
                      style={{
                        border: "1px solid #fff",
                        backgroundColor: "#fff",
                      }}
                    >
                      <li>
                        <NavLink className="dropdown-item">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Skating And Skateboards
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fishing Equipment
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Multi Purpose Training
                          Machine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gym Accessories
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
export default Header;
