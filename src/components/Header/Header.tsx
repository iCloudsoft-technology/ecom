import React from "react";
import { NavLink, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";
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
        <div className="container-fluid p-0 "  >
          <nav className="navbar navbar-expand-lg navbar-dark w-100" style={{ backgroundColor: "#558ed5", padding: ".655rem", height: "44px" }}>
            <div className="container-fluid w-100">

              <button className="navbar-toggler p-0" style={{ fontSize: "14px" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{ fontSize: "14px" }}></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav FONT d-flex justify-content-start ">
                  <li className="nav-item dropdown ">
                    <a className="nav-link " style={{ color: "#fff", backgroundColor: "#2866bc", height: "44px", lineHeight: "40px", padding: "0px 15px", fontSize: "15px", cursor: "pointer" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa-solid fa-bars me-lg-2" style={{ fontSize: "14px" }} ></i> Categories <i className="fa-solid fa-angle-down " style={{ fontSize: "14px" }}></i>
                    </a>
                    <ul className="dropdown-menu  FONT" style={{ border: "1px solid #fff", width: "250px", backgroundColor: "#fff" }} >
                      <li className="nav-item dropend ">
                        <NavLink className="nav-link HEADERhoVER  text-decoration-none" >
                          <img className='' style={{ height: "15px" }} src={require("../../Img/drop.png")} alt="" />
                          <span className='ms-3 ' style={{ fontSize: "15px", lineHeight: "20px" }} >
                            Enginaring &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-solid fa-angle-right" ></i>
                          </span>
                        </NavLink>

                        <ul className="dropdown-menu " style={{ border: "1px solid #fff", backgroundColor: "white", width: "570px", height: "670px", overflow: "auto" }} >
                          <div className="row ms-lg-2 d-flex p-2 mt-lg-4">
                            <div className="col-lg-6">
                              <div>
                                <div className="ms-lg-2 mb-5">
                                  <div className="ms-lg-2 mb-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >TV & Visual</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > LCD TV </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > LED TV </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Curved TV </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Plasma TV  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Satellite Decoders </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Tv Components </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Projector </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > VR Headset </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Media Streamers </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Spares </NavLink></li>
                                </div>

                                <div className="ms-lg-2 mt-5 mb-5">
                                  <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} > Air Conditioner</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Air Humidifier </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Air Purifier </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Air Conditioner Components </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Air Conditioner Filter  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Electric Fan </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Air Cooler </NavLink></li>
                                </div>

                                <div className="ms-lg-2 mt-5 pt-5">
                                  <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Computer</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Laptop </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Notebook </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Accessories & Peripherals </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Desktop  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Printers </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > WiFi & Networking </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Computer Components </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Monitor </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Storage Devices </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Scanners </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Wiring & Cables </NavLink></li>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="ms-lg-2">
                                <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                  <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Refrigerator</h2>
                                </div>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Single Door Fridge </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Double Door Fridge </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Quad Door Fridge </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Mini Fridge  </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Wine Fridge </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Bar Fridge </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Freezers </NavLink></li>
                              </div>

                              <div className="ms-lg-2 mt-4">
                                <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                  <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Washing Machine</h2>
                                </div>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Front Loading </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Top Loading </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Washer Dryer Combo </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Dish Washing Machine  </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Tumble Dryers </NavLink></li>
                              </div>

                              <div className="ms-lg-2 mt-4">
                                <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                  <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Audio Systems</h2>
                                </div>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Home Theatre </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Amplifier </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Subwoofer & Woofer </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Midrange Speakers  </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Tweeters </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Full Range Driver Speakers </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Outdoors Speakers </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Sound Bar </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Piano & Keyboard </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Music Production Equipment </NavLink></li>
                              </div>

                              <div className="ms-lg-2 mt-4">
                                <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                  <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Cameras & Photo</h2>
                                </div>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Digital Cameras </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Lenses & Photo </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Flash & Accessories </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Vintage Filmography  </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Camera Drones </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Tripods & Supports </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Lighting & Studio </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Internet Cameras </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Binoculars & Telescopes </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Video Editing Software </NavLink></li>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link HEADERhoVER text-decoration-none"  >
                          <img className='' style={{ height: "15px" }} src={require("../../Img/drop.png")} alt="" />
                          <span className='ms-3' style={{ fontSize: "15px", lineHeight: "20px" }} >
                            Fashion & Style  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-solid fa-angle-right " style={{ fontSize: "14px" }}></i>
                          </span>
                        </NavLink>

                        <ul className="dropdown-menu shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "white", width: "570px", height: "670px", overflow: "auto",top:"-41px" }} >
                          <div className="row ms-lg-2 d-flex p-2 mt-lg-4">
                            <div className="col-lg-6">
                              <div>
                                <div className="ms-lg-2 mb-5">
                                  <div className="ms-lg-2 mb-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Accessories</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Shavers & Trimmers </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Gloves </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Eyewear </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Scarves  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Belts </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Wallets </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Purses </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Headwear </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Hairclips & Combs </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Ties </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Umbrellas </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Other Staff </NavLink></li>
                                </div>

                                <div className="ms-lg-2 mt-5 ">
                                  <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} > Bags</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Hand Bags </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > School Bags </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > College Bags </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Garment Bags  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Waist Bag </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Suitcases </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Business Bags </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Travel Bags </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Kids Luggage </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Crossbody Bags </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Shoulder Bags </NavLink></li>
                                </div>

                                <div className="ms-lg-2 mt-5">
                                  <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Cosmetics</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Skin Care </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Hands & Nail Care </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Make Ups </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Hair Care  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Body Cream </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > After Shave </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Hair Removal Cream </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Oral Care </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Sanitizer </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Wigs & Weaves </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Eye Lashes </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Hair Styling Products </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Fragrance Candles </NavLink></li>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="ms-lg-2">
                                <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                  <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Fragrances</h2>
                                </div>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Perfume </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Cologne </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Eau De Parfum </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Eau De Toilette  </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Eau De Cologne </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Aerosol Spray </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Essential Oils </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Fragrance Oils </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Scented Candles </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Fragrance Diffuser </NavLink></li>
                              </div>

                              <div className="ms-lg-2 mt-4">
                                <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                  <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} > Womens Fashion</h2>
                                </div>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Dresses & Skirts </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Shorts </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Jeans & Pants </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Formal Wear  </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Jumpsuits & Playsuits </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > T-Shirts & Vests </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Leggings & Tights </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Sweaters & Jackets </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Blouses & Shirts </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Underwear & Sleepwear </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Leisure & Sportswear </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Sneakers & Boots </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Heels & Sandals </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Flats & Sleepers </NavLink></li>
                              </div>

                              <div className="ms-lg-2 mt-4">
                                <div className="ms-lg-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                  <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Mens Fashion</h2>
                                </div>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Jeans & Trousers </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Jackets & Coats </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Vests & T-Shirts </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Bermudas & Shorts  </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Formal Attire </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Sportswear & Leisure </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Shirts </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Sweaters And Hoodies </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Pajamas & Underwear </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Formal Shoes </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Boots & Sneakers </NavLink></li>
                                <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Sleepers & Flats </NavLink></li>
                              </div>

                            </div>
                          </div>
                        </ul>
                      </li>


                      <li className="nav-item dropend">
                        <NavLink className="nav-link HEADERhoVER text-decoration-none"  >
                          <img className='' style={{ height: "15px" }} src={require("../../Img/drop.png")} alt="" />
                          <span className='ms-3 text-start' style={{ fontSize: "15px", lineHeight: "20px" }} >
                            Art & Crafts &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-solid fa-angle-right" style={{ fontSize: "14px" }}></i>
                          </span>
                        </NavLink>
                        <ul className="dropdown-menu shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "white", width: "280px", overflow: "auto" }}  >
                          <div className="row ms-lg-2 d-flex p-2 ">
                            <div>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Paintings & Drawings </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Sculptures & Molds </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} >  Antiques </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Beading & Decorating</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Crafting</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Knitting & Crochet</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Collectibles</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Art Instruments</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Art Accessories</NavLink></li>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link HEADERhoVER text-decoration-none"  >
                          <img className='' style={{ height: "15px" }} src={require("../../Img/drop.png")} alt="" />
                          <span className='ms-3 text-start' style={{ fontSize: "15px", lineHeight: "20px" }} >
                            Cell Phones & Tablets  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-solid fa-angle-right" style={{ fontSize: "14px" }}></i>
                          </span>
                        </NavLink>

                        <ul className="dropdown-menu shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "white", width: "280px", overflow: "auto" }}  >
                          <div className="row ms-lg-2 d-flex p-2 ">
                            <div>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Smartphones </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Tablets </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Smart Watches </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Mobile Accessories</NavLink></li>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link HEADERhoVER text-decoration-none"  >
                          <img className='' style={{ height: "15px" }} src={require("../../Img/drop.png")} alt="" />
                          <span className='ms-3 text-start' style={{ fontSize: "15px", lineHeight: "20px" }} >
                            Gadgets &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <i className="fa-solid fa-angle-right " style={{ fontSize: "14px" }}></i>
                          </span>
                        </NavLink>

                        <ul className="dropdown-menu shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "white", width: "280px", overflow: "auto" }}  >
                          <div className="row ms-lg-2 d-flex p-2 ">
                            <div>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Drones </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Personal Safety </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Secrete Surveillance </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Smart Accessories</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Wearables</NavLink></li>
                            </div>
                          </div>
                        </ul>
                      </li>


                      <li className="nav-item dropend">
                        <NavLink className="nav-link  HEADERhoVER text-decoration-none   align-items-center"  >
                          <img className='' style={{ height: "15px" }} src={require("../../Img/drop.png")} alt="" />
                          <span className='ms-3 text-start ' style={{ fontSize: "16px", }} >
                            Jewelry & Watches &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-solid fa-angle-right " style={{ fontSize: "14px" }}></i>
                          </span>
                        </NavLink>

                        <ul className="dropdown-menu " style={{ border: "1px solid #fff", backgroundColor: "white", width: "570px", height: "370px", overflow: "auto", top: "-201px" }} >
                          <div className="row ms-lg-2 d-flex p-2 mt-lg-4">
                            <div className="col-lg-6">
                              <div>
                                <div className="ms-lg-2 mb-5">
                                  <div className="ms-lg-2 mb-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Body Jewelry</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Wrist Watches </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Necklaces & Pendants </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Bracelets & Bangles </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Rings  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Ear Rings </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Cufflinks </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Anklets </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Bespoke Jewelry </NavLink></li>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div>
                                <div className="ms-lg-2 mb-5">
                                  <div className="ms-lg-2 mb-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Ethnic & Tribal Jewelry</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Neck & Wrist Jewelry </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Head Gear & Jewelry </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Head Gear & Jewelry </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Waist Jewelry  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Artistic Handwork </NavLink></li>
                                </div>

                                <div className="ms-lg-2 mt-3">
                                  <div className="ms-lg-2 mb-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Ethnic & Tribal Jewelry</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Neck & Wrist Jewelry </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Head Gear & Jewelry </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Head Gear & Jewelry </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Waist Jewelry  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Artistic Handwork </NavLink></li>
                                </div>
                              </div>

                            </div>
                          </div>
                        </ul>
                      </li>


                      <li className="nav-item dropend">
                        <NavLink className="nav-link HEADERhoVER text-decoration-none"  >
                          <img className='' style={{ height: "15px" }} src={require("../../Img/drop.png")} alt="" />
                          <span className='ms-3 text-start' style={{ fontSize: "15px", lineHeight: "20px" }} >
                            Health &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-solid fa-angle-right" style={{ fontSize: "14px" }}></i>
                          </span>
                        </NavLink>

                        <ul className="dropdown-menu shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "white", width: "280px", height: "390px", overflow: "auto" }}  >
                          <div className="row ms-lg-2 d-flex p-2 ">
                            <div>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Dietary Supplements </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Natural Herbs </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Vitamin Supplements </NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Energy Tonics</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Patent Medicine</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Antibacterial & Antiseptic</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Sexual Health</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Sports Nutrition</NavLink></li>
                              <li><NavLink className="dropdown-item text-decoration-none mb-2" style={{ fontSize: "18px", color: "#646464", lineHeight: "25px", borderBottom: "1px solid #e5e5e5" }} > Pain Killers</NavLink></li>
                            </div>
                          </div>
                        </ul>
                      </li>

                      <li className="nav-item dropend">
                        <NavLink className="nav-link HEADERhoVER text-decoration-none"  >
                          <img className='' style={{ height: "15px" }} src={require("../../Img/drop.png")} alt="" />
                          <span className='ms-3 text-start' style={{ fontSize: "15px", lineHeight: "20px" }} >
                            Sports & Training &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-solid fa-angle-right" style={{ fontSize: "14px" }}></i>
                          </span>
                        </NavLink>

                        <ul className="dropdown-menu " style={{ border: "1px solid #fff", backgroundColor: "white", width: "570px", height: "370px", overflow: "auto", top: "-281px" }} >
                          <div className="row ms-lg-2 d-flex p-2 mt-lg-4">
                            <div className="col-lg-6">
                              <div>
                                <div className="ms-lg-2 mb-5">
                                  <div className="ms-lg-2 mb-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Sports & Leisure Items</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Golf </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Cycling </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Soccer And Rugby </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Netball And Tennis  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > MMA & Contact Sport </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Skating And Skateboards </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Yoga Equipment </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Fishing Equipment </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Cricket And Hockey </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Indoor Sports </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Other Sports </NavLink></li>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div>
                                <div className="ms-lg-2 mb-5">
                                  <div className="ms-lg-2 mb-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Ethnic & Tribal Jewelry</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Exercising Equipment </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Treadmill And Bikes </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Dumbells </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Home Gyms  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Benches </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Barbells And Attachments </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Sports Nutrition </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Hand Grippers </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Gym Belts  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Multi Purpose Training Machine </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Electronic Training Tools </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Gym Accessories </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Weights </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Other Training Equipment </NavLink></li>
                                </div>

                                <div className="ms-lg-2 mt-3">
                                  <div className="ms-lg-2 mb-2" style={{ borderBottom: "1px solid #e5e5e5" }} >
                                    <h2 className="fs-6" style={{ fontSize: "14px", color: "#444" }} >Ethnic & Tribal Jewelry</h2>
                                  </div>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Neck & Wrist Jewelry </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Head Gear & Jewelry </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Head Gear & Jewelry </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Waist Jewelry  </NavLink></li>
                                  <li><NavLink className="dropdown-item text-decoration-none " style={{ fontSize: "14px", color: "#646464", lineHeight: "15px" }} > Artistic Handwork </NavLink></li>
                                </div>
                              </div>

                            </div>
                          </div>
                        </ul>

                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a className="nav-link dropdown-toggle " style={{ color: "#fefe02" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Electronics
                    </a>
                    <ul className="dropdown-menu HEADERhoVER shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "#fff" }} >
                      <li><NavLink className="dropdown-item" > &nbsp;&nbsp;&nbsp;&nbsp; LCD TV &nbsp;&nbsp;&nbsp;&nbsp; </NavLink></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; LED TV &nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Curved TV &nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Plasma TV &nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Satellite Decoders &nbsp;&nbsp;&nbsp;&nbsp; </a></li>

                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a className="nav-link dropdown-toggle" style={{ color: "#fefe02" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Fashion & Style
                    </a>
                    <ul className="dropdown-menu HEADERhoVER shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "#fff" }} >
                      <li><NavLink className="dropdown-item" > &nbsp;&nbsp;&nbsp;&nbsp; Shavers & Trimmers &nbsp;&nbsp;&nbsp;&nbsp; </NavLink></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Hairclips & Combs &nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Hair Styling Products &nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Wallets &nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Headwear &nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Hair Removal Cream &nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a className="nav-link dropdown-toggle" style={{ color: "#fefe02" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Art & Crafts
                    </a>

                    <ul className="dropdown-menu HEADERhoVER shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "#fff" }} >
                      <li><NavLink className="dropdown-item" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Paintings & Drawings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </NavLink></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Sculptures & Molds &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Antiques &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Beading & Decorating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Crafting &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Knitting & Crochet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Art Instruments &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Art Accessories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Cell Phones & Tablets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Sports & Training &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Jewelry & Watches &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</a></li>

                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a className="nav-link dropdown-toggle" style={{ color: "#fefe02" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Cell Phones & Tablets
                    </a>
                    <ul className="dropdown-menu HEADERhoVER shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "#fff" }} >
                      <li><NavLink className="dropdown-item" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Smartphones &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </NavLink></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Tablets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Smart Watches &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Mobile Accessories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a className="nav-link dropdown-toggle" style={{ color: "#fefe02" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Gadgets
                    </a>
                    <ul className="dropdown-menu HEADERhoVER shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "#fff" }} >
                      <li><NavLink className="dropdown-item" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Drones &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </NavLink></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Personal Safety &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Secrete Surveillance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Smart Accessories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a className="nav-link dropdown-toggle" style={{ color: "#fefe02" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Jewelry & Watches
                    </a>
                    <ul className="dropdown-menu HEADERhoVER shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "#fff" }} >
                      <li><NavLink className="dropdown-item" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Neck & Wrist Jewelry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </NavLink></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Head Gear & Jewelry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Necklaces & Pendants &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Other Accessories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown ps-lg-3">
                    <a className="nav-link dropdown-toggle" style={{ color: "#fefe02" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Health
                    </a>
                    <ul className="dropdown-menu HEADERhoVER shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "#fff" }} >
                      <li><NavLink className="dropdown-item"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Dietary Supplements &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </NavLink></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Natural Herbs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Vitamin Supplements &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Energy Tonics &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Patent Medicine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Antibacterial & Antiseptic &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Sexual Health &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Sports Nutrition &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Pain Killers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Eyes & Vision &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>

                    </ul>
                  </li>


                  <li className="nav-item dropdown ps-lg-3">
                    <a className="nav-link dropdown-toggle" style={{ color: "#fefe02" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sports & Training
                    </a>
                    <ul className="dropdown-menu HEADERhoVER shadow-lg" style={{ border: "1px solid #fff", backgroundColor: "#fff" }} >
                      <li><NavLink className="dropdown-item" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Skating And Skateboards &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </NavLink></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fishing Equipment &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Multi Purpose Training Machine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                      <li><a className="dropdown-item" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gym Accessories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></li>
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
