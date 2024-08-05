import React from "react";
import ReservationPaymentCardAddressForm from "./ReservationPaymentCardAddressForm";
import "../../style/reservationAddressCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
const ReservationPaymentCard = () => {
  return (
    <div className="payment">
      <h5 className="card-heading">Pay With</h5>
      <div className="input-group">
        <label className="input-group-text" for="inputGroupSelect01">
          <FontAwesomeIcon icon={faCreditCard} />
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option value="1">Credit Card</option>
          <option value="2">Debit Card</option>
          <option value="3">UPI</option>
          <option value="4">Net Banking</option>
        </select>
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          <FontAwesomeIcon icon={faCreditCard} />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Card Number"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          required
        />
      </div>
      <div className="row card-date">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Date of Expiry"
            aria-label="Date of Expiry"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="CVV"
            aria-label="CVV"
          />
        </div>
      </div>
      <ReservationPaymentCardAddressForm />
    </div>
  );
};

export default ReservationPaymentCard;
