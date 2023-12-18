import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import categories from "./categoriesData";
import { Link } from "react-router-dom";

const NavbarNew = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubHovered, setIsSubHovered] = useState(false);
  console.log(categories);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseEnterSub = () => {
    setIsSubHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseLeaveSub = () => {
    setIsSubHovered(false);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="container-fluid">
          <div className="row">
            <div className="categories-menu-wrapper">
              <div
                className="categories-menu"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="categories-title">
                  <h2 className="categories_toggle mb-0">
                    <i className="fa fa-bars pe-2"></i> Categories
                    <i className="fa fa-angle-down arrow-down"></i>
                  </h2>
                </div>
                {isHovered && (
                  <div className="category-menu-inner">
                    <ul>
                      {categories.map((item) => (
                        <>
                          <li
                            onMouseEnter={handleMouseEnterSub}
                            onMouseLeave={handleMouseLeaveSub}
                          >
                            <Link
                              to={item.url}
                              className="d-flex align-items-center"
                            >
                              <span>
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  width="20"
                                />
                              </span>
                              <span className="category-link ms-2">
                                {item.name}
                              </span>
                              <i className="fa fa-angle-right arrow-right"></i>
                            </Link>
                            {isSubHovered && (
                              <ul className="categories-mega-menu">
                                {item.subcategory.map((item) => (
                                  <li>
                                    <h6>{item.heading}</h6>
                                    <ul>
                                      {item.items.map((navs) => (
                                        <li>
                                          <Link to={navs.url}>{navs.name}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarNew;
