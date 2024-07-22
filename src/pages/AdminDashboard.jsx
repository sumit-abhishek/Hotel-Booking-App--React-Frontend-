import React from "react";
import "../style/adminDashboard.css";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
// import AdminDashboardNav from "../components/AdminDashboardNav";
import AdminDashboardBody from "../components/AdminDashboardBody";

const AdminDashboard = () => {
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard">
          <AdminDashboardHeader />
          <AdminDashboardBody />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
