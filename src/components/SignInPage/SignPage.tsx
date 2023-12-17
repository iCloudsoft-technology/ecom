import React, { useState } from "react";
import {
  Form,
  Button,
  Alert,
  InputGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./SignPage.css";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

const SignPage = () => {
  const [signInClicked, setSignInClicked] = React.useState(true);
  React.useEffect(() => {}, [signInClicked]);
  return (
    <div>
      <div className="App">
        <Container className="py-0">
          <Row className="justify-content-center main">
            <Col className="col-6">
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
              {signInClicked ? (
                <SignIn />
              ) : (
                <SignUp
                  setSignInClicked={setSignInClicked}
                  signInClicked={signInClicked}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SignPage;
