import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Singleproductpage.css"

const Singleproductpage = () => {

    const [display, setDisplay] = useState("Canvas");

    const [btn1, setBtn1] = useState("newStyle");

    const [btn2, setBtn2] = useState("btnStyle");

    const [btn3, setBtn3] = useState("btn3Style");


    const changleDisplay = () => {
        setDisplay("Canvas")
        setBtn1("newStyle")
        setBtn2("btnStyle")
    }

    const changleDisplay1 = () => {
        setDisplay("Elevate")
        setBtn1("btnStyle")
        setBtn2("newStyle")
    }

    const changleDisplay3 = () => {
        setDisplay("Mastery")
        setBtn3("btn3Style")
        
    }

    return (

        <>
            <section>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center p-3 mt-lg-4">
                        <div className="col-lg-9 ">
                            <div className="row text-start FONTFamily">
                                <div className="col-lg-5">
                                    <img className=' w-100' src={require("../../Img/Dummy.png")} alt="" title='' />
                                    <div className='d-flex justify-content-center align-items-center mt-lg-3 pt-2'>
                                        <img className='' style={{ height: "5rem" }} src={require("../../Img/Dummy.png")} alt="" title='' />
                                    </div>
                                </div>

                                <div className="col-lg-7">
                                    <div className=''>
                                        <h3 className='mb-2' style={{ fontSize: "30px", lineHeight: "31px", fontWeight: "800", color: "#143250" }} >Education Fund</h3>
                                        <h6 className='mb-3'  >0 Reviews</h6>
                                        <h5 className='' style={{ fontSize: "23px", lineHeight: "31px" }} >Minimum value : <span className='ms-lg-3' style={{ color: "#2866bc", fontWeight: "800", fontSize: "28px" }} > R100 </span></h5>
                                        <h5 className='' style={{ fontSize: "22px", lineHeight: "31px", fontWeight: "400" }}>Donate other amount</h5>

                                        <div className='mt-lg-4 pt-3 d-flex align-items-center' style={{ listStyle: "none" }} >
                                            <li className=''>
                                                <button className=' DONATEButtonHOVER  ' style={{ height: "37px", borderRadius: "5px 5px 5px 5px", fontSize: "14px" }} > <b className='p-lg-1'  > Donate  </b>  </button>
                                            </li>
                                            <li className='ms-3'>
                                                <button className=' VIRALButtonHOVER ' style={{ height: "37px", borderRadius: "5px 5px 5px 5px", fontSize: "14px" }} > <b className='p-lg-1' > Viral Donation </b> </button>
                                            </li>
                                            <li className='ms-3'>
                                                <button className=' RECURRINGButtonHOVER ' style={{ height: "37px", borderRadius: "5px 5px 5px 5px", fontSize: "14px" }} > <b className='p-lg-1' > Recurring Donations  </b> </button>
                                            </li>
                                            <li className='ms-3 d-flex justify-content-center align-items-center heartHOVER' >
                                                <i className="fa-solid fa-heart" style={{ fontSize: "18px", color: "#fff" }} ></i>
                                            </li>
                                        </div>

                                        <div className='mt-lg-3 pt-2 '>
                                            <NavLink to="https://www.instagram.com/icloud_soft/" target="_blank"><i className="fa-brands fa-instagram fs-6  SocialIcon1 " ></i></NavLink>
                                            <NavLink to='https://in.linkedin.com/in/anil-kadam-18b113147' target="_blank"><i className="fa-brands fa-linkedin fs-6 ms-3 SocialIcon2"></i> </NavLink>
                                            <NavLink to='https://twitter.com/icloudsoftTech' target="_blank"><i className="fa-brands fa-twitter fs-6 ms-3 SocialIcon3"></i> </NavLink>
                                            <NavLink to="https://www.facebook.com/icloudsofttechnology " target="_blank"><i className="fa-brands fa-facebook-f ms-3 fs-5  SocialIcon4"></i></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4 " >
                                <div className='border mt-lg-5 p-2' style={{ height: "250px", overflow: "auto" }}>
                                    <div className=" pt-3 pb-3 p-lg-4 ">
                                        <div className="row d-flex justify-content-center text-start align-items-center FONTFamily">

                                            <div className="row d-flex justify-content-center " >
                                                <div className="col-lg-2 col-md-3 d-flex justify-content-center fontFamilyHeader1" style={{ fontSize: "1.425rem" }} >
                                                    <button className={btn1} style={{ fontWeight: "800" }} onClick={changleDisplay}>Description</button>
                                                </div>

                                                <div className="col-lg-2 col-md-3 d-flex justify-content-center fontFamilyHeader1" style={{ fontSize: "1.425rem" }} >
                                                    <button className={btn3} style={{ fontWeight: "800" }} onClick={changleDisplay3}>Reviews(0)</button>
                                                </div>

                                                <div className="col-lg-2 col-md-3 d-flex justify-content-center fontFamilyHeader1" style={{ fontSize: "1.425rem" }} >
                                                    <button className={btn2} style={{ fontWeight: "800" }} onClick={changleDisplay1}>Comment(0)</button>
                                                </div>


                                            </div>

                                            <div >
                                                {

                                                    display === "Canvas" ?
                                                        <div className="container-fluid  mt-lg-4">
                                                            <div className='row d-flex justify-content-between mt-3'>
                                                                <div className="col-lg-12">
                                                                    <div>
                                                                        <p className='SolutionDropDownFontFamily' style={{ color: '#143d50', fontSize: "1.225rem" }} > This is a learning equipment fund for early learning support for children, and then also for tertiary students who are deserving & may lack these materials, who may typically also come from poor backgrounds.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        : display === "Mastery" ?
                                                            <div className="container-fluid  mt-lg-3">
                                                                <div className='row d-flex justify-content-between mt-2'>
                                                                    <div className="col-lg-12">
                                                                        <div className='mt-3'>
                                                                            <h2>Ratings & Reviews  </h2>
                                                                            <p className='fs-5'> No Review Found. </p>
                                                                        </div>
                                                                        <div className='d-flex justify-content-center mt-4 pt-lg-4'>
                                                                            <button className=' DONATEButtonHOVER p-2' style={{ height: "45px", borderRadius: "5px 5px 5px 5px", fontSize: "18px" }} > <b className='p-3'  > Sign in  </b>  </button>
                                                                            <span className='ms-3 fs-4'>To Review</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            : display === "Elevate" ?
                                                                <div className="container-fluid  mt-lg-3">
                                                                    <div className='row d-flex justify-content-between mt-2'>

                                                                        <div className="col-lg-12">
                                                                            <div className='d-flex justify-content-center mt-4 pt-lg-4'>
                                                                                <button className=' DONATEButtonHOVER p-2' style={{ height: "45px", borderRadius: "5px 5px 5px 5px", fontSize: "18px" }} > <b className='p-3'  > Sign in  </b>  </button>
                                                                                <span className='ms-3 fs-4'>To Comment</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                                : <div>
                                                                    somethings went wrong
                                                                </div>
                                                }
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 ">
                            <div className='p-4 mt-3 pt-3' style={{ border: "1px dashed rgba(0, 0, 0, 0.3)", textAlign: "center", borderRadius: "10px", }} >
                                <div className='FONTFamily'>
                                    <h4 className='' style={{ color: "#2866bc", fontSize: "14px" }} >Organized by</h4>
                                    <p className='' style={{ color: "#2866bc", fontSize: "18px", fontWeight: "800" }} >C-Angelx_cares@JhB</p>
                                </div>
                                <div className='FONTFamily' style={{ listStyle: "none" }}>
                                    <li className='mt-2 mb-1'>
                                        <button className=' FolloWButtonHover w-100' style={{ height: "37px", borderRadius: "5px 5px 5px 5px", fontSize: "14px" }} > <b className='p-lg-1' style={{ fontSize: "17px" }} > <i className="fa-solid fa-plus fs-6"></i> follow  </b> </button>
                                    </li>
                                    <li className='mt-2 mb-1'>
                                        <button className=' FolloWButtonHover w-100' style={{ height: "37px", borderRadius: "5px 5px 5px 5px", fontSize: "14px" }} > <b className='p-lg-1' style={{ fontSize: "17px" }} > <i className="fa-brands fa-rocketchat  fs-6"></i> Contact Sellar  </b> </button>
                                    </li>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Singleproductpage