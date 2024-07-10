import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/searchBar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    location: "",
    checkInDate: "",
    checkOutDate: "",
    guests: "",
  });
  const loginUserData = JSON.parse(localStorage.getItem("loginData"));
  const userInputData = JSON.parse(localStorage.getItem("userInputData")) || [];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginUserData) {
      if (
        !input.location ||
        !input.checkInDate ||
        !input.checkOutDate ||
        !input.guests
      ) {
        toast.error(
          "Choose Location you want to stay and fill all required fields"
        );
        return;
      }
      userInputData.push(input);
      localStorage.setItem("userInputData", JSON.stringify(userInputData));
      navigate("/rooms");
    } else {
      toast.error("Kindly Login First");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="search-bar">
        <div className="search-bar-main">
          <div className="search-bar-heading">
            <h1>
              Find Your Stay with <span>Eureka!</span>
            </h1>
          </div>
          <form
            className="search-bar-details"
            id="search-locations"
            onSubmit={handleSubmit}
          >
            <select
              className="form-select"
              id="searchLocation"
              aria-label="Default select example"
              onChange={(e) => setInput({ ...input, location: e.target.value })}
            >
              <option defaultValue disabled selected>
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
              onChange={(e) =>
                setInput({ ...input, checkInDate: e.target.value })
              }
            />
            <input
              id="checkOutDate"
              pattern="dd-mm-yyyy"
              placeholder="Check-Out Date"
              className="form-control"
              type="date"
              onChange={(e) =>
                setInput({ ...input, checkOutDate: e.target.value })
              }
            />

            <input
              type="number"
              id="numberGuest"
              className="form-control"
              placeholder="Guests"
              style={{ width: 100 }}
              min="1"
              onChange={(e) => setInput({ ...input, guests: e.target.value })}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
