import React from "react";
import "../style/adminDashboard.css";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import AdminDashboardNav from "../components/AdminDashboardNav";

const AdminDashboard = () => {
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard">
          <AdminDashboardHeader />
          <AdminDashboardNav />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
