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
interface ProductGridProps {
  productData: Product[];
}
const ProductGrid: React.FC<ProductGridProps> = ({ productData }) => {
  const [dataGrid, setDataGrid] = useState<Product[]>(productData);

  return (
    <>
      <Container className="mt-5">
        <Row className="carousel-container">
          {dataGrid.map((product) => (
            <Col key={product.id} md={4}>
              <Card className="carousel-card mb-3">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>

                  <Card.Text className="product-price">
                    <span>Price: ${product.price}</span>
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

export default ProductGrid;
