import React, { useState } from "react";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import "./SignIn.css";
import { FaUser, FaKey, FaFacebook, FaGoogle } from "react-icons/fa";
import EcomDataService from "../../services/api.service";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../app/slice/authSlice";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const SignIn = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const pp = useSelector((state) => state);
  console.log("ppp", pp);

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
    console.log("user", inputEmail, inputPassword, rememberPassword);
    // EcomDataService.userLogin({
    //   username: inputEmail, // "mor_2314"
    //   password: inputPassword, // "83r5^_"
    // })
    //   .then((res) => {
    //     localStorage.setItem("isUserLog", "true");
    //     localStorage.setItem("authJWT", res.data.token);
    //     if (rememberPassword) {
    //       localStorage.setItem("ecomEmail", inputEmail);
    //       localStorage.setItem("ecomPassword", inputPassword);
    //     }
    //     navigate("/");
    //   })
    //   .catch(() => {
    //     alert("please enter valid email and password");
    //   });

    dispatch(loginUser({ inputEmail, inputPassword }));
  };

  const handlePassword = () => {};

  return (
    <div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="h4 mt-2 text-center mb-4">Sign In</div>
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
                boxShadow: "none",
                height: "100%",
              }}
              className="rounded-0 mx-0 "
              type="text"
              value={inputEmail}
              placeholder="Type Email Address *"
              onChange={(e) => setInputEmail(e.target.value)}
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
                height: "100%",
              }}
              type="password"
              value={inputPassword}
              placeholder="Type Password *"
              onChange={(e) => setInputPassword(e.target.value)}
              required
              className="rounded-0 mx-0 "
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
            />
            <Button
              className="text-muted px-0"
              variant="link"
              onClick={handlePassword}
            >
              Forgot password?
            </Button>
          </div>
        </Form.Group>
        <Button
          className="w-100 rounded-0 mb-4 mt-4"
          variant="primary"
          type="submit"
        >
          Sign In
        </Button>
        <div className="h4 mt-2 text-center mb-4">--OR--</div>
        <div className="h6 mt-2 text-center mb-4">
          Sign in with social media
        </div>
        <div className="d-flex justify-content-center">
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
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
