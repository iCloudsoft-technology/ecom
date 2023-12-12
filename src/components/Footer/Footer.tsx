import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <>

            <section>
                <div className="container-fluid" style={{ backgroundColor: "#041E42" }}>
                    <div className="container mt-5 p-lg-4">
                        <div className="row p-3 d-flex justify-content-center text-white text-start FONT">
                            <div className="col-lg-2">
                                <div>
                                    <p> HOME </p>
                                    <p> ABOUT US </p>
                                    <p> SUPPORT </p>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div>
                                    <p> TERMS & CONDITIONS </p>
                                    <p> PRIVACY POLICY </p>
                                    <p> ADVERTISEMENTS </p>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div>
                                    <p> PROFILE </p>
                                    <p> LOCATION SETTINGS </p>
                                    <p> MANAGE BUSINESSES </p>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div>
                                    <h4
                                        style={{
                                            fontSize: "21px",
                                            fontWeight: "600",
                                            fontFamily: "'Roboto', sans-serif",
                                            paddingLeft: "50px",
                                        }}
                                    >
                                        {" "}
                                        INTERACTIVE{" "}
                                    </h4>
                                    <div className="row align-items-center g-2 mt-3">
                                        <div className=" d-flex justify-content-center">
                                            <NavLink
                                                className="text-decoration-none"
                                                to=""
                                                target="_blank"
                                            >
                                                <i className="fa-brands fa-facebook-f  ms-3 FOOTERSocialIcon"></i>
                                            </NavLink>
                                            <NavLink
                                                className="text-decoration-none"
                                                to=""
                                                target="_blank"
                                            >
                                                <i className="fa-brands fa-google-plus-g ms-3 FOOTERSocialIcon"></i>
                                            </NavLink>
                                            <NavLink
                                                className="text-decoration-none"
                                                to=""
                                                target="_blank"
                                            >
                                                <i className="fa-brands fa-twitter  ms-3 FOOTERSocialIcon"></i>
                                            </NavLink>
                                            <NavLink
                                                className="text-decoration-none"
                                                to=""
                                                target="_blank"
                                            >
                                                <i className="fa-brands fa-instagram  ms-3 FOOTERSocialIcon"></i>{" "}
                                            </NavLink>
                                            <NavLink
                                                className="text-decoration-none"
                                                to=""
                                                target="_blank"
                                            >
                                                <i className="fa-brands fa-youtube  ms-3 FOOTERSocialIcon"></i>{" "}
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="row d-flex mt-3 FONT"
                            style={{
                                justifyContent: "center",

                                flexWrap: "wrap",
                                marginLeft: "-15px",
                                marginRight: "-15px",
                            }}
                        >
                            <div className="third_party">
                                <div className="logo_ d-flex justify-content-center align-items-center">
                                    <h3
                                        style={{
                                            color: "white",
                                            fontSize: "22px",
                                            paddingTop: "30px",
                                        }}
                                    >
                                        Third Party Partners:
                                    </h3>
                                    <span
                                        className="top_mobile d-flex"
                                        style={{ marginTop: "15px", padding: "0 10px" }}
                                    >
                                        <div className="logo">
                                            <a href="">
                                                <img
                                                    src={require("../../Img/dhl-logo.png")}
                                                    alt=""
                                                    style={{ width: "91px", height: "30px" }}
                                                />
                                            </a>
                                        </div>
                                        <div className="logo">
                                            <a href="">
                                                <img
                                                    src={require("../../Img/bs.png")}
                                                    alt=""
                                                    style={{ width: "91px", height: "30px" }}
                                                />
                                            </a>
                                        </div>
                                        <div className="logo">
                                            <a href="">
                                                <img
                                                    src={require("../../Img/bs.png")}
                                                    alt=""
                                                    style={{ width: "91px", height: "30px" }}
                                                />
                                            </a>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-white text-center mt-4 pt-4">
                                Copyright© 2018 – 2023. All rights reserved. Cangelx.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer