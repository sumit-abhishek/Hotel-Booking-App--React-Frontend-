import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/roomsCard.css";
import RoomCardBottom from "./RoomCardBottom";
import { saveToLocalStorage } from "../../services";
const RoomsCard = ({ data }) => {
  const navigate = useNavigate();
  const click = () => {
    const obj = {
      name: data.title,
      price: data.price,
    };
    console.log(obj);
    saveToLocalStorage("hotelDetails", obj);
    navigate("/reservation");
  };
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
            <h4 className="card-title room-card-title">{data.title}</h4>
            <p className="card-text">
              <small className="text-body-secondary">
                {data.distance} meter away
              </small>
            </p>
            <p className="card-text">{data.description}</p>
            <RoomCardBottom click={click} price={data.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
