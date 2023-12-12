import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <>

            <section>
                <div className="container-fluid" style={{ backgroundColor: "#041E42" }} >
                    <div className="container mt-5 mb-5 p-lg-4">
                        <div className="row p-4 text-white text-start FONT">
                            <div className="col-lg-2">
                                <div>
                                    <p> HOME </p>
                                    <p> ABOUT US </p>
                                    <p> HOME </p>
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

                            <div className="col-lg-4">
                                <div>
                                    <p className='ms-lg-3'> INTERACTIVE </p>
                                    <div className='row align-items-center g-2 mt-3'>
                                        <div className=' d-flex justify-content-center'>
                                            <NavLink to="" target="_blank"><i className="fa-brands fa-facebook-f fs-5  FOOTERSocialIcon1"></i></NavLink>
                                            <NavLink to="" target="_blank"><i className="fa-brands fa-google-plus-g ms-3 fs-5  FOOTERSocialIcon"></i></NavLink>
                                            <NavLink to="" target="_blank"><i className="fa-brands fa-instagram fs-5 ms-3 FOOTERSocialIcon " ></i></NavLink>
                                            <NavLink to='' target="_blank"><i className="fa-brands fa-twitter fs-5 ms-3 FOOTERSocialIcon"></i> </NavLink>
                                            <NavLink to='' target="_blank"><i className="fa-brands fa-youtube fs-5 ms-3 FOOTERSocialIcon"></i> </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer