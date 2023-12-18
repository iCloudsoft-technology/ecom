import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./Home.css";

import Hero from "../../components/Hero/Hero";
import ProductCarousel from "../../components/Caraousal/ProductCarousel";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Silder from "../../components/Silder/Silder";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, []);

  return (
    <>
      <Hero />
      <ProductCarousel productData={productData} />
      <Silder />
      <ProductGrid productData={productData} />
    </>
  );
};

export default Home;
