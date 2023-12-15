import { Col, Form, Nav, NavLink, Row } from "react-bootstrap";
import "./Navbar.css";
import React, { useState } from "react";
import { Dropdown, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaFontAwesome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const items = ["Item 2", "Item 3", "Item 4", "Item 5"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = React.useState("Please Select");
  const [isUserLog, setIsUserLog] = React.useState(false);
  const [cartValue, setCartValue] = useState<any>([]);
  React.useEffect(() => {
    setIsUserLog(!!localStorage.getItem("isUserLog"));
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartValue(cartItems);
  }, []);

  const handleSelect = (item: any) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = (isOpen: any) => {
    setIsDropdownOpen(isOpen);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar text-dark"
        style={{ backgroundColor: "#041E42" }}
      >
        <div className="container-fluid p-0 ">
          <div className="col-lg-2 Company_logo_main">
            <NavLink href="/">
              <img
                className="Company_logo"
                src={require("../../Img/Logo.png")}
                alt="icloudsoft_logo"
              />
            </NavLink>
          </div>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="container">
            <div className="row d-flex justify-content-around ">
              <div
                className="collapse navbar-collapse  col-lg-3 "
                id="navbarNav"
              >
                <div className="d-flex justify-content-lg-start align-items-center ">
                  <ul className="navbar-nav text-white  ">
                    <li className="nav-item">
                      <NavLink
                        className="navigation_hover"
                        aria-current="page"
                        href="/home"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="navigation_hover" href="/about">
                        About us
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink className="navigation_hover" href="/contact">
                        Support
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 search_input_bar">
                <form className="p-3 d-flex justify-content-lg-start align-items-lg-center mt-1">
                  <div className="input-group">
                    <Form.Group>
                      <Form.Select
                        style={{
                          backgroundColor: "rgb(40, 102, 188)",
                          borderRadius: "50px 0px 0px 50px",
                          height: "46px",
                          width: "70px",
                        }}
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      >
                        <option value="All"> All</option>
                        <option value="item1">item1</option>
                        <option value="item2">item1</option>
                        <option value="item3">item1</option>
                        <option value="item4">item4</option>
                      </Form.Select>
                    </Form.Group>
                    <Form onSubmit={() => {}} style={{ width: "60%" }}>
                      <Form.Group controlId="username">
                        <Form.Control
                          style={{ height: "46px" }}
                          className="rounded-0 mx-0"
                          type="text"
                          value={""}
                          placeholder="Search for what you are looking for"
                          onChange={(e) => {}}
                          required
                        />
                      </Form.Group>
                    </Form>
                    <span
                      className="input-group-text"
                      style={{
                        borderRadius: "0px 50px 50px 0px",
                        width: "10%",
                        backgroundColor: "#2866BC",
                      }}
                      id="basic-addon1"
                    >
                      <BsSearch onClick={() => {}} />
                    </span>
                  </div>
                </form>
              </div>

              <div className="col-lg-3 ">
                <ul className="text-white">
                  <li className="d-flex justify-content-lg-start align-items-lg-center mt-4">
                    <NavLink
                      className="navigation_hover px-2 "
                      aria-current="page"
                      href="/home"
                    >
                      {!isUserLog ? "Sign In " : "Sign Out"}
                    </NavLink>

                    {!isUserLog && (
                      <NavLink
                        className="navigation_hover  px-2 "
                        aria-current="page"
                        href="/home"
                      >
                        &nbsp; | &nbsp; Sign Up
                      </NavLink>
                    )}
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
