import React from "react";
import { NavLink, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import categories from "./categoriesData";
import "./Header.css";
const Header = () => {
  return (
    <>
      <section>
        <div className="container-fluid p-0 category-navbar">
          <nav className="navbar navbar-expand-lg navbar-dark w-100 p-0">
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
                  <li className="nav-item dropdown navbar-title">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i
                        className="fa-solid fa-bars me-lg-2"
                        style={{ fontSize: "14px" }}
                      ></i>
                      <span>Categories</span>
                      <i className="fa-solid fa-angle-down title-icon"></i>
                    </a>
                    <ul className="dropdown-menu">
                      {categories.map((item) => (
                        <li className="category-nav-list dropend d-flex pb-3">
                          <Link className="category-nav-item" to={item.url}>
                            <span>
                              <img
                                src={item.img}
                                alt={item.name}
                                width="20"
                                height="20"
                                className="mr-2"
                              />
                            </span>
                            <span> {item.name}</span>
                          </Link>
                          <i className="fa-solid fa-angle-right title-icon"></i>

                          <ul
                            className="dropdown-menu "
                            style={{
                              border: "1px solid #fff",
                              backgroundColor: "white",
                              width: "570px",
                              height: "670px",
                              overflow: "auto",
                            }}
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
                                        style={{
                                          fontSize: "14px",
                                          color: "#444",
                                        }}
                                      >
                                        TV & Visual
                                      </h2>
                                    </div>
                                    <li>
                                      <NavLink className="dropdown-item text-decoration-none">
                                        LCD TV
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        LED TV{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Curved TV{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Plasma TV{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Satellite Decoders{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Tv Components{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Projector{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        VR Headset{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Media Streamers{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Spares{" "}
                                      </NavLink>
                                    </li>
                                  </div>

                                  <div className="ms-lg-2 mt-5 mb-5">
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
                                        {" "}
                                        Air Conditioner
                                      </h2>
                                    </div>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Air Humidifier{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Air Purifier{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Air Conditioner Components{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Air Conditioner Filter{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Electric Fan{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Air Cooler{" "}
                                      </NavLink>
                                    </li>
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
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Laptop{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Notebook{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Accessories & Peripherals{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Desktop{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Printers{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        WiFi & Networking{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Computer Components{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Monitor{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Storage Devices{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Scanners{" "}
                                      </NavLink>
                                    </li>
                                    <li>
                                      <NavLink
                                        className="dropdown-item text-decoration-none "
                                        style={{
                                          fontSize: "14px",
                                          color: "#646464",
                                          lineHeight: "15px",
                                        }}
                                      >
                                        {" "}
                                        Wiring & Cables{" "}
                                      </NavLink>
                                    </li>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="ms-lg-2">
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
                                      Refrigerator
                                    </h2>
                                  </div>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Single Door Fridge{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Double Door Fridge{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Quad Door Fridge{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Mini Fridge{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Wine Fridge{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Bar Fridge{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Freezers{" "}
                                    </NavLink>
                                  </li>
                                </div>

                                <div className="ms-lg-2 mt-4">
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
                                      Washing Machine
                                    </h2>
                                  </div>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Front Loading{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Top Loading{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Washer Dryer Combo{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Dish Washing Machine{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Tumble Dryers{" "}
                                    </NavLink>
                                  </li>
                                </div>

                                <div className="ms-lg-2 mt-4">
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
                                      Audio Systems
                                    </h2>
                                  </div>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Home Theatre{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Amplifier{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Subwoofer & Woofer{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Midrange Speakers{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Tweeters{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Full Range Driver Speakers{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Outdoors Speakers{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Sound Bar{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Piano & Keyboard{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Music Production Equipment{" "}
                                    </NavLink>
                                  </li>
                                </div>

                                <div className="ms-lg-2 mt-4">
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
                                      Cameras & Photo
                                    </h2>
                                  </div>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Digital Cameras{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Lenses & Photo{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Flash & Accessories{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Vintage Filmography{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Camera Drones{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Tripods & Supports{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Lighting & Studio{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Internet Cameras{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Binoculars & Telescopes{" "}
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="dropdown-item text-decoration-none "
                                      style={{
                                        fontSize: "14px",
                                        color: "#646464",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      {" "}
                                      Video Editing Software{" "}
                                    </NavLink>
                                  </li>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </li>
                      ))}
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
                      className="dropdown-menu HEADERhoVER shadow-lg"
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
                      className="dropdown-menu HEADERhoVER shadow-lg"
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
                      className="dropdown-menu HEADERhoVER shadow-lg"
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
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jewelry & Watches
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
                      className="dropdown-menu HEADERhoVER shadow-lg"
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
                      className="dropdown-menu HEADERhoVER shadow-lg"
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
                      className="dropdown-menu HEADERhoVER shadow-lg"
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
                      className="dropdown-menu HEADERhoVER shadow-lg"
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
                      className="dropdown-menu HEADERhoVER shadow-lg"
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
