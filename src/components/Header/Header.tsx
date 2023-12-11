import React from "react";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
