import React from "react";
import "./PageLoader.scss";
import { Modal } from "react-bootstrap";
const PageLoader = (props: any) => {
  return (
    <Modal show={props.show} className="full-screen-modal">
      <div className="container">
        <div className="type7">
          <div className="wrapper">
            <div className="ball1"></div>
            <div className="ball2"></div>
            <div className="ball3"></div>
            <div className="ball4"></div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default PageLoader;
