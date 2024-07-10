import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import SummaryCard from "../components/SummaryCard";
import userImage from "../assets/user-image.png";
import "../style/confirmation.css";
const Confirmation = () => {
  const backToHome = () => {
    document.location.href = "/";
    console.log("Button Clicked");
  };
  return (
    <section className="booking-confirm-main">
      <div className="booking-confirm">
        <div className="booking-confirm-top"></div>
        <div className="booking-confirm-bottom">
          <div className="booking-confirm-bottom-left">
            <div className="card">
              <h3
                className="card-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#00cc00" }}
                />
                Booking Confirmed
              </h3>
              <div className="card-body d-flex justify-content-start gap-3">
                <div className="card-body-image">
                  <img
                    src={userImage}
                    alt=""
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="card-body-desc">
                  <h5 className="card-title">
                    Hello, <span id="loginUser">User</span>
                  </h5>
                  <p className="card-text">
                    <b>
                      <span id="stay-name">Kantal Orchid's</span>
                    </b>{" "}
                    will be expecting you on
                    <span id="arrivalDate">25-May-2024</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-4 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FontAwesomeIcon icon={faCalendar} /> Check-In Date
                    </h5>
                    <p className="card-text" id="dateOfIn">
                      25-May-2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-4 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FontAwesomeIcon icon={faCalendar} /> Check-Out Date
                    </h5>
                    <p className="card-text" id="dateOfOut">
                      27-May-2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-4 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FontAwesomeIcon icon={faUser} /> Total People
                    </h5>
                    <p className="card-text">
                      <span id="people">2</span> People
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div
                  className="btn-group-vertically d-flex justify-content-center gap-5"
                  role="group"
                >
                  <button
                    type="button"
                    id="home-button"
                    className="btn btn-primary"
                    onClick={backToHome}
                  >
                    Back To Home
                  </button>
                  <a
                    className="btn btn-danger"
                    href="#"
                    role="button"
                    onclick="showCustomAlert();"
                    data-bs-toggle="modal"
                    data-bs-target="#customAlert"
                  >
                    Cancel Reservation
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Need Our Help?</h5>
                <span className="card-text d-flex justify-content-between">
                  <p>Call us in case you face ant issue in our service</p>
                  <p style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faPhone} /> +91-XXX-XXX-XXXX
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="booking-confirm-bottom-right">
            <SummaryCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
