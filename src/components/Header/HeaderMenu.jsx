import React, { useState } from "react";
import { Link } from "react-router-dom";
import userImg from "../../assets/user-image.png";
import "../../style/headerMenu.css";
import UserModal from "../User/UserModal";

const HeaderMenu = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = () => {
    setModalShow(true);
  };

  const loginData = JSON.parse(localStorage.getItem("loginData"));

  return (
    <>
      <div className="navbar">
        <Link to="/" className="pointer">
          Home
        </Link>
        <Link to="/rooms">Rooms</Link>
        <a href="#">Blog</a>
        <a href="#">About</a>
        {!loginData ? (
          <>
            <Link to="/login" id="login-button">
              Login
            </Link>
            <Link to="/signup" id="register-button">
              Register
            </Link>
          </>
        ) : (
          <>
            <div className="logged-in-user" onClick={handleModalShow}>
              <img src={userImg} alt="" />
            </div>
            <UserModal show={modalShow} onHide={() => setModalShow(false)} />
          </>
        )}
      </div>
    </>
  );
};

export default HeaderMenu;
