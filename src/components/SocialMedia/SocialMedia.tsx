import React from "react";
import { Button, Row } from "react-bootstrap";
import {
  FaUser,
  FaFacebook,
  FaGoogle,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <Row className="mb-2">
        <div className="d-flex justify-content-left mt-3">
          <a href="#" className="mr-1 icon facebook ">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="mr-1 icon twitter ">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" className="mr-1 icon linkedIn ">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="mr-1 icon pinterest ">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </Row>
    </div>
  );
};

export default SocialMedia;
