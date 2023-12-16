import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./SignPopUp.css";
import SignIn from "../SignInPage/SignIn";
import SignUp from "../SignUp/SignUp";

const SignPopUp = () => {
  const [signInClicked, setSignInClicked] = React.useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Open Popup
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Body>
          <div className="App">
            <Container className="py-0">
              <Row className="justify-content-center main">
                <Col sm={12}>
                  <Button
                    variant="primary"
                    className="rounded-0 mx-0"
                    style={{
                      width: "50%",
                      backgroundColor: signInClicked ? "#2866bc" : "#143250",
                      border: "none",
                      height: "40px",
                    }}
                    onClick={() => setSignInClicked(true)}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="primary"
                    className="rounded-0 mx-0"
                    style={{
                      width: "50%",
                      backgroundColor: !signInClicked ? "#2866bc" : "#143250",
                      border: "none",
                      height: "40px",
                    }}
                    onClick={() => setSignInClicked(false)}
                  >
                    Sign Up
                  </Button>
                  {signInClicked ? <SignIn /> : <SignUp />}
                </Col>
              </Row>
            </Container>
          </div>
        </Modal.Body>
        <div className="cross" onClick={handleClose}>
          <FaTimes className="ml-1 pb-1 " />
        </div>
      </Modal>
    </Container>
  );
};

export default SignPopUp;
