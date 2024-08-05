import React from "react";
import "../../style/roomsFilter.css";
const RoomsFilter = ({ name, type, title, data }) => {
  return (
    <>
      <div className={name}>
        <h4>{title}</h4>
        <ul>
          {data.map((item, index) => {
            return (
              <li className="form-check">
                <input
                  className="form-check-input"
                  type={type}
                  value={item.text}
                  name="location"
                  id={item.text}
                />
                <label className="form-check-label" htmlFor={item.text}>
                  {item.label}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RoomsFilter;
