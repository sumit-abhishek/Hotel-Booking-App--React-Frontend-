import React from "react";
import "../../style/reservationPaymentCard.css";
const ReservationPaymentCardAddressForm = () => {
  return (
    <form className="address row g-2">
      <div className="col-12">
        <label for="inputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Address Line 1"
        />
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Address Line 2"
        />
      </div>
      <div className="col-md-6">
        <label for="inputCity" className="form-label">
          City
        </label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4">
        <label for="inputState" className="form-label">
          State
        </label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-md-2">
        <label for="inputZip" className="form-label">
          Zip
        </label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
    </form>
  );
};

export default ReservationPaymentCardAddressForm;
