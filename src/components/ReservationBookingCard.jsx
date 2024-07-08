import React from "react";
import "../style/reservationBookingCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ReservationBookingCard = () => {
  return (
    <div className="booking">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Booking Summary</h5>
          <div className="row" id="booking-confirm-form">
            <div className="col-md-3">
              <label className="form-label booking-summary-lable">
                <FontAwesomeIcon icon={faLocationDot} />
                Location
              </label>
              <div id="location" className="form-control text-center">
                Location
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label booking-summary-lable">
                <FontAwesomeIcon icon={faCalendar} />
                Check-In Date
              </label>
              <div id="checkInDate" className="form-control text-center">
                Check-In Date
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label booking-summary-lable">
                <FontAwesomeIcon icon={faCalendar} />
                Check-Out Date
              </label>
              <div id="checkOutDate" className="form-control text-center">
                Check-Out Date
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label booking-summary-lable">
                <FontAwesomeIcon icon={faUser} />
                Guests
              </label>
              <div id="guests" className="form-control text-center">
                No. of Guests
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationBookingCard;
