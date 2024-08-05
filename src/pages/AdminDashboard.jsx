import React from "react";
import "../style/adminDashboard.css";
import AdminDashboardHeader from "../components/Admin/AdminDashboardHeader";
import AdminDashboardBody from "../components/Admin/AdminDashboardBody";

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
