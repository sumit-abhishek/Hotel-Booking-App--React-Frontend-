import React from "react";
import "../../style/reservationBackground.css";
import ReservationBookingCard from "./ReservationBookingCard";
import ReservationPaymentCard from "./ReservationPaymentCard";
import SummaryCard from "../SummaryCard";

const ReservationBackground = () => {
  return (
    <div className="reservation-main">
      <div className="reservation">
        <div className="reservation-top"></div>
        <h4>Confirm Your Reservation</h4>
        <div className="reservation-bottom">
          <div className="reservation-bottom-left">
            <ReservationBookingCard />
            <ReservationPaymentCard />
            <div className="policy card">
              <div className="card-body">
                <p className="card-text">
                  By selecting the button below, I agree to the Hotel's Rules,
                  Ground rules for guests, and authorize Hotel to charge my
                  payment method for any damages. <br />I also agree to the{" "}
                  <a href="#">updated Terms and Service</a>,
                  <a href="#">payment Terms and Service</a>, and acknowledge the
                  <a href="">Privacy Policy</a>
                </p>
                <button className="btn btn-primary" form="booking-confirm-form">
                  Confirm and Book
                </button>
              </div>
            </div>
          </div>
          <div className="reservation-bottom-right">
            <SummaryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationBackground;
