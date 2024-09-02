import React, { useEffect } from "react";
import image from "../../assets/user-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../../style/bookingDetails.css";
import { useBooking } from "../../Context/BookingContext";

const BookingDetailsAdmin = () => {
  const booking = useBooking();
  useEffect(() => {
    booking.fetchBookingData();
  }, []);
  // console.log(booking.hotelDetails);
  if (!booking.bookingDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="booking-dashboard">
      {booking.bookingDetails.map((item, index) => (
        <div className="row booking-info" key={index}>
          <div className="col">{index + 1}</div>
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
            {booking.loginDetails.map((item, index) => (
              <span id="user-name" key={index}>
                {item.fullName}
              </span>
            ))}
          </div>

          <div className="col" id="user-location">
            {booking.hotelDetails.name}
          </div>

          <div className="col" id="user-checkin-date">
            {item.checkInDate}
          </div>
          <div className="col" id="user-checkout-date">
            {item.checkOutDate}
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
      ))}
    </div>
  );
};

export default BookingDetailsAdmin;
