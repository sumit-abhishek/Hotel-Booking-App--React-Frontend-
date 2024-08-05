import React from "react";
import "../../style/adminPropertyArea.css";
import "../../style/adminBookingArea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import PropertyDetailsAdmin from "./PropertyDetailsAdmin";
const AdminPropertyArea = () => {
  return (
    <div className="dashboard-bottom-right" id="property-area">
      <div className="dashboard-bottom-right-top">
        <div className="dashboard-bottom-right-top-heading">
          <h3 className="display-6">Properties</h3>
        </div>
        <div className="dashboard-bottom-right-top-checking">
          <div className="dashboard-bottom-right-top-checking-left">
            <div
              className="btn-group btn-group"
              role="group"
              aria-label="Small button group"
            >
              <button type="button" className="btn btn-outline-secondary">
                Total Properties (<span id="totalProperty">10</span>)
              </button>
            </div>
          </div>
          <div className="dashboard-bottom-right-top-checking-right">
            <div className="search-booking">
              <button type="button" className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faPlus} /> Add Property
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-bottom-right-bottom">
        <section className="properties-main">
          <div className="container properties-entry">
            <div className="row properties">
              <div className="col-md-3">S.No</div>
              <div className="col-md-3">Hotel Name</div>
              <div className="col-md-3">Hotel Location</div>
              <div className="col-md-3">Actions</div>
            </div>
          </div>
          <div className="container property-list">
            <div className="row property-list-items">
              <PropertyDetailsAdmin />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPropertyArea;
