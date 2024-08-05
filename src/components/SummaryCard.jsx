import React, { useEffect, useState } from "react";
import cardImage from "../assets/kanatal-orchids.jpg";
import "../style/summaryCard.css";
import { fetchFromLocalStorage } from "../services";
const SummaryCard = () => {
  const [data, setData] = useState({});
  const [totalNight, setTotalNight] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    //For Adding Hotel Name
    const hotelDetails = fetchFromLocalStorage("hotelDetails");
    setData(hotelDetails);

    //For Adding Total Night
    const userInputData = fetchFromLocalStorage("userInputData");
    const checkInDate = new Date(
      userInputData[userInputData.length - 1].checkInDate
    );
    const checkOutDate = new Date(
      userInputData[userInputData.length - 1].checkOutDate
    );
    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    const dayDifference = timeDifference / (24 * 3600 * 1000);
    setTotalNight(dayDifference);

    //For Adding Total Night
    const priceOfHotel = hotelDetails.price;
    const totalPrice = priceOfHotel * dayDifference;
    setTotalPrice(totalPrice);
  }, []);

  return (
    <div className="summaryCard">
      <div className="card">
        <img src={cardImage} className="card-img-top" id="card-img" alt="" />
        <div className="card-body hotel-details">
          <div className="card-body-top">
            <h5 className="card-title" id="hotel-name">
              {data.name}
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
                &#x20B9; <span id="normal-price">{data.price}</span> x
                <span id="stay-night"> {totalNight}</span> nights
              </p>
              <p>
                &#x20B9; <span id="total-price">{totalPrice}</span>
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
