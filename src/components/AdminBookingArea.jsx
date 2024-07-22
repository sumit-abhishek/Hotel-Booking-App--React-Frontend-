import React from "react";
import image from "../assets/user-image.png";
import "../style/adminBookingArea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const AdminBookingArea = () => {
  return (
    <div className="dashboard-bottom-right">
      <div class="dashboard-bottom-right-top">
        <div class="dashboard-bottom-right-top-heading">
          <h3 class="display-6">Booking</h3>
        </div>
        <div class="dashboard-bottom-right-top-checking">
          <div class="dashboard-bottom-right-top-checking-left">
            <div
              class="btn-group btn-group"
              role="group"
              aria-label="Small button group"
            >
              <button type="button" class="btn btn-outline-secondary">
                All (<span id="totalBooking"></span>)
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Cancelled (<span id="cancelledBooking"></span>)
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Confirmed (<span id="confirmBooking"></span>)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-right-bottom">
        <div class="container">
          <div class="row booking-entity">
            <div class="col">ID</div>
            <div class="col">Customer</div>
            <div class="col">Hotel</div>
            <div class="col">Check-In Date</div>
            <div class="col">Check-Out Date</div>
            <div class="col">Booking Status</div>
            <div class="col">Actions</div>
          </div>
          <div class="booking-dashboard">
            <div className="row booking-info">
              <div class="col">EUR-123</div>
              <div class="col user-image">
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
              <div class="col" id="user-location">
                Location
              </div>
              <div class="col" id="user-checkin-date">
                CheckIn
              </div>
              <div class="col" id="user-checkout-date">
                checkout
              </div>
              <div class="col booking-info-status" id="booking-status">
                Admin Status
              </div>
              <div class="col" id="booking-action">
                <button className="btn btn-sm btn-outline-danger">
                  <FontAwesomeIcon icon={faTrashCan} /> Cancel Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBookingArea;
