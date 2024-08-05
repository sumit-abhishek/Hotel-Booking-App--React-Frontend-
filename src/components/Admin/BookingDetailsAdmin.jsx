import React from "react";
import image from "../../assets/user-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../../style/bookingDetails.css";

const BookingDetailsAdmin = () => {
  return (
    <div className="booking-dashboard">
      <div className="row booking-info">
        <div className="col">EUR-123</div>
        <div className="col user-image">
          <img
            src={image}
            alt=""
            style={{
              objectFit: "contain",
              height: "30px",
              width: "30px",
            }}
          />
          <span id="user-name">Username</span>
        </div>
        <div className="col" id="user-location">
          Location
        </div>
        <div className="col" id="user-checkin-date">
          CheckIn
        </div>
        <div className="col" id="user-checkout-date">
          Checkout
        </div>
        <div className="col booking-info-status" id="booking-status">
          Admin Status
        </div>
        <div className="col" id="booking-action">
          <button className="btn btn-sm btn-outline-danger">
            <FontAwesomeIcon icon={faTrashCan} /> Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsAdmin;
