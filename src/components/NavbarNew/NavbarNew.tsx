import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import categories from "./categoriesData";
import { Link } from "react-router-dom";
import Category from "../Category/Category";

const NavbarNew = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [navMenuhovered, setNavMenuhovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnterMainNav = () => {
    setNavMenuhovered(true);
  };

  const handleMouseEnterSub = (index: number) => {
    setHoveredCategory(index);
  };

  const handleMouseLeaveSub = () => {
    setNavMenuhovered(false);
    setHoveredCategory(null);
    console.log("navMenuhovered", navMenuhovered);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="container-fluid ">
          <div className="navmenu-container">
            {/* categories menu starts here */}
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
            {/* categories menu ends here */}

            {/* main navigation menu starts here */}
            <div className="main-nav-container">
              {categories.map((item, index) => (
                <div
                  className="category-megamenu-container"
                  onMouseEnter={handleMouseEnterMainNav}
                >
                  <Link
                    to={`/${item.name}`}
                    onMouseEnter={() => handleMouseEnterSub(index)}
                  >
                    <span className="ms-4 navmenu-title">{item.name}</span>
                    <i className="fa-solid fa-caret-down caret-icon"></i>
                  </Link>
                  {navMenuhovered && (
                    <div
                      className="subcategories-megamenu"
                      onMouseLeave={handleMouseLeaveSub}
                    >
                      {item.subcategory.map(
                        (category) =>
                          hoveredCategory === index && (
                            <div className="subcategories-megamenu-container">
                              <Link to={category.heading}>
                                {category.heading}
                              </Link>

                              <>
                                {category.items.map((ele) => (
                                  <li>{ele.name} </li>
                                ))}
                              </>
                            </div>
                          )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* main navigation menu ends here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarNew;
