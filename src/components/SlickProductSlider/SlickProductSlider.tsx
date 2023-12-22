import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickProductSlider.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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

const SlickProductSlider: React.FC<ProductCarouselProps> = ({
  productData,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5, // Number of slides to show at a time
    slidesToScroll: 5, // Number of slides to scroll at a time
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 2,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {productData.map((product) => (
        <Col key={product.id} className="mb-4 product-card">
          <Link to={`/product/${product.id}`}>
            <Card className="carousel-card m-1 pt-3">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Text className="product-price">
                  <span>Price: ${product.price}</span>
                </Card.Text>
                <Card.Text className="product-title">{product.title}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Slider>
  );
};

export default SlickProductSlider;
