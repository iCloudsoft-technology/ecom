import React, { useEffect, useState } from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const CategoryPage: React.FC = () => {
  const [category, setCategory] = useState<Product[]>([]);
  const [cartData, setCartData] = useState<any>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);

  const handleClick = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Hero />
      <Container className="mt-5">
        <Row className="carousel-container">
          {category.map((product) => (
            <Col key={product.id} md={4}>
              <Card className="carousel-card mb-3">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>

                  <Card.Text className="product-price">
                    <span>Price: ${product.price}</span>
                    <p>
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-primary"
                        onClick={() => handleClick(product)}
                      >
                        Add to Cart
                      </Link>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CategoryPage;
