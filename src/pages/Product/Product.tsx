import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ProductTabs from "../../components/Tabs/ProductTabs";
import ProductCarousel from "../../components/Caraousal/ProductCarousel";
import StarRating from "../../components/StartRating/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

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
  count: number;
}

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productData, setProductData] = useState<Product | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quntity, setQuantity] = useState(1);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, [productId]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleClick = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log(typeof existingCart);
    if (product.count === undefined) {
      product.count = 1;
    } else {
      product.count = product.count + 1;
    }
    var check: Boolean = true;
    for (var prod of existingCart) {
      if (prod.id === product.id) {
        prod.count = prod.count + 1;
        check = false;
      }
    }

    // for (var prod of existingCart) {
    //   console.log(prod.id, prod.count);
    // }

    if (check) {
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem("cart", JSON.stringify(existingCart));
    }
    alert("Product added to cart");
    setAddedToCart(true);
  };
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
                <h2>{productData.title}</h2>
                <div className="d-flex align-items-center mb-2">
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-success"
                    />
                  </span>
                  <span className="text-success mr-2 ml-2"> In Stock</span>
                  <span>
                    <StarRating rating={productData.rating.rate} />
                  </span>
                  <span className="ml-2">
                    {productData.rating.count} Review(s)
                  </span>
                </div>
                <h3>
                  <span className="product-price-title"> Price:</span>

                  <span className="product-price-price">
                    ${productData.price}
                  </span>
                </h3>
                <div className="quantity-container d-flex mb-4">
                  <button onClick={handleDecrement}>-</button>
                  <input type="text" className="col-1" value={quntity} />
                  <button onClick={handleIncrement}>+</button>
                </div>
                <button
                  className="add-to-cart"
                  onClick={() => handleClick(productData)}
                >
                  Add to Cart
                </button>

                {addedToCart && (
                  <span className="ml-2">
                    <Link to="/cart">View Cart</Link>
                  </span>
                )}
                <span>
                  <SocialMedia />
                </span>
                <span className="product-sku mt-4">
                  Product SKU: Cyw2253HN8
                </span>
              </Col>
            </Row>
          </>
        ) : (
          <div>Loading....</div>
        )}
      </Container>
      <ProductTabs productData={productData} />
    </>
  );
};

export default Product;
