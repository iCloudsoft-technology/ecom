import { Col, Form, Nav, NavLink, Row } from "react-bootstrap";
import "./Navbar.css";
import React, { useState } from "react";
import { Dropdown, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const items = ["Item 2", "Item 3", "Item 4", "Item 5"];

  const handleSelect = (item: any) => {
    setSelectedItem(item);
  };

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
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
          <div className="ms-lg-5 ps-lg-3 col-lg-2">
            <NavLink href="/">
              <img
                className=""
                style={{ height: "3rem" }}
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
                <div className="d-flex justify-content-lg-start align-items-center FONT">
                  <ul className="navbar-nav text-white  ">
                    <li className="nav-item pe-lg-3">
                      <NavLink
                        className="  BORDERhoVer p-2 "
                        style={{
                          fontSize: "21px",
                          fontWeight: "500",
                          textDecoration: "none",
                        }}
                        aria-current="page"
                        href="/home"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item pe-lg-3">
                      <NavLink
                        className="   BORDERhoVer p-2"
                        style={{
                          fontSize: "21px",
                          fontWeight: "500",
                          textDecoration: "none",
                        }}
                        href="/about"
                      >
                        About us
                      </NavLink>
                    </li>
                    <li className="nav-item pe-lg-3">
                      <NavLink
                        className="   BORDERhoVer p-2"
                        style={{
                          fontSize: "21px",
                          fontWeight: "500",
                          textDecoration: "none",
                        }}
                        href="/contact"
                      >
                        Support
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 SEARCHWIDTH FONT">
                <form className="p-3 d-flex justify-content-lg-start align-items-lg-center mt-1">
                  <div
                    className="input-group "
                    style={{ borderRadius: "50px", height: "46px" }}
                  >
                    <Dropdown
                      onSelect={handleSelect}
                      style={{
                        backgroundColor: "rgb(40, 102, 188)",
                        borderRadius: "50px 0px 0px 50px",
                        height: "46px",
                        width: "70px",
                      }}
                    >
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        style={{
                          backgroundColor: "rgb(40, 102, 188)",
                          borderRadius: "50px 0px 0px 50px",
                          height: "46px",
                          width: "70px",
                        }}
                      >
                        {selectedItem}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Divider />
                        {filteredItems.map((item) => (
                          <Dropdown.Item key={item} eventKey={item}>
                            {item}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
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

              <div className=" col-lg-3 ">
                <div className="text-white mt-1 d-flex justify-content-lg-end pe-lg-3 align-items-lg-center ">
                  <ul className="d-flex justify-content-lg-start align-items-lg-center FONT">
                    <li className="d-flex justify-content-lg-start align-items-lg-center mt-4">
                      <NavLink
                        className="  BORDERhoVer pb-2 px-2 "
                        style={{
                          fontSize: "21px",
                          fontWeight: "500",
                          textDecoration: "none",
                        }}
                        aria-current="page"
                        href="/home"
                      >
                        Sign in
                      </NavLink>
                      &nbsp; | &nbsp;
                      <NavLink
                        className="  BORDERhoVer pb-2 px-2 "
                        style={{
                          fontSize: "21px",
                          fontWeight: "500",
                          textDecoration: "none",
                        }}
                        aria-current="page"
                        href="/home"
                      >
                        Sign up
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
