import React from "react";
import Logo from "../assets/logo.png";
import userLogo from "../assets/user-image.png";
import "../style/adminDasboardHeader.css";
const AdminDashboardHeader = () => {
  return (
    <div className="dashboard-top">
      <div className="dashboard-top-logo">
        <a href="#">
          <img
            src={Logo}
            alt=""
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
          />
        </a>
      </div>
      <div className="dashboard-top-admin">
        <div>
          <img
            src={userLogo}
            alt=""
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <p>Hello, Admin</p>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
