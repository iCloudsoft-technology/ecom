import React, { useState } from "react";
import { Form, Button, Alert, InputGroup, Col } from "react-bootstrap";
import "./SignUp.css";
import { FaUser, FaKey, FaFacebook, FaGoogle, FaPhone } from "react-icons/fa";

const SignUp = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputCPassword, setInputCPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    if (inputUsername !== "admin" || inputPassword !== "admin") {
      setShow(true);
    }
    setLoading(false);
  };

  const handlePassword = () => {};

  return (
    <>
      <Col>
        <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
          <div className="h4 mt-2 text-center mb-4">Sign In</div>
          <Form.Group className="mb-4" controlId="username">
            <InputGroup>
              <InputGroup.Text
                className="rounded-0 mx-0"
                style={{
                  borderRight: "none", // Remove right border
                  color: "blue", // Text color
                  backgroundColor: "#f3f8fc",
                }}
              >
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                style={{
                  borderLeft: "none", // Remove right border
                  color: "darkgray", // Text color
                  backgroundColor: "#f3f8fc",
                }}
                className="rounded-0 mx-0"
                type="text"
                value={inputUsername}
                placeholder="Type Full Name *"
                onChange={(e) => setInputUsername(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-4" controlId="email">
            <InputGroup>
              <InputGroup.Text
                className="rounded-0 mx-0"
                style={{
                  borderRight: "none", // Remove right border
                  color: "blue", // Text color
                  backgroundColor: "#f3f8fc",
                }}
              >
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                style={{
                  borderLeft: "none", // Remove right border
                  color: "darkgray", // Text color
                  backgroundColor: "#f3f8fc",
                }}
                className="rounded-0 mx-0"
                type="text"
                value={inputEmail}
                placeholder="Type Email Address *"
                onChange={(e) => setInputEmail(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4" controlId="phoneNumber">
            <InputGroup>
              <InputGroup.Text
                className="rounded-0 mx-0"
                style={{
                  borderRight: "none", // Remove right border
                  color: "blue", // Text color
                  backgroundColor: "#f3f8fc",
                }}
              >
                <FaPhone />
              </InputGroup.Text>
              <Form.Control
                style={{
                  borderLeft: "none", // Remove right border
                  color: "darkgray", // Text color
                  backgroundColor: "#f3f8fc",
                }}
                type="number"
                value={inputNumber}
                placeholder="Phone Number"
                onChange={(e) => setInputNumber(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4" controlId="password">
            <InputGroup>
              <InputGroup.Text
                className="rounded-0 mx-0"
                style={{
                  borderRight: "none", // Remove right border
                  color: "blue", // Text color
                  backgroundColor: "#f3f8fc",
                }}
              >
                <FaKey />
              </InputGroup.Text>
              <Form.Control
                style={{
                  borderLeft: "none", // Remove right border
                  color: "darkgray", // Text color
                  backgroundColor: "#f3f8fc",
                }}
                type="password"
                value={inputPassword}
                placeholder="Password *"
                onChange={(e) => setInputPassword(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4" controlId="password">
            <InputGroup>
              <InputGroup.Text
                className="rounded-0 mx-0"
                style={{
                  borderRight: "none", // Remove right border
                  color: "blue", // Text color
                  backgroundColor: "#f3f8fc",
                }}
              >
                <FaKey />
              </InputGroup.Text>
              <Form.Control
                style={{
                  borderLeft: "none", // Remove right border
                  color: "darkgray", // Text color
                  backgroundColor: "#f3f8fc",
                }}
                type="password"
                value={inputCPassword}
                placeholder="Confirm Password *"
                onChange={(e) => setInputCPassword(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-2" controlId="checkbox">
            <div className="d-flex justify-content-between align-items-left">
              <Form.Check type="checkbox" label="Remember Password" />
            </div>
          </Form.Group>

          <Button
            className="w-100 rounded-0 mb-4 mt-4"
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default SignUp;
