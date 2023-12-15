import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ProductTabs from "../../components/Tabs/ProductTabs";
import ProductCarousel from "../../components/Caraousal/ProductCarousel";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, [productId]);
  console.log(productData);
  return (
    <>
      <Container className="product-container">
        {productData ? (
          <>
            <Row className="mb-5">
              <Col md={6} className="product-img">
                <img src={productData.image} alt="{productData.title}" />
              </Col>
              <Col className="product-data">
                <p>{productData.category}</p>
                <h2>{productData.title}</h2>
                <p>{productData.description}</p>
                <h3>Price: $ {productData.price} </h3>
                <p>Rating:{productData.rating.rate}</p>
                {/* <Link to={"/cart"} className="btn btn-success">
                  Buy Now
                </Link> */}
              </Col>
            </Row>
          </>
        ) : (
          <div>Loading....</div>
        )}
        <ProductTabs />
      </Container>
    </>
  );
};

export default Product;
