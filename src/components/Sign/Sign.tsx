import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./Sign.css";

const Sign = () => {
  const [signInClicked, setSignInClicked] = React.useState(true);
  return (
    <>
      <div className="App mt-5">
        <Container className="mt-3">
          <Row className="justify-content-center">
            <Col xs={7}>
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
    </>
  );
};
export default Sign;
