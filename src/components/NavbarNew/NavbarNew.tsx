import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import categories from "./categoriesData";
import { Link } from "react-router-dom";
import Category from "../Category/Category";

const NavbarNew = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubHovered, setIsSubHovered] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [navMenuhovered, setNavMenuhovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseEnterMainNav = () => {
    setNavMenuhovered(true);
  };

  const handleMouseLeaveMainNav = () => {
    setNavMenuhovered(false);
  };

  const handleMouseEnterSub = (index: number) => {
    setHoveredCategory(index);
    console.log(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseLeaveSub = () => {
    setHoveredCategory(null);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="container-fluid ">
          <div className=" d-flex flex-row align-items-center">
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
                      {categories.map((item, index) => (
                        <>
                          <li
                            onMouseEnter={() => handleMouseEnterSub(index)}
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
                            {hoveredCategory === index && (
                              <div className="categories-mega-menu">
                                {item.subcategory.map((item) => (
                                  <li className="col-6">
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
                              </div>
                            )}
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex ">
              {categories.map((item, index) => (
                <div className="category-megamenu-container">
                  <Link
                    to={`/${item.name}`}
                    onMouseEnter={() => handleMouseEnterSub(index)}
                  >
                    <span
                      className="ms-4 navmenu-title"
                      onMouseEnter={handleMouseEnterMainNav}
                    >
                      {item.name}
                    </span>
                  </Link>
                  {navMenuhovered && (
                    <div
                      className="subcategories-megamenu"
                      onMouseLeave={handleMouseLeaveMainNav}
                    >
                      {item.subcategory.map(
                        (category) =>
                          hoveredCategory === index && (
                            <div className="subcategories-megamenu-container">
                              <Link to={category.heading}>
                                {category.heading}
                              </Link>
                              <p>
                                {category.items.map((ele) => (
                                  <li>{ele.name} </li>
                                ))}
                              </p>
                            </div>
                          )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarNew;
