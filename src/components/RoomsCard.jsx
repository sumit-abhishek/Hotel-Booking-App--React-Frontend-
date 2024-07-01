import React from "react";
import "../style/roomsCard.css";
import RoomCardBottom from "./RoomCardBottom";
const RoomsCard = ({ data }) => {
  return (
    <div className="card mb-3 roomCard">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={data.image}
            className="img-fluid rounded-start cardImage"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{data.title}</h4>
            <p className="card-text">
              <small className="text-body-secondary">
                {data.distance} meter away
              </small>
            </p>
            <p className="card-text">{data.description}</p>
            <RoomCardBottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
