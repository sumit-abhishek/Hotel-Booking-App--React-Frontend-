import React from "react";

import "../../style/adminBookingArea.css";
import BookingDetailsAdmin from "./BookingDetailsAdmin";

const AdminBookingArea = () => {
  return (
    <div className="dashboard-bottom-right">
      <div className="dashboard-bottom-right-top">
        <div className="dashboard-bottom-right-top-heading">
          <h3 className="display-6">Booking</h3>
        </div>
        <div className="dashboard-bottom-right-top-checking">
          <div className="dashboard-bottom-right-top-checking-left">
            <div
              className="btn-group btn-group"
              role="group"
              aria-label="Small button group"
            >
              <button type="button" className="btn btn-outline-secondary">
                All (<span id="totalBooking"></span>)
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Cancelled (<span id="cancelledBooking"></span>)
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Confirmed (<span id="confirmBooking"></span>)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-bottom-right-bottom">
        <div className="container">
          <div className="row booking-entity">
            <div className="col">ID</div>
            <div className="col">Customer</div>
            <div className="col">Hotel</div>
            <div className="col">Check-In Date</div>
            <div className="col">Check-Out Date</div>
            <div className="col">Booking Status</div>
            <div className="col">Actions</div>
          </div>
          <BookingDetailsAdmin />
        </div>
      </div>
    </div>
  );
};

export default AdminBookingArea;
