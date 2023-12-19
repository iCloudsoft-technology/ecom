import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Col, Container, Modal, Row } from "react-bootstrap";
import axios from "axios";
import { NavigationType, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EcomDataService from "./../../services/api.service";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  count: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [responseUrl, setResponseUrl] = useState<string>("");

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(existingCart);

    // Calculate and set the total only once when the component mounts
    calculateTotal(existingCart);
  }, []);

  const calculateTotal = (items: Product[]) => {
    let total = 0;
    for (const cartItem of items) {
      const count = cartItem.count;
      const price = cartItem.price;
      total += count * price;
    }
    setCartTotal(total);
  };

  const handleCheckout = async () => {
    const response = EcomDataService.cartPost(cartTotal);
    response
      .then((response) => {
        console.log("response", response.data);
        const data = response.data;
        const url = data.substring(9);
        setResponseUrl(url);
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Container className="bg-light mt-5 p-4 cart-container">
        <h2>Cart</h2>

        <div className="row d-flex align-items-center mb-2 bg-white">
          <div className="col-md-2">
            <h3>Image</h3>
          </div>
          <div className="col-md-4">
            <h3>Title</h3>
          </div>
          <div className="col-md-2">
            <h3>Price</h3>
          </div>
          <div className="col-md-3">
            <h3>Quantity</h3>
          </div>
        </div>
        {cartItems.map((product) => (
          <div className="row d-flex align-items-center mb-2 bg-white">
            <div className="col-md-2">
              <h5 className="text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  width="50"
                  height="50"
                />
              </h5>
            </div>
            <div className="col-md-4">
              <h5 className="text-left">{product.title}</h5>
            </div>

            <div className="col-md-2">
              <h5 className="text-center">$ {product.price} </h5>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <button className="btn btn-primary">-</button>
              <input
                type="text"
                value={product.count}
                className="form-control text-center w-25 ms-2 me-2"
              />
              <button className="btn btn-primary">+</button>
            </div>
          </div>
        ))}
        <div className="total-container">
          <h3>Total - ${Math.round(cartTotal)}</h3>
          <button
            className="btn btn-success checkout-button"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>

        {/* Modal to display the response URL */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Checkout Response</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              title="PayPal Checkout"
              src={responseUrl}
              width="100%"
              height="400px"
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={handleCloseModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Cart;