import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Assuming you have a library for icons, like react-icons
import "./header-new.css"; // You can create a CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, loginUser } from "../../app/slice/authSlice";

const HeaderNew: React.FC = () => {
  const dispatch: any = useDispatch();
  const user: any = useSelector((state) => state);
  const [isUserLog, setIsUserLog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsUserLog(user.auth.isUserLog);
  }, [user.auth]);

  useEffect(() => {
    setIsUserLog(!!localStorage.getItem("isUserLog"));
  }, []);
  const navItems = [
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
  return (
    <div className="header">
      <div className="header-logo">
        <NavLink href="/">
          <img
            className="header_logo"
            src={require("../../Img/Logo.png")}
            alt="icloudsoft_logo"
            width="140"
          />
        </NavLink>
      </div>

      <nav className="navigation">
        {navItems.map((elem) => (
          <Link to={elem.url}>{elem.name}</Link>
        ))}
      </nav>

      <div className="search-bar">
        <select name="" className="searchbar-select">
          <option value="all">All</option>
        </select>
        <input type="text" placeholder="Search for what you are looking for" />
        <span className="search-icon">
          <FaSearch />
        </span>
      </div>

      <div className="additional-items">
        {isUserLog ? (
          <>
            <div className="login-links">
              <span className="currency-selector">
                <span>$</span>
                <select>
                  <option value="">GBP</option>
                  <option value="">BDT</option>
                  <option value="">EUR</option>
                  <option value="">INR</option>
                  <option value="">NGN</option>
                  <option value="" selected>
                    USD
                  </option>
                </select>
              </span>
              <span>
                <Link to="/home">Sign In </Link>
              </span>
              <span>
                <Link to="/home"> | Sign Up</Link>
              </span>
            </div>
          </>
        ) : (
          <>
            <div>
              <i className="fas fa-street-view"></i>
              <span className="bubble ">0</span>
            </div>
            <div>
              <span>
                <i className="fa fa-cogs header-icon"></i>
              </span>
              <span className="account">Account</span>
              <span>
                <i className="fas fa-chevron-down header-icon"></i>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-cart-shopping header-icon"></i>
              <span className="bubble">0</span>
            </div>
            <div>
              <i className="fa-solid fa-heart header-icon"></i>
              <span className="bubble ">0</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderNew;
