import React, { useState, useEffect } from "react";
import "../style/searchBar.css";

const SearchBar = () => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="search-bar">
      <div className="search-bar-main">
        <div className="search-bar-heading">
          <h1>
            Find Your Stay with <span>Eureka!</span>
          </h1>
        </div>
        <form className="search-bar-details" id="search-locations">
          <select
            className="form-select"
            id="searchLocation"
            aria-label="Default select example"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="Lansdowne">Lansdowne</option>
            <option value="Kanatal">Kanatal</option>
            <option value="Mussorrie">Mussorrie</option>
            <option value="Harshil">Harshil</option>
            <option value="Chakrata">Chakrata</option>
            <option value="Chopta">Chopta</option>
          </select>
          <input
            id="checkInDate"
            pattern="dd-mm-yyyy"
            placeholder="Check-In Date"
            className="form-control"
            type="date"
          />
          <input
            id="checkOutDate"
            pattern="dd-mm-yyyy"
            placeholder="Check-Out Date"
            className="form-control"
            type="date"
          />

          <input
            type="number"
            id="numberGuest"
            className="form-control"
            placeholder="Guests"
            style={{ width: 100 }}
            min="1"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
