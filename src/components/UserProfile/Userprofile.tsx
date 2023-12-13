import React from 'react'
import "./Userprofile.css"

const Userprofile = () => {
    return (
        <>

            <section>
                <div className="container p-5">
                    <div className="row d-flex justify-content-center align-items-center ">

                        <div className='border FONTFamily mt-4 mb-4' style={{ width: "450px", borderRadius: "10px 10px 10px 10px" }}>
                            <form className='p-lg-3 text-start' >
                                <div className='ms-2'>
                                    <h3 className="fontFamilyHeader1 mt-2 mb-4" style={{ color: "#111", fontSize: "28px", lineHeight: "19px", fontWeight: "400" }} >Sign in</h3>
                                </div>

                                <div className="form-outline p-1  mt-3">
                                    <label className="form-label" style={{ color: "#111", fontSize: "16px", lineHeight: "19px", fontWeight: "600" }} >Email or mobile phone number</label>
                                    <input type="email" id="form2Example1" className="form-control"
                                        name="email"
                                        value="" required />
                                </div>

                                <div className="form-outline p-1">
                                    <label className="form-label " style={{ color: "#111", fontSize: "16px", lineHeight: "19px", fontWeight: "600" }} >Password</label>
                                    <span className='ms-lg-5 ps-lg-5'><label className="form-label mt-2 FORGETPASS" style={{ color: "#0066c0", fontSize: "15px", lineHeight: "19px", fontWeight: "600" }} >Forgot Password</label></span>
                                    <input type="password" id="form2Example2" className="form-control"
                                        name="password"
                                        value="" required />
                                </div>

                                <div className=" p-1 h1FontFamily1">
                                    <button type="submit" className=" p-2 border w-100  SIGNBUTTON mt-3"><b className='' style={{ fontWeight: "400" }} >Sign in</b></button>
                                </div>

                                <div className='mt-2 p-1' style={{ fontSize: "15px", lineHeight: "1.5", fontWeight: "400" }} >
                                    By continuing, you agree to Amazon's <span className='' style={{ color: "#0066c0", fontSize: "13px", fontWeight: "400" }} > Conditions of Use  Privacy Notice  </span> and  <span className='' style={{ color: "#0066c0", fontSize: "13px", fontWeight: "500" }} >   Privacy Notice </span>
                                </div>

                                <div className="form-check mt-3">
                                    <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label m-0" style={{ color: "#111", fontSize: "15px", fontWeight: "400" }} >
                                        Keep me signed in. <span className='HoVerDrop' style={{ color: "#0066c0", fontSize: "15px", fontWeight: "400" }} > Details <i className="fa-solid fa-caret-down ms-2"></i> </span>
                                    </label>
                                </div>

                                <div className='divider mt-3 pt-3'>
                                    <span className='p-2' style={{ fontSize: "13px", color: "#767676", lineHeight: "1", fontWeight: "400" }} >
                                        New to Amazon?
                                    </span>
                                </div>

                                <div className=" p-1 h1FontFamily1">
                                    <button type="submit" className=" p-2 border w-100  CREATEACCOUNT mt-3"><b className='' style={{ fontWeight: "400" }} > Create your Amazon account </b></button>
                                </div>
                            </form>
                        </div>

                        <div className='mt-2 FONTFamily' style={{borderTop:"2px solid #e7e7e7"}} >
                            <div className='p-3'>
                                <span className='SECTIONLASTHoVerDrop'>  Conditions of Use  </span>
                                <span className='ms-4 SECTIONLASTHoVerDrop'>  Privacy Notice  </span>
                                <span className='ms-4 SECTIONLASTHoVerDrop'>  Help  </span>
                                <div className='mt-2' style={{color:"#555",fontSize:"14px",lineHeight:"2.456"}} >
                                    © 1996-2023, Amazon.com, Inc. or its affiliates
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Userprofile