import React from "react";
import "./hero.scss";

const Hero = () => {
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
              For Shoppers, Sellers and Good Causes
            </h2>
            <h2 className="text-white mt-2 mb-2" style={{ fontSize: "25px" }}>
              Ecommerce & Causes Platform
            </h2>
            <p className="text-white FONT " style={{ fontSize: "15px" }}>
              See how it works
            </p>
            <div className="mt-4">
              <button
                className="p-1 hero_button"
                style={{
                  height: "37px",
                  borderRadius: "5px 5px 5px 5px",
                  fontSize: "14px",
                  textTransform: "uppercase",
                }}
              >
                <b className="p-3" style={{ fontWeight: "600" }}>
                  Start Shopping
                  <i className="fa-solid fa-angle-right ms-lg-2"></i>
                </b>
              </button>
              <button
                className="p-1 hero_button"
                style={{
                  height: "37px",
                  borderRadius: "5px 5px 5px 5px",
                  fontSize: "14px",
                  textTransform: "uppercase",
                }}
              >
                <b className="p-3" style={{ fontWeight: "600" }}>
                  Start Business
                  <i className="fa-solid fa-angle-right ms-lg-2"></i>
                </b>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
