import React, { useEffect } from "react";
import SignPopUp from "../SignPopUp/SignPopUp";
import PageLoader from "../PageLoader/PageLoader";

const About = () => {
  const [showLoader, setShowLoader] = React.useState(false);
  useEffect(() => {
    setShowLoader((state) => true);
    setTimeout(() => {
      setShowLoader((state) => false);
    }, 500);
  }, []);

  return (
    <>
      <PageLoader show={showLoader} />
      <div
        style={{
          textAlign: "left",
          padding: "30px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        {/* <div
        style={{
          color: 'limegreen',
          fontSize: '36px',
          fontWeight: '600',
        }}
      > */}
        <h4
          style={{
            color: "limegreen",
            marginBottom: "30px",
            fontFamily: "Roboto",
            fontWeight: "600",
            fontSize: "36px",
          }}
        >
          About Us
        </h4>
        {/* </div> */}
        <hr />
        <div
          className="mb-3"
          style={{
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Proxima Nova",
            fontSize: "16.875px",
            lineHeight: "1.625",
            fontWeight: "500",
          }}
        >
          C-Angelx is an ‘eCommerce-Mall’ & platform that enables virtually any
          type of merchant to create its e-commerce account within it & then
          sell its merchandise or receive payments online (of sales, lay-bys,
          pre-orders, etc), or for any NPO (Non Profit Organization) to
          fundraise most efficiently and receive donations online’ - (with a
          customizable unique user-handle’ for its current & prospective patrons
          to find & follow its ecommerce account) all within the C-Angelx
          environment.
        </div>
        <div
          //  className="mb-4"
          style={{
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Proxima Nova",
            fontSize: "16.875px",
            paddingBottom: "64px",
            lineHeight: "1.625",
            fontWeight: "500px",
          }}
        >
          C-Angelx doesn’t necessarily own the items displayed on the various
          accounts of the respective merchants, neither does it fundraise on
          behalf of NPOs - but rather serves also as a platform for prospective
          Patrons (customers, clients, supporters, etc) with C-Angelx accounts
          to also search, find and follow C-Angelx accounts of individual
          merchants and NPOs they like in order to interact with online’ using
          necessary tools made available to all users. The actual contract for
          sale or donation therefore’ is directly between the respective
          Merchants or NPOs & their Patrons (individuals).
        </div>
        <div
          // className="mb-4"
          style={{
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Proxima Nova",
            paddingBottom: "64px",
            fontSize: "16.875px",
          }}
        >
          - NB: Third party trademarks, services and logos used are subject to
          those third party Terms & Conditions (to both shoppers and sellers).
        </div>
        <p
          className="mb-3 fw-bold"
          style={{
            fontSize: "18px",
            color: "#000000",
            lineHeight: "1.625",
            fontFamily: "Alegreya",
          }}
        >
          About the website loader: The loader "Ellipsis" is provided by
          loading.io
        </p>
        <p
          className="fw-bold"
          style={{
            fontSize: "18px",
            color: "#000000",
            lineHeight: "1.625",
            fontFamily: "Alegreya",
            paddingBottom: "48px",
          }}
        >
          Other Website images (not the items for sale): We used
          www.unsplash.com to acquire non-copyrighted images for use
        </p>
        <div
          className="fw-bold"
          style={{
            fontSize: "18px",
            color: "#000000",
            lineHeight: "1.625",
            fontFamily: "Alegreya",
            paddingBottom: "64px",
          }}
        >
          - To get in touch please go to our 'Support' page, or email us on
          Support@cangelx.com if its in regard to our site or other proposal or
          request for information.
        </div>
      </div>
    </>
  );
};

export default About;
