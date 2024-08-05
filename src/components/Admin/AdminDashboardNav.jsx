import React from "react";
import "../../style/adminDashboardNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faBellConcierge,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import AdminNavButton from "./AdminNavButton";
import { Link } from "react-router-dom";
const data = [
  {
    id: "dashboard-button",
    icon: faUserTie,
    name: "Dashboard",
    location: "dashboard",
    width: "100%",
  },
  {
    id: "booking-button",
    icon: faBookmark,
    name: "Booking",
    location: "booking",
  },
  {
    id: "property-button",
    icon: faBellConcierge,
    name: "Properties",
    location: "properties",
  },
  {
    id: "logout-button",
    icon: faRightFromBracket,
    name: "Logout",
    location: "logout",
  },
];

const AdminDashboardNav = ({ clickFunction }) => {
  const selectedComponentArr = window.location.href.split("/");
  console.log(selectedComponentArr[selectedComponentArr.length - 1]);
  return (
    <div className="dashboard-bottom-left">
      {data.map((item, index) => {
        return (
          <Link to={item.location} key={index}>
            <AdminNavButton
              id={item.id}
              icon={<FontAwesomeIcon icon={item.icon} />}
              name={item.name}
              onClick={() => clickFunction(item.name)}
              selected={
                selectedComponentArr[
                  selectedComponentArr.length - 1
                ].toLowerCase() === item.name.toLowerCase()
              }
            />
          </Link>
        );
      })}
    </div>
  );
};

export default AdminDashboardNav;
