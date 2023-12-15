import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import "./productCarousel.css";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}



interface ProductCarouselProps {
  productData: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ productData }) => {
  const itemsPerSlide = 5;

  const groupedProducts = productData.reduce(
    (acc: Product[][], product, index) => {
      const groupIndex = Math.floor(index / itemsPerSlide);
      if (!acc[groupIndex]) {
        acc[groupIndex] = [];
      }
      acc[groupIndex].push(product);
      return acc;
    },
    []
  );

  return (
    <Carousel data-bs-theme="dark" indicators={false}>
      {groupedProducts.map((group, index) => (
        <Carousel.Item key={index}>
          <Row className="carousel-container">
            {group.map((product) => (
              <Col key={product.id} md={2}>
                <Card className="carousel-card">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>

                    <Card.Text className="product-price">
                      <span>Price: ${product.price}</span>
                      <p>
                        <button className="btn btn-primary add-to-cart">
                          Add to Cart
                        </button>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
