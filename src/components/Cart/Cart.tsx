import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Col, Container, Row } from "react-bootstrap";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  count: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(existingCart);
  }, []);
 
  var total:number = 0 
  for(var cartItem of cartItems ){
    var count:number = cartItem.count;
    var price:number = cartItem.price;
    total = total + (count * price);
  }


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
            <div className="col-md-3 d-flex justify-content-around">
              <input
                type="text"
                value={product.count}
                className="form-control text-center w-25 "
              />
            </div>
          </div>
        ))}
        <button>Checkout ${Math.round(total)} </button>
      </Container>
    </>
  );
};

export default Cart;
