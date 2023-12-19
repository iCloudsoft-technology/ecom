import React, { useState } from "react";
import { Form, Button, Alert, InputGroup, Col } from "react-bootstrap";
import "./SignUp.css";
import { FaUser, FaKey, FaFacebook, FaGoogle, FaPhone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, signUpUser } from "../../app/slice/authSlice";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import AlertPopUp from "../AlertPopUp/AlertPopUp";
const SignUp = (props: any) => {
  const [inputUserFullName, setInputUserFullName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputCPassword, setInputCPassword] = useState("");
  const [rememberPolicy, setRememberPolicy] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErroAlert, setShowErrorAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const user: any = useSelector((state) => state);
  console.log("userrr", user.auth.loading);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(
      `Username :${inputUserFullName}, Password :${inputPassword}`,
      inputEmail,
      inputNumber,
      inputCPassword,
      rememberPolicy
    );
    if (!rememberPolicy) {
      setErrorMessage(
        "Please accept our Terms and Conditions & Privacy Policy."
      );
      setShowErrorAlert(true);
      return;
    } else if (inputUserFullName.length < 3) {
      setErrorMessage("The name must be at least 3 characters.");
      setShowErrorAlert(true);
      return;
    } else if (inputPassword.length < 6) {
      setErrorMessage("The password must be at least 6 characters.");
      setShowErrorAlert(true);
      return;
    } else if (inputPassword !== inputCPassword) {
      setErrorMessage("The password confirmation does not match.");
      setShowErrorAlert(true);
      return;
    } else {
      await dispatch(
        signUpUser({
          fullName: inputUserFullName,
          email: inputEmail,
          phonenumber: inputNumber,
          password: inputPassword,
        })
      );
      await dispatch(getAllUsers());
      props.setSignInClicked(!props.signInClicked);
    }
    setLoading(false);
  };

  const handleRememberPolicyChange = () => {
    setRememberPolicy(!rememberPolicy);
  };

  return (
    <>
      <Col>
        <Form className="logInAreaSP" onSubmit={handleSubmit}>
          <div className="h4 header-area">Sign up Now</div>
          {user.auth.loading && (
            <AlertPopUp
              showAlert={true}
              setShowAlert={() => {}}
              variant="primary"
              message="Authenticating..."
              dismissible={false}
            />
          )}
          <AlertPopUp
            showAlert={showErroAlert}
            setShowAlert={setShowErrorAlert}
            variant="danger"
            message={errorMessage}
            dismissible={true}
          />
          <Form.Group className="mb-4" controlId="userFullName">
            <InputGroup className="inputGroup">
              <InputGroup.Text className="rounded-0 mx-0 inputIconS">
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                className="rounded-0 mx-0 inputBox"
                type="text"
                value={inputUserFullName}
                placeholder="Full Name *"
                onChange={(e) => setInputUserFullName(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-4" controlId="email">
            <InputGroup className="inputGroup">
              <InputGroup.Text className="rounded-0 mx-0 inputIconS">
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                className="rounded-0 mx-0 inputBox"
                type="email"
                value={inputEmail}
                placeholder="Email Address *"
                onChange={(e) => setInputEmail(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4" controlId="phoneNumber">
            <InputGroup className="inputGroup">
              <InputGroup.Text className="rounded-0 mx-0 inputIconS">
                <FaPhone />
              </InputGroup.Text>
              <Form.Control
                className="rounded-0 mx-0 inputBox"
                type="number"
                value={inputNumber}
                placeholder="Phone Number"
                onChange={(e) => setInputNumber(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4" controlId="password">
            <InputGroup className="inputGroup">
              <InputGroup.Text className="rounded-0 mx-0 inputIconS">
                <FaKey />
              </InputGroup.Text>
              <Form.Control
                className="rounded-0 mx-0 inputBox"
                type="password"
                value={inputPassword}
                placeholder="Password *"
                onChange={(e) => setInputPassword(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4" controlId="confirmPassword">
            <InputGroup className="inputGroup">
              <InputGroup.Text className="rounded-0 mx-0 inputIconS">
                <FaKey />
              </InputGroup.Text>
              <Form.Control
                className="rounded-0 mx-0 inputBox"
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
              <Form.Check
                type="checkbox"
                label="Accept our Terms and Conditions & Privacy Policy"
                checked={rememberPolicy}
                onChange={handleRememberPolicyChange}
                className="policy"
              />
            </div>
          </Form.Group>

          <Button
            className="rounded-0 signUpBtn"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
          <div className="text-center">
            <span className="spanBefore">--</span>
            <span className="or">OR</span>
            <span className="spanAfter">--</span>
          </div>
          <div className="socialArea">Sign in with social media</div>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              onClick={() => {
                window.location.href =
                  "https://phpstack-1183211-4155182.cloudwaysapps.com/auth/facebook/";
              }}
              className="mediaIconS"
            >
              <FaFacebook />{" "}
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                window.location.href =
                  "https://phpstack-1183211-4155182.cloudwaysapps.com/auth/google";
              }}
              className="mediaIconS"
            >
              <FaGoogle />
            </Button>
          </div>
        </Form>
      </Col>
    </>
  );
};

export default SignUp;
