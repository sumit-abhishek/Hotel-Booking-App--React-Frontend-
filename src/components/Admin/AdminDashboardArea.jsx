import React from "react";
import "../../style/adminBookingArea.css";
import "../../style/adminDashboardArea.css";
import { Link } from "react-router-dom";
const AdminDashboardArea = () => {
  const clickedFun = (event) => {
    const button = event.target;
    const buttonText = button.textContent;
    const arr = buttonText.split(" ");
    console.log(arr[arr.length - 1].toLowerCase());
  };

  return (
    <>
      <div className="container dashboard-bottom-right " id="dashboard-area">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bookings</h5>
                <p className="card-text">
                  Access detailed insights into all your bookings. Monitor
                  reservations, cancellations, and customer preferences in real
                  time.
                </p>
                <Link to={"/admin/booking"}>
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                    onClick={clickedFun}
                  >
                    Check Bookings
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Properties</h5>
                <p className="card-text">
                  Access comprehensive details about all your properties.
                  Monitor key metrics, occupancy rates, and maintenance statuses
                  in one place.
                </p>

                <button className="btn btn-primary" onClick={clickedFun}>
                  Check Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardArea;
