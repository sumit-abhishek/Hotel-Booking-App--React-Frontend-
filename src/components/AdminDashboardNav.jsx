import React from "react";
import "../style/adminDashboardNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faBellConcierge,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import AdminNavButton from "./AdminNavButton";
const data = [
  { id: "dashboard-button", icon: faUserTie, name: "Dashboard" },
  { id: "booking-button", icon: faBookmark, name: "Booking" },
  { id: "property-button", icon: faBellConcierge, name: "Properties" },
  { id: "logout-button", icon: faRightFromBracket, name: "Logout" },
];

const AdminDashboardNav = () => {
  return (
    <div className="dashboard-bottom-left">
      {data.map((item) => {
        return (
          <AdminNavButton
            id={item.id}
            icon={<FontAwesomeIcon icon={item.icon} />}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default AdminDashboardNav;
