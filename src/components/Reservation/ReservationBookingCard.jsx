import React, { useEffect, useState } from "react";
import "../../style/reservationBookingCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { fetchFromLocalStorage } from "../../services";

const ReservationBookingCard = () => {
  const [location, setLocation] = useState();
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [guests, setGuests] = useState();
  useEffect(() => {
    const data = fetchFromLocalStorage("userInputData");
    //For Location
    const location = data[data.length - 1].location;
    setLocation(location);
    //For Check In Date
    const checkInDate = data[data.length - 1].checkInDate;
    setCheckInDate(checkInDate);
    //For Check Out Date
    const checkOutDate = data[data.length - 1].checkOutDate;
    setCheckOutDate(checkOutDate);
    //For Guests
    const guests = data[data.length - 1].guests;
    setGuests(guests);
  }, []);
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
                {location}
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label booking-summary-lable">
                <FontAwesomeIcon icon={faCalendar} />
                Check-In Date
              </label>
              <div id="checkInDate" className="form-control text-center">
                {checkInDate}
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label booking-summary-lable">
                <FontAwesomeIcon icon={faCalendar} />
                Check-Out Date
              </label>
              <div id="checkOutDate" className="form-control text-center">
                {checkOutDate}
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label booking-summary-lable">
                <FontAwesomeIcon icon={faUser} />
                Guests
              </label>
              <div id="guests" className="form-control text-center">
                {guests}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationBookingCard;
