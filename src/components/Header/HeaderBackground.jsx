import React from "react";
import "../../style/headerBackground.css";
import Header from "./Header";
import SearchBar from "../SearchBar";
const HeaderBackground = () => {
  return (
    <>
      <div className="background">
        <SearchBar />
      </div>
    </>
  );
};

export default HeaderBackground;
