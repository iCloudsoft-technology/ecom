import React, { useEffect, useState } from "react";
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
  FaMailBulk,
  FaVoicemail,
  FaMailchimp,
} from "react-icons/fa";
import PageLoader from "../PageLoader/PageLoader";
import StepForm from "../StepForm/stepForm";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [selectedOption, setSelectedOption] = React.useState("Please Select");
  const [showLoader, setShowLoader] = React.useState(false);
  useEffect(() => {
    setShowLoader((state) => true);
    setTimeout(() => {
      setShowLoader((state) => false);
    }, 500);
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // write API call
    console.log(
      "contact",
      selectedOption,
      inputName,
      inputEmail,
      inputNumber,
      inputMessage
    );
  };

  return (
    <div>
      <PageLoader show={showLoader} />
      <Row style={{ width: "90%", margin: "auto", textAlign: "left" }}>
        <h1 className="title">We'd love to hear from you</h1>
        <div className="title2">
          NB: For enquiries that need the attention of a specific merchant or
          NPO, please contact or communicate with them Selectdirectly’ by using
          the relevant contact information or method found on their page, as
          this will help fast-track the service or after-sales support.
        </div>
      </Row>
      <Row style={{ width: "90%", margin: "auto" }}>
        <Col>
          <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
            <Form.Group className="mb-4 inputGroup" controlId="selectDropdown">
              <InputGroup className="inputGroupContact">
                <InputGroup.Text className="rounded-0 mx-0 inputIcon">
                  <FaUser />
                </InputGroup.Text>
                <Form.Select
                  className="rounded-0 mx-0 dropDown"
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
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-4" controlId="username">
              <InputGroup className="inputGroupContact">
                <InputGroup.Text className="rounded-0 mx-0 inputIcon">
                  <FaUser />
                </InputGroup.Text>
                <Form.Control
                  className="rounded-0 mx-0 inputBoxContact"
                  type="text"
                  value={inputName}
                  placeholder="Name *"
                  onChange={(e) => setInputName(e.target.value)}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-4" controlId="phoneNumber">
              <InputGroup className="inputGroupContact">
                <InputGroup.Text className="rounded-0 mx-0 inputIcon">
                  <FaPhone />
                </InputGroup.Text>
                <Form.Control
                  className="rounded-0 mx-0 inputBoxContact"
                  type="number"
                  value={inputNumber}
                  placeholder="Phone Number *"
                  onChange={(e) => setInputNumber(e.target.value)}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-4" controlId="email">
              <InputGroup className="inputGroupContact">
                <InputGroup.Text className="rounded-0 mx-0 inputIcon">
                  <FaUser />
                </InputGroup.Text>
                <Form.Control
                  className="rounded-0 mx-0 inputBoxContact"
                  type="email"
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
                  color: "darkgray",
                  backgroundColor: "#f3f8fc",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "none";
                  e.target.style.borderColor = "rgb(230, 228, 228)";
                }}
                className="rounded-0 mx-0 textArea"
                type="text"
                value={inputMessage}
                placeholder="Your Message *"
                onChange={(e) => setInputMessage(e.target.value)}
                required
              />
            </Form.Group>
            <Col xs="auto" className="text-start">
              <Button className="sendM" variant="primary" type="submit">
                Send Message
              </Button>
            </Col>
          </Form>
        </Col>
        <Col>
          <Row className="ContactI">
            <div className="d-flex" style={{ height: "90px" }}>
              <div className="emailIcon">
                <i className="fa-solid fa-envelope text-white fs-3"></i>
              </div>
              <div>
                <div>
                  <strong className="email">Email: </strong>
                </div>
                <div>
                  <a className="emailId" href="mailto:info@cangelx.com">
                    info@cangelx.com
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex" style={{ height: "90px" }}>
              <div className="emailIcon">
                <i className="fa-solid fa-envelope text-white fs-3"></i>
              </div>
              <div>
                <div>
                  <strong className="email">Adverts(For ads inquiries):</strong>
                </div>
                <div>
                  <a className="emailId" href="mailto:ads@cangelx.com">
                    ads@cangelx.com
                  </a>
                </div>
              </div>
            </div>
          </Row>
          <Row className="ContactFindUs"> Find Us Here :</Row>
          <Row>
            <div className="d-flex justify-content-left">
              <Button
                variant="primary"
                onClick={() => {
                  window.open("https://www.facebook.com/", "_blank");
                }}
                className="mediaIcon"
              >
                <FaFacebook />
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  window.open("https://myaccount.google.com/", "_blank");
                }}
                className="mediaIcon"
              >
                <FaGoogle />
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  window.open("https://twitter.com/", "_blank");
                }}
                className="mediaIcon"
              >
                <FaTwitter />
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  window.open("https://www.instagram.com/", "_blank");
                }}
                className="mediaIcon"
              >
                <FaInstagram />
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  window.open("https://www.youtube.com/", "_blank");
                }}
                className="mediaIcon"
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
