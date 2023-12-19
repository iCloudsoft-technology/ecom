import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./AlertPopUp.css";
const AlertPopUp = (props: any) => {
  const [showAlert, setShowAlert] = useState(false);
  React.useEffect(() => {
    props.showAlert && setShowAlert(true);
  }, [props.showAlert]);
  const handleClose = () => {
    setShowAlert(false);
    props.setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <Alert
          variant={props.variant}
          onClose={handleClose}
          //   dismissible={props.dismissible}
          style={{ textAlign: "left" }}
        >
          {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
          <p style={{ fontSize: "18px" }}>{props.message}</p>
          {props.dismissible && (
            <div className="crossAlert" onClick={handleClose}>
              <FaTimes className="ml-1 pb-1 " />
            </div>
          )}
        </Alert>
      )}
    </div>
  );
};

export default AlertPopUp;
