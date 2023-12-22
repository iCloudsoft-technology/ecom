import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Col, Container, Modal, Row } from "react-bootstrap";
import axios from "axios";
import { Link, NavigationType, redirect } from "react-router-dom";
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
      <Container fluid className="mt-5">
        <div className="row">
          <div className="col-md-9">
            <table width="100%">
              <thead className="table-head">
                <tr>
                  <th>Product Name</th>
                  <th>Details</th>
                  <th>Unit Price</th>
                  <th>Coupon</th>
                  <th>Sub Total </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="product-row">
                    <td className="p-3">
                      <div className="item">
                        <img
                          src={item.image}
                          alt={item.title}
                          width="100"
                          height="auto"
                        />
                        <p>{item.title}</p>
                      </div>
                    </td>
                    <td>Sold By: Riviera@Montecasino</td>
                    <td>$ {item.price}</td>
                    <td>
                      <input type="text" className="coupoun-form" />
                      <input
                        type="button"
                        value="Apply"
                        className="apply-button"
                      />
                    </td>
                    <td>$ {item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-md-3">
            <div className="order-box">
              <h4 className="text-left">Price Details</h4>
              <p className="price-row">
                <span>Total Mrp</span>
                <span>${Math.round(cartTotal)}</span>
              </p>
              <p className="price-row">
                <span>Discount</span>
                <span>0</span>
              </p>
              <p className="price-row">
                <span>Tax</span>
                <span>0%</span>
              </p>
              <hr />
              <p className="price-row">
                <span>Total</span>
                <span>${Math.round(cartTotal)}</span>
              </p>

              <Link to="/checkout" className="checkout">
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;