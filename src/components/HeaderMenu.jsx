import React from "react";
import { Link } from "react-router-dom";
const HeaderMenu = () => {
  return (
    <div className="navbar">
      <Link to="/" className="pointer">
        Home
      </Link>
      <Link to="/rooms">Rooms</Link>
      <a href="#">Blog</a>
      <a href="#">About</a>
      <Link to="/login" id="login-button">
        Login
      </Link>
      <Link to="/signup" id="register-button">
        Register
      </Link>
    </div>
  );
};

export default HeaderMenu;
