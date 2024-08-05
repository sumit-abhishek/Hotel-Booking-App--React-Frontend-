import React from "react";
import PopularDestination from "../components/Destination/PopularDestination";
import "../style/middleBackground.css";
import Faq from "../components/Faqs/Faq";
import WhyUs from "./Why Us/WhyUs";
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
