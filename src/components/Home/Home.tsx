import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./Home.css";

function Home() {
  return (
    <>
      <section>
        <div
          className="container-fluid position-relative"
          style={{
            backgroundImage: `url(${require("../../Img/HomeBG.png")})`,
            backgroundAttachment: "local",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center ",
            height: "47vh",
          }}
        >
          <div className="position-absolute top-50 start-50 translate-middle text-center ROBOTOfontFamily">
            <h2
              className="text-white mb-3"
              style={{ fontSize: "40px", fontWeight: "600" }}
            >
              {" "}
              For Shoppers, Sellers and Good Causes{" "}
            </h2>
            <h2 className="text-white mt-2 mb-2" style={{ fontSize: "25px" }}>
              {" "}
              Ecommerce & Causes Platform{" "}
            </h2>
            <p className="text-white FONT " style={{ fontSize: "15px" }}>
              {" "}
              See how it works{" "}
            </p>
            <div className="mt-4">
              <button
                className="p-1 ButtonHOVER me-lg-4 FONT"
                style={{
                  height: "37px",
                  borderRadius: "5px 5px 5px 5px",
                  fontSize: "14px",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                <b className="p-3" style={{ fontWeight: "600" }}>
                  {" "}
                  Start Shopping{" "}
                  <i className="fa-solid fa-angle-right ms-lg-2"></i>{" "}
                </b>{" "}
              </button>
              <button
                className="p-1 ButtonHOVER ms-lg-4 FONT"
                style={{
                  height: "37px",
                  borderRadius: "5px 5px 5px 5px",
                  fontSize: "14px",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                <b className="p-3" style={{ fontWeight: "600" }}>
                  {" "}
                  Start Business{" "}
                  <i className="fa-solid fa-angle-right ms-lg-2"></i>{" "}
                </b>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid mt-5">
          <div
            className="text-start mb-4"
            style={{ borderBottom: "2px solid rgba(0, 0, 0, 0.10)" }}
          >
            <h1
              className="FONT ms-lg-5 mb-3"
              style={{
                fontSize: "32px",
                lineHeight: "34px",
                color: "#2866bc",
                fontWeight: "800",
              }}
            >
              {" "}
              How It Works{" "}
            </h1>
          </div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators ">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner FONT">
              <div
                className="carousel-item active position-relative"
                style={{
                  backgroundImage: `url(${require("../../Img/paypal.png")})`,
                  backgroundAttachment: "local",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center ",
                  height: "60vh",
                }}
              >
                <div
                  className="carousel-caption p-3 w-75 text-center d-none d-md-block position-absolute top-50  translate-middle"
                  style={{ left: "50%" }}
                >
                  <h5
                    className="mb-lg-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    style={{ fontSize: "50px" }}
                  >
                    Flexible & Secure Transacting Efficiencies
                  </h5>
                  <p
                    className="mt-4"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    style={{
                      fontSize: "20px",
                      fontWeight: "200",
                      lineHeight: "30px",
                    }}
                  >
                    C-Angelx enables Patrons (customers, supporters, etc) to
                    create individual C-Angelx accounts & then follow any listed
                    Merchants & NPOs of their choice on this platform’ for
                    viewing & purchasing their products online instantly, or via
                    Pre-Order, lay-buy order, etc. Patrons can also follow &
                    donate to any of the listed NPOs. Securely!
                  </p>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url(${require("../../Img/dhl.png")})`,
                  backgroundAttachment: "local",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center ",
                  height: "60vh",
                }}
              >
                <div
                  className="carousel-caption p-3 w-75 text-center d-none d-md-block position-absolute top-50  translate-middle"
                  style={{ left: "50%" }}
                >
                  <h5
                    className="mb-lg-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    style={{ fontSize: "50px" }}
                  >
                    World Class Courier Services
                  </h5>
                  <p
                    className="mt-4"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    style={{
                      fontSize: "20px",
                      fontWeight: "200",
                      lineHeight: "30px",
                    }}
                  >
                    DHL Courier services will efficiently collect sold item/s
                    directly from the merchant’s address & then deliver directly
                    to the customer’s door-step, securely & safely. No need for
                    the merchant to first transport sold items to C-Angelx’s
                    warehouses before they are delivered to the customer
                  </p>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url(${require("../../Img/asset.png")})`,
                  backgroundAttachment: "local",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center ",
                  height: "60vh",
                }}
              >
                <div
                  className="carousel-caption p-3 w-75 text-center d-none d-md-block position-absolute top-50  translate-middle"
                  style={{ left: "50%" }}
                >
                  <h5
                    className="mb-lg-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    style={{ fontSize: "50px" }}
                  >
                    Selling or fundraising on C-Angelx
                  </h5>
                  <p
                    className="mt-4"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    style={{
                      fontSize: "20px",
                      fontWeight: "200",
                      lineHeight: "30px",
                    }}
                  >
                    {" "}
                    Create an online Cause or Merchant account with no fixed
                    monthly fees & no Trial periods – but a 3% commission on
                    each item sold on the platform (excl. third-party
                    credit-card processing fees of 3 to 4%) – which when
                    combined is still lower than the 10 – 15% charged by other
                    market-place platforms (please do take this into account
                    when pricing your listed items therefore). We do not take
                    any commission on donations to causes. Lastly, add your
                    employees too as ‘Sales Staff’ to upload inventory & process
                    sales/donations’ while you manage the business.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="section_top position-relative d-flex justify-content-space-between align-items-center">
                <h2
                  className="section_title FONT mb-2"
                  style={{
                    fontSize: "28px",
                    lineHeight: "34px",
                    fontWeight: "700",
                    color: "#2866bc",
                  }}
                >
                  Tell Us More
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-4 FONT">
            <div className="col-lg-4 col-md-6">
              <div className="solution_card h-100">
                <div className="hover_color_bubble"></div>
                <div className="so_top_icon d-flex align-items-center justify-content-center">
                  <img src={require("../../Img/shop.png")} alt="..."></img>
                </div>
                <div className="solu_title">
                  <h3>Shop,Sell and Support</h3>
                </div>
                <div className="solu_description d-block">
                  <p>
                    C-Angelx enables individual Patrons (customers, supporters,
                    etc) to follow listed merchants &amp; NPOs of their choice
                    on this platform - &amp; shop online, place lay-buys, or
                    donate to any of the listed NPOs they like
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="solution_card h-100">
                <div className="so_top_icon d-flex align-items-center justify-content-center">
                  <img src={require("../../Img/give.png")} alt="..."></img>
                </div>
                <div className="solu_title">
                  <h3>Business Efficiencies</h3>
                </div>
                <div className="solu_description">
                  <p>
                    You are also able to create an online merchant &amp; sell
                    online, or an NPO (cause) account for superior fundraising
                    &amp; receiving donations online safely. Add your staff as
                    subordinates to upload inventory &amp; process sales’ while
                    you manage the business...
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="solution_card h-100">
                <div className="so_top_icon d-flex align-items-center justify-content-center">
                  <img src={require("../../Img/one.png")} alt="..."></img>
                </div>
                <div className="solu_title">
                  <h3>One Stop Solution</h3>
                </div>
                <div className="solu_description">
                  <p>
                    C-Angelx has everything figured out for your merchant: DHL
                    Courier services can collect directly from your shop &amp;
                    deliver directly to your customer’s door, securely &amp;
                    safely. No Hassles!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="solution_card h-100">
                <div className="so_top_icon d-flex align-items-center justify-content-center">
                  <img src={require("../../Img/safe.png")} alt="..."></img>
                </div>
                <div className="solu_title">
                  <h3>Safe and Secured</h3>
                </div>
                <div className="solu_description">
                  <p>
                    C-Angelx is designed with security in mind, &amp; further
                    hosted in highly secure &amp; reliable global servers’ as a
                    Global-Platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="solution_card h-100">
                <div className="so_top_icon d-flex align-items-center justify-content-center">
                  <img src={require("../../Img/quick.png")} alt="..."></img>
                </div>
                <div className="solu_title">
                  <h3>Quick and Easy</h3>
                </div>
                <div className="solu_description">
                  <p>
                    We have partnered with known and trusted 3rd party suppliers
                    in the global ecommerce industry – for secure transactions,
                    and reliable courier services.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="solution_card h-100">
                <div className="so_top_icon d-flex align-items-center justify-content-center">
                  <img src={require("../../Img/how.png")} alt="..."></img>
                </div>
                <div className="solu_title">
                  <h3>So how much</h3>
                </div>
                <div className="solu_description">
                  <p>
                    There are No fixed monthly fees on merchants, but a 3%
                    commission for each sale - plus the separate Payment
                    gateway’s fee of 2,9 – 3,5% (around 7% in total, which is
                    still lower than the 10 – 15% charged by other platforms!).
                    NPOs (causes) are exempt of our fee, except of the payment
                    gateway’s fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid" style={{ backgroundColor: "#2866BC" }} >
          <div className="row  text-white text-lg-start p-lg-4 mt-5 FONT">
            <div className="col-lg-3 col-md-6 pt-4 pb-4 ">
              <div className="row d-flex  align-items-center">
                <div className="col-lg-2 ">
                  <img src={require("../../Img/fastShiping.png")} alt="" />
                </div>

                <div className="col-lg-10 ">
                  <div>
                    <h3 className="" style={{ fontSize: "16px", lineHeight: "16px" }} > FAST SHIPPING</h3>
                    <h3 className="" style={{ fontSize: "16px" }} > Experience fast shipping with DHL</h3>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 pt-4 pb-4">
              <div className="row d-flex  align-items-center">
                <div className="col-lg-2 ">
                  <img src={require("../../Img/fastShiping.png")} alt="" />
                </div>

                <div className="col-lg-10 ">
                  <div>
                    <h3 className="" style={{ fontSize: "16px", lineHeight: "16px" }} > PAYMENT METHOD </h3>
                    <h3 className="" style={{ fontSize: "16px" }} > Secure Payment </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 pt-4 pb-4">
              <div className="row d-flex  align-items-center">
                <div className="col-lg-2 ">
                  <img src={require("../../Img/fastShiping.png")} alt="" />
                </div>

                <div className="col-lg-10 ">
                  <div>
                    <h3 className="" style={{ fontSize: "16px", lineHeight: "16px" }} > MULTI BUSINESSES </h3>
                    <h3 className="" style={{ fontSize: "16px" }} > Manage multiple businesses from one account </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 pt-4 pb-4">
              <div className="row d-flex  align-items-center">
                <div className="col-lg-2 ">
                  <img src={require("../../Img/fastShiping.png")} alt="" />
                </div>

                <div className="col-lg-10 ">
                  <div>
                    <h3 className="" style={{ fontSize: "16px", lineHeight: "16px" }} > HELP CENTER </h3>
                    <h3 className="" style={{ fontSize: "16px" }} > 24/7 Support System </h3>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
