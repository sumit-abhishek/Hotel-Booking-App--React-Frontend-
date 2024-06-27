import React from "react";
import WhyUs from "./WhyUs";
import PopularDestination from "./PopularDestination";
import "../style/middleBackground.css";
import Faq from "../components/Faq";
const MiddleBackground = () => {
  return (
    <div className="middleBackground">
      <WhyUs />
      <PopularDestination />
      <Faq />
    </div>
  );
};

export default MiddleBackground;
