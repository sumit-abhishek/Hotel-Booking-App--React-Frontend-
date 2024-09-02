import { createContext, useContext, useState } from "react";
import { fetchFromLocalStorage } from "../services";
const BookingContext = createContext(null);

export const useBooking = () => {
  return useContext(BookingContext);
};

export const BookingProvider = (props) => {
  const [hotelDetails, setHotelDetails] = useState();
  const [bookingDetails, setBookingDetails] = useState();
  const [loginDetails, setLoginDetails] = useState();
  const fetchBookingData = () => {
    const hotelDetails = fetchFromLocalStorage("hotelDetails");
    const bookingDetails = fetchFromLocalStorage("userInputData");
    const loginDetails = fetchFromLocalStorage("loginData");
    setHotelDetails(hotelDetails);
    setBookingDetails(bookingDetails);
    setLoginDetails(loginDetails);
  };
  return (
    <BookingContext.Provider
      value={{ fetchBookingData, hotelDetails, bookingDetails, loginDetails }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};
