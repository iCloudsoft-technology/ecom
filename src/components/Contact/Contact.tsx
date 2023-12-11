import React, { useState } from "react";
import { Form, Button, Alert, InputGroup, Row, Col } from "react-bootstrap";
import "./Contact.css";
import {
  FaUser,
  FaFacebook,
  FaGoogle,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [selectedOption, setSelectedOption] = React.useState("Please Select");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("contact", inputName, inputEmail, inputNumber, inputMessage);
  };

  const handlePassword = () => {};

  return (
    <div>
      <Row style={{ width: "90%", margin: "auto", textAlign: "left" }}>
        <h1>We'd love to hear from you</h1>
        <div className="just">
          NB: For enquiries that need the attention of a specific merchant or
          NPO, please contact or communicate with them directly’ by using the
          relevant contact information or method found on their page, as this
          will help fast-track the service or after-sales support.
        </div>
      </Row>
      <Row style={{ width: "90%", margin: "auto" }}>
        <Col>
          <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="selectDropdown">
              <Form.Select
                style={{
                  color: "darkgray",
                  backgroundColor: "#f3f8fc",
                }}
                className="rounded-0 mx-0"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="Please Select"> Please Select</option>
                <option value="General Support">General Support</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Advertisement Enquiries">
                  Advertisement Enquiries
                </option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
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
                  value={inputName}
                  placeholder="Name *"
                  onChange={(e) => setInputName(e.target.value)}
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
                  placeholder="Phone Number *"
                  onChange={(e) => setInputNumber(e.target.value)}
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
                  placeholder="Email Address *"
                  onChange={(e) => setInputEmail(e.target.value)}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-4" controlId="message">
              <Form.Control
                as="textarea"
                rows={5}
                style={{
                  borderLeft: "none", // Remove right border
                  color: "darkgray", // Text color
                  backgroundColor: "#f3f8fc",
                }}
                className="rounded-0 mx-0"
                type="text"
                value={inputMessage}
                placeholder="Your Message *"
                onChange={(e) => setInputMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Col xs="auto" className="text-start">
              <Button
                className="w-40 rounded-5 mb-4 mt-4"
                variant="primary"
                type="submit"
              >
                Send Message
              </Button>
            </Col>
          </Form>
        </Col>
        <Col>
          <Row style={{ height: "50%", backgroundColor: "#558ed5" }}>EMAIL</Row>
          <Row> Find Us Here :</Row>
          <Row>
            <div className="d-flex justify-content-left">
              <Button
                variant="primary"
                className="mr-2"
                onClick={() => {}}
                style={{ borderRadius: "500%", margin: "10px" }}
              >
                <FaFacebook />
              </Button>
              <Button
                variant="danger"
                onClick={() => {}}
                style={{ borderRadius: "500%", margin: "10px" }}
              >
                <FaGoogle />
              </Button>
              <Button
                variant="danger"
                onClick={() => {}}
                style={{ borderRadius: "500%", margin: "10px" }}
              >
                <FaInstagram />
              </Button>
              <Button
                variant="danger"
                onClick={() => {}}
                style={{ borderRadius: "500%", margin: "10px" }}
              >
                <FaTwitter />
              </Button>
              <Button
                variant="danger"
                onClick={() => {}}
                style={{ borderRadius: "500%", margin: "10px" }}
              >
                <FaYoutube />
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
