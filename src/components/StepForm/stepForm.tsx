import React, { useEffect, useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import { Form, Button, Modal } from "react-bootstrap";
import { FaAddressBook } from "react-icons/fa";
import { useSelector } from "react-redux";
import SignPopUp from "../SignPopUp/SignPopUp";
import { Link } from "react-router-dom";
import "./stepForm.css";
import EcomDataService from "../../services/api.service";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  count: number;
}
const StepForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [step, setStep] = useState(1);
  const user: any = useSelector((state) => state);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [responseUrl, setResponseUrl] = useState<string>("");
  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(existingCart);
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

  const handleCheckboxChange = () => {
    setShipToDifferentAddress(!shipToDifferentAddress);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
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
      {!!user.auth.isUserLog || true ? (
        <div>
          <Row
            style={{
              marginLeft: "5px",
              marginTop: "70px",
              marginBottom: "70px",
            }}
          >
            {step == 1 && (
              <Col
                style={{
                  border: "1px solid #e9ecef",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  width: "65vw",
                  flex: "none",
                  paddingBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "#2866bc",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid white", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "180px",
                      backgroundColor: "#2866bc",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>1</div>
                    <div>Address</div>
                    <div>
                      <FaAddressBook
                        style={{ color: "white", fontSize: "1.5em" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid #2866bc", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "#e9ecef",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid white", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "180px",
                      backgroundColor: "#e9ecef",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>2</div>
                    <div>Order</div>
                    <div>
                      <i className="fas fa-dolly text-white fs-3"></i>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid #e9ecef", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "#e9ecef",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid white", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "180px",
                      backgroundColor: "#e9ecef",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>3</div>
                    <div>Payment</div>
                    <div>
                      <i className="far fa-credit-card text-white fs-3"></i>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid #e9ecef", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{
                    padding: "10px",
                    marginBottom: "20px",
                    textAlign: "center",
                    backgroundColor: "#558ed5",
                    borderRadius: "5px",
                  }}
                >
                  Personal Information
                </div>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group
                        controlId="name"
                        style={{ marginBottom: "30px" }}
                      >
                        <FormControl
                          type="text"
                          placeholder="Name"
                          style={{
                            backgroundColor: "#f3f8fc",
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col>
                    <Form>
                      <Form.Group
                        controlId="email"
                        style={{ marginBottom: "30px" }}
                      >
                        <FormControl
                          type="text"
                          placeholder="Email"
                          style={{
                            backgroundColor: "#f3f8fc",
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row
                  style={{
                    backgroundColor: "#eaeded",
                    padding: "20px",
                    borderRadius: "15px",
                    minHeight: "100px",
                    marginLeft: "0px",
                    marginRight: "0px",
                  }}
                >
                  <Button
                    variant="primary"
                    style={{
                      width: "155px",
                      backgroundColor: "#558ed5",
                      height: "30px",
                      padding: "0px",
                    }}
                    onClick={handleShowModal}
                  >
                    Saved Addresses
                  </Button>
                  {showModal && <Row>Address</Row>}
                </Row>
                <Row
                  style={{
                    padding: "20",
                    marginTop: "25px",
                    marginLeft: "15px",
                  }}
                >
                  @ Billing Details
                </Row>
                <hr />
                <Row>
                  <Form onSubmit={() => setStep(2)}>
                    <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
                      <Col md={6}>
                        <Form.Group
                          controlId="formShipToAddress"
                          style={{ marginBottom: "10px" }}
                        >
                          <Form.Control
                            as="select"
                            required
                            style={{
                              height: "45px",
                              backgroundColor: "#f3f8fc",
                            }}
                          >
                            <option>Home</option>
                            <option>Work</option>
                            <option>Other</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group
                          controlId="formName"
                          style={{ marginBottom: "10px" }}
                        >
                          <Form.Control
                            style={{
                              height: "45px",
                              backgroundColor: "#f3f8fc",
                            }}
                            type="text"
                            placeholder="Enter your name"
                            required
                          />
                        </Form.Group>

                        <Form.Group
                          controlId="formMobileNumber"
                          style={{ marginBottom: "10px" }}
                        >
                          <Form.Control
                            style={{
                              height: "45px",
                              backgroundColor: "#f3f8fc",
                            }}
                            type="tel"
                            placeholder="Enter your mobile number"
                          />
                        </Form.Group>

                        <Form.Group
                          controlId="formEmail"
                          style={{ marginBottom: "10px" }}
                        >
                          <Form.Control
                            style={{
                              height: "45px",
                              backgroundColor: "#f3f8fc",
                            }}
                            type="email"
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group
                          controlId="formAddress"
                          style={{ marginBottom: "10px" }}
                        >
                          <Form.Control
                            style={{
                              height: "45px",
                              backgroundColor: "#f3f8fc",
                            }}
                            type="text"
                            placeholder="Enter your address"
                          />
                        </Form.Group>

                        <Form.Group
                          controlId="formCountry"
                          style={{ marginBottom: "10px" }}
                        >
                          <Form.Control
                            as="select"
                            style={{
                              height: "45px",
                              backgroundColor: "#f3f8fc",
                            }}
                          >
                            <option>United States</option>
                            <option>Canada</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group
                          controlId="formCity"
                          style={{ marginBottom: "10px" }}
                        >
                          <Form.Control
                            style={{
                              height: "45px",
                              backgroundColor: "#f3f8fc",
                            }}
                            type="text"
                            placeholder="Enter your city"
                          />
                        </Form.Group>

                        <Form.Group
                          controlId="formPincode"
                          style={{ marginBottom: "10px" }}
                        >
                          <Form.Control
                            style={{
                              height: "45px",
                              backgroundColor: "#f3f8fc",
                            }}
                            type="text"
                            placeholder="Enter your pincode"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group
                      controlId="formShipToDifferentAddress"
                      style={{
                        marginTop: "16px",
                        textAlign: "left",
                        marginLeft: "5px",
                      }}
                    >
                      <Form.Check
                        style={{ fontWeight: "bold", fontSize: "16px" }}
                        type="checkbox"
                        label="Ship to a Different Address?"
                        checked={shipToDifferentAddress}
                        onChange={handleCheckboxChange}
                      />
                    </Form.Group>

                    {shipToDifferentAddress && (
                      <Row
                        style={{
                          backgroundColor: "#eaeded",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          paddingLeft: "3px",
                          paddingRight: "3px",
                          borderRadius: "15px",
                          marginLeft: "0px",
                          marginRight: "0px",
                        }}
                      >
                        <Col>
                          <Form.Group
                            controlId="formNewName"
                            style={{ marginBottom: "10px" }}
                          >
                            <Form.Control
                              style={{
                                height: "45px",
                                backgroundColor: "#f3f8fc",
                              }}
                              type="text"
                              placeholder="Enter new name"
                            />
                          </Form.Group>

                          <Form.Group
                            controlId="formNewNumber"
                            style={{ marginBottom: "10px" }}
                          >
                            <Form.Control
                              style={{
                                height: "45px",
                                backgroundColor: "#f3f8fc",
                              }}
                              type="tel"
                              placeholder="Enter new number"
                            />
                          </Form.Group>
                          <Form.Group controlId="formNewAddress">
                            <Form.Control
                              style={{
                                height: "45px",
                                backgroundColor: "#f3f8fc",
                              }}
                              type="text"
                              placeholder="Enter new address"
                            />
                          </Form.Group>
                        </Col>

                        <Col>
                          <Form.Group
                            controlId="formNewCountry"
                            style={{ marginBottom: "10px" }}
                          >
                            <Form.Control
                              as="select"
                              style={{
                                height: "45px",
                                backgroundColor: "#f3f8fc",
                              }}
                            >
                              <option>United States</option>
                              <option>Canada</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group
                            controlId="formNewCity"
                            style={{ marginBottom: "10px" }}
                          >
                            <Form.Control
                              style={{
                                height: "45px",
                                backgroundColor: "#f3f8fc",
                              }}
                              type="text"
                              placeholder="Enter new city"
                            />
                          </Form.Group>

                          <Form.Group controlId="formNewPincode">
                            <Form.Control
                              style={{
                                height: "45px",
                                backgroundColor: "#f3f8fc",
                              }}
                              type="text"
                              placeholder="Enter new pincode"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    )}
                    <Form>
                      <Form.Group
                        controlId="formBasicPassword"
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                      >
                        <FormControl
                          type="text"
                          placeholder="Note"
                          style={{ backgroundColor: "#f3f8fc" }}
                        />
                      </Form.Group>
                    </Form>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{
                        backgroundColor: "#558ed5",
                        height: "35px",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        marginRight: "20px",
                        width: "175px",
                      }}
                    >
                      Continue
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{
                        backgroundColor: "#558ed5",
                        height: "35px",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        width: "175px",
                      }}
                    >
                      Save and Continue
                    </Button>
                  </Form>
                </Row>
              </Col>
            )}
            {step == 2 && (
              <Col
                style={{
                  border: "1px solid #e9ecef",
                  padding: "20px",
                  width: "65vw",
                  flex: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "#2866bc",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid white", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "180px",
                      backgroundColor: "#2866bc",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>1</div>
                    <div>Address</div>
                    <div>
                      <FaAddressBook
                        style={{ color: "white", fontSize: "1.5em" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid #2866bc", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "#2866bc",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid white", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "180px",
                      backgroundColor: "#2866bc",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>2</div>
                    <div>Order</div>
                    <div>
                      <FaAddressBook
                        style={{ color: "white", fontSize: "1.5em" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid #2866bc", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "#e9ecef",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid white", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "180px",
                      backgroundColor: "#e9ecef",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>3</div>
                    <div>Payment</div>
                    <div>
                      <FaAddressBook
                        style={{ color: "white", fontSize: "1.5em" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid #e9ecef", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                </div>
                <Row>
                  {cartItems.map((product) => (
                    <div className="row d-flex align-items-center mb-2 bg-white">
                      <div className="col-md-2" style={{ marginRight: "20px" }}>
                        <h5 className="text-center">
                          <img
                            src={product.image}
                            alt={product.title}
                            width="135"
                            height="135"
                            style={{ padding: "4px" }}
                          />
                        </h5>
                      </div>
                      <div className="col-md-8">
                        <h5 className="text-left fs-20 fw-600">
                          {product.title}
                        </h5>
                        <h5 className="text-left">
                          <span>Price : </span> {product.price}
                        </h5>
                        <h5 className="text-left">
                          <span>Quantity : </span>
                          {product.count}{" "}
                        </h5>
                        <h5 className="text-left">
                          <span>Total Price : </span>{" "}
                          {product.count * product.price}
                        </h5>
                      </div>
                    </div>
                  ))}

                  <Row>
                    <hr />
                    <Form>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={() => setStep(1)}
                        style={{
                          backgroundColor: "#558ed5",
                          height: "35px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          marginRight: "20px",
                          width: "175px",
                          left: "0px",
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={() => setStep(3)}
                        style={{
                          backgroundColor: "#558ed5",
                          height: "35px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          width: "175px",
                        }}
                      >
                        Continue
                      </Button>
                    </Form>
                  </Row>
                </Row>
              </Col>
            )}
            {step == 3 && (
              <Col
                style={{
                  border: "1px solid #e9ecef",
                  padding: "20px",
                  width: "65vw",
                  flex: "none",
                }}
                md={9}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "#2866bc",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid white", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "180px",
                      backgroundColor: "#2866bc",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>1</div>
                    <div>Address</div>
                    <div>
                      <FaAddressBook
                        style={{ color: "white", fontSize: "1.5em" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid #2866bc", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "#2866bc",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid white", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "180px",
                      backgroundColor: "#2866bc",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>2</div>
                    <div>Order</div>
                    <div>
                      <FaAddressBook
                        style={{ color: "white", fontSize: "1.5em" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid #2866bc", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "#2866bc",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid white", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "180px",
                      backgroundColor: "#2866bc",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>3</div>
                    <div>Payment</div>
                    <div>
                      <FaAddressBook
                        style={{ color: "white", fontSize: "1.5em" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "70px",
                      width: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "35px solid transparent",
                        borderBottom: "35px solid transparent",
                        borderLeft: "20px solid #2866bc", // Change borderRight to borderLeft
                      }}
                    ></div>
                  </div>
                </div>
                <Row
                  style={{
                    marginLeft: "0px",
                    paddingBottom: "5px",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "20px",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                    textTransform: "uppercase",
                    color: "#2866bc",
                  }}
                >
                  Shopping Info
                </Row>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    fontSize: "18px",
                    marginBottom: "5px",
                  }}
                >
                  <div className="mx-2">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div>user name</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    fontSize: "18px",
                    marginBottom: "5px",
                  }}
                >
                  <div className="mx-2">
                    <i className="fa-solid fa-location "></i>
                  </div>
                  <div>user address</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    fontSize: "18px",
                    marginBottom: "5px",
                  }}
                >
                  <div className="mx-2">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>user mobile</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    fontSize: "18px",
                    marginBottom: "5px",
                  }}
                >
                  <div className="mx-2">
                    <i className="fa-solid fa-envelope "></i>
                  </div>
                  <div>user mail</div>
                </div>

                <Row
                  style={{
                    marginLeft: "0px",
                    paddingBottom: "5px",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "20px",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                    textTransform: "uppercase",
                    color: "#2866bc",
                  }}
                >
                  Payment Info
                </Row>
                <Row>
                  <Form>
                    <Form.Check
                      style={{ float: "left" }}
                      type="radio"
                      label="PayPal"
                      name="radioGroup"
                      checked={true}
                    />
                  </Form>
                </Row>
                <Row>
                  <Form>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => setStep(2)}
                      style={{
                        backgroundColor: "#558ed5",
                        height: "35px",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        marginRight: "20px",
                        width: "175px",
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleCheckout}
                      style={{
                        backgroundColor: "#558ed5",
                        height: "35px",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        width: "175px",
                      }}
                    >
                      Continue
                    </Button>
                  </Form>
                </Row>
              </Col>
            )}
            <Col md={3}>
              <div className="col-md-12">
                <div className="order-box">
                  <h4 className="step-form-price-details">Price Details</h4>
                  <p className="price-row">
                    <span>Total Mrp</span>
                    <span>{cartTotal}</span>
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
                    <span>{cartTotal}</span>
                  </p>

                  <Link
                    to="/checkout"
                    className="checkout"
                    onClick={handleCheckout}
                  >
                    Place Order
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
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
        </div>
      ) : (
        <SignPopUp />
      )}
    </>
  );
};

export default StepForm;
