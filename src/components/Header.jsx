import React from "react";
import "../style/header.css";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="header-main">
        <ul className="header-lists">
          <li>
            <Logo />
          </li>
          <li>
            <HeaderMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
