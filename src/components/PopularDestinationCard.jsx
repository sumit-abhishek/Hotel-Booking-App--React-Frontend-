import React from "react";
const PopularDestinationCard = ({ cardDetails }) => {
  return (
    <div className="card">
      <img src={cardDetails.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cardDetails.title}</h5>
        <p className="card-text">{cardDetails.desc}</p>
        <a href="#" className="btn btn-primary">
          Check Availability
        </a>
      </div>
    </div>
  );
};

export default PopularDestinationCard;
