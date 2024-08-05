import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const PropertyDetailsAdmin = () => {
  return (
    <div className="row property-list-items">
      <div className="col-md-3">
        <h6>SNo.</h6>
      </div>
      <div className="col-md-3">
        <h6>Hotel Name</h6>
      </div>
      <div className="col-md-3">
        <h6>Hotel Location</h6>
      </div>
      <div className="col-md-3 action">
        <button className="btn btn-outline-info">
          <FontAwesomeIcon icon={faEye} /> View
        </button>
        <button className="btn btn-outline-success">
          <FontAwesomeIcon icon={faPen} /> Edit
        </button>
        <button className="btn btn-outline-danger">
          <FontAwesomeIcon icon={faTrashCan} /> Delete
        </button>
      </div>
    </div>
  );
};

export default PropertyDetailsAdmin;
