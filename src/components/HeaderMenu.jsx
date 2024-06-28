import React from "react";
import { Link } from "react-router-dom";
const HeaderMenu = () => {
  return (
    <div className="navbar">
      <Link to="/" className="pointer">
        <a href="">Home</a>
      </Link>
      <a href="#">Rooms</a>
      <a href="#">Blog</a>
      <a href="#">About</a>
      <Link to="/login">
        <a href="" id="login-button">
          Login
        </a>
      </Link>
      <Link to="/signup">
        <a href="#" id="register-button">
          Register
        </a>
      </Link>
    </div>
  );
};

export default HeaderMenu;
