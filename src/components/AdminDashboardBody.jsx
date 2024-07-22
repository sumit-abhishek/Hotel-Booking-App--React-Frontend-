import React from "react";
import AdminDashboardNav from "./AdminDashboardNav";
import AdminBookingArea from "./AdminBookingArea";

const AdminDashboardBody = () => {
  return (
    <div className="dashboard-bottom">
      <AdminDashboardNav />
      <AdminBookingArea />
    </div>
  );
};

export default AdminDashboardBody;
