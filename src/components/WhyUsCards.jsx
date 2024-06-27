import React from "react";

const WhyUsCards = ({ cardDetails }) => {
 
  return (
    <div className="card-why-us">
      {cardDetails.icon}
      <div className="card-why-us-details">
        <h4>{cardDetails.title}</h4>
        <p>{cardDetails.desc}</p>
      </div>
    </div>
  );
};

export default WhyUsCards;
