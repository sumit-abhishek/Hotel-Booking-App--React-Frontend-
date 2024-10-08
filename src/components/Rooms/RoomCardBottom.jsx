import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/roomCardBottom.css";
const RoomCardBottom = ({ click, price }) => {
  return (
    <div className="popular-facilities">
      <div className="popular-facilities-left">
        <p>Popular Facilities</p>
        <span>
          <i className="fa-solid fa-dumbbell fa-lg"></i>
          <span>Fitness Studio</span>
        </span>
        <span>
          <i className="fa-solid fa-utensils fa-lg"></i>
          <span> Breakfast</span>
        </span>
        <span>
          <i className="fa-solid fa-person-swimming fa-lg"></i>
          <span>Swimming Pool</span>
        </span>
      </div>
      <div className="popular-facilities-right">
        <h5>&#x20B9; {price}</h5>
        <small>Total Package Price</small>
        <a className="btn btn-primary" role="button" onClick={click}>
          Book Now
        </a>
      </div>
    </div>
  );
};

export default RoomCardBottom;
