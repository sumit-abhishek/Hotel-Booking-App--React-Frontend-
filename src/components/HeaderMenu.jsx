import React from "react";

const HeaderMenu = () => {
  return (
    <div className="navbar">
      <a href="#">Home</a>
      <a href="#">Rooms</a>
      <a href="#">Blog</a>
      <a href="#">About</a>
      <a href="#" id="login-button">
        Login
      </a>
      <a href="#" id="register-button">
        Register
      </a>
    </div>
  );
};

export default HeaderMenu;
