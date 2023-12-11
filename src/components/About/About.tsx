import React from "react";

const About = () => {
  return (
    <div
      style={{
        textAlign: "left",
        margin: "30px",
      }}
    >
      <div
        style={{
          color: "limegreen",
          fontSize: "36px",
          fontWeight: "600",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>About Us</h1>
      </div>
      <hr />
      <div className="mt-2">
        C-Angelx is an ‘eCommerce-Mall’ & platform that enables virtually any
        type of merchant to create its e-commerce account within it & then sell
        its merchandise or receive payments online (of sales, lay-bys,
        pre-orders, etc), or for any NPO (Non Profit Organization) to fundraise
        most efficiently and receive donations online’ - (with a customizable
        unique user-handle’ for its current & prospective patrons to find &
        follow its ecommerce account) all within the C-Angelx environment.
      </div>
      <div className="mt-4 mb-4">
        C-Angelx doesn’t necessarily own the items displayed on the various
        accounts of the respective merchants, neither does it fundraise on
        behalf of NPOs - but rather serves also as a platform for prospective
        Patrons (customers, clients, supporters, etc) with C-Angelx accounts to
        also search, find and follow C-Angelx accounts of individual merchants
        and NPOs they like in order to interact with online’ using necessary
        tools made available to all users. The actual contract for sale or
        donation therefore’ is directly between the respective Merchants or NPOs
        & their Patrons (individuals).
      </div>
      <div className="mt-4 mb-4">
        - NB: Third party trademarks, services and logos used are subject to
        those third party Terms & Conditions (to both shoppers and sellers).
      </div>
      <div className="mt-4 mb-4 fw-bold">
        About the website loader: The loader "Ellipsis" is provided by
        loading.io <br />
        Other Website images (not the items for sale): We used www.unsplash.com
        to acquire non-copyrighted images for use
      </div>
      <div className="mt-4 mb-4 fw-bold">
        - To get in touch please go to our 'Support' page, or email us on
        Support@cangelx.com if its in regard to our site or other proposal or
        request for information.
      </div>
    </div>
  );
};

export default About;
