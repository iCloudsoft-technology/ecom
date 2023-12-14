import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./Home.css";

import Hero from "../../components/Hero/Hero";
import ProductCarousel from "../../components/Caraousal/ProductCarousel";

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
  console.log(productData);
  return (
    <>
      <Hero />
      <ProductCarousel productData={productData} />
    </>
  );
};

export default Home;
