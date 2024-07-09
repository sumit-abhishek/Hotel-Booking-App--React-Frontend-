import React from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import userImage from "../assets/user-image.png";
import "bootstrap/dist/css/bootstrap.min.css";
const UserModal = ({ show, onHide }) => {
  const handleClose = () => onHide();
  const signoutUser = () => {
    console.log("Signing out user...");
    localStorage.removeItem("loginData");
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby="staticBackdropLabel"
    >
      <Modal.Header
        className="d-flex flex-column align-items-center gap-3"
        style={{ height: "250px" }}
      >
        <div className="modal-header-top d-flex align-items-center justify-content-between w-100">
          <h4 className="modal-subtitle fs-6 text-center">user@mail.com</h4>
          <Button
            variant="secondary"
            onClick={handleClose}
            aria-label="Close"
            className="btn-close"
          />
        </div>
        <div className="modal-header-bottom d-flex flex-column align-items-center mt-3">
          <div
            className="modal-header-bottom-img mb-3"
            style={{
              height: "20%",
              maxWidth: "max-content",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={userImage}
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
          <h1 className="modal-title fs-5 text-center">
            Hello, <span id="user-name">User</span>
          </h1>
        </div>
      </Modal.Header>
      <Modal.Body>
        <h4 className="fs-5">Manage</h4>
        <ListGroup>
          <ListGroup.Item action>
            <i className="fa-solid fa-list-check"></i> Manage Account
          </ListGroup.Item>
          <ListGroup.Item action>
            <i className="fa-regular fa-user"></i> My Profile
          </ListGroup.Item>
          <ListGroup.Item action>
            <i className="fa-regular fa-bell"></i> Notification
          </ListGroup.Item>
          <ListGroup.Item
            action
            onClick={() => {
              handleClose();
              signoutUser();
            }}
          >
            <i className="fa-solid fa-right-from-bracket"></i> Sign Out
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};

export default UserModal;
