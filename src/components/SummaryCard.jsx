import React from "react";
import cardImage from "../assets/kanatal-orchids.jpg";
import "../style/summaryCard.css";
const SummaryCard = () => {
  return (
    <div className="summaryCard">
      <div className="card">
        <img src={cardImage} className="card-img-top" id="card-img" alt="" />
        <div className="card-body hotel-details">
          <div className="card-body-top">
            <h5 className="card-title" id="hotel-name">
              Kanatal Orchids
            </h5>
            <p className="card-text">
              <i className="fa-solid fa-location-dot"></i>
              <span id="stay-location">Dehradun</span>, Uttrakhand
            </p>
          </div>
          <div className="card-body-mid">
            <h5>Price Detail</h5>
            <span className="d-flex justify-content-between">
              <p>
                &#x20B9; <span id="normal-price">2000</span> x
                <span id="stay-night"> 3</span> nights
              </p>
              <p>
                &#x20B9; <span id="total-price">6000</span>
              </p>
            </span>
            <span className="d-flex justify-content-between">
              <p>Tax(10%)</p>
            </span>
          </div>
          <div className="card-body-bottom">
            <span className="d-flex justify-content-between">
              <p>Total</p>
              <p>
                &#x20B9; <span id="booked-price">6600</span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
