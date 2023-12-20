import React from "react";
import "./PageLoader.scss";
import { Modal } from "react-bootstrap";
const PageLoader = (props: any) => {
  return (
    <section className="page-loader">
      <Modal show={props.show} className="full-screen-modal">
        <div className="container1">
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
    </section>
  );
};
export default PageLoader;
