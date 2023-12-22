import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./Home.css";

import Hero from "../../components/Hero/Hero";
import ProductCarousel from "../../components/Caraousal/ProductCarousel";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Silder from "../../components/Silder/Silder";
import PageLoader from "../../components/PageLoader/PageLoader";
import SlickProductSlider from "../../components/SlickProductSlider/SlickProductSlider";
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import categories from "../../components/NavbarNew/categoriesData";
import HomeCards from "../../components/HomeCards/HomeCards";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home: React.FC = () => {
  console.log("categories", categories);
  const [productData, setProductData] = useState<Product[]>([]);
  const [showLoader, setShowLoader] = React.useState(false);
  useEffect(() => {
    setShowLoader((state) => true);
    setTimeout(() => {
      setShowLoader((state) => false);
    }, 500);
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, []);

  return (
    <>
      <PageLoader show={showLoader} />
      <Hero />
      <div className="top-row">
        <h2 className="row-title">Spnsored</h2>
        <button className="top-button">View All</button>
      </div>
      <div className="d-flex align-items-center mt-1">
        <div className="sponsored-img-col">
          <img
            src="https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/advertise/1742338ff36ce81543d5c44883ea04efhbeu58070442_999_21-modified.jpeg"
            alt=""
            className="sponsored-prod-img"
          />
        </div>
        <div className="product-slider-container">
          <ProductCarousel productData={productData} />
        </div>
      </div>

      <Silder />
      <div className="top-row">
        <h2 className="row-title">Spnsored</h2>
        <button className="top-button">View All</button>
      </div>
      <SlickProductSlider productData={productData} />
      <div className="top-row">
        <h2 className="row-title">Explore By Categories</h2>
      </div>
      <CategorySlider />
      <div className="top-row">
        <h2 className="row-title">How it Works</h2>
      </div>
      <Silder />
      <div className="top-row">
        <h2 className="row-title">Tell Us More</h2>
      </div>
      <HomeCards />
    </>
  );
};

export default Home;
