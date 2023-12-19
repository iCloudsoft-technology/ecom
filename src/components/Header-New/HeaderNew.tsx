import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  NavLink,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser, loginUser } from "../../app/slice/authSlice";

const HeaderNew = () => {
  const dispatch: any = useDispatch();
  const user: any = useSelector((state) => state);
  const [isUserLog, setIsUserLog] = useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    setIsUserLog(user.auth.isUserLog);
  }, [user.auth]);

  const NavItems = [
    {
      name: "Home",
      url: "/home",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Support",
      url: "/contact",
    },
  ];

  useEffect(() => {
    setIsUserLog(!!localStorage.getItem("isUserLog"));
  }, []);
  return (
    <>
      <Container fluid>
        <Row className="header-row">
          <Col lg={2} className="ps-2 d-flex justify-content-center">
            <NavLink href="/">
              <img
                className="header_logo"
                src={require("../../Img/Logo.png")}
                alt="icloudsoft_logo"
              />
            </NavLink>
          </Col>
          <Col lg={3} className="top-navigation ">
            <ul className="nav-items">
              {NavItems.map((item) => (
                <>
                  <li className="navbaranimation">
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                </>
              ))}
            </ul>
          </Col>
          <Col lg={4} className="d-flex w-100">
            <div className="search-box-category-container">
              <select className="navbar-dropdown">
                <option value="all">All</option>
              </select>
            </div>
            <form action="#" className="search-form active d-flex w-100">
              <input
                type="text"
                placeholder="Search for what you are looking for"
                name="search"
              />
              <button type="submit">
                <i className="fas fa-search text-white"></i>
              </button>
            </form>
          </Col>
          <Col lg={3} className="navbar-rhs">
            <ul className="d-flex justify-content-end align-items-center">
              <li className="bg-transparent navbaranimation">
                <span className="navbar-currency-sign">R</span>
                <span>
                  <select name="currency" className="currency-selector">
                    <option value="1">GBP</option>
                    <option value="4">BDT</option>
                    <option value="6">EUR</option>
                    <option value="8">INR</option>
                    <option value="9">NGN</option>
                    <option value="21">USD</option>
                    <option value="22" selected>
                      ZAR
                    </option>
                  </select>
                </span>
              </li>
              <li className="bg-transparent"  >
                <div className="links-container ">
                  <span className="navbaranimation">
                    <Link
                      aria-current="page"
                      to="/home"
                      onClick={() => {
                        isUserLog && localStorage.removeItem("userLog");
                        isUserLog && localStorage.removeItem("user");
                        dispatch(logOutUser());
                        isUserLog && navigate("/home");
                      }}
                    >
                      {!isUserLog ? "Sign In " : "Sign Out"}
                    </Link>
                  </span>
                  {!isUserLog && (
                    <span className="navbaranimation">
                      <Link aria-current="page" to="/home">
                        | Sign Up
                      </Link>
                    </span>
                  )}
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeaderNew;
