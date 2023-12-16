import React, { useState } from "react";
import { Form, Button, Alert, InputGroup, Col } from "react-bootstrap";
import "./SignUp.css";
import { FaUser, FaKey, FaFacebook, FaGoogle, FaPhone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../app/slice/authSlice";

const SignUp = () => {
  const [inputUserFullName, setInputUserFullName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputCPassword, setInputCPassword] = useState("");
  const [rememberPolicy, setRememberPolicy] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch: any = useDispatch();

  const user: any = useSelector((state) => state);
  console.log("user", user.auth);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    console.log(
      `Username :${inputUserFullName}, Password :${inputPassword}`,
      inputEmail,
      inputNumber,
      inputCPassword,
      rememberPolicy
    );
    if (inputPassword === inputCPassword) {
      dispatch(
        signUpUser({
          firstname: inputUserFullName,
          lastname: inputUserFullName,
          email: inputEmail,
          phonenumber: inputNumber,
          password: inputPassword,
        })
      );
    } else {
      alert("Password and Confirm Password should be same");
    }
    setLoading(false);
  };

  const handleRememberPolicyChange = () => {
    setRememberPolicy(!rememberPolicy);
  };

  return (
    <>
      <Col>
        <Form
          className="shadow p-4 bg-white rounded"
          style={{ marginLeft: "-15px", marginRight: "-15px" }}
          onSubmit={handleSubmit}
        >
          <div className="h4 mt-2 text-center mb-4">Sign In</div>
          <Form.Group className="mb-4" controlId="userFullName">
            <InputGroup>
              <InputGroup.Text className="rounded-0 mx-0 inputIcon">
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
            <InputGroup>
              <InputGroup.Text className="rounded-0 mx-0 inputIcon">
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
            <InputGroup>
              <InputGroup.Text className="rounded-0 mx-0 inputIcon">
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
            <InputGroup>
              <InputGroup.Text className="rounded-0 mx-0 inputIcon">
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
            <InputGroup>
              <InputGroup.Text className="rounded-0 mx-0 inputIcon">
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
              />
            </div>
          </Form.Group>

          <Button
            className="w-100 rounded-0 mb-4 mt-4"
            variant="primary"
            type="submit"
            disabled={!rememberPolicy}
          >
            Register
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default SignUp;
