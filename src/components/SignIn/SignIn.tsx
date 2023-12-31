import React, { useEffect, useState } from "react";
import { Form, Button, Alert, InputGroup, Spinner } from "react-bootstrap";
import "./SignIn.css";
import { FaUser, FaKey, FaFacebook, FaGoogle } from "react-icons/fa";
import EcomDataService from "../../services/api.service";
import { useNavigate } from "react-router-dom";
import { getAllUsers, loginUser } from "../../app/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { createKeywordTypeNode } from "typescript";
import AlertPopUp from "../AlertPopUp/AlertPopUp";
import PageLoader from "../PageLoader/PageLoader";

const SignIn = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showErroAlert, setShowErrorAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const user: any = useSelector((state) => state);
  console.log("user", loading);

  React.useEffect(() => {
    // for getting user from local storage if user remembered
    const localStorageEmail = localStorage.getItem("ecomEmail");
    // incript the password before storing
    const localStoragePassword = localStorage.getItem("ecomPassword");
    if (localStorageEmail && localStoragePassword) {
      setInputEmail(localStorageEmail);
      setInputPassword(localStoragePassword);
    }
  }, []);

  const handleRememberPasswordChange = () => {
    setRememberPassword(!rememberPassword);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const allUsers = user.auth.allUsers?.filter(
      // const allUsers = [{ email: "abc@123", password: "123" }].filter(
      (item: any) => item.email == inputEmail && item.password == inputPassword
    );
    if (!allUsers.length) {
      setShowErrorAlert(true);
      return;
    }
    if (allUsers.length > 0 && rememberPassword) {
      localStorage.setItem("ecomEmail", inputEmail);
      localStorage.setItem("ecomPassword", inputPassword);
    }
    allUsers && localStorage.setItem("user", JSON.stringify(allUsers));
    localStorage.setItem("userLog", "true");
    await dispatch(loginUser({ inputEmail, inputPassword, allUsers }));
    setLoading(false);
  };

  const handlePassword = () => {};

  return (
    <div>
      <Form className="logInArea" onSubmit={handleSubmit}>
        <div className="h4 header-area">Sign in Now</div>
        {/* {loading && (
          <AlertPopUp
            showAlert={true}
            setShowAlert={() => {}}
            variant="primary"
            message="Authenticating..."
            dismissible={false}
          />
        )} */}
        <AlertPopUp
          showAlert={showErroAlert}
          setShowAlert={setShowErrorAlert}
          variant="danger"
          message="Credentials do not match !"
          dismissible={true}
        />
        <Form.Group className="mb-4" controlId="email">
          <InputGroup className="inputGroup">
            <InputGroup.Text className="rounded-0 mx-0 inputIconS">
              <FaUser />
            </InputGroup.Text>
            <Form.Control
              className="rounded-0 mx-0 inputBox"
              type="text"
              value={inputEmail}
              placeholder="Type Email Address *"
              onChange={(e) => setInputEmail(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <InputGroup className="inputGroup">
            <InputGroup.Text className="rounded-0 mx-0 inputIconS">
              <FaKey />
            </InputGroup.Text>
            <Form.Control
              type="password"
              value={inputPassword}
              placeholder="Type Password *"
              onChange={(e) => setInputPassword(e.target.value)}
              required
              className="rounded-0 mx-0 inputBox"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-4" controlId="checkbox">
          <div className="d-flex justify-content-between align-items-center">
            <Form.Check
              type="checkbox"
              label="Remember Password"
              checked={rememberPassword}
              onChange={handleRememberPasswordChange}
              className="rememberPass"
            />
            <Button
              className="text-muted px-0 forgotPass"
              variant="link"
              onClick={handlePassword}
            >
              Forgot password?
            </Button>
          </div>
        </Form.Group>
        <Button className="rounded-0 signInBtn" variant="primary" type="submit">
          Sign In
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
    </div>
  );
};

export default SignIn;
