import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategorySlider.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import categories from "../NavbarNew/categoriesData";

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

const CategorySlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {categories.map((product) => (
        <Col className="mb-4 category-card">
          <Link to="#">
            <Card className="border-0 m-1 pt-3">
              <Card.Img src={product.img} />
              <Card.Body>
                <Card.Text className="product-title">{product.name}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Slider>
  );
};

export default CategorySlider;
