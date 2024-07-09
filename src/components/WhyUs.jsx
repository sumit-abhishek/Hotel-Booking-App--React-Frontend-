import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faAward, faTag } from "@fortawesome/free-solid-svg-icons";
import WhyUsCards from "./WhyUsCards";
import "../style/whyUs.css";

const cardDetails = [
  {
    icon: <FontAwesomeIcon icon={faCalendarCheck} size="2xl" />,
    title: "Free Cancellation",
    desc: "Plans changed? No worries! Our free cancellation policy ensures flexibility and convenience for all your booking needs.",
  },
  {
    icon: <FontAwesomeIcon icon={faTag} size="2xl" />,
    title: "Best Travel Deals",
    desc: "Get the best travel deals with us, providing affordable luxury and making every adventure more accessible.",
  },
  {
    icon: <FontAwesomeIcon icon={faAward} size="2xl" />,
    title: "Trusted and Free",
    desc: "Our reputation for trusted, free service guarantees a worry-free experience with no hidden expenses.",
  },
];
const WhyUs = () => {
  return (
    <div className="why-us-main">
      <div className="why-us">
        <div className="why-us-heading">
          <h2>Here's Why People Choose Eureka</h2>
        </div>
        <div className="why-us-details">
          {cardDetails.map((item, index) => (
            <WhyUsCards key={index} cardDetails={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
