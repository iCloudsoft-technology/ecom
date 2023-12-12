import React from 'react'
import { NavLink } from 'react-bootstrap'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar text-dark" style={{ backgroundColor: "#041E42" }} >
                <div className="container-fluid p-0 ">
                    <div className='ms-lg-5 ps-lg-3 col-lg-2'>

                        <NavLink href="/">
                            <img className='' style={{ height: "3rem" }} src={require("../../Img/Logo.png")} alt="icloudsoft_logo" />
                        </NavLink>
                    </div>

                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="container">
                        <div className="row d-flex justify-content-around ">
                            <div className="collapse navbar-collapse  col-lg-3 " id="navbarNav">
                                <div className='d-flex justify-content-lg-start align-items-center FONT'>
                                    <ul className="navbar-nav text-white  ">
                                        <li className="nav-item pe-lg-3">
                                            <NavLink className="  BORDERhoVer p-2 " style={{ fontSize: "21px", fontWeight: "500", textDecoration: "none" }} aria-current="page" href="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item pe-lg-3">
                                            <NavLink className="   BORDERhoVer p-2" style={{ fontSize: "21px", fontWeight: "500", textDecoration: "none" }} href='/about' >About us</NavLink>
                                        </li>
                                        <li className="nav-item pe-lg-3">
                                            <NavLink className="   BORDERhoVer p-2" style={{ fontSize: "21px", fontWeight: "500", textDecoration: "none" }} href='/contact' >Support</NavLink>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className='col-lg-5 SEARCHWIDTH FONT'>
                                <form className="p-3 d-flex justify-content-lg-start align-items-lg-center mt-1"  >
                                    <div className="input-group " style={{ borderRadius: "50px", height: "46px" }} >
                                        <span className="input-group-text text-center " style={{ borderRadius: "50px 0px 0px 50px", width: "12%" }} id="basic-addon1">  &nbsp;All</span>
                                        <input type="text " className="form-control FontFamilyMontSerret text-center" placeholder="Search for what you are loking for" aria-label="Username" aria-describedby="basic-addon1" />
                                        <span className="input-group-text" style={{ borderRadius: "0px 50px 50px 0px", width: "10%", backgroundColor: "#2866BC" }} id="basic-addon1"><i className="fa-solid fa-magnifying-glass text-white"></i></span>
                                    </div>
                                </form>
                            </div>

                            <div className=" col-lg-3 ">
                                <div className='text-white mt-1 d-flex justify-content-lg-end pe-lg-3 align-items-lg-center '>
                                    <ul className='d-flex justify-content-lg-start align-items-lg-center FONT'>
                                        <li className='d-flex justify-content-lg-start align-items-lg-center mt-4'>
                                            <span className='' style={{ fontSize: "19px", fontWeight: "500" }}>Sign in</span>
                                            &nbsp;  | &nbsp;
                                            <span className='' style={{ fontSize: "19px", fontWeight: "500" }}>Sign up</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </nav>
            
        </>

    )
}

export default Navbar