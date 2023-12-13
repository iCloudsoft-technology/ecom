import React from 'react'
import "./Cart.css"

const Cart = () => {
    return (
        <>

            <section>
                <div className="container-fluid mb-4" style={{ backgroundColor: "#EAEDED" }} >
                    <div className="row p-lg-4" >
                        <div className="col-lg-9 " style={{ backgroundColor: "#FFF" }} >
                            <div className="row p-3 d-flex align-items-center">
                                <div className="col-lg-4">
                                    <div>
                                        <img className='w-100' style={{ height: "20rem" }} src={require("../../Img/CartEMPTY.png")} alt="" title='' />
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className='text-start FONTFamily'>
                                        <h3 className='' style={{ fontSize: "24px", lineHeight: "32px", fontWeight: "700" }} > Your Amazon Cart is empty </h3>
                                        <h3 className='SHOPTODAY' > Shop today’s deals </h3>

                                        <div className='mt-lg-4 d-flex align-items-center' style={{ listStyle: "none" }} >
                                            <li className=''>
                                                <a href="/userprofile">
                                                    <button className=' CARTButtonHOVERSIGNIN  ' style={{ height: "37px", borderRadius: "5px 5px 5px 5px", fontSize: "17px" }} > <b className='p-lg-2'  > Sign in into ypur account  </b>  </button>
                                                </a>
                                            </li>
                                            <li className='ms-3'>
                                                <button className=' CARTButtonHOVERSIGNUP ' style={{ height: "37px", borderRadius: "5px 5px 5px 5px", fontSize: "18px" }} > <b className='p-lg-2' > Sign up now </b> </button>
                                            </li>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row p-lg-4"  >
                        <div className="col-lg-9 " style={{ backgroundColor: "#FFF", height: "90px" }} >
                            
                        </div>

                        <div className='col-lg-9 text-start'>
                            <p className='mt-3 '>
                                The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
                                Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
                            </p>
                        </div> 
                    </div>

                </div>
            </section>

            <section>
                <div className="container-fluid border-top border-bottom mb-5 ">
                    <div className='row d-flex align-items-center FONTFamily'>
                        <div className='p-lg-5 p-2'>
                            <h3 className='' style={{ fontSize: "16px", lineHeight: "15px" }} > See personalized recommendations </h3>
                            <div className='d-flex justify-content-center align-items-center mt-lg-2 d-flex align-items-center' style={{ listStyle: "none" }} >
                                <li className=''>
                                    <a href="/userprofile">
                                        <button className=' CARTLASTSECTIONButtonHOVERSIGNIN ' style={{ height: "37px", borderRadius: "5px 5px 5px 5px", fontSize: "17px" }} > <b className='p-lg-2'  > Sign in  </b>  </button>
                                    </a>
                                </li>
                            </div>
                            <h3 className='mt-2' style={{ fontSize: "16px", lineHeight: "15px" }} >
                                New customer?
                                <span className='STARTHERE' style={{ fontSize: "16px", lineHeight: "15px", }} >  Start here. </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Cart